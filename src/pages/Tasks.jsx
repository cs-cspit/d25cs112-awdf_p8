import React, { useState } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Understand React.lazy and dynamic import()', completed: true },
    { id: 2, title: 'Wrap Routes in <Suspense> with Fallback UI', completed: true },
    { id: 3, title: 'Inspect Network tab for separate JS chunks', completed: false },
    { id: 4, title: 'Compare baseline and optimized bundle size', completed: false }
  ]);
  const [newTitle, setNewTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTitle.trim(), completed: false }]);
    setNewTitle('');
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2 className="page-title">Task Management Page</h2>
      <span className="info-badge">Lazy Chunk: Tasks-[hash].js (Loaded on demand)</span>

      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        {tasks.map((task) => (
          <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flex: 1 }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span>{task.title}</span>
            </label>
            <button
              className="btn-danger"
              style={{ padding: '4px 10px', fontSize: '0.8rem' }}
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
