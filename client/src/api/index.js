import api from './server'

export const fetchAllContent = () => api.get('/content');
export const fetchContent = (id) => api.get(`/content/post/${id}`);
export const fetchContentByCategory = (category) => api.get(`/content/${category}`);
export const createContent = (newContent) => api.post('/content', newContent)
export const updateContent = (id, newContent) => api.patch(`/content/${id}`, newContent)
export const deleteContent = (id) => api.delete(`/content/${id}`)

export const fetchAllResponses = () => api.get('/response');
export const fetchResponse = (id) => api.get(`/response/r/${id}`);
export const fetchResponseByContent = (contentId) => api.get(`/response/${contentId}`);
export const createResponse = (contentId, newResponse) => api.post(`/response/${contentId}`, newResponse)
export const updateResponse = (id, newResponse) => api.patch(`/response/${id}`, newResponse)
export const deleteResponse = (id) => api.delete(`/response/${id}`)

export const register = (username, email, password) => api.post('/user/register', username, email, password)
export const fetchAllUser = () => api.get('/user')
export const login = (email, password) => api.post('/user/login', email, password);
export const forgotPassword = (email) => api.post('/user/forgotPassword', email);
export const changePassword = (email, password, newPassword, confirmPassword) => api.patch('/user/changePassword', email, password, newPassword, confirmPassword);
export const resetPassword = (password, resetToken) => api.patch(`/user/resetPassword/${resetToken}`, password);

export const viewerLogin = (username, email) => api.post('/viewer/login', username, email)
