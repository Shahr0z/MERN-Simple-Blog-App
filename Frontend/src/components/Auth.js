import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authActions } from '../store'
import { useNavigate } from 'react-router-dom'
import { Base_URL } from '../apis'

const Auth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({ name: '', email: '', password: '' })
    const [isSignup, setIsSignup] = useState(false)

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            handleRequest('register').then(data => { console.log('reg res', data) })
        } else {
            handleRequest().then(data => { console.log("log res", data) })
        }
    }

    const handleRequest = async (type = 'login') => {
        try {
            const res = await axios.post(`${Base_URL}${type}`, {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password
            })
            const data = await res.data
            console.log(data)
            localStorage.setItem('UserId', data?.checkUser?._id)
            localStorage.setItem('isLogin', true)
            dispatch(authActions.login())
            navigate('/blogs')
            return data
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    width={400}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    boxShadow="0px 0px 10px 0px #ccc"
                    padding={5}
                    margin='auto'
                    marginTop={10}
                    borderRadius={1}
                >
                    <Typography padding={3} textAlign={'center'} variant='h3'>{
                        isSignup ? 'Sign Up' : 'Login'
                    }</Typography>
                    {isSignup && <TextField
                        value={inputs.name}
                        placeholder='Name' margin='normal'
                        onChange={handleChange}
                        name='name'
                    />}
                    <TextField
                        value={inputs.email}
                        placeholder='Email' type={'email'} margin='normal'
                        onChange={handleChange}
                        name='email'
                    />
                    <TextField
                        value={inputs.password}
                        placeholder='Password' type={'Password'} margin='normal'
                        onChange={handleChange}
                        name='password'
                    />
                    <Button
                        type='submit'
                        variant="contained"
                        sx={{
                            width: 200,
                            borderRadius: 1,
                            background: "linear-gradient(90deg, #000851 0%, #1CB5E0 100%)",
                            color: 'white',
                            marginTop: 2,
                            marginBottom: 2
                        }}
                    >Submit</Button>
                    <Button onClick={() => setIsSignup(!isSignup)}>{
                        isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'
                    }
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Auth