import React, { useEffect, useState } from 'react'

function Github() {
   

     const [data, setData] = useState([])
     useEffect (() => {
       fetch('https://api.github.com/users/dhruvsingh2004')  
       .then(response => response.json())
       .then(data => {
         console.log(data);
         setData(data)
       })
     },[])
    return (
        <div className='text-center text-3xl bg-yellow-50 m-4 p-4'
        >Github Followers :{data.followers}
       <img src={data.avatar_url} alt="Git picture" width={300} />
      
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dhruvsingh')

    return response.json()

}
 