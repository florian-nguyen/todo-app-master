import axios from 'axios';

const devURL = `http://localhost:8080/api/v1/todo`;

const proURL = `https://fng-dc-todo-list.herokuapp.com/api/v1/todo`;

const baseURL = process.env.NODE_ENV === "production" ? proURL : devURL;

export default axios.create({
    baseURL,
});

