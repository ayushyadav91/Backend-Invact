let express= require("express");
let {Company} = require("./models/company.model.js");
let {sequelize} = require("./lib/index");

let app=express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const companies = [
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
app.get("/seed_db", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await Company.bulkCreate(companies);
    res.status(200).json({ message: "Database seeded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error seeding the data", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Server is Running");
});
//Exercise 1: Fetch all companies
app.get("/companies", async (req, res) => {
  try {
    let companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies", error: error.message });
  }
});

async function fetchCompaniesById(id){
     let companiesById = await Company.findOne({where:{id}});
     return {companies:companiesById}
}
app.get("/companies/details/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  try {
    let companyId = await fetchCompaniesById(id);
    res.status(200).json(companyId);
  } catch (error) {
    res.status(500).json({ message: "Error fetching company details", error: error.message });
  }
});
//Exercise 3: Fetch all companies by industry
async function fetchEmployeeByIndustry(industry){
     let companiesByIndustry = await Company.findAll({where:{industry}});
     return {companies:companiesByIndustry};
}
app.get("/companies/industry/:industry", async (req, res) => {
  let industry = req.params.industry;
  try {
    let companiesByIndustry = await fetchEmployeeByIndustry(industry);
    res.status(200).json(companiesByIndustry);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies by industry", error: error.message });
  }
});

//Exercise 4: Sort all the companies by their revenue
async function sortCompaniesRevenue(order){
     let sortByCompaniesRevenue = await Company.findAll({order: [['revenue', order]]});
     return {companies:sortByCompaniesRevenue};
}
app.get("/companies/revenue", async (req, res) => {
  let order = req.query.order;
  try {
    let companySortRevenue = await sortCompaniesRevenue(order);
    res.status(200).json(companySortRevenue);
  } catch (error) {
    res.status(500).json({ message: "Error sorting companies by revenue", error: error.message });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

