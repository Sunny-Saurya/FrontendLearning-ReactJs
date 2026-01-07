import axios from 'axios';
import React, { useEffect } from 'react'

const ContactUs = () => {

  const [users, setusers] = useState([]);
  const qparam = new URLSearchParams(window.location.search)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setusers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div><br />ContactUs Page
      <br />
      Name: {users.name}
      <br />
      Email: {users.email}
      <br />
      Phone: {users.phone}
      <br />
      Website: {users.website}
    </div>
  )
}

export default ContactUs