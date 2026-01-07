import axios from 'axios'
import React, { useState } from 'react'

const AxiosMethod = () => {
    const [user,setuser]= useState([]);
    const[resmessage,setresmessage]= useState('');
    const[errmessage,seterrmessage]= useState('');
const fetchData=()=>{
     axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setuser(res.data))
      .catch(err => console.log(err));
}
const fetchSingleData=()=>{
     axios.get('https://jsonplaceholder.typicode.com/users/4')
      .then(res => setuser([res.data]))
      .catch(err => console.log(err));
}
const postData=()=>{
    const userData={
        name:'John Doe',
        username:'johndoe',
        email:'johnde4455.@gmail.com'
    };
    axios.post('https://jsonplaceholder.typicode.com/users',userData)
    .then(res =>{
        console.log(res.data);
        setresmessage('Data posted successfully!')
        seterrmessage('');
    })
    .catch(err => {
        seterrmessage('Error posting data');
       setresmessage('');
});
}

const putData=()=>{
    const userData={
        name:'San',
        username:'san404',
        email:'san01.@gmail.com'
    };
    axios.put('https://jsonplaceholder.typicode.com/users/4',userData)
    .then(res =>{
        console.log(res.data);
        setresmessage('Data posted successfully!')
        seterrmessage('');
    })
    .catch(err => {
        seterrmessage('Error posting data');
       setresmessage('');
});
}


  return (
    <div>
     <button onClick={fetchData}>fetchData</button>
        <button onClick={fetchSingleData}>fetchSingleData</button>
                <button onClick={putData}>Put Data</button>

        
     <ul>
        {
            user.map((item) => (
                <li key={item.id}>
                    Id:{item.id}<br/>
                    Name:{item.name}<br/>
                    Username:{item.username}<br/>
                    email:{item.email}<br/>
                </li>
            ))
        }
     </ul>
    </div>
  )
}

export default AxiosMethod;