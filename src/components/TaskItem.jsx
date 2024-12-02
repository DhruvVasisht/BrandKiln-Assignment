import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskComplete, updateTask } from '../store/taskSlice';
import { Trash2, Edit, Check, X, Save } from 'lucide-react';
import { format, parseISO } from 'date-fns';

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    dispatch(updateTask(editedTask));
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md space-y-3">
        <input
          type="text"
          value={editedTask.title}
          onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          className="w-full px-3 py-2 border rounded-md"
        />
        <textarea
          value={editedTask.description}
          onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="date"
          value={editedTask.dueDate}
          onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
          className="w-full px-3 py-2 border rounded-md"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsEditing(false)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <X size={20} />
          </button>
          <button
            onClick={handleSave}
            className="p-2 text-green-600 hover:text-green-800"
          >
            <Save size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md flex items-center justify-between ${task.completed ? 'opacity-75' : ''}`}>
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={() => dispatch(toggleTaskComplete(task.id))}
          className={`p-2 rounded-full ${task.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
        >
          <Check size={20} />
        </button>
        <div className="flex-1">
          <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-gray-600 text-sm mt-1">{task.description}</p>
          )}
          {task.dueDate && (
            <p className="text-sm text-gray-500 mt-1">
              Due: {format(parseISO(task.dueDate), 'MMM d, yyyy')}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 text-blue-600 hover:text-blue-800"
        >
          <Edit size={20} />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 text-red-600 hover:text-red-800"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;