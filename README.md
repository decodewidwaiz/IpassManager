# IpassManager: A Simple Password Manager

`IpassManager` is a lightweight password manager built using Node.js core methods, Express, and EJS. The application allows users to securely store and manage their usernames and passwords in real-time. It utilizes the `fs` (File System) and `path` modules from Node.js to create and manage files on the server to store user credentials.

## Features:
- **User Authentication**: Users can input their username and password for secure storage.
- **Real-Time Saving**: User credentials are saved instantly to separate files on the server.
- **File System Integration**: Utilizes Node.js's `fs` and `path` modules for file management and storage.
- **Backend Framework**: Built with Express.js for routing and server management.
- **EJS Templating**: Renders dynamic HTML views to manage and display user credentials.

## Technologies Used:
- **Node.js** (Core modules: `fs`, `path`)
- **Express.js** (Web framework)
- **EJS** (Embedded JavaScript templating engine)

## How It Works:
1. Users input their username and password through a simple web interface.
2. The credentials are securely saved into the server’s local folder structure in real-time.
3. Each user's credentials are stored in separate files for easy retrieval and organization.

## Setup Instructions:
Follow these steps to set up `IpassManager` locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/IpassManager.git

##make sure to fork the repo