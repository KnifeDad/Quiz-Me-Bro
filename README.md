# 🎯 Quiz Me Bro! 

A fun and interactive coding quiz application that tests your knowledge with a touch of humor! Built with React, TypeScript, and Express.

## 🎥 Live Demo

Watch the application pass both component and end to end tests on the command line! [View Demo Video](https://app.screencastify.com/v3/watch/xSiMuLLj56mUrcq7NR7l)

![Quiz Me Bro Screenshot](assets/Quiz-Me-Bro.png)

## 🚀 Features

- 📝 Dynamic quiz questions with multiple-choice answers
- 🎨 Clean and modern UI with Bootstrap styling
- ⚡ Real-time score tracking
- 🔄 Randomized questions for each quiz session
- 🎮 Interactive user experience
- 🧪 Comprehensive test coverage with Cypress

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Express + TypeScript
- **Testing**: Cypress (Component + E2E tests)
- **Styling**: Bootstrap
- **Database**: SQLite (for development)

## 🏃‍♂️ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/KnifeDad/Quiz-Me-Bro.git
   cd Quiz-Me-Bro
   ```

2. Install dependencies:
   ```bash
   # Install all dependencies (root, client, and server)
   npm install
   ```

3. Set up the environment:
   ```bash
   # In the server directory
   cd server
   cp .env.EXAMPLE .env
   ```

4. Seed the database:
   ```bash
   # In the server directory
   npm run seed
   ```

5. Start the application:
   ```bash
   # From the root directory
   npm run start:dev
   ```
   This will start both the client and server concurrently.

6. Run the tests:
   ```bash
   # From the root directory
   npm test
   ```

## 🎮 How to Play

1. Click the "Start Quiz" button
2. Answer the questions by selecting one of the four options
3. Watch your score update in real-time
4. Complete the quiz to see your final score
5. Take another quiz to improve your score!

## 🧪 Testing

The application includes both component and E2E tests using Cypress:

- Component tests verify individual component behavior
- E2E tests ensure the entire application flow works correctly

Run the tests with:
```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**KnifeDad** - [GitHub Profile](https://github.com/KnifeDad)

## 🙏 Acknowledgments

- Thanks to the EdX Bootcamp for providing the starter code which I modified
- Special thanks to the React and TypeScript communities
- And of course, thanks to coffee ☕ for keeping us coding!

---
Made with ❤️ by KnifeDad 