import axios from 'axios';

export default axios.create({
    baseURL: 'https://vue-auth-abd7c.firebaseio.com/'
});
