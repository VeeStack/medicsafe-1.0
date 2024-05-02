const configuration = {
  // Development environment settings
  development: {
    database: {
      host: 'localhost',
      port: 27017,
      dbName: 'mydb'
    },
    server: {
      port: 3000
    },
    // Add other development environment settings here
  },

  // Production environment settings
  production: {
    database: {
      host: 'bwwuigbix2dg4glio1gr-mysql.services.clever-cloud.com',
      port: 3306, 
      dbName: 'bwwuigbix2dg4glio1gr',
      username: 'uwmawbdf35w6bszp',
      password: 'JaNdG3xbYbxcutwq1hfw'
    },
    server: {
      port: process.env.PORT || 8080
    },
    // Other production environment settings

    services: [
      {
        name: 'web',
        env: 'node',
        buildCommand: 'npm install && npm run build',
        startCommand: 'npm start'
      }
    ]
  },
  //Other environment configurations if needed
};

module.exports = configuration;
