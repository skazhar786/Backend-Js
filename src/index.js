import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: "./.env"
})

console.log(process.env.MONGODB_URI);

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`server is running at port  ${process.env.PORT} `);
    
  })
})
.catch((error)=>{
    console.log(error);
    
})















//first approach of connecting the database
/*const app = express()
(async()=>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

      app.on('error', (error)=>{
          console.log(error);
          throw error
        })

        app.listen(precess.env.PORT, ()=>{
            console.log(`app is listening on the port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log(error);
    }
})()
*/