const express = require("express");
const app = express();
const { Employees } = require('./models/employee.models');  
const { sequelize } = require('./lib/index');

const PORT = process.env.PORT || 3000;

const employees = [
    {
        name: 'John Doe',
        department: 'Engineering',
        salary: 60000,
        designation: 'Software Engineer'
    },
    {
        name: 'Jane Smith',
        department: 'Human Resources',
        salary: 55000,
        designation: 'HR Manager'
    },
    {
        name: 'Alice Johnson',
        department: 'Finance',
        salary: 70000,
        designation: 'Financial Analyst'
    },
    {
        name: 'Bob Brown',
        department: 'Marketing',
        salary: 50000,
        designation: 'Marketing Coordinator'
    },
    {
        name: 'Charlie Davis',
        department: 'Sales',
        salary: 65000,
        designation: 'Sales Manager'
    }
];

app.get('/seed_employee_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await Employees.bulkCreate(employees); 
    res.status(200).json({ message: 'Database seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding the data', error: error.message });
  }
});
//Server activation
app.get("/",(req ,res) =>{
     res.send("Server is Running");
})
//Exercise 1: Fetch all employees
async function fetchAllEmployees() {
     let fetchAllEmployees = await Employees.findAll()
      return {employees:fetchAllEmployees};
}
app.get("/employees", async (req ,res)=>{
     try{
    let employeeData = await fetchAllEmployees();
    res.status(200).json(employeeData)
     } catch(error){
          res.status(500).json({error:error.message})
     }
})
//Exercise 2: Fetch employee details by ID
async function fetchEmployeeById(id){
     let employeesById = await Employees.findOne({where:{id}});
     return {employees:employeesById}
}
app.get("/employees/details/:id",async (req ,res)=>{
     let id = parseInt(req.params.id);
     console.log(typeof(id));
     try{
    let employeeId = await fetchEmployeeById(id);
    res.status(200).json(employeeId);
     }catch(error){
      res.status(500).json({error:error.message})
     }
});

//Exercise 3: Fetch all employees by department
async function fetchEmployeesByDepartment(department){
  let employeeDepartmentData = await Employees.findAll({where:{department}});
  return {employees:employeeDepartmentData};
}
app.get("/employees/department/:department", async (req ,res)=>{
 let department = req.params.department;
 try{
let employeesByDepartment = await fetchEmployeesByDepartment(department);
res.status(200).json(employeesByDepartment);
 } catch(error){
     res.status(500).json({error:error.message})
 }
})
//Exercise 4: Sort all the employees by their salary
async function sortEmployeesSalary(order){
     let sortByEmployeesSalary = await Employees.findAll({order: [['salary', order]]});
     return {employees:sortByEmployeesSalary};
}
app.get("/employees/sort/salary", async (req ,res)=>{
     let order = req.query.order;
     try{
     let employeeSortSarlary = await sortEmployeesSalary(order);
     res.status(200).json(employeeSortSarlary);{}
     } catch(error){
          res.status(500).json({error:error.message});
     }
})

app.listen(PORT, () => { // Fixed the typo here
  console.log(`Server is running on port ${PORT}`);
});
