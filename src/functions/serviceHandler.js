const serviceHandler = async (serviceFunction, setState) => {
    try {
        const response = await serviceFunction();
        setState(Array.isArray(response) ? response : [response]);
    } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
        setState([]);
    }
}

export default serviceHandler;