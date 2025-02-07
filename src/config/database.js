
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri="mongodb+srv://abhinvgupta92:BZiNWYSUBA40H69A@devtindercluster.fdzwq.mongodb.net/"
// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

// //database name
// const dbName="DevTinder";

// async function main(){
//     await client.connect();
//     console.log("connected successfully to the server");
//     const db=client.db(dbName);
//     const collection=db.collection("user");
    
//     // the following code examples can be pasted here... 

//     return "done";
// }

// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(()=>client.close());


const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
  
    process.env.DB_CONNECTION_SECRET 
     
  );
  console.log(    process.env.DB_CONNECTION_SECRET 
  );  
};  

module.exports=connectDB;



  
