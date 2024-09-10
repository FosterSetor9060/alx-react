0x05. React State
Overview
The “0x05. React State” project focuses on managing state within React components. Understanding state and its lifecycle is crucial for building interactive and dynamic user interfaces. By the end of this project, you’ll be able to explain key concepts related to state, lifecycle, controlled components, and React Hooks.

Learning Objectives
By completing this project, you’ll be able to explain the following topics without relying on external resources:

State of a Component or Container:
Understand what component state is and how it differs from props.
Know when to use local state within a component.
Component Lifecycle:
Understand the different phases of a component’s lifecycle (e.g., mounting, updating, unmounting).
Know how to execute code at specific points in the lifecycle.
Modifying State and Execution Order:
Understand how to modify state using setState.
Know the correct order of execution for state updates.
Controlled Components:
Understand the concept of controlled components.
Know how to create controlled forms in React.
Form Handling:
Understand how to use forms in React.
Know how to handle form input changes and submit events.
Component Reusability and State Lifting:
Understand how to reuse smaller components and keep them pure.
Know how to lift state to principal containers.
React Hooks:
Understand the use of React Hooks (e.g., useState, useEffect).
Know how to create custom hooks.
Testing State Changes with Enzyme:
Understand how to test state changes using Enzyme.
Requirements
General:
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Node 12.x.x and npm 6.x.x
All your files should end with a new line
The first line of all your files should be exactly #!/usr/bin/node
A README.md file, at the root of the project folder, is mandatory
Tasks
0. Adding a Local State for Notifications
Modify the App component in task_0/dashboard/src/App/App.js:
Create a local state to store a displayDrawer element:
Define the default state for the state in the constructor of the class.
Create functions named handleDisplayDrawer and handleHideDrawer to update the state.
Modify the Notifications import in task_0/dashboard/src/App/App.js:
Pass the prop displayDrawer using the local state.
Pass the new functions handleDisplayDrawer and handleHideDrawer.
Modify the App test suite in task_0/dashboard/src/App/App.test.js:
Add tests to verify the default state for displayDrawer and the behavior after calling the functions.
Modify the Notifications component in task_0/dashboard/src/Notifications/Notifications.js:
Define the propTypes and defaultProps for the new props.
Implement the behavior for clicking on “Your notifications” and the close button.
Modify the Notifications test suite in task_0/dashboard/src/Notifications/Notifications.test.js:
