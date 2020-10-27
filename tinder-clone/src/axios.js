import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-project-clone.herokuapp.com/ '
})

export default instance;