import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

const DataList = () => {
   /* const users = useFetch('https://jsonplaceholder.typicode.com/users', [])
   const posts = useFetch('https://jsonplaceholder.typicode.com/posts', []) */
   return (
     <Fragment>
       <h2>Usuarios</h2>
       <ul>
         {/* {users.data.map(user => (
           <li key={user.id}>{user.name}</li>
         ))} */}
       </ul>
       <h2>Posts</h2>
       <ul>
         {/* {posts.data.map(posts => (
           <li key={posts.id}>{posts.title}</li>
         ))} */}
       </ul>
     </Fragment>
   )
}
export default DataList