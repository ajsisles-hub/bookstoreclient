const environmentUrls = new Map();

export const baseApiUrl = 
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ? 'http://localhost:8080'                                // If TRUE (on your laptop)
  : 'https://bookstore-production-ccd4.up.railway.app';   // If FALSE (live on Railway)