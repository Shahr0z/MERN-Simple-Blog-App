# MERN Blog Website

![MERN Blog](https://github.com/Shahr0z/MERN-Simple-Blog-App/assets/99717541/c4569864-8efd-4cc6-8458-1626d5691229)

This is a simple blog website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to register, log in, create, update, and delete their blog posts. The website provides features such as viewing all blogs, filtering blogs by user ID, and accessing blogs by their unique ID.

![MERN Blog Login](https://github.com/Shahr0z/MERN-Simple-Blog-App/assets/99717541/e4ed6564-1276-4fb1-95ad-876031bb1d8d)
![MERN my Blog](https://github.com/Shahr0z/MERN-Simple-Blog-App/assets/99717541/6951666a-8c74-4dcf-a702-bbbf99983cc2)
![MERN Add Blog](https://github.com/Shahr0z/MERN-Simple-Blog-App/assets/99717541/378239ad-1dc7-4116-a9ff-fc09b217878a)

## Technologies Used

- Frontend: React.js and Material-UI
- Backend: Node.js and Express.js
- Database: MongoDB with Mongoose

## Prerequisites

Before running the project, make sure you have the following installed on your machine:

- Node.js: [Download Node.js](https://nodejs.org)
- MongoDB: [Download MongoDB](https://www.mongodb.com)

## Getting Started

1. Clone the repository:

   ````bash
   git clone https://github.com/your-username/mern-blog-website.git

2. Install the dependencies for the frontend and backend:

   ````bash
   cd MERN Simple Blog
   cd frontend
   npm install

   cd backend
   npm install

3. Configure the environment variables:

   - Create a file named `.env` in the `backend` directory.
   - Also change the db file URL.


4. Start the development server:

   ````bash
   cd backend
   npm run dev

5. Open a new terminal and start the frontend development server:

   ````bash
   cd frontend
   npm start

6. Access the website:

   Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the blog website.

## Folder Structure

The project's folder structure is as follows:

```
mern-blog-website/
├─ backend/
│  ├─ controllers/
│  ├─ database/
│  ├─ models/
│  ├─ routes/
│  └─ ...
└─ frontend/
   ├─ src/
   │  ├─ components/
   │  ├─ apis/
   │  ├─ store/
   │  └─ ...
   └─ ...
```

- The `backend` folder contains the server-side code, including controllers, models, routes, and other backend-related files.
- The `frontend` folder contains the client-side code, including components, apis, store, and other frontend-related files.

## Contributing

Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React.js](https://reactjs.org)
- [Material-UI](https://material-ui.com)
- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Mongoose](https://mongoosejs.com)
