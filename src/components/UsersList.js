import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UsersList() {
    const [listOfUsers, setListOfUsers] = useState([])
    useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(response => {
            setListOfUsers(response.data)
            console.log(response.data)
         }).catch(error => {
            console.log(error)
         }

         )
},[])
  return (
    <div>
      {listOfUsers.map(user=> (
    <div key={user.id} >
        <h2>{user.name}</h2>
        <p>{user.email} </p>
    </div>

      ))

      }
    </div>
  )
}

export default UsersList
