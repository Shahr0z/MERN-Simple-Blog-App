import React, { useState } from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'

const Header = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    const handleTabs = (e, val) => {
        setValue(val)
    }
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    return (
        <AppBar
            position='static'
            sx={{
                background: "linear-gradient(90deg, #000851 0%, #1CB5E0 100%)"
            }} >
            <Toolbar>
                <Typography variant='h4'>Blogify</Typography>
                {isLoggedIn && (<Box display='flex' marginLeft='auto'>
                    <Tabs value={value} onChange={handleTabs} textColor='inherit' >
                        <Tab LinkComponent={Link} to="/blogs" label='All Blogs' />
                        <Tab LinkComponent={Link} to="/myBlogs" label='My Blogs' />
                        <Tab LinkComponent={Link} to="/blogs/add" label='Add Post' />
                    </Tabs>
                </Box>)}
                <Box display='flex' marginLeft='auto'>
                    {!isLoggedIn && (<>
                        <Button LinkComponent={Link} to="/auth" color='inherit' variant='outlined' sx={{ margin: 1, borderRadius: 1 }}>Login</Button>
                        <Button LinkComponent={Link} to="/auth" color='inherit' variant='outlined' sx={{ margin: 1, borderRadius: 1 }}>Sign Up</Button>
                    </>)}
                    {isLoggedIn && (<Button
                        onClick={() => dispatch(authActions.logout()) + localStorage.removeItem('isLogin')}
                        LinkComponent={Link} to="/auth" color='inherit' variant='outlined' sx={{ margin: 1, borderRadius: 1 }}>Logout</Button>)}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header