import { isTaskOverdue } from './dateUtils';

export const filterTasks = (tasks, filter, searchQuery) => {
  return tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    switch (filter) {
      case 'completed':
        return task.completed && matchesSearch;
      case 'pending':
        return !task.completed && matchesSearch;
      case 'overdue':
        return !task.completed && isTaskOverdue(task.dueDate) && matchesSearch;
      default:
        return matchesSearch;
    }
  });
};