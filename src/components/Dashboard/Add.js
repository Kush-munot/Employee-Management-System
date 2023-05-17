import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'

/* Swal.fire({
  icon: 'success',
  title: 'Added!',
  text: `Data has been Added.`,
  showConfirmButton: false,
  timer: 1500,
});
 */

const Add = ({ employees, setEmployees, setIsAdding }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfJoining, setDateOfJoining] = useState('')
  const [salary, setSalary] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jungle-green-cobra-gown.cyclic.app/employees', {
      firstName,
      lastName,
      email,
      salary,
      dateOfJoining
    }).then((res) => {
      console.log(res)
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `Data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleSubmit}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="dateOfJoining"
          value={dateOfJoining}
          onChange={(e) => setDateOfJoining(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
