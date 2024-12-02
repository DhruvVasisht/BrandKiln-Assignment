import React from 'react';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/taskSlice';

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;