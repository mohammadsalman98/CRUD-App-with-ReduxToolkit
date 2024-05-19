# Redux Toolkit CRUD App

This repository contains a simple yet powerful example of a CRUD (Create, Read, Update, Delete) application built with Redux Toolkit and Redux Thunk. It demonstrates how to manage state and perform asynchronous operations using Redux Toolkit's slices and thunks, interfacing with a mock backend via HTTP methods.

## Features

- **CRUD Operations**: Implements the four basic operations of persistent storage: Create, Read, Update, and Delete.
- **Redux Toolkit**: Leverages Redux Toolkit for efficient state management with out-of-the-box tools.
- **Redux Thunk**: Utilizes Redux Thunk middleware for handling asynchronous logic.
- **HTTP Methods**: Uses HTTP methods (GET, POST, PUT, DELETE) to interact with a mock REST API.
- **JSON Server**: Includes a setup with JSON Server to simulate a real backend with fake data.

## How It Works

The app uses Redux Toolkit to create a store and define slices for different data types. Each slice contains actions and reducers to handle the corresponding CRUD operations. Redux Thunk allows the app to dispatch asynchronous actions to send and receive data from the JSON Server.

## Getting Started

To run this project locally, you'll need to install JSON Server to create a fake REST API:

\`\`\`bash
npm install -g json-server
\`\`\`

Next, start JSON Server and watch the `db.json` file:

\`\`\`bash
json-server --watch db.json
\`\`\`

Clone the repository and install dependencies:

\`\`\`bash
git clone [your-repo-link]
cd redux-toolkit-crud-app
npm install
\`\`\`
