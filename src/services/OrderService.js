import api from "./axios"


export const getOrder = async () => {
    try {
        const response = await api.get("order");
        return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getOrderById = async (orderId) => {
    try {
        const response = await api.get(`order/${orderId}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const PostOrder = async (order) => {
    try {
        const response = await api.post('order', order);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        throw new Error('Erro ao criar pedido');
    }
};
