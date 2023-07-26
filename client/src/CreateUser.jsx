import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

 function CreateUser() {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [contact , setContact] = useState()
    const navigate = useNavigate()

    const Submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,email,contact})
        .then(result =>{
            console.log(result)
            navigate('/')
        })
        .catch(err =>console.log(err))

    }

  return (
    <div class="d-flex vh-100 justify-content-center align-items-center">
    <div class="w-50 bg-white rounded p-3 border border-secondary shadow-lg">
        <form onSubmit={Submit}>
        <h2 class="mb-4 bg-black text-white text-center py-2 rounded">Add User</h2>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" placeholder="Enter Name" class="form-control" onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" placeholder="Enter Email" class="form-control" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="mb-3">
                <label for="contact" class="form-label">Contact</label>
                <input type="text" id="contact" placeholder="Enter Contact" class="form-control" onChange={(e) => setContact(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>
</div>
 )
}

export default CreateUser;
