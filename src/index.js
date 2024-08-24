import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactMarkdown from 'react-markdown';
import './index.css';  // Import the CSS file

function App() {
  return (
    <div className="App">
      <ReactMarkdown>
{`
# Tic-Tac-Toe Game Strategies

Tic-Tac-Toe is a classic game that's easy to learn but challenging to master. While it may seem simple at first glance, there are several strategies you can employ to improve your chances of winning or forcing a draw. This guide will walk you through seven key strategies that will elevate your Tic-Tac-Toe game.

Whether you're a beginner looking to understand the basics or an experienced player aiming to refine your skills, these strategies will provide valuable insights into the game's tactics and decision-making processes. By mastering these techniques, you'll not only become a stronger Tic-Tac-Toe player but also develop critical thinking skills that can be applied to other areas of problem-solving and strategy.

Let's dive into the strategies that will help you dominate the Tic-Tac-Toe board:

## Table of Contents

1. [Control the center](#1-control-the-center)
2. [Block your opponent](#2-block-your-opponent)
3. [Create a fork](#3-create-a-fork)
4. [Block opponent's fork](#4-block-opponents-fork)
5. [Play the corners](#5-play-the-corners)
6. [Use the opposite corner](#6-use-the-opposite-corner)
7. [Think ahead](#7-think-ahead)

## 1. Control the center

The center square is the most strategic position in Tic-Tac-Toe. If you go first, try to claim it immediately. Controlling the center gives you the most opportunities to create winning lines in multiple directions.

By occupying the center, you force your opponent to play defensively from the start. It also allows you to set up potential forks more easily, as the center square is part of four possible winning lines (horizontal, vertical, and both diagonals).

## 2. Block your opponent

Always be on the lookout for your opponent's potential winning moves and block them without hesitation. This defensive strategy is crucial to prevent immediate losses and keep the game going in your favor.

To effectively block your opponent, you need to constantly analyze the board and think one step ahead. Look for any two-in-a-row formations your opponent has created and place your mark in the third square of that line. Remember that blocking is not just about preventing a loss, but also about positioning yourself for potential wins.

## 3. Create a fork

A fork is a powerful offensive move where you set up a situation with two potential winning moves simultaneously. This forces your opponent into a defensive position and greatly increases your chances of winning.

To create a fork, look for opportunities to place your mark in a square that completes two separate two-in-a-row formations. This often involves using the corners and edges strategically. Be patient and plan several moves ahead to set up these situations. A well-executed fork is often the key to breaking through in a game that might otherwise end in a draw.

## 4. Block opponent's fork

If your opponent is setting up a fork, it's crucial to block it immediately. Failing to do so will likely result in a loss, as you'll be forced to defend against one winning line while your opponent claims victory on the other.

To block a fork, you need to recognize the patterns that lead to fork situations. Look for instances where your opponent has marks in two corners or a corner and an edge that could lead to a fork. You can either directly block the square that would complete the fork or create a threat of your own that forces your opponent to defend instead of completing their fork.

## 5. Play the corners

After the center, the corners are the next most strategic positions on the board. Corners are powerful because they are part of three potential winning lines (a diagonal, a horizontal, and a vertical), giving you more opportunities to create winning combinations.

When the center is already taken, aim to claim corners as your next best option. Playing in the corners also limits your opponent's options and can set up more complex strategies. If you manage to claim two opposite corners, you create a strong position that's difficult for your opponent to counter effectively.

## 6. Use the opposite corner

If your opponent takes a corner, playing in the opposite corner is often a strong counter-move. This strategy limits your opponent's options and prevents them from easily setting up winning lines or forks.

By occupying the opposite corner, you create a balanced board position that's harder for your opponent to exploit. This move also gives you the potential to set up your own winning lines or forks in future turns. Remember that this strategy works best when combined with other tactics, such as controlling the center or blocking immediate threats.

## 7. Think ahead

Always try to think a few moves ahead to anticipate your opponent's strategy and plan your own moves accordingly. This forward-thinking approach is what separates skilled players from beginners.

To think ahead effectively, visualize different possible move sequences and their outcomes. Consider not just your immediate next move, but how the game might unfold over the next 2-3 turns. This includes anticipating your opponent's responses to your moves and planning counter-strategies. By thinking ahead, you can set up complex strategies, avoid traps, and maximize your chances of winning or forcing a draw.

## Conclusion

Mastering Tic-Tac-Toe requires a combination of strategic thinking, foresight, and adaptability. By implementing these seven key strategies - controlling the center, blocking your opponent, creating forks, blocking opponent's forks, playing the corners, using the opposite corner, and thinking ahead - you can significantly improve your gameplay.

Remember that no single strategy is foolproof, and the best players are those who can flexibly apply these tactics based on the evolving game situation. Practice applying these strategies, and you'll find yourself becoming a formidable Tic-Tac-Toe player. Whether you're playing for fun or aiming to never lose a game, these strategies will serve as your foundation for success.

As you continue to play and improve, you'll develop an intuitive understanding of the game's patterns and dynamics. This will allow you to make split-second decisions and even innovate your own strategies. Keep in mind that Tic-Tac-Toe, despite its simplicity, offers valuable lessons in strategic thinking that can be applied to more complex games and real-life situations.


---

Remember, with perfect play from both sides, tic-tac-toe always ends in a draw. The key is to capitalize on your opponent's mistakes!
`}
      </ReactMarkdown>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);