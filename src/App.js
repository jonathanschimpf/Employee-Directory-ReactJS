import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import JumbotronComp from "./components/Jumbotron";
import employees from "./employees.json";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [employeeData, updateEmployeeData] = useState({
    allEmployees: employees,
    filteredEmployees: employees,
    searchQuery: "",
    sortOrder:""
  });

  // useEffect(() => {
  //   updateEmployeeData({
  //     ...employeeData,
  //     allEmployees: employees,
  //     filteredEmployees: employees
  //   })
  // }, [])



  const searchEmployee = () => {
    // const searchEmployee = ({value, onChange}) => {}

    // updateEmployeeData({...employeeData, searchQuery: name1[0]})

    console.log(employeeData)

    let filteredEmployees = employeeData.allEmployees.filter(({ name }) => name.includes(employeeData.searchQuery))

    console.log(filteredEmployees)


  //   if(sortOrder === "DESC") {

  //     allEmployees.reverse();

  //     this.setState({ sortOrder: "ASC" });
  // } else {
  //     this.setState({ sortOrder: "DESC" });
  // }

    updateEmployeeData({
      ...employeeData,
      filteredEmployees
    })
  };

  useEffect(() => {

    searchEmployee();

  }, [employeeData.searchQuery])


  return (

    <>

      <JumbotronComp updateEmployeeData={updateEmployeeData} searchEmployee={searchEmployee} employeeData={employeeData}/>

      <Wrapper>
        {employeeData.filteredEmployees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            image={employee.image}
            name={employee.name}
            title={employee.title}
            phone={employee.phone}
            email={employee.email}
            searchEmployee={searchEmployee}
          />
        ))}
      </Wrapper>

    </>
  );
};


export default App;
