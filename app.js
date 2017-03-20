// globals
m = {}; // all modules
g = {}; // all global variables (ex. settings)

// Require modules
[
  "express",
  "compression",
  "path",
  "fs",
  "serve-favicon",
  "cookie-parser",
  "express-session",
  "body-parser",
  "mongoose",
  "./settingsConstr",
  "./classLoader"
].forEach(function(x){
  // store required modules in "m"
  m[x.replace(/\W/g,'')] = require(x);
});

console.log("All loaded modules", Object.keys(m));

// constructs g.settings object
m.settingsConstr();

// loads all classes
m.classLoader();

console.log("All loaded classes", Object.keys(g.classes));

// connect to DB
new g.classes.DB();

// start express server
new g.classes.Server();


/*
  If we didnt have a class loader

  var Server = require('./classes/Server.class.js');

  new Server();
*/
