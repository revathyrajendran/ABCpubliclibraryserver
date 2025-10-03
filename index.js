//import json server
const JSONServer = require('json-server') //JSONServer is a variable

//create server for running Json file
const libServer = JSONServer.create() //libServer is a variable
//import db.json
const router = JSONServer.router("db.json")//JSONServer is a variable
//create middleware
const middleware=JSONServer.defaults()//middleware is a variable
//define port to run JSON file.
const PORT= 3000
//use middleware JSON server
libServer.use(middleware)
//define routes for client request
libServer.use(router)

//run server for client request
libServer.listen(PORT,()=>{
    console.log(`libServer started at ${PORT} and waiting for client request!!`);
    
})