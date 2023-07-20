import { http } from "."

export const userApi = {
    get: async () => {
        console.log("B3: side effect gọi api users để lấy dữ liệu");
        let response  = await http.get('users');
        return response.data;
    }
}