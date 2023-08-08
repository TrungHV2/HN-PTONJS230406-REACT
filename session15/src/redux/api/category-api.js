import { http } from ".";

export const categoryApi = {
    getAll: async () => {
        let response = await http.get('categories');
        return response.data;
    }
}