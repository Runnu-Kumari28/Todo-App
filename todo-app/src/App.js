import Header from './components/Header';
import TodoStatus from './components/Todo_Status';
import TodoList from './components/TodoList';
import './components/style.css';
function App() {
  return (
    <div>
      <Header />
      <TodoStatus task_done={1} total_task={3} />
      <TodoList />
    </div>
  );
}

export default App;
