import api from './server'

export const fetchAllContent = () => api.get('/content');
export const fetchContent = (id) => api.get(`/content/${id}`);
export const fetchContentByCategory = (category) => api.get(`/content/${category}`);
export const createContent = (newContent) => api.post('/content', newContent)
export const updateContent = (id, newContent) => api.patch(`/content/${id}`, newContent)
export const deleteContent = (id) => api.patch(`/content/${id}`)

export const fetchAllResponses = () => api.get('/response');
export const fetchResponse = (id) => api.get(`/response/r/${id}`);
export const fetchResponseByContent = (contentId) => api.get(`/response/${contentId}`);
export const createResponse = (contentId, newResponse) => api.post(`/response/${contentId}`, newResponse)
export const updateResponse = (id, newResponse) => api.patch(`/response/${id}`, newResponse)
export const deleteResponse = (id) => api.patch(`/response/${id}`)

