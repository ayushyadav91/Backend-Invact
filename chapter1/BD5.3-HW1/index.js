const express = require("express");
const {Post} = require("./models/post.model");
const {sequelize , sequelizer} = require("./lib/connectDB");

const app = express();

app.use(express.json());

let postData = [
     {
          title: 'Getting Started with Node.js',
          content: 'This post will guide you through the basics of Node.js and how to set up a Node.js project.',
          author: 'Alice Smith',
        },
        {
          title: 'Advanced Express.js Techniques',
          content: 'Learn advanced techniques and best practices for building applications with Express.js.',
          author: 'Bob Johnson',
        },
        {
          title: 'ORM with Sequelize',
          content: 'An introduction to using Sequelize as an ORM for Node.js applications.',
          author: 'Charlie Brown',
        },
        {
          title: 'Boost Your JavaScript Skills',
          content: 'A collection of useful tips and tricks to improve your JavaScript programming.',
          author: 'Dana White',
        },
        {
          title: 'Designing RESTful Services',
          content: 'Guidelines and best practices for designing RESTful APIs.',
          author: 'Evan Davis',
        },
        {
          title: 'Mastering Asynchronous JavaScript',
          content: 'Understand the concepts and patterns for writing asynchronous code in JavaScript.',
          author: 'Fiona Green',
        },
        {
          title: 'Modern Front-end Technologies',
          content: 'Explore the latest tools and frameworks for front-end development.',
          author: 'George King',
        },
        {
          title: 'Advanced CSS Layouts',
          content: 'Learn how to create complex layouts using CSS Grid and Flexbox.',
          author: 'Hannah Lewis',
        },
        {
          title: 'Getting Started with React',
          content: 'A beginner\'s guide to building user interfaces with React.',
          author: 'Ian Clark',
        },
        {
          title: 'Writing Testable JavaScript Code',
          content: 'An introduction to unit testing and test-driven development in JavaScript.',
          author: 'Jane Miller',
        }, 
];
app.get("/",(req ,res)=>{
     res.send("Server is Running");
});

app.get('/seed_db', async (req ,res)=>{
   try{
     await sequelize.sync({force:true});
     await Post.bulkCreate(postData);
     return res.status(200).json({message:"Database Seeded succesfully"});
   } catch(error){
     return res.status(500).json({message:"Error seeding the data",error:error.message});
   }
});
//Exercise 1: Fetch all posts
async function fetchAllPosts(){
     let allPostsData = await Post.findAll();
     return {posts:allPostsData};
}
app.get("/posts", async (req ,res)=>{
     try{
      let allposts = await fetchAllPosts();
      res.status(200).json(allposts);
     } catch(error){
     res.status(500).json({error:error.message}); 
     }
});
//Exercise 2: Add a new post in the database
async function addNewPost(newPost){
     let addData = await Post.create(newPost);
     return {addData};

}
app.post("/posts/new", async (req ,res)=>{
      try{
          let newPost = req.body.newPost;
          let addPost = await addNewPost(newPost);
          if(!addPost){
               return res.status(404).json({message:"Data is Not Found"});
          }
          res.status(200).json(addPost);
      } catch(error){
          res.status(500).json({error:error.message});
      }
})
//Exercise 3: Update post information
async function updatePostById(newPostData,id){
     let updateData = await Post.findOne({where:{id}});
     if(!updateData){
          return {};
     }
     updateData.set(newPostData);
     let AllupdateData = await updateData.save();
     return {message:"Post updated successfully",AllupdateData};
}
app.post("/posts/update/:id", async (req ,res)=>{
     try{
          let id = parseInt(req.params.id);
          let newPostData = req.body;
          let updatedResult = await updatePostById(newPostData,id);
          if(!updatedResult){
               return res.status(404).json({message:"Post not Found"});
          }
          return res.status(200).json(updatedResult);
     } catch(error){
          res.status(500).json({error:error.message});
     }
});

//Exercise 4: Delete a post from the database
async function deletePostById(id){
     let destoryPost = await Post.destroy({where:{id}});
     if(destoryPost === 0){
     return null;
     }
    return {message:"Post destory Successfully"}
}
app.post("/posts/delete", async (req ,res)=>{
     try{
       let id = parseInt(req.body.id);
       console.log(id);
       let afterDeletedData = await deletePostById(id);
       if(!afterDeletedData){
          return res.status(404).json({message:"Post Data not Found"});
       }
     return res.status(200).json(afterDeletedData);
     } catch(error){
          res.status(500).json({error:error.message});
     }
})

app.listen(1000,()=>{
     console.log(`Server is Running on the port 1000`);
})