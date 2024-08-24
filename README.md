## Tracker (by Cursor and Claude 3.5 Sonnet)

This project was developed using innovative AI-assisted coding techniques:

- **Cursor**: An AI-powered code editor that provides intelligent code completion and suggestions.
- **Claude 3.5 Sonnet**: An advanced language model by Anthropic, used for generating code, answering queries, and assisting with development tasks.

The combination of Cursor and Claude 3.5 Sonnet enabled a highly efficient and creative development process. This approach allowed for:

- Rapid prototyping and implementation of features
- Intelligent code suggestions and error detection
- Natural language interactions for problem-solving and code generation
- Seamless integration of AI assistance throughout the development lifecycle

By leveraging these cutting-edge AI tools, we were able to streamline the development process, enhance code quality, and explore innovative solutions more effectively.

## Key Features of the Tracker

The Tracker is a JavaScript tool designed to monitor and log user engagement with specific elements on a web page. Here's what it does:

- Tracks time spent on specified HTML elements (e.g., h1, h2, h3 tags)
- Logs viewing time for each tracked element during a user's session
- Starts logging as soon as the page loads
- Pauses tracking during periods of user inactivity
- Provides a debug mode that:
  - Highlights currently tracked elements
  - Displays a debug window with real-time tracking information
- Considers elements as "active" when visible on screen (excluding the bottom 20%)
- Continues tracking during slow scrolling and reading
- Uses different inactivity thresholds for top/bottom of page vs. middle
- Accurately selects and tracks visible elements as the user scrolls

This tool is useful for analyzing user behavior, improving content placement, and optimizing user experience on web pages.

```
npm i
npm start
```

After starting the development server, open your web browser and navigate to:

```
http://localhost:3000
```
