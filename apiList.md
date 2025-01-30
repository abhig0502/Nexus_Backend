# DevTinder APIs

## authRouter
-POST /signup-done 
-POST /login-done
-POST /logout-done

## profileRouter
-GET /profile/view-done
-PATCH /profile/edit-done
-PATCH /profile/password

## connectionRequestRouter
-POST /request/send/interested/:userId
-POST /request/send/ignored/:userId
-POST /request/send/accepted/:requestId
-POST /request/send/rejected/:requestId

## userRouter
-GET /user/requests/recieved
-GET /user/connections
-GET /user/feed- Gets you the profile of other users on the platform

Status-ignore,interested,accepted,rejected

