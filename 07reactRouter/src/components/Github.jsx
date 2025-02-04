import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log('data', data)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className="flex justify-center flex-col items-center gap-3 m-4 bg-gray-600 text-white p-4">
            <h1>Github followers: {data.followers}</h1>
            <h2>Name: {data.name}</h2>
            <h3>Bio: {data.bio}</h3>
            <div>
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/MUSTAFAREZA47')
    return response.json()
}
