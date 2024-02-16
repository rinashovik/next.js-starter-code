import React from 'react'


interface User{
  id:number;
  name: String;
  email: String;
}

const UsersPage = async() => {


  const res = await fetch("https://jsonplaceholder.typicode.com/users",
 
 {next:{revalidate:10}}) //{cache:'no-store'})
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users List</h1>

      <p>{new Date().toLocaleTimeString()}</p>

      <table className='table table-boarder'> 
        <th className=''>
          <tr>
          <th> Name</th>
        <th>Email</th>
        </tr>
        </th>
        <tbody>

      {users.map(user=>
<tr key={user.id}>
  <td>{user.name}</td>
<td>{user.email}</td>
 </tr>
      )}
        </tbody>

</table>
    </div>
  )
}

export default UsersPage