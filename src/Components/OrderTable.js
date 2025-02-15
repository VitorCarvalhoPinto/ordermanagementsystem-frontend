import { parseDate } from '@/functions/parseDate';


const OrderTable = ({ order }) => {
    return (
        <>

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

                {order && <tbody>
                    {order.map((orderItem) => (
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
                }
            </table>
        </>
    );
  }
  

export default OrderTable;  