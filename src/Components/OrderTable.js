import { useState, useEffect } from 'react';
import { getOrder, getOrderById } from '@/services/OrderService';
import { parseDate } from '@/functions/parseDate';
import { handleInputChange } from "@/functions/handleInputChange";
import TextInput from "./TextInput";

const OrderTable = () => {

    const [order, setOrder] = useState([]);

    const [filterData, setFilterData] = useState({
        filter: ""
    });

    const getAllOrder = () => {
        getOrder().then(response => {
            setOrder(response);
        });
    }

    const handleSearch = (id) => {
        getOrderById(id).then(response => {
            if (response === undefined) return undefined;
            setOrder([response][0]);
        });
    }

    const handleClear = () => {
        filterData.filter = "";
        getAllOrder();
    }
    console.log(order)
    useEffect(() => {
        getAllOrder();
    }, []);

    return (
        <>

            <TextInput
                name="filter"
                value={filterData.filter}
                onChange={handleInputChange(setFilterData)}
                type="text"
                label="Filtro"
            />

            <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4 mr-1"
                onClick={() => handleSearch(filterData.filter)}
            >
                Pesquisar
            </button>

            <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
                onClick={handleClear}
            >
                Limpar
            </button>

            <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 border-b text-left">ID</th>
                    <th className="px-4 py-2 border-b text-left">Cliente</th>
                    <th className="px-4 py-2 border-b text-left">Pedido</th>
                    <th className="px-4 py-2 border-b text-left">Valor</th>
                    <th className="px-4 py-2 border-b text-left">Status</th>
                    <th className="px-4 py-2 border-b text-left">Data Pedido</th>
                </tr>
                </thead>
                <tbody>
                {order &&
                    order.map((orderItem) => (
                    <tr key={orderItem.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b">{orderItem.orderId}</td>
                        <td className="px-4 py-2 border-b">{orderItem.cliente}</td>
                        <td className="px-4 py-2 border-b">{orderItem.produto}</td>
                        <td className="px-4 py-2 border-b">{orderItem.valor}</td>
                        <td className="px-4 py-2 border-b">{orderItem.status}</td>
                        <td className="px-4 py-2 border-b">{parseDate(orderItem.dataCriacao)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
  }
  

export default OrderTable;  