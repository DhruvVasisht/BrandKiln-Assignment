import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { isAfter, parseISO } from 'date-fns';

function TaskList() {
  const { tasks, filter, searchQuery } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    switch (filter) {
      case 'completed':
        return task.completed && matchesSearch;
      case 'pending':
        return !task.completed && matchesSearch;
      case 'overdue':
        return !task.completed && 
               task.dueDate && 
               isAfter(new Date(), parseISO(task.dueDate)) &&
               matchesSearch;
      default:
        return matchesSearch;
    }
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;