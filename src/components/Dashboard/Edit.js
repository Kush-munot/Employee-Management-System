import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const [firstName, setFirstName] = useState('');
  const [_id, set_id] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState(0);
  const [dateOfJoining, setDateOfJoining] = useState('');

  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'))
    set_id(localStorage.getItem('_id'))
    setLastName(localStorage.getItem('lastName'))
    setEmail(localStorage.getItem('email'))
    setSalary(localStorage.getItem('salary'))
    setDateOfJoining(localStorage.getItem('dateOfJoining'))
    set_id(localStorage.getItem('_id'))
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !dateOfJoining) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    axios.patch(`https://jungle-green-cobra-gown.cyclic.app/employees/${_id}`, {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
      email: email,
      dateOfJoining: dateOfJoining
    }).then((res) => {
      console.log(res)

      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: `Data has been updated.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }).catch((err) => {
      console.log(err)
    })

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `Data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={dateOfJoining}
          onChange={e => setDateOfJoining(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
