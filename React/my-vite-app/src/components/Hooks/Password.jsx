import React from 'react'

const Password = () => {
    const [password, setpassword] = useState();
    const [hide, sethide] = useState();

    const hidePassword = () => {
        
    }
  return (
    <div>
        <label htmlFor="">Password</label>
        <input className=' ml-4 border ' type="text" placeholder='Enter Password'/>
        <button className='m-4'>Show</button>
        <button onClick={() => setpassword({})}>Hide</button>
    </div>

  )
}

export default Password