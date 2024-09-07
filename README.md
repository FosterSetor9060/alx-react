0x05. React State
Front-end Specialization
Overview
In the “0x05. React State” project, we’ll dive into managing state within React components. Understanding state and its lifecycle is crucial for building interactive and dynamic user interfaces. By the end of this project, you’ll be able to explain key concepts related to state, lifecycle, controlled components, and React Hooks.

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
A README.md file, at the root of the project folder, is mandatory
Tasks
0. Adding a Local State for Notifications
Modify the App component in task_0/dashboard/src/App/App.js:
Create a local state to store a displayDrawer element:
Define the default state for the state in the constructor of the class.
Create a function named handleDisplayDrawer that will change the value of displayDrawer to true.
Create a function named handleHideDrawer that will change the value of displayDrawer to false.
Modify the Notifications import in task_0/dashboard/src/App/App.js:
Pass to the component the prop displayDrawer using the local state.
Pass the new functions handleDisplayDrawer and handleHideDrawer.
Modify the App test suite in task_0/dashboard/src/App/App.test.js:
Add a test to verify that the default state for displayDrawer is false. Verify that after calling handleDisplayDrawer, the state should now be true.
Add a test to verify that after calling handleHideDrawer, the state is updated to be false.
Modify the Notifications component in task_0/dashboard/src/Notifications/Notifications.js:
Define the propTypes and the defaultProps for the new props.
When clicking on “Your notifications,” call handleDisplayDrawer.
When clicking on the close button, call handleHideDrawer.
Modify the Notifications test suite in task_0/dashboard/src/Notifications/Notifications.test.js:
Add a test to verify that clicking on the menu item calls handleDisplayDrawer.
Add a test to verify that clicking on the button calls handleHideDrawer.
Tips:
Remember that you implemented shouldComponentUpdate. You will need to modify the logic to allow the component to rerender when the prop displayDrawer changes.
Use setState and instance when creating tests with Enzyme.
Remember to use spies to verify if a function is being called. You can pass a spy as a property.
