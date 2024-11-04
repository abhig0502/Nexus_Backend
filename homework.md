-create a repository
-Initialize a repository
-node_modules,package.json,package-lock.json
-Install express
-Create a server
-Listen to port 7777
-Write request handlers for /test,/hello
-Install nodemon and update scripts inside package.json

- Initialize git
- .gitignore
- Create a remote origin on github
- Push all code to the remote origin
-Play with the routes and route extenstions ex. /hello, / .hello/2, /xyz
-Order of the routes matter a lot
-Install Postman app and make a workspace/collection > test API call
-Write logic to handle GET, POST, PATCH, DELETE API calls and test them on pastman
-Explore routing and use of ? ,+ ,(), * in the routes
-use of regex in routes /a/, /.*fly$/
-Reading the query params in the routes
-Reading the dynamic routes using params 

//middlewares and error handlers

-multiple route handlers-play with the code 
-next()
-app.use("/route",rh1,[rh2,rh3],rh4,rh5);    
this syntax is absolutely fine wrapping any of the response handler or all the response handler inside array is fine .
-what is a middleware?
-How expres js basically handles request behind the scenes?
-write a dummy auth middleware for admin
-write a dummy auth middleware for all user routes

-Create a free cluster on mongodb official website(mongo Atlas)
-Install mongoose library
-Connect your application to the Database "Connection-url"/devTinder
-Call the connectDB function and connect to the database before starting application on 7777
-create a schema and usermodel 
-create POST/ signup API to add data to database
-push some documents using api calls from postman
-Error handling using try and catch block

-JS object and json object difference
-Add the express.json middleware to your app
-Make your signup API dynamic to recieve data from the end user
-User.findOne with duplicate email ids,which object returned
-API-get user by email
-API-Feed API - GET/feed -get all the users from the database 