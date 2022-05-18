import axios from "axios";

const BASE_URL = "/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2RkYjc1YWYwODI1NDZhZjM0ZTI5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjg0NTczNywiZXhwIjoxNjUzMDE4NTM3fQ.pvlB9epMwjLWM8iYmwHa0i5PvD8nZM2yB4mF76hfP3U"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});