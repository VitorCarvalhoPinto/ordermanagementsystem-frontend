import api from "./axios"


export const getOrder = async () => {
    try{
        const response = await api.get("order");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const getOrderById = async (orderId) => {
    try{
        const response = await api.get(`order/${orderId}`);
        if (response.data === undefined) return null;
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const PostOrder = async (order) => {
    try {
        const response = await api.post('order', order);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        throw new Error('Erro ao criar pedido');
    }
};
