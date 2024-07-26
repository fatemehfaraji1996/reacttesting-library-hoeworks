import "./App.css";
import UserTable from "./components/6-UserTable/UserTable";
import TodoContainer from "./components/5-TodoApp/TodoContainer"
function App() {
  return (
    <>
    <div className="App">
      <UserTable />
    </div>

    <TodoContainer/>
    </>
  );
}

export default App;
