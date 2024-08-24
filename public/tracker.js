/*
Tracker Specification

- Tracker is loaded in to any web page to track
- Tracked elements are specified in the trackedElements array
- Tracker logs the time spent on each element during the session
- Tracker starts logging time when the page is loaded
- Time is not logged when the user is inactive

In debug mode:
- Highlight the current tracked elements by changing their background color
- Show a single "Tracker Debug Info" debug window with the following information:
  * Use a semi-transparent black background (rgba(0, 0, 0, 0.7))
  * Position the window in the top-right corner of the page
  * Set maximum width to 250px and maximum height to 80vh with vertical scrolling
  * Use Arial font (or sans-serif as fallback) with 10px size for all text
  * Set line height to 1.2 for better readability
  * Display "Total Time Spent" section at the top:
    - Show element content (trimmed to 30 characters) and time spent in seconds
  * Display "Currently Tracked Elements" section at the bottom:
    - Show element content (trimmed to 30 characters) of currently visible elements
  * Use bold text for section headers
- Log the time spent on each element during the session

Important notes:
- Consider all tracked elements visible on the screen as active, except for the bottom 20%
- Continue tracking time even if the user stops scrolling, up to the inactivity threshold
- Track time during slow scrolling and reading
- Use shorter inavtive interval when user is at the top or bottom of the page and allow script to specify top and bottom offsets in pixels
- Accurately select and track all visible elements as the user scrolls
*/

(function() {
  // Configuration
  const debug = true;
  const trackedElements = ['h1', 'h2', 'h3'];
  const logInterval = 500; // Log every 500ms for more accurate tracking
  const inactivityThreshold = 3000; // Consider user inactive after 4 seconds
  const shortInactivityThreshold = 1000; // Shorter threshold for top/bottom
  const topOffset = 100; // Top offset in pixels
  const bottomOffset = 100; // Bottom offset in pixels

  // State
  let elementLogs = {};
  let lastActivityTime = Date.now();

  function getVisibleElements() {
    const elements = document.querySelectorAll(trackedElements.join(','));
    const viewportHeight = window.innerHeight;
    const activeHeight = viewportHeight * 0.8; // Exclude bottom 20%
    
    return Array.from(elements).filter(element => {
      const rect = element.getBoundingClientRect();
      return rect.top < activeHeight && rect.bottom > 0;
    });
  }

  function trackElements() {
    const visibleElements = getVisibleElements();
    const currentTime = Date.now();
    
    // Log time for current elements and remove them from tracking if no longer visible
    for (let elementId in elementLogs) {
      if (elementLogs[elementId].element && !visibleElements.includes(elementLogs[elementId].element)) {
        if (elementLogs[elementId].startTime) {
          updateElementTime(elementLogs[elementId].element, elementLogs[elementId].startTime, currentTime);
          elementLogs[elementId].startTime = null;
        }
      }
    }
    
    // Start or continue tracking visible elements
    visibleElements.forEach(element => {
      const elementId = element.textContent.trim().substring(0, 30);
      if (!elementLogs[elementId]) {
        elementLogs[elementId] = { element: element, startTime: currentTime, totalTime: 0 };
      } else if (!elementLogs[elementId].startTime) {
        elementLogs[elementId].startTime = currentTime;
      }
    });
    
    if (debug) {
      clearHighlight();
      visibleElements.forEach(highlightElement);
      displayDebugInfo(visibleElements);
    }
  }

  function updateElementTime(element, startTime, endTime) {
    if (element) {
      const elementId = element.textContent.trim().substring(0, 30);
      const timeSpent = Math.max(0, (endTime - startTime) / 1000); // Convert to seconds, ensure non-negative
      elementLogs[elementId].totalTime += timeSpent;
    }
  }

  function resetActivityTimer() {
    lastActivityTime = Date.now();
  }

  function isUserActive() {
    const currentTime = Date.now();
    const timeSinceLastActivity = currentTime - lastActivityTime;
    
    if (isNearTopOrBottom()) {
      return timeSinceLastActivity < shortInactivityThreshold;
    }
    
    return timeSinceLastActivity < inactivityThreshold;
  }

  function isNearTopOrBottom() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    return (
      scrollPosition <= topOffset ||
      (scrollPosition + windowHeight) >= (documentHeight - bottomOffset)
    );
  }

  function highlightElement(element) {
    if (element && debug) {
      element.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'; // 50% transparent yellow
    }
  }

  function clearHighlight() {
    const elements = document.querySelectorAll(trackedElements.join(','));
    elements.forEach(el => el.style.backgroundColor = '');
  }

  function displayDebugInfo(visibleElements) {
    if (!debug) return;

    const debugDiv = document.getElementById('tracker-debug-info') || document.createElement('div');
    debugDiv.id = 'tracker-debug-info';
    debugDiv.style.position = 'fixed';
    debugDiv.style.top = '10px';
    debugDiv.style.right = '10px';
    debugDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    debugDiv.style.color = 'white';
    debugDiv.style.padding = '10px';
    debugDiv.style.borderRadius = '5px';
    debugDiv.style.zIndex = '9999';
    debugDiv.style.maxHeight = '80vh';
    debugDiv.style.overflowY = 'auto';
    debugDiv.style.fontSize = '10px';
    debugDiv.style.lineHeight = '1.2';
    debugDiv.style.maxWidth = '250px';
    debugDiv.style.fontFamily = 'Arial, sans-serif';

    let debugHtml = '<p style="margin: 0 0 10px; font-size: 10px;">Tracker Debug Info</p>';
    
    debugHtml += '<p style="margin: 0 0 5px; font-weight: bold; font-size: 10px;">Total Time Spent:</p>';
    for (const [elementId, data] of Object.entries(elementLogs)) {
      debugHtml += `<p style="margin: 0 0 2px; font-size: 10px;">${elementId}: ${data.totalTime.toFixed(2)}s</p>`;
    }

    debugHtml += '<p style="margin: 10px 0 5px; font-weight: bold; font-size: 10px;">Currently Tracked Elements:</p>';
    visibleElements.forEach(element => {
      const elementId = element.textContent.trim().substring(0, 30);
      debugHtml += `<p style="margin: 0 0 2px; font-size: 10px;">${elementId}</p>`;
    });

    debugDiv.innerHTML = debugHtml;
    document.body.appendChild(debugDiv);
  }

  if (debug) {
    console.log('tracker.js loaded');
  }

  // Set up tracking
  window.addEventListener('load', trackElements);
  window.addEventListener('scroll', resetActivityTimer);
  window.addEventListener('resize', resetActivityTimer);
  document.addEventListener('mousemove', resetActivityTimer);
  document.addEventListener('keydown', resetActivityTimer);

  // Log and display report
  setInterval(function() {
    if (isUserActive()) {
      const currentTime = Date.now();
      for (let elementId in elementLogs) {
        if (elementLogs[elementId].startTime) {
          updateElementTime(elementLogs[elementId].element, elementLogs[elementId].startTime, currentTime);
          elementLogs[elementId].startTime = currentTime;
        }
      }
      trackElements();
    }
  }, logInterval);

  // Log total time when user leaves the page
  window.addEventListener('beforeunload', function() {
    const currentTime = Date.now();
    for (let elementId in elementLogs) {
      if (elementLogs[elementId].element && elementLogs[elementId].startTime) {
        updateElementTime(elementLogs[elementId].element, elementLogs[elementId].startTime, currentTime);
      }
    }
  });
})();