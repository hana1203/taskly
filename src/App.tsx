import { Tasks } from "./pages/TasksList";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
  }
  return (
    <div className="App">
      <Tasks />
    </div>
  );
}

export default App;
