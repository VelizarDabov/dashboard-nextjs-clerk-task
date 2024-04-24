import React from "react";
interface CardInfo {
  id: number;
  title: string;
  amount: string;
  comparison: string;
  icon: any;
}
const DashboardCard = ({ title, amount, comparison, icon, id }: CardInfo) => {
  return (
    <div className="flex justify-between border p-5 rounded-lg hover:scale-105">
      <div className="">
        <h1 className="text-white">{title}</h1>
        <p className="text-white mt-2 text-xl font-bold">{amount}</p>
        <p className="text-gray-500 text-xs">{comparison}</p>
      </div>
      <div className="text-gray-500">{icon}</div>
    </div>
  );
};

export default DashboardCard;
