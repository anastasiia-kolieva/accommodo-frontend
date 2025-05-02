const Card = ({ title, value }: { title: string; value: string | number }) => (
    <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-[var(--accent)]">{value}</p>
    </div>
);

export default Card;
