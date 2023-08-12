const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/' // development api
    : 'https://assafa.vercel.app/'; // production api

export { apiUrl };
