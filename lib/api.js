import axios from 'axios';

const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
const host = 'api.gpjobs.test'; // process.env('API_HOST');
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

axios.defaults.baseURL = `${protocol}://${host}`;
axios.defaults.withCredentials = true;
axios.defaults.headers = defaultHeaders;

const getData = (path) => axios.get(path);

const postData = (path, data) => axios.post(path, data);

const putData = (path, data) => axios.put(path, data);

const deleteData = async (path) => axios.delete(path);

const api = () => ({
  axios,
  get: getData,
  post: postData,
  put: putData,
  delete: deleteData,
});

export default api;
