import OrderTable from "@/Components/OrderTable";
import OrderCreateModal from '@/Components/OrderCreateModal';
import { useState } from 'react';

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const [formData, setFormData] = useState({
      cliente: "",
      produto: "",
      valor: "",
      status: "Pendente",
      dataCriacao: new Date(),
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>

      <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
          onClick={openModal}
      >
          Adicionar Pedido
      </button>

      <OrderCreateModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          formData={formData}
          setFormData={setFormData}
      />

      <OrderTable/>
    </div>
  );
}