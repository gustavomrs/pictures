import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e623544b194a6db5e88014c428cf45c514d4e0179149419df53aefe9d99f9928'
  }
});
