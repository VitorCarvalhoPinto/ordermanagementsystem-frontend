import { useState, useEffect } from 'react';

import OrderTable from "@/Components/OrderTable";
import OrderCreateModal from '@/Components/OrderCreateModal';
import TextInput from "@/Components/TextInput";
import Button from '@/Components/Button';

import { handleInputChange } from "@/functions/handleInputChange";
import serviceHandler from "@/functions/serviceHandler";

import { getOrder, getOrderById } from "@/services/OrderService";

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [order, setOrder] = useState([]);

  const [filterData, setFilterData] = useState({
    filter: ""
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getAllOrder = async () => serviceHandler(getOrder, setOrder);

  const getOrdersById = async (id) => serviceHandler(() => getOrderById(id), setOrder);
  
  const handleClear = () => {
    setFilterData({ filter: "" });
    getAllOrder();
  }
  
  useEffect(() => {
    getAllOrder();
  }, []);

    console.log(order)

  return (
    <div>

      <Button
        text={"Adicionar"}
        onClickFunction={openModal}
        className="absolute top-0 right-0 mt-4 mr-4 flex items-center justify-center bg-green-500 hover:bg-green-600 mb-4"
      />

      <TextInput
          name="filter"
          value={filterData.filter}
          onChange={handleInputChange(setFilterData)}
          type="text"
          label="ID"
      />

      <div className="flex space-x-4">
        <Button
          text={"Pesquisar"}
          onClickFunction={() => getOrdersById(filterData.filter)}
          className={"bg-blue-500 hover:bg-blue-600"}
        />

        <Button
          text={"Limpar"}
          onClickFunction={handleClear}
          className={"bg-gray-500 hover:bg-gray-600"}
        />
      </div>

      <OrderTable 
        getAllOrder={getAllOrder} 
        order={order}
      />

      <OrderCreateModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        setOrder={setOrder}
      />

    </div>
  );
}