import React, { useEffect, useState } from 'react';
import axios from "axios";

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getMyPostData = async () => {
    try {
      const res = await axios.get("http://localhost:8090/employees");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  const setDataToStorage = (_id, firstName, lastName, email, salary, dateOfJoining) => {
    localStorage.setItem("firstName",firstName);
    localStorage.setItem("_id",_id);
    localStorage.setItem("lastName",lastName);
    localStorage.setItem("email",email);
    localStorage.setItem("salary",salary);
    localStorage.setItem("dateOfJoining",dateOfJoining);
  }

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {myData.length > 0 ? (
            myData.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.dateOfJoining} </td>
                <td className="text-right">
                  <button
                    onClick={() => {setDataToStorage(employee._id, employee.firstName, employee.lastName, employee.email, employee.salary, employee.dateOfJoining); handleEdit(employee.id)}}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
