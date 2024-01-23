import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
function App() {
  return (
    <div className="container">
      {/* <TodoWrapper /> */}

      <div className="App">
        <Router>
          <SideBar>
            <Routes>
              <Route path="/" element={<TodoWrapper />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/users" element={<Users />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/file-manager" element={<FileManager />} />
              <Route path="/order" element={<Order />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/settings" element={<Setting />} />

              <Route path="*" element={<> not found</>} />
            </Routes>
          </SideBar>
        </Router>
      </div>
    </div>
  );
}

export default App;
