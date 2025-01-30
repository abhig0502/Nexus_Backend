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


-Create post logout api  
-Create patch/profile/edit
-Create patchprofile/password api=>forgot password api
-Make you validate all data in every patch,post apis

-Create connection Request Schema
-Send connection request api
-Proper validation of data
-Think about all corner cases
-$or and $and query in mongoose
-Schema.pre("save") function
-Read more about indexes in MongoDB
-Why do we need indexes in DB?
-What are the pros and cons of creating index ?
-Read this article about compound indexes-on mongodb official website

-Write code with proper validations for /request/review/:status/:requestId
-Thought process -POST vs GET
-Read about ref and populate 
-Create GET /user/requests/reveived with all the checks
-Create GET GET /users/connections

-Logic for GET /feed api
-Explore the $nin ,$and ,$ne and other query operators

NOTES:

/feed?page=1&limit=10 => 1-10 => .skip(0) & .limit(10)

/feed?page=2&limit=10 => 11-20 => .skip(10) & .limit(10)

/feed?page=3&limit=10 => 21-30 => .skip(20) & .limit(10)

/feed?page=4&limit=10 => 31-40 => .skip(30) & .limit(10)

skip=(page-1)*limit;