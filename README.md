# Tic-Tac-Toe Bot

This repository contains a JavaScript implementation of an AI player for Tic-Tac-Toe. The AI player utilizes the minimax algorithm with some optimizations to make optimal moves against a human player.

## Features

- **Extract Game State**: The `extractGameState()` function extracts the current state of the Tic-Tac-Toe game from the HTML table on the webpage.
- **Check Win Condition**: The `checkWin()` function checks if a player has won the game based on the current game state.
- **Find Best Move**: The `findBestMove()` function finds the best move for the AI player using the minimax algorithm.
- **Block Opponent**: The `findBestMoveToBlock()` function is called if the AI player needs to block the opponent from winning.
- **Click Best Move**: The `clickBestMove()` function clicks on the cell corresponding to the best move found by the AI player.
- **Automated Gameplay**: The script continuously plays the game by automatically making moves for the AI player at regular intervals.
- **Leave Room and Submit**: The script also includes functionality to leave the current room and submit the game when necessary.

## Usage

1. Include the provided JavaScript code in the browser's console on a webpage where Tic-Tac-Toe is played.
2. The script will automatically start playing the game, making optimal moves for the AI player.

## Compatibility

This implementation assumes a specific HTML structure for the Tic-Tac-Toe game. Adjustments may be needed to work with different webpage layouts or frameworks.

## To-Do list

1. Make the bot unbeatable.
2. Make it automatically leave the game after winning or losing.
3. Make a Discord server.

## Credits

Made by meee(Uoksisss).
