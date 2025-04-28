import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar/>
          <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          </main>
        </div>
      <footer/>
    </div>
  );
}
