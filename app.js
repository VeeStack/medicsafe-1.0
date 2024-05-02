
// Import required modules
const express = require('express');
// Initialize Express app
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { Sequelize } = require('sequelize');
  

// Initialize Sequelize with database connection settings
const SequelizeInstance = new Sequelize({
    dialect: "mysql",
    host: "bwwuigbix2dg4glio1gr-mysql.services.clever-cloud.com",
    username: "uwmawbdf35w6bszp",
    password: "JaNdG3xbYbxcutwq1hfw",
    database: "bwwuigbix2dg4glio1gr",
    port: "3306"
});

// Check database connection
SequelizeInstance.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


//  To define and sync Sequelize models 

const user = require('./backend/models/user').default;
 SequelizeInstance.sync();


// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(morgan('combined')); // Log HTTP requests
app.use(helmet()); // Add security headers
app.use(cors()); // Enable CORS



// Routes

 const userRoutes = require('./backend/routes/userRoutes');
 app.use(userRoutes);

 
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


