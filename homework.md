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

-API-Get user By Id
-Create a delete user API.
-Difference between PATCH and PUT
-API- update a user
-Explore the Mongoose Documentation for Model methods
-What are options in the Model.findOneAndUpdate(),findByIdAndUpdate(),explore more about it
-API-update the user with emailId

-Explore schematype options from the documentation.
-all required,unique,lowercase,min,max,minLength,maxlength,trim
-Add default
-create a custom validate function for gender
-Improve the DB schema -Put all appropriate validators on each field in Schema
-Add timeStamps to the userSchema

-Add API level validation on Patch request and Signup post api
-DATA Sanitizing - Add API validation for each field
-Install validator
-Explore validator library function and use validator functions for password , email,photoUrl
-NEVER TRUST req.body

-Validate data in SignUp API
-Install bcrypt package
-Create Password hash using bcrypt.hash & save the user in encrypted password
-create Login API
-Compare passwords and throw errors if email or password is invalid

-install cookie-parse
-just send a dummy cookie to user
-create GET /profile API and check if you get the cookie back
-install jsonwebtoken
-In login API, after email and password validation, create a JWT token and sent it to user in cookies
-read the cookies inside your profile API and find the logged in user
-userAuth middleware
-Add the userAuth middleware in profile API and a new sendConnectionRequest API
-Set the expiry of JWT token and cookies to 7 days

-Explore Tinder's API
-Create a list of all API you can think of in Dev Tinder
-Group multiple routes under respective routers
-Read documentation express.Router()
-Create routes folder for managing auth,profile,request routers
-Create authRouter,ProfileRouter,requestRouter
-Import these routes in app.js
