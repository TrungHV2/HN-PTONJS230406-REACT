import { http } from '.'

export const productApi = {
    getAll: async () => {
        let response = await http.get('products');
        return response.data;
    },
    getPaginations: async (page = 1, limit = 5) => {
        let response = await http.get(`products?_page=${page}&_limit=${limit}`);
        return response.data;
    },
    post: async (data) => {
        await http.post('products', data);
    },
    put: async (data) => {
        await http.put('products/'+ data.id, data)
    }
}