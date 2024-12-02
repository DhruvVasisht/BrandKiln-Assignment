import React from 'react';
import { NavLink } from 'react-router-dom';
import { ClipboardList, LayoutDashboard, Settings } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-md">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <ClipboardList className="text-purple-600" size={32} />
          <h1 className="text-xl font-bold">TaskMaster</h1>
        </div>
        <nav className="space-y-2">
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;