import http from "@/http-common";

/* eslint-disable */
class ProductDataService {
    getAll(): Promise<any> {
        return http.get("/products");
    }

    get(id: any): Promise<any> {
        return http.get(`/products/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/products", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/products/${id}`, data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`/products/${id}`);
    }

    deleteAll(): Promise<any> {
        return http.delete(`/products`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/products?title=${title}`);
    }
}

export default new ProductDataService();