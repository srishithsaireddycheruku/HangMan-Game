# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Hangman Game

A simple Hangman game built with React and React Router.

## Project Structure

- `src/Pages/` - Game pages (StartGame, PlayGame)
- `src/components/` - Reusable components (TextInputForm)
- `src/App.jsx` - Main routing component

## Routes

- `/` - Start game page (default route)
- `/play` - Play game page
- `/start` - Start game page
- `*` - 404 not found page

## Features

- Interactive hangman gameplay
- Text input form for player guesses
- Routing between game screens


- StartGame Component
- 
- A page component that serves as the entry point for initializing a new Hangman game.
- 
- This component renders a form where users can input or select a word to play with.
- Once a word is submitted, the user is navigated to the game play page with the 
- selected word passed via route state.
- 
- @component
- @returns {JSX.Element} The start game page with title and word input form
- 
- @example
- // Usage in router configuration
- <Route path="/start" element={<StartGame />} />
- 
- @function handleSubmit
- @param {string} value - The word selected/entered by the user
- @description Logs the selected word and navigates to the play page, passing the word as state





