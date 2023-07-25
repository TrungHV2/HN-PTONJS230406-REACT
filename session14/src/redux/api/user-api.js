import { http } from "."

export const userApi = {
    get: async () => {
        let response = await http.get('users');
        return response.data;
    },
    post: async (user) => {
        let response = await http.post('users', user);
        return response.data
    }
}