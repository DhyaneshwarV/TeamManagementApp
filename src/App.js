import Employee from './Components/Employee';
import React,{useState,useEffect} from 'react'
import employeeData from './Components/EmployeeData'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import GroupedTeamMembers from './Components/GroupedTeamMembers';
import Navbar from './Components/Navbar';
import Error from './Components/Error';

function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList'))||employeeData)
  const [selectTeam, setSelectTeam] = useState(JSON.parse(localStorage.getItem('selectTeam')) ||"TeamB");
  const handleChange=(event)=>{setSelectTeam(event.target.value)}
  const handleCardClick=(event)=>{const transformedEmployee=employees.map(employee=>employee.id===parseInt(event.currentTarget.id)?(employee.teamName===selectTeam)?{...employee,teamName:""}:{...employee,teamName:selectTeam}:employee)
    setEmployees(transformedEmployee)
}
useEffect(()=>{
  localStorage.setItem('employeeList',JSON.stringify(employees))
},[employees])
useEffect(()=>{
  localStorage.setItem('selectTeam',JSON.stringify(selectTeam))
},[selectTeam]);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Employee employees={employees} selectTeam={selectTeam} handleChange={handleChange} handleCardClick={handleCardClick} />}/>
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectTeam={selectTeam} setSelectTeam={setSelectTeam}/>} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
