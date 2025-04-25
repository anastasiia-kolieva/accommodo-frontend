"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dashboardIcon from '@/ui/icons/dashbard.svg';
import apartmentsIcon from '@/ui/icons/apartments.svg';
import reservationsIcon from '@/ui/icons/reservations.svg';
import clientsIcon from '@/ui/icons/clients.svg';
import paymentsIcon from '@/ui/icons/payments.svg';

const Sidebar = () => {
  const [activePage, setActivePage] = useState('/');

  const menuItems = [
    { name: 'Dashboard', icon: dashboardIcon, path: '/' },
    { name: 'Apartments', icon: apartmentsIcon, path: '/apartments'  },
    { name: 'Reservations', icon: reservationsIcon, path: '/reservations'  },
    { name: 'Clients', icon: clientsIcon, path: '/clients'  },
    { name: 'Payments', icon: paymentsIcon, path: '/payments'  },
  ];

  return (
    <aside className="w-64 h-screen bg-[var(--color-white)] text-[var(--color-black)] shadow-xl p-5">
      <h2 className="text-xl font-bold mb-6">Hotel Admin</h2>
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <div key={item.name}
            onClick={() => setActivePage(item.path)}
          >
            <Link 
              href={item.path}
              className={`flex items-center gap-3 p-3 rounded-md transition-colors text-left w-full ${
                activePage === item.path 
                  ? 'bg-[var(--accent)] text-white'
                  : 'hover:bg-[var(--accent-hover)] hover:text-white'
              }`}
            >
              {item.icon && ( <Image src={item.icon} alt={item.name} width={20} height={20} /> )}
              <span className="text-base font-medium">{item.name}</span>
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
