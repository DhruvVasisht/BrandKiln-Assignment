import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSearchQuery } from '../store/taskSlice';
import { Search } from 'lucide-react';

function TaskFilters() {
  const dispatch = useDispatch();
  const { filter, searchQuery } = useSelector((state) => state.tasks);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {['all', 'completed', 'pending', 'overdue'].map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => dispatch(setFilter(filterOption))}
            className={`px-4 py-2 rounded-md capitalize ${
              filter === filterOption
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filterOption}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TaskFilters;