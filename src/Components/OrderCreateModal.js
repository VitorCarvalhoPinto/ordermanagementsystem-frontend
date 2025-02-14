import TextInput from "./TextInput";
import { handleInputChange } from "@/functions/handleInputChange";
import { PostOrder } from "@/services/OrderService";
import { useState } from "react";

const OrderCreateModal = ({ isOpen, closeModal, formData, setFormData }) => {
    if (!isOpen) return null;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        setLoading(true);
        setError(null); 
    
        try {
          await PostOrder(formData)
          setFormData({
            cliente: "",
            produto: "",
            valor: "",
            status: "Pendente",
            dataCriacao: new Date(),
          }); 
          closeModal();
        } catch (err) {
          setError('Erro ao criar o pedido. Tente novamente mais tarde.');
        } finally {
          setLoading(false); 
        }
      };
  
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-md shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Criar Pedido</h2>
  
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Exibe o erro */}

          <TextInput
            name="cliente"
            value={formData.cliente}
            onChange={handleInputChange(setFormData)}
            type="text"
            label="Cliente"
          />
  
          <TextInput
            name="produto"
            value={formData.produto}
            onChange={handleInputChange(setFormData)}
            type="text"
            label="Produto"
          />
  
          <TextInput
            name="valor"
            value={formData.valor}
            onChange={handleInputChange(setFormData)}
            type="number"
            label="Valor"
          />
  
          <div className="mt-4 flex justify-between">
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={closeModal}
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => handleSubmit (formData)}
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Adicionar'}
            </button>
          </div>
        </div>
      </div>
    );
};

export default OrderCreateModal;