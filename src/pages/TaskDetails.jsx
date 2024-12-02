import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { formatDate } from '../utils/dateUtils';

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = useSelector(state => 
    state.tasks.tasks.find(task => task.id === id)
  );

  if (!task) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-900">Task not found</h2>
        <button
          onClick={() => navigate('/tasks')}
          className="mt-4 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => navigate('/tasks')}
        className="mb-6 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{task.title}</h1>
        <div className="space-y-4">
          <p className="text-gray-600">{task.description}</p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Due: {formatDate(task.dueDate)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Created: {formatDate(task.createdAt)}</span>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
              task.completed
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {task.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;