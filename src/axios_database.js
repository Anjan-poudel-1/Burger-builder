import axios from 'axios'

 const data = axios.create({
    baseURL:'https://react-burger-67bef.firebaseio.com/'
})

export default data;