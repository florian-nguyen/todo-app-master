import axios from 'axios';

// const baseURL = "/api/v1/todo";
const baseURL = `http://localhost:${process.env.PORT || 8080}/api/v1/todo`;
// console.log("Axios Base URL : " + baseURL);

export default axios.create({
    baseURL,
});

