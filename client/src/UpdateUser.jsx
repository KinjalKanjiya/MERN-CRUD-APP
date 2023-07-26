import React ,{useState,useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import axios from 'axios'

export default function UpdateUser() {
    const {id} = useParams()
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [contact , setContact] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setContact(result.data.contact)
    })
            .catch(err=>console.log(err))
},[])


const Update = (e) =>{
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id,{name,email,contact})
    .then(result =>{
        console.log(result)
        navigate('/')
    })
    .catch(err =>console.log(err))

}

  return (
    <div class="d-flex vh-100 justify-content-center align-items-center">
    <div class="w-50 bg-white rounded p-3 border border-secondary shadow-lg">
        <form onSubmit={Update}>
        <h2 class="mb-4 bg-black text-white text-center py-2 rounded">Update User</h2>
            <div className='mb-2'>
                <label htmlFor=''>Name</label>  
                <input type="text" placeholder='Enter Name' className='form-control' value={name}
                 onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Email</label>
                <input type="email" placeholder='Enter Email' className='form-control'value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Contact</label>
                <input type="text" placeholder='Enter Contact' className='form-control'value={contact}
                 onChange={(e) => setContact(e.target.value)}/>
           </div>
           <button className='btn btn-success'>Update</button>
        </form>
    </div>
</div>

  )
}
