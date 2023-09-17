export const Base_URL = 'http://localhost:8000/'

//Auth
export const Login = `${Base_URL}login`
export const Register = `${Base_URL}register`

//Blogs
export const AllBlogs = `${Base_URL}allPosts`
export const GetUserBlogs = `${Base_URL}getByUserId/`
export const AddNewBlog = `${Base_URL}createPost`
export const UpdateBlog = `${Base_URL}updatePost/`
export const DeleteBlog = `${Base_URL}deletePost/`