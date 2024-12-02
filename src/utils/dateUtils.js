import { isAfter, parseISO, format } from 'date-fns';

export const isTaskOverdue = (dueDate) => {
  return dueDate && isAfter(new Date(), parseISO(dueDate));
};

export const formatDate = (date) => {
  return format(parseISO(date), 'MMM d, yyyy');
};