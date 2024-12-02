import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;