import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GetUserBlogs } from '../apis'
import BlogCard from './BlogCard'

const UserBlogs = () => {
    const [userBlogs, setUserBlogs] = useState([])
    const id = localStorage.getItem('UserId')

    const handleRequest = async () => {
        try {
            const res = await axios.get(`${GetUserBlogs}${id}`)
            const data = await res.data
            setUserBlogs(data?.userPosts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', }}>
            {userBlogs?.blogs?.length > 0 && userBlogs?.blogs?.map((blog) => (<BlogCard
                id={blog._id}
                isUser={true}
                key={blog._id} title={blog.title} description={blog.description}
                userName={userBlogs?.name}
                createdAt={blog.createdAt} imgaeUrl={blog.image}
            />))}

        </div>
    )
}

export default UserBlogs