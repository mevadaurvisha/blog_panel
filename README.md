# Blog Panel Application

This project is a **Blog Panel** built with **Node.js** and **MongoDB** that allows users to register, log in, create blogs, view all blogs, edit and delete their own blogs, add topics and subtopics, comment on blogs, and delete comments. This application includes user authentication and a robust blog management system.

## Features

- **User Authentication:**
  - User registration (Sign Up)
  - User login (Sign In)
  - Password encryption using **bcrypt**
  
- **Blog Management:**
  - Add a blog
  - Edit or delete user-owned blogs
  - View all blogs

- ** Image Uploads:**
  -  Blog posts can include images uploaded via Multer.
 
- **Topic and Subtopic Management:**
  - Add topics
  - Add subtopics under specific topics

- **Commenting System:**
  - Add comments to blogs
  - Delete own comments

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (>= v12.0)
- **MongoDB** (>= v4.0)
- **npm** 

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mevadaurvisha/blog_panel.git
    cd blog-panel
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
    
    Create a `.env` file in the root directory and add the following:

    ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/blogpanel
    JWT_SECRET=your_secret_key
    ```

4. Start MongoDB (if not already running):

    ```bash
    mongod
    ```

5. Run the application:

    ```bash
    npm start
    ```

6. Open your browser and go to `http://localhost:3000`.

## API Endpoints

- **Auth:**
  - `POST /auth/signup` - Sign up a new user
  - `POST /auth/login` - Log in a user
  
- **Blogs:**
  - `POST /blogs` - Create a new blog
  - `GET /blogs` - View all blogs
  - `GET /blogs/:id` - View a single blog by ID
  - `PUT /blogs/:id` - Edit a blog (only if the user is the owner)
  - `DELETE /blogs/:id` - Delete a blog (only if the user is the owner)
  
- **Topics and Subtopics:**
  - `POST /topics` - Add a new topic
  - `POST /topics/:topicId/subtopics` - Add a subtopic under a specific topic
  
- **Comments:**
  - `POST /blogs/:blogId/comments` - Add a comment to a blog
  - `DELETE /blogs/:blogId/comments/:commentId` - Delete a comment (only if the user is the owner)

## Technologies Used

- **Node.js**: Backend runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing blog and user data
- **Mongoose**: MongoDB object modeling for Node.js
- **JWT**: JSON Web Token for authentication
- **bcrypt.js**: For password hashing

## Folder Structure

```bash
├── models/             # Mongoose models for User, Blog, Topic, Comment, etc.
├── routes/             # API routes
├── controllers/        # Route handlers and business logic
├── Authentication/         # Middleware for authentication, validation, etc.
├── views/              # (Optional) For templating, if using EJS, Pug, etc.
├── config/             # Configuration files (e.g., MongoDB, JWT)
└── index.js              # Main entry point
