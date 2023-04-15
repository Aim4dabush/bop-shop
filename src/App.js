//components
import { Outlet } from "react-router-dom";

//styles
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
