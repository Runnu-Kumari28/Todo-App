import Header from './components/Header';
import TodoStatus from './components/Todo_Status';
import TodoForm from './components/TodoForm';
function App() {
  return (
    <div>
      <Header />
      <TodoStatus task_done={1} total_task={3} />
      <TodoForm />
    </div>
  );
}

export default App;
