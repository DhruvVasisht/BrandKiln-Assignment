import React from 'react';
import TaskForm from '../components/tasks/TaskForm';
import TaskList from '../components/tasks/TaskList';
import TaskFilters from '../components/tasks/TaskFilters';

function TaskDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <TaskFilters />
        <TaskList />
      </div>
      <div>
        <TaskForm />
      </div>
    </div>
  );
}

export default TaskDashboard;