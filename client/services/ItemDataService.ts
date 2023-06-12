import http from "@/http-common";

/* eslint-disable */
class ItemDataService {
    getAll(): Promise<any> {
        return http.get("/items");
    }

    get(id: any): Promise<any> {
        return http.get(`/items/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/items", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/items/${id}`, data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`/items/${id}`);
    }

    deleteAll(): Promise<any> {
        return http.delete(`/items`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/items?title=${title}`);
    }
}

export default new ItemDataService();