

require("dotenv").config();
module.exports = {
  development:{
    username:process.env.DB_USER,
    password:process.env.SUPABASE_PASSWORD,
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    dialect:"postgres",
   
  
  },
}


// {
//   "development": {
//     "username": "postgres.xpwhezcvwoaelnqgzhze",
//     "password": "2hK*sJnacTVKcEU" ,
//     "database": "postgres",
//    "host": "aws-0-ap-south-1.pooler.supabase.com",
//     "dialect": "postgres"
//   }
  
// }

