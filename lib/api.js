const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
const host = 'api.gpjobs.test'; // process.env('API_HOST');
const apiUrl = `${protocol}://${host}`;
const defaultHeaders = {
  accept: 'application/json',
  'content-type': 'application/json',
  credentials: 'include',
};

const getData = async (path) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: 'GET',
    headers: defaultHeaders,
  });
  return response.json();
};

const postData = async (path, data = {}) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(data),
  });
  return response.json();
};

const putData = async (path, data = {}) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: 'PUT',
    headers: defaultHeaders,
    body: JSON.stringify(data),
  });
  return response.json();
};

const deleteData = async (path) => {
  const response = await fetch(`${apiUrl}${path}`, {
    method: 'PUT',
    headers: defaultHeaders,
  });
  return response.json();
};

const api = () => ({
  get: getData,
  post: postData,
  put: putData,
  delete: deleteData,
});

export default api;
