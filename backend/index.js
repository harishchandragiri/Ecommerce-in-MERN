import dotenv from 'dotenv';
import DB_CONNECTION from './db/index.js';
import { app } from './app.js';

dotenv.config();
const port = process.env.PORT || 3003;


// Database connection Execution
DB_CONNECTION().
then(()=>{
   app.listen(port, ()=>{
      console.log(`server is running in port no ${port}`)
   })
})
.catch((error)=>{
   console.log('Mongodb connection failed !!!', error)
})


