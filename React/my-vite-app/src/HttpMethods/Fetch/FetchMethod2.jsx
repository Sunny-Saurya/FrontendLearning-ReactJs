import React from 'react'

const FetchMethod2 = () => {
    const[user, setUser] = React.useState([]);

    const fetchData = () => {
         fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setUser(data));
        
    }

    const postData = () => {
        const newData = {
            userId : 300,
            title: 'San',
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => console.log("Posted Data:", data))
        .catch(error => console.log("Error posting data:", error));
    }

    const updateData = () => {
        const updatedData = {
            id: 1,
            title: 'Updated Title'
        }
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => console.log("Updated Data:", data))
        .catch(error => console.log("Error updating data:", error));
    }   

    const deleteData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method: 'DELETE'
        }).then(response => {
            if(response.ok) {
                console.log("Data deleted successfully");
                fetchData();
            } else {
                console.log("Error deleting data");
            }
        }).catch(error => console.log("Error deleting data:", error));
    }
  return (
    <div>
        <ul>
        <button onClick={fetchData}>Fetch Users</button>
        <button onClick={postData}>Post Data</button>
        <button onClick={updateData}>Update Data</button>
        <button onClick={deleteData}>Delete Data</button>
        <p>SuccessFully Added Data !!</p>
        {user.map(item => (
            <li key ={item.id}>
                Id: {item.id} <br/>
                Title: {item.title} <br/>
                Body: {item.body}
            
            </li>
        ))}
        </ul>
    </div>
  )
}

export default FetchMethod2