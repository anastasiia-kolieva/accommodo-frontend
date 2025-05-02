"use client";

import { useState } from "react";

import {
    APARTMENT_STATUS,
    APARTMENT_TYPE,
    APARTMENT_CURRENCY,
} from "@/constants/index";

interface Apartment {
    _id: string;
    apartmentNumber: string;
    type: string;
    status: string;
    price: number;
    currency: string;
}

const apartmentsData = [
    {
        _id: "1",
        apartmentNumber: "101",
        type: APARTMENT_TYPE.single,
        status: APARTMENT_STATUS.available,
        price: 100,
        currency: APARTMENT_CURRENCY.eur,
    },
    {
        _id: "2",
        apartmentNumber: "102",
        type: APARTMENT_TYPE.double,
        status: APARTMENT_STATUS.occupied,
        price: 150,
        currency: APARTMENT_CURRENCY.eur,
    },
    {
        _id: "3",
        apartmentNumber: "103",
        type: APARTMENT_TYPE.studio,
        status: APARTMENT_STATUS.reserved,
        price: 250,
        currency: APARTMENT_CURRENCY.usd,
    },
];

const Apartments = () => {
    const [filteredStatus, setFilteredStatus] = useState<string | null>(null);

    function handleFilterClick(status: string) {
        setFilteredStatus((prev) => (prev === status ? null : status));
    }

    const filteredApartments = filteredStatus
        ? apartmentsData.filter((a) => a.status === filteredStatus)
        : apartmentsData;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Apartments management</h1>
                <button
                    className="bg-[var(--accent)] text-white px-4 py-2 rounded-md"
                    // onClick={() => setIsModalOpen(true)}
                >
                    Add apartement
                </button>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
                {Object.entries(APARTMENT_STATUS).map(([key, value]) => {
                    const isActive = filteredStatus === key;
                    return (
                        <button
                            key={key}
                            onClick={() => handleFilterClick(key)}
                            className={`px-3 py-1 rounded-md border transition-colors ${
                                isActive
                                    ? "bg-[var(--accent)] text-white"
                                    : "bg-white hover:bg-gray-100"
                            }`}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>
            {filteredStatus && (
                <button
                    onClick={() => setFilteredStatus(null)}
                    className="px-3 py-1 rounded-md text-sm text-gray-600 hover:underline"
                >
                    ✕ Reset filter
                </button>
            )}
            <div className="overflow-auto">
                <table className="w-full bg-white rounded-md shadow">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3">Apartment number</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApartments.map((apt: Apartment) => (
                            <tr key={apt._id} className="border-t">
                                <td className="p-3 font-medium">
                                    {apt.apartmentNumber}
                                </td>
                                <td className="p-3">{apt.type}</td>
                                <td className="p-3">{apt.status}</td>
                                <td className="p-3">
                                    {apt.price} {apt.currency}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Apartments;

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Status } from "@/types/status.enum"; // предположим, enum вынесен в общий файл
// import Modal from "@/components/ui/Modal";

// const statusLabels = {
//   [Status.AVAILABLE]: "Свободен",
//   [Status.OCCUPIED]: "Занят",
//   [Status.RESERVED]: "Зарезервирован",
//   [Status.CLEANING]: "Уборка",
//   [Status.OUT_OF_SERVICE]: "Не работает",
//   [Status.INSPECTION]: "Проверка",
//   [Status.BLOCKED]: "Заблокирован",
// };

// export default function ApartmentsPage() {
//   const [apartments, setApartments] = useState([]);
//   const [filteredStatus, setFilteredStatus] = useState<string | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     apartmentNumber: "",
//     type: "",
//     status: Status.AVAILABLE,
//     price: 0,
//     currency: "EUR",
//   });

//   useEffect(() => {
//     fetchApartments();
//   }, []);

//   async function fetchApartments() {
//     const res = await axios.get("/api/apartments");
//     setApartments(res.data);
//   }

//   function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit() {
//     await axios.post("/api/apartments", formData);
//     setIsModalOpen(false);
//     fetchApartments();
//   }

//   const filteredApartments = filteredStatus
//     ? apartments.filter((a) => a.status === filteredStatus)
//     : apartments;

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Управление номерами</h1>
//         <button
//           className="bg-[var(--accent)] text-white px-4 py-2 rounded-md"
//           onClick={() => setIsModalOpen(true)}
//         >
//           Добавить номер
//         </button>
//       </div>

//       {/* Фильтры */}
//       <div className="flex gap-2 flex-wrap">
//         {Object.values(Status).map((status) => (
//           <button
//             key={status}
//             onClick={() => setFilteredStatus(filteredStatus === status ? null : status)}
//             className={`px-3 py-1 rounded-md border ${
//               filteredStatus === status ? "bg-[var(--accent)] text-white" : "bg-white"
//             }`}
//           >
//             {statusLabels[status]}
//           </button>
//         ))}
//       </div>

//       {/* Таблица */}
//       <div className="overflow-auto">
//         <table className="w-full bg-white rounded-md shadow">
//           <thead>
//             <tr className="bg-gray-100 text-left">
//               <th className="p-3">Номер</th>
//               <th className="p-3">Тип</th>
//               <th className="p-3">Статус</th>
//               <th className="p-3">Цена</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredApartments.map((apt: any) => (
//               <tr key={apt._id} className="border-t">
//                 <td className="p-3 font-medium">{apt.apartmentNumber}</td>
//                 <td className="p-3">{apt.type}</td>
//                 <td className="p-3">{statusLabels[apt.status]}</td>
//                 <td className="p-3">{apt.price} {apt.currency}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Модалка */}
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)} title="Добавить номер">
//           <div className="space-y-4">
//             <input
//               name="apartmentNumber"
//               value={formData.apartmentNumber}
//               onChange={handleChange}
//               placeholder="Номер комнаты"
//               className="w-full border p-2 rounded"
//             />
//             <input
//               name="type"
//               value={formData.type}
//               onChange={handleChange}
//               placeholder="Тип номера"
//               className="w-full border p-2 rounded"
//             />
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             >
//               {Object.entries(statusLabels).map(([key, label]) => (
//                 <option key={key} value={key}>{label}</option>
//               ))}
//             </select>
//             <input
//               name="price"
//               type="number"
//               value={formData.price}
//               onChange={handleChange}
//               placeholder="Цена за ночь"
//               className="w-full border p-2 rounded"
//             />
//             <input
//               name="currency"
//               value={formData.currency}
//               onChange={handleChange}
//               placeholder="Валюта (например, EUR)"
//               className="w-full border p-2 rounded"
//             />
//             <button
//               className="w-full bg-[var(--accent)] text-white py-2 rounded"
//               onClick={handleSubmit}
//             >
//               Сохранить
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }
