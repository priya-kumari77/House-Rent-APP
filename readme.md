<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>House Rent Application - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f9;
            color: #333;
        }
        h1 {
            color: #2d89e5;
            text-align: center;
            margin-bottom: 0.5em;
        }
        h2 {
            color: #333;
            border-bottom: 2px solid #2d89e5;
            padding-bottom: 0.3em;
            margin-bottom: 1em;
        }
        p, ul {
            line-height: 1.6;
            margin: 0.5em 0;
        }
        a {
            color: #2d89e5;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .section {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 10px;
            background-color: #2d89e5;
            color: #fff;
            border-radius: 5px;
            text-align: center;
        }
        .button:hover {
            background-color: #1e66b5;
        }
    </style>
</head>
<body>

    <div class="section">
        <h1>🏠 House Rental Application</h1>
        <p>A full-stack house rental platform built using the MERN (MongoDB, Express.js, React, Node.js) stack. This application allows users to list, search, and rent properties with ease, providing a seamless and intuitive experience.</p>
    </div>

    <div class="section">
        <h2>🚀 Features</h2>
        <ul>
            <li>User authentication and authorization with JWT.</li>
            <li>Responsive and dynamic property listings.</li>
            <li>Advanced search and filter options.</li>
            <li>Property details view with image gallery.</li>
            <li>Booking system with date selection.</li>
            <li>User dashboard for managing listings and bookings.</li>
        </ul>
    </div>

    <div class="section">
        <h2>🔧 Technologies Used</h2>
        <ul>
            <li><strong>MongoDB:</strong> NoSQL database for storing user and property data.</li>
            <li><strong>Express.js:</strong> Web framework for the backend server and RESTful APIs.</li>
            <li><strong>React:</strong> Frontend library for building the user interface.</li>
            <li><strong>Node.js:</strong> JavaScript runtime environment for the backend server.</li>
            <li><strong>JWT:</strong> JSON Web Tokens for secure authentication.</li>
        </ul>
    </div>

    <div class="section">
        <h2>🎥 Demo Video</h2>
        <p>Watch the demo video to see the application in action:</p>
        <a href="https://drive.google.com/file/d/1d7A7s6rgKWO-c2-g2mTZU1l_gJptzfc4/view?usp=sharing" target="_blank" class="button">View Demo Video</a>
    </div>

    <div class="section">
        <h2>📦 Installation and Setup</h2>
        <p>Follow these steps to run the application locally:</p>
        <ol>
            <li>Clone the repository: <code>git clone https://github.com/your-username/house-rent-app.git</code></li>
            <li>Navigate into the project directory.</li>
            <li>Install server dependencies: <code>cd server && npm install</code></li>
            <li>Install client dependencies: <code>cd client && npm install</code></li>
            <li>Set up your MongoDB URI and JWT secret in a <code>.env</code> file.</li>
            <li>Run the backend server: <code>npm run server</code></li>
            <li>Run the frontend client: <code>npm start</code> (in the client directory)</li>
            <li>Access the application at <code>http://localhost:3000</code></li>
        </ol>
    </div>

    <div class="section">
        <h2>📄 License</h2>
        <p>This project is licensed under the MIT License.</p>
    </div>

</body>
</html>
