import { TasksList } from "./pages/TasksList";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
  }
  return (
    <div className="App">
      <TasksList />
    </div>
  );
}

export default App;
