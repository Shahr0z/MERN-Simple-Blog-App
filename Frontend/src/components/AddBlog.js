import { Box, Button, Input, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { AddNewBlog } from '../apis'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
    const navigate = useNavigate()
    const labelStyle = { mb: 1, mt: 2, fontSize: 15, fontWeight: '600' }
    const [inputs, setInputs] = useState({ title: '', description: '', imageUrl: '' })

    const handleInputs = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleRequest = async () => {
        try {
            const res = await axios.post(AddNewBlog, {
                title: inputs.title,
                description: inputs.description,
                image: inputs.imageUrl,
                user: localStorage.getItem('UserId')
            })
            const data = await res.data
            console.log(data)

        } catch (error) {
            console.log(error)
        } finally {
            navigate('/blogs')
            setInputs({ title: '', description: '', imageUrl: '' })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRequest()
    }

    return (
        <div style={{ paddingBottom: 20 }}>
            <form onSubmit={handleSubmit}>
                <Box
                    border={2}
                    borderRadius={2}
                    borderColor={'#ccc'}
                    padding={5}
                    margin='auto'
                    marginTop={10}
                    width={'60%'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    boxShadow="0px 0px 10px 0px #ccc"
                >
                    <Typography
                        fontWeight={'bold'}
                        textAlign={'center'}
                        marginBottom={2}
                        color={'#000851'}
                        variant='h4'
                    >
                        Add New Blog
                    </Typography>
                    <InputLabel sx={labelStyle}>Title</InputLabel>
                    <TextField
                        value={inputs.title}
                        name='title'
                        onChange={handleInputs}
                        margin='auto' variant='outlined' />
                    <InputLabel sx={labelStyle}>Image Url</InputLabel>
                    <TextField
                        value={inputs.imageUrl}
                        name='imageUrl'
                        onChange={handleInputs}
                        margin='auto' variant='outlined' />
                    <InputLabel sx={labelStyle}>Description</InputLabel>
                    <TextField
                        value={inputs.description}
                        name='description'
                        onChange={handleInputs}
                        rows={5}
                        multiline
                        margin='auto' variant='outlined' />
                    <Button
                        sx={{
                            marginTop: 5, borderRadius: 1, background: "linear-gradient(90deg, #000851 0%, #1CB5E0 100%)",
                            padding: 2, color: 'white'
                        }}
                        variant="contained"
                        type='submit'
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default AddBlog