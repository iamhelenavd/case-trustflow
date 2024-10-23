# About the project 🎉

I had the pleasure of working on this assignment, and it has been an exciting journey from start to finish👩‍💻. 

Throughout the development process, I focused on creating a user-friendly and efficient solution within the time available. I aimed to incorporate best practices and the latest technologies. This project reflects my passion for coding and my commitment to ensuring consistency in coding standards. That is why I chose Prettier. This project demonstrates the implementation of the Atomic Design methodology, which organizes components in a clear and scalable manner. The structure showcases my interest in thoughtful and efficient design architecture. Furthermore, CSS Modules are used in this project to prevent classname collisions and to ensure modular and maintainable styles. 

 Thank you for your interest, feel free to explore, contribute, and please provide feedback, because I know its not 100%! 
 I am excited to share it with you 😊. 

## Table of contents
- [About the project 🎉](#about-the-project-)
- [Table of contents](#table-of-contents)
- [Requirements](#requirements)
- [Built with](#built-with)
- [Getting started](#getting-started)
- [Storybook unit and component testing](#storybook-unit-and-component-testing)
- [Project structure](#project-structure)
- [Commits specification](#commits-specification)


## Requirements

- [&#10004] Front-End Framework: Used React 
- [&#10004] Used State management and management by TanStack.    
- [&#10004] Styled component responsive and used animations. 
- [&#10004] Implemented unit and component test to verify the correct functionality of my form 
- [&#10004] Collected user information such as name, email, and date of birth. 
- [&#10004] Created a step in the form where users can choose between three types of policies.
- [&#10004] Created navigation between step form and summary. Include navigation buttons to move between form steps, 
            with validation to ensure all fields are correctly filled before proceeding to summary. 
- [&#10004] Created after policy selection, display a summary screen showing the user's entered details and chosen policy.
- [&#10004] On submit created real-time validation on form fields with clear error messages.
- [&#10004] Implement functionality to save the user's progress through the form locally by useLocalStorage.
- [&#10004] Included a README file


## Built with

  - [TypeScript](https://www.typescriptlang.org/docs/)
  - [React](https://react.dev/)
  - [Vite](https://vite.dev/guide/)
  - [TankStank Form](https://tanstack.com/form/latest) 
  - [Valibot](https://valibot.dev/)
  - [Storybook](https://storybook.js.org/)
  - [Framer Motion](https://www.framer.com/motion/) 


## Getting started

* Install NPM packages
  ```sh
  npm install

* Run project
  ```sh
  npm run dev


## Storybook unit and component tests

This project demonstrates 2 options to test the form more information about storybook testing: [Storybook](https://storybook.js.org/docs/writing-tests)

* Start Testing

[1] Visual 
* Run storybook: to start Storybook and view the components, run the following command:
  ```sh
  npm run storybook

* Open storybook in your browser 
  ```sh
  http://localhost:6006

* Once Storybook is running, navigate through the stories to see individual components.
 You can test their appearance, behavior, and interactions within the Storybook interface.

  * Component test: Click on subtask for example: EmptyForm or FilledForm for user behavior simulation
  
  * Visual test: Open tab "Visual Tests" to see what changed in styling

  * Unit test: Open tab "Interactions" to run the test 

[2] Terminal 
* Run storybook
  ```sh
  npm run storybook

* Run tests 
  ```sh
  npm run test-storybook


## Project structure 

This project demonstrates an implementation of the Atomic Design methodology, which organizes components in a clear and scalable manner. The structure is designed to show my interest in thoughtful and efficient design architecture:

* Atoms: Basic building blocks of the UI (e.g., buttons, input fields).
* Molecules: Groups of atoms functioning together (e.g., form inputs with labels).
* Organisms: Complex components composed of molecules (e.g., navigation bars, forms).
* Templates: Page-level structures that place components into a layout.
* Pages: Specific instances of templates with real content


## Commits specification

Write clear and concise commit messages that describe the changes made.

  ```html
  [<type>] <scope>: (<referencing issues>) <description>

  ```sh
  feat: A new feature
  fix: A bug fix
  docs: Documentation only changes
  style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf: A code change that improves performance
  test: Adding missing tests
  chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
  ```

