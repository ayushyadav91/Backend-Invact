const express = require("express");
const { Companies } = require("./models/companies.model");
const { sequelize } = require("./lib/connectDB");
const { where } = require("sequelize");

const app = express();
app.use(express.json());


let companiesData = [
     {
       'id': 1,
       'name': 'Tech Innovators',
       'industry': 'Technology',
       'foundedYear': 2010,
       'headquarters': 'San Francisco',
       'revenue': 75000000
     },
     {
       'id': 2,
       'name': 'Green Earth',
       'industry': 'Renewable Energy',
       'foundedYear': 2015,
       'headquarters': 'Portland',
       'revenue': 50000000
     },
     {
       'id': 3,
       'name': 'Innovatech',
       'industry': 'Technology',
       'foundedYear': 2012,
       'headquarters': 'Los Angeles',
       'revenue': 65000000
     },
     {
       'id': 4,
       'name': 'Solar Solutions',
       'industry': 'Renewable Energy',
       'foundedYear': 2015,
       'headquarters': 'Austin',
       'revenue': 60000000
     },
     {
       'id': 5,
       'name': 'HealthFirst',
       'industry': 'Healthcare',
       'foundedYear': 2008,
       'headquarters': 'New York',
       'revenue': 80000000
     },
     {
       'id': 6,
       'name': 'EcoPower',
       'industry': 'Renewable Energy',
       'foundedYear': 2018,
       'headquarters': 'Seattle',
       'revenue': 55000000
     },
     {
       'id': 7,
       'name': 'MediCare',
       'industry': 'Healthcare',
       'foundedYear': 2012,
       'headquarters': 'Boston',
       'revenue': 70000000
     },
     {
       'id': 8,
       'name': 'NextGen Tech',
       'industry': 'Technology',
       'foundedYear': 2018,
       'headquarters': 'Chicago',
       'revenue': 72000000
     },
     {
       'id': 9,
       'name': 'LifeWell',
       'industry': 'Healthcare',
       'foundedYear': 2010,
       'headquarters': 'Houston',
       'revenue': 75000000
     },
     {
       'id': 10,
       'name': 'CleanTech',
       'industry': 'Renewable Energy',
       'foundedYear': 2008,
       'headquarters': 'Denver',
       'revenue': 62000000
     }
   ];

app.get("/seed_db", async(req ,res)=>{
     try{
          await sequelize.sync({ force: true });
          
          await Companies.bulkCreate(companiesData);
        return res.status(200).json({message:"Data Seeded SuccesFully"});
     } catch(error){
          console.error("Seeding error: ", error);
           if (error.name === 'SequelizeValidationError') {
      // Log specific validation errors
          error.errors.forEach((err) => {
        console.error(`Validation error on ${err.path}: ${err.message}`);
      });
     }
     return res.status(500).json({message:"Database seeding error",error:error.message});
     }
});
//server Running
app.get("/",(req,res)=>{
     res.send("Server is Running");
})
//Exercise 1: Fetch all companies
async function fetchAllCompanies(){
     let allCompaniesData = await Companies.findAll();
     return {companies:allCompaniesData};
}
app.get("/companies",async (req ,res)=>{
     try{
       let allCompanies = await fetchAllCompanies();
       if(!allCompanies){
          return res.status(404).json({message:"Companies Not Found"});
       }
     return res.status(200).json(allCompanies);
     } catch(error){
          res.status(500).json({error:error.message})
     }
});

//Exercise 2: Add a new employee in the database
async function addNewCompany(newCompany){
  let newCompanyData = await Companies.create(newCompany);
  return {message:"Data added succesfully", newCompany:newCompanyData};
}
app.post("/companies/new", async (req ,res)=>{
  try{
    let newCompany = req.body.newCompany;
    let result = await addNewCompany(newCompany);
    if(!result){
      return res.status(404).json({message:"Data not Found"});
    }
  return res.status(200).json(result);
  } catch(error){
    res.status(500).json({error:error.message});
  }
});
//Exercise 3: Update companies information
// async function updateCompanyById(newCompanyData, id){
//   let updatedCompanyData = await Companies.findOne({where:{id}});
//   if(!updatedCompanyData){
//     return {};
//   }
//   updatedCompanyData.set(newCompanyData);
//   let result = await updatedCompanyData.save();
//   return {message:"Company Data Updated succesfully", result};
// }

// app.post("/companies/update/:id", async (req ,res)=>{
//   try{
//     let id = parseInt(req.params.id);
//     let newCompanyData = req.body;

//     let result = await updateCompanyById(newCompanyData ,id);
//     if(!result){
//       return res.status(404).json({message:"No Data Found"});
//     }
//   return res.status(200).json(result);
//   } catch(error){
//     res.status(500).json({error:error.message});
//   }
// })
async function updateCompanyById(newCompanyData, id){
  let updateData = await Companies.findByPk(id);
  if (!updateData) {
    return null;
  }
  await updateData.update({
    newCompanyData
  });
  return {updateData};
}

app.post("/companies/update/:id", async (req ,res)=>{
  const { id } = req.params;
  const { newCompanyData } = req.body;
  try{
    const company = await updateCompanyById(newCompanyData,id);
    if(!company){
      return res.status(404).json({message:"Data not Found"});
    }
    return res.status(200).json({ message: "Company updated successfully", company });
  } catch(error){
    return res.status(500).json({error:error.message});
  }
});

//Exercise 4: Delete an company from the database
async function deleteCompanyById(id){
  let deleteData = await Companies.destroy({where:{id}});
  if(!deleteData){
    return null;
  }

  return {message :'Company record deleted successfully'};
}
app.post("/companies/delete", async (req ,res)=>{
  try{
  const {id} = req.body;
  const deletedData  = await deleteCompanyById(id);
  if(!deletedData){
    return res.status(404).json({message:"Data Not Found"});
  }
  return res.status(200).json(deletedData);
  } catch(error){
 res.status(500).json({error:error.message})
  }
});


const PORT = 5000
app.listen(PORT,()=>{
     console.log(`Server is Running on ${PORT}`);
})