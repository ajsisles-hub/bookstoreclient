const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('production', 'https://bookstore-production-ccd4.up.railway.app');

export const baseApiUrl = environmentUrls.get(window.location.hostname);