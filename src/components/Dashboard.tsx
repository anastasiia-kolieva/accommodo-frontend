"use client";

import Card from "@/components/Card";

const data = [
    { title: "Available apartments", value: 8 },
    { title: "Total reservations", value: 152 },
    { title: "Total clients", value: 10 },
    { title: "Payments per week", value: "€3,500" },
];

const Dashboard = () => {
    return (
        <div className="p-4 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((item, i) => (
                    <Card key={i} title={item.title} value={item.value} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
