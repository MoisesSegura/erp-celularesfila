import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKENDURL}/api`
});

export default clienteAxios;