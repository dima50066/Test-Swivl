# React Project - Social Media Feed Application

This project is a social media feed application built with React, TypeScript, and Styled-components. It simulates a user feed with posts, likes, comments, and a user profile sidebar. The application also incorporates reusable UI components and icons.

## Project Structure

The main components and files in this project are structured as follows:

- **App.tsx**: Root component that integrates the header, profile sidebar, and main feed sections.
- **components/**: Contains all UI components, including:
  - `Header`: Navigation bar at the top of the application.
  - `ProfileSidebar`: Sidebar displaying user profile information.
  - `Feed`: Main feed section displaying individual `PostCard` components.
  - `PostCard`: Component that displays a single post with title, author, likes, comments, and sharing options.
- **redux/**: State management setup using Redux Toolkit for managing posts and user data.
- **services/api.ts**: API service integration using Axios for potential backend communication.
- **styles/**: Styled-components setup for global styles, variables, and component-specific styles.

## Project Features

- **Responsive Design**: Layout adjusts based on screen size using media queries.
- **Styled-components**: The application leverages `Styled-components` for modular and scoped CSS with theme support.
- **Redux Toolkit**: State management using Redux Toolkit, with slices for managing posts and user data.
- **Icons**: Custom icons used in components like `PostCard`, imported from `react-icons` and local SVG components.

## Dependencies

The main dependencies for this project include:

- **React**: v18.3.1
- **TypeScript**: v4.9.5
- **Styled-components**: v6.1.13 for CSS-in-JS styling
- **Redux Toolkit**: v2.3.0 for state management
- **Axios**: v1.7.7 for HTTP requests
- **react-icons**: v5.3.0 for custom icons

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and supports standard scripts.

### Prerequisites

- **Node.js** and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
3. Install dependencies:
   ```bash
   npm install

Available Scripts
In the project directory, you can run:

npm start: Runs the app in development mode at http://localhost:3000.
npm test: Launches the test runner in interactive watch mode.
npm run build: Builds the app for production to the build folder.
npm run lint: Runs ESLint to check for coding style issues and fixes them automatically.
npm run format: Formats the codebase using Prettier.

Code Style
The project uses ESLint and Prettier for code quality and consistency. ESLint configuration extends react-app and react-app/jest, while Prettier ensures consistent formatting across .ts, .tsx, .js, .json, .css, and .md files.

Global Styles and Theme
Global styles are defined in GlobalStyles.ts with configurable variables in variables.ts:

Colors: Primary, secondary, and background colors.
Typography: Font families, sizes, and weights.
Breakpoints: Responsive design adjustments for tablet and desktop.
Contributing
To contribute:

Fork the repository.
Create a new branch:
    ```bash
git checkout -b feature/your-feature-name
Commit your changes:
    ```bash
git commit -m "Add new feature"
Push your changes:
git push origin feature/YourFeature
Open a pull request.

Contact
For more information or inquiries, contact dima50066@gmail.com.

This `README.md` gives an overview of the project structure, features, and setup instructions. You can customize the contact and repository details as needed.
