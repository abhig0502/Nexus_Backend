# DevTinder APIs

## authRouter
-POST /signup
-POST /login
-POST /logout

## profileRouter
-GET /profile/view
-PATCH /profile/edit
-PATCH /profile/password

## connectionRequestRouter
-POST /request/send/interested/:userId
-POST /request/send/ignored/:userId
-POST /request/send/accepted/:requestId
-POST /request/send/rejected/:requestId

## userRouter
-GET /user/connections
-GET /user/requests/recieved
-GET /user/feed- Gets you the profile of other users on the platform

Status-ignored,interested,accepted,rejected

