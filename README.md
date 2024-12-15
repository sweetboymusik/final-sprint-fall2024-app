# Airport Management Frontend

This is the frontend for the Alight Management system, built with React. It provides a user-friendly interface for managing flights, passengers, and related data.

You can access the site here:
**[Airport Management Frontend](http://fall2024-airport-app-bucket.s3-website-us-east-1.amazonaws.com/)**

## Features

- View and manage flight details.
- Add passengers to flights through a simple dropdown.
- Browse and manage airports, gates, and aircraft data.

## Technologies

- **Frontend Framework:** React
- **Styling:** Tailwind CSS
- **State Management:** React hooks
- **Routing:** React Router
- **Deployment:** AWS S3 for static site hosting

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the API endpoint:

   - Update the `src/api/config.js` file with your backend API URL:
     ```javascript
     export const API_BASE_URL = "http://<your-backend-api-url>";
     ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Access the site at `http://localhost:3000`.

## Scripts

- **Start the development server:** `npm start`
- **Build for production:** `npm run build`
- **Run tests:** `npm test`

## Deployment

1. Build the application:

   ```bash
   npm run build
   ```

2. Deploy the contents of the `build` directory to your AWS S3 bucket.
