const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("<h1>Welcome to OAuth API Server</h1>");
});


//&redirect_uri=${process.env.REDIRECT_URI}&scope=user:email`;
app.get('/auth/github',(req,res)=>{
     const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user,repo,security_events`;
res.redirect(githubAuthUrl);

});

app.get('/auth/github/callback', async (req,res)=>{
    const {code} = req.query.code;
    try{
     const tokenResponse = await axios.post('https://github.com/login/oauth/access_token',{
          client_id:process.env.GITHUB_CLIENT_ID,
          client_secret:process.env.GITHUB_CLIENT_SECRET,
          code,
     },{
          headers:{
               'Accept':'application/json',
              
          },
     });
     const access_token = tokenResponse.data.access_token;
     res.cookie('access_token', access_token);
     return res.redirect(`${process.env.FRONTEND_URL}/v1/profile/github`);

    } catch(error){
        res.status(500).send(error);
    }
});
 
 app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


