import axios from "axios";

const instance = axios.create({
    //  the API (cloud function) url
    baseURL: 'http://localhost:5001/freak-7210f/us-central1/api'
    
});

export default instance;

