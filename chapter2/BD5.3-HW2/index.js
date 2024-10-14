let express = require("express")
let {Employee} = require("./models/employee.model")
let {sequelize}= require("./lib/connectDB");

let app = express();
app.use(express.json());

let employeeData = [
     {
       id: 1,
       name: 'John Doe',
       designation: 'Manager',
       department: 'Sales',
       salary: 90000,
     },
     {
       id: 2,
       name: 'Anna Brown',
       designation: 'Developer',
       department: 'Engineering',
       salary: 80000,
     },
     {
       id: 3,
       name: 'James Smith',
       designation: 'Designer',
       department: 'Marketing',
       salary: 70000,
     },
     {
       id: 4,
       name: 'Emily Davis',
       designation: 'HR Specialist',
       department: 'Human Resources',
       salary: 60000,
     },
     {
       id: 5,
       name: 'Michael Wilson',
       designation: 'Developer',
       department: 'Engineering',
       salary: 85000,
     },
     {
       id: 6,
       name: 'Sarah Johnson',
       designation: 'Data Analyst',
       department: 'Data Science',
       salary: 75000,
     },
     {
       id: 7,
       name: 'David Lee',
       designation: 'QA Engineer',
       department: 'Quality Assurance',
       salary: 70000,
     },
     {
       id: 8,
       name: 'Linda Martinez',
       designation: 'Office Manager',
       department: 'Administration',
       salary: 50000,
     },
     {
       id: 9,
       name: 'Robert Hernandez',
       designation: 'Product Manager',
       department: 'Product',
       salary: 95000,
     },
     {
       id: 10,
       name: 'Karen Clark',
       designation: 'Sales Associate',
       department: 'Sales',
       salary: 55000,
     },
];
app.get("/",(req ,res)=>{
     res.send("Server is Running");
})

//Seeding Database
app.get("/seed_db", async (req ,res)=>{
     try{
     await sequelize.sync({ alter: true});
     await Employee.bulkCreate(employeeData);
     return res.status(200).json({message:"Database Seeding successfully"});
     } catch(error){
     return res.status(500).json({message:"Data Seeding Error",error:error.message});
     }
})
//Exercise 1: Fetch all employees
async function fetchAllEmployee(){
     let allEmployeesData = await Employee.findAll();
     return {employees:allEmployeesData}
}
app.get("/employees", async (req ,res)=>{
     try{
          let allEmployees = await fetchAllEmployee();
          if(!allEmployees){
               return res.status(404).json({message:"Employee DataNot Found"});
          }
          res.status(200).json(allEmployees);
     } catch(error){
          res.status(500).json({error:error.message});
     }
});

//Exercise 2: Add a new employee in the database
async function addNewEmployee(newEmployee){
     let addEmployee = await Employee.create(newEmployee);
     return {employees:addEmployee}; 
} 
app.post("/employees/new", async (req ,res)=>{
     try{
          let newEmployee = req.body.newEmployee;
          let addEmployee = await addNewEmployee(newEmployee);
          if(!addEmployee){
               return res.status(404).json({message:"Employee Data not Found"})
          }
          return res.status(200).json(addEmployee);
     } catch(error){
          res.status(500).json({error:error.message});
     }
});


// Exercise 3: Update employee information
async function updateEmployeeById(newEmployeeData, id) {
     try {
         let updateData = await Employee.findOne({ where: { id } });
         if (!updateData) {
             return null; 
         }
         updateData.set(newEmployeeData);  
         let updatedData = await updateData.save(); 
         return { message: "Employee updated successfully", updatedData };
     } catch (error) {
         throw new Error(error.message);  
     }
 }
 
 app.post('/employee/update/:id', async (req, res) => { 
     try {
         let id = parseInt(req.params.id);
         let newEmployeeData = req.body.newEmployee;
         let updatedResult = await updateEmployeeById(newEmployeeData, id);
         return res.status(200).json(updatedResult);
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
 });
//Exercise 4: Delete an employee from the database
async function deleteEmployeeById(id){
     let destoryEmployee = await Employee.destroy({where:{id}});
     if(destoryEmployee === 0){
     return null;
     }
    return {message:"Employee destory Successfully"}
}
app.post("/employees/delete" , async (req ,res)=>{
     try{
          let id = parseInt(req.body.id);
          let afterDeletedData = await deleteEmployeeById(id);
          if(!afterDeletedData){
             return res.status(404).json({message:"Employee Data not Found"});
          }
        return res.status(200).json(afterDeletedData);
        } catch(error){
             res.status(500).json({error:error.message});
        }
})
const PORT = 5000;
app.listen(PORT,()=>{
     console.log(`Server Is running on the Port 5000`);
})