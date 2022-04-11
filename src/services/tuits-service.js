import axios from 'axios';

const TUITS_API = 'https://web-development-server-a9.herokuapp.com/api/tuits';
// const TUITS_API = 'http://localhost:4000/api/tuits';

// const API_BASE_NEW = process.env.REACT_APP_API_BASE_NEW;
// const TUITS_API = `${API_BASE_NEW}/tuits`;


export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
   }
   

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}
   
   
export const deleteTuit = async (tuit) => {
    const response = await axios
      .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
   }
   
   
export const updateTuit = async (tuit) => {
const response = await axios
    .put(`${TUITS_API}/${tuit._id}`, tuit);
return response.data;
}
   