import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AllBlogs } from '../apis'
import BlogCard from './BlogCard'

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const handleRequest = async () => {
        try {
            const res = await axios.get(AllBlogs)

            const data = await res.data
            console.log(data?.posts)
            setBlogs(data?.posts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleRequest()
    }, [blogs])
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', alignItems: 'center', justifyContent: 'center' }}>
            {blogs?.length > 0 && blogs?.map((blog, index) => (<BlogCard
                isUser={localStorage?.getItem('UserId') === blog.user._id}
                id={blog._id}
                key={blog._id} title={blog.title} description={blog.description} userName={blog.user.name} createdAt={blog.createdAt} imgaeUrl={blog.image}
            />))}
        </div>
    )
}

export default Blogs