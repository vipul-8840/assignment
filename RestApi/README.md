# Urban Culture Assignment - REST API

This project is a simple REST API built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete user records.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd urban-culture-assignment/RestApi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Ensure MongoDB is running.
   - Update the MongoDB connection string in `server.js` if necessary.

## Running the Server

Start the server:
```bash
node server.js
```

The server will be running at `http://localhost:5000`.

## API Endpoints

### Create a User

- **URL:** `/users`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "title": "User Title"
  }
  ```
- **Response:**
  ```json
  {
    "mssg": "User Created Successfully"
  }
  ```

### Get a User

- **URL:** `/users/:email`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "title": "User Title"
  }
  ```

### Update a User

- **URL:** `/users/:email`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "password": "password123",
    "title": "New Title"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Title updated successfully",
    "user": {
      "email": "user@example.com",
      "password": "password123",
      "title": "New Title"
    }
  }
  ```

### Delete a User

- **URL:** `/users/:email`
- **Method:** `DELETE`
- **Body:**
  ```json
  {
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

## License

This project is licensed under the MIT License.
