const express=require('express');
const sequilize = require('./database');
const product = require('./productModel');
const app=express()
const port=3000;

app.use(express.json())
app.get("/",(req,res)=>{
 res.send("hi all")   
    })


    // sequilize.authenticate().then(()=>{
    //      console.log("connection established");
    // })
    // .catch((error)=>{
    //     console.log(error)
    //     console.log("Error in establishing connection");
    // })
    // sequilize.sync().then((result)=>{
    //     console.log(result);
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })


    
// app.listen(port,(req,res)=>{
//     console.log(`server is running on ${port}`)
// })

const startServer = async (req,res) => {
    try {
      await sequilize.authenticate();
      console.log("Connection established successfully.");
  
      // Sync the models
      await sequilize.sync();
      console.log("Database synchronized.");
      const sampleData={
        title:"Richus",
        description:"RishikNath kP "
    }
    product.create(sampleData)
    

      // Start the server
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
}
startServer()