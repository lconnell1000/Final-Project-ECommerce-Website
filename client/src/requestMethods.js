import axios from "axios";

const BASE_URL = "/api/"
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2RkYjc1YWYwODI1NDZhZjM0ZTI5NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjc2MDUzNywiZXhwIjoxNjUyOTMzMzM3fQ.NFLczAVM_kYM7mogWiLJybjsNGUKgJexSvygLlnkEww"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});