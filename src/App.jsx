import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';
import { ClipboardList } from 'lucide-react';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <ClipboardList className="text-purple-600" size={32} />
              <h1 className="text-3xl font-bold text-gray-900">Task Management Dashboard</h1>
            </div>
            <p className="text-gray-600">Organize and track your tasks efficiently</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <TaskFilters />
              <TaskList />
            </div>
            <div>
              <TaskForm />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;