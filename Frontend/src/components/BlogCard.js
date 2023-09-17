import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DeleteBlog } from '../apis';

const BlogCard = ({ title, description, imgaeUrl, userName, createdAt, isUser, id }) => {
    const navigate = useNavigate()
    const dateString = createdAt
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = date.toLocaleDateString('en-US', options);

    const handleEdit = () => {
        navigate(`/myBlogs/${id}`)
    }

    const handleDelete = () => {
        try {
            const res = axios.delete(`${DeleteBlog}${id}`)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div
                style={{
                    width: '250px',
                    height: '300px',
                    margin: 'auto',
                    marginTop: '20px',
                    boxShadow: '0px 0px 10px 0px #ccc',
                    transition: 'box-shadow 0.3s ease',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                }}
            >
                {isUser && (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginBottom: '-30px',
                            zIndex: '1',
                            position: 'relative',
                        }}
                    >
                        <button
                            onClick={handleEdit}
                            style={{
                                background: 'linear-gradient(90deg, #000851 0%, #1CB5E0 100%)',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginRight: '10px',
                                padding: '2px 4px',
                                color: 'white',
                                fontSize: '1px',
                            }}
                        >
                            <EditIcon style={{ fontSize: 16 }} />
                        </button>
                        <button
                            onClick={handleDelete}
                            style={{
                                background: 'linear-gradient(90deg, #FF3CAC 0%, #784BA0 100%)',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                padding: '1px 3px',
                                color: 'white',
                            }}
                        >
                            <DeleteIcon style={{ fontSize: 20 }} />
                        </button>
                    </div>
                )}
                <div style={{ flexGrow: 1 }}>
                    <div style={{ height: '150px', overflow: 'hidden' }}>
                        <img
                            src={imgaeUrl}
                            alt="Image not found"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ padding: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: '10px',
                                    backgroundImage: 'linear-gradient(90deg, #000851 0%, #1CB5E0 100%)',
                                    fontSize: '12px',
                                }}
                            >
                                {userName[0]?.toUpperCase()}
                            </div>
                            <h3 style={{ fontSize: '18px', maxWidth: '200px', margin: '0', marginBottom: '5px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {title}
                            </h3>
                        </div>
                        <p style={{ fontSize: '14px', margin: '0', color: '#888' }}>{formattedDate}</p>
                        <p style={{ fontSize: '14px', margin: '0', lineHeight: '1.4', marginTop: '10px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                            <b>{userName}</b>: {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard


// <div>
//     {" "}
//     <Card sx={{
//         width: 220, height: 340, margin: 'auto',
//         mt: 2,
//         padding: 2, boxShadow: "0px 0px 10px 0px #ccc",
//         ":hover": {
//             boxShadow: "2px 2px 10px 2px #ccc",
//         }
//     }}>
//         {
//             isUser && (
//                 <Box display={'flex'} >
//                     <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}><EditIcon /></IconButton>
//                     <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
//                 </Box>
//             )
//         }
//         <CardHeader
//             avatar={
//                 <Avatar sx={{ bgcolor: 'red', fontSize: 16 }} aria-label="recipe">
//                     {userName[0] ?? 'K'}
//                 </Avatar>
//             }

//             title={title}
//             subheader={formattedDate}
//         />
//         <CardMedia
//             component="img"
//             height="194"
//             image={
//                 imgaeUrl}
//             alt="Img not found"
//         />
//         <CardContent>
//             <Typography variant="body2"
//                 numberOfLines={2}

//                 color="text.secondary">
//                 <b>{userName}</b> {": "}{description}
//             </Typography>
//         </CardContent>
//     </Card>
// </div>