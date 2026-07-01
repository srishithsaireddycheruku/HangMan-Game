# 🎮 Hangman Game

A simple and interactive **Hangman Game** built with **React**, **React Router**, and **Tailwind CSS**. Players try to guess the hidden word one letter at a time before the hangman drawing is completed.

---

## 📌 Features

- 🎯 Start a new game by entering a secret word.
- 🔤 Guess letters using interactive alphabet buttons.
- 👀 Hidden word is displayed with correctly guessed letters.
- ❌ Incorrect guesses progressively draw the Hangman.
- 🚦 React Router based navigation.
- 🎨 Responsive UI using Tailwind CSS.
- 🚫 Custom 404 page for invalid routes.

---

## 🛠️ Tech Stack

- React
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)
- Vite

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── HangMan/
│   ├── LetterButtons/
│   ├── MaskedText/
│   └── TextInputForm/
│
├── Pages/
│   ├── PlayGame/
│   └── StartGame/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/hangman-game.git
```

### Navigate to the project folder

```bash
cd hangman-game
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🎮 How to Play

1. Open the application.
2. Navigate to the **Start Game** page.
3. Enter the secret word.
4. Click **Start Game**.
5. Guess the hidden word by selecting letters.
6. Each incorrect guess adds a new part to the Hangman.
7. Guess the complete word before the Hangman is fully drawn.

---

## 🛣️ Routes

| Route | Description |
|--------|-------------|
| `/` | Start Game page |
| `/start` | Start Game page |
| `/play` | Play Hangman |
| `*` | 404 Not Found |

---

## 📸 Screens

### Start Game
- Enter the secret word.
- Begin a new game.

### Play Game
- Hidden word display.
- Alphabet letter buttons.
- Hangman illustration.
- Navigation back to Start Game.

---

## ⚙️ Components

### TextInputForm
- Accepts the secret word from the user.

### MaskedText
- Displays the hidden word using underscores.
- Reveals correctly guessed letters.

### LetterButtons
- Displays alphabet buttons.
- Prevents reuse of already selected letters.

### HangMan
- Displays the hangman drawing based on incorrect guesses.

---

## 📖 Game Logic

- The secret word is passed from the **Start Game** page to the **Play Game** page using **React Router state**.
- Every guessed letter is stored in the `usedLetters` state.
- Correct guesses reveal matching letters.
- Incorrect guesses increment the `step` state.
- The Hangman component updates according to the current step.

---

## 📦 Future Improvements

- Win and Lose screens
- Score tracking
- Difficulty levels
- Random word generator using an API
- Hint system
- Keyboard support
- Sound effects
- Timer mode
- Multiplayer mode
- Restart game functionality

---

## 📚 Learning Outcomes

This project demonstrates:

- React Functional Components
- React Hooks (`useState`)
- React Router (`Routes`, `Route`, `Link`, `useLocation`)
- Component-based architecture
- State management
- Props passing
- Conditional rendering
- Tailwind CSS styling

---

## 👨‍💻 Author

**Srishith Sai Reddy Cheruku**

GitHub: https://github.com/srishithsaireddycheruku

---

## 📄 License

This project is created for learning purposes and is open-source under the MIT License.
