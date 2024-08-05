"use client";
import CartOrder from "@/components/cartOrders";
import LogoutButton from "@/components/logout";
import { useAuth } from "@/context/AuthContext";
import { getOrders } from "@/helpers/orders.helper";
import { useEffect, useState } from "react";
import { IOrders } from "@/interface/IOrders";

const UserCard: React.FC = () => {
  const [orders, setOrders] = useState<IOrders[]>([]); //ordenes
  const { dataUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const ordersRes = await getOrders(dataUser?.token!);
      setOrders(ordersRes);
    };
    dataUser?.token && fetchData();
  }, [dataUser?.token]);

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10 space-y-6 md:space-y-0 md:space-x-6">
      <div className="bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden w-full md:w-1/3 p-6">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-m text-black font-semibold">
              <h2>{dataUser ? dataUser?.user?.name : "Username"}</h2>
            </div>
            <p className="mt-2 text-gray-500">Email: {dataUser ? dataUser?.user?.email : "mail@mail.com"}</p>
            <p className="mt-2 text-gray-500">Phone: {dataUser ? dataUser?.user?.phone : "12345678"}</p>
            <p className="mt-2 text-gray-500">Address: {dataUser ? dataUser?.user?.address : "calle 123"}</p>
            <LogoutButton/>
          </div>
        </div>
      </div>
      <div className="bg-white text-black border border-gray-300 rounded-xl shadow-md overflow-hidden w-full md:w-2/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
        {orders && orders.map((order) => (
          <div key={order.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
            <CartOrder 
              date={order.date} 
              orders={order.products} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
