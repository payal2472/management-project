# Project Management Tool

This is a full-stack project management tool designed to help teams organize and track their work effectively. The application features a React-based frontend and a Node.js backend, providing a seamless and intuitive user experience.

## Features

- **Task Management**: Create, update, and delete tasks.
- **Project Organization**: Group tasks into projects.
- **User Authentication**: Secure login and registration.
- **Real-time Updates**: Instant synchronization of changes.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, TypeScript
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: Passport.js

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/your_username/your_project.git
   ```

2. **Install backend dependencies**
   ```sh
   cd backend
   npm install
   ```

3. **Install client dependencies**
   ```sh
   cd ../client
   npm install
   ```

### Configuration

1. **Backend Environment Variables**

   Create a `.env` file in the `backend` directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

2. **Client Environment Variables**

   Create a `.env` file in the `client` directory and add the following:

   ```env
   VITE_API_URL=http://localhost:5000
   ```

### Running the Application

1. **Run the backend**
   ```sh
   cd backend
   npm run dev
   ```

2. **Run the client**
   ```sh
   cd client
   npm run dev
   ```

## Available Scripts

### Backend

- `npm run dev`: Starts the server in development mode.
- `npm run build`: Compiles the TypeScript code.
- `npm start`: Starts the server in production mode.
- `npm run seed`: Seeds the database with initial data.

### Client

- `npm run dev`: Starts the client in development mode.
- `npm run build`: Builds the client for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Lints the client-side code.

### 122