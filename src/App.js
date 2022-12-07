import "antd/dist/antd";
import './App.css';
import {Menu} from "antd"; 
import { Content } from "antd/lib/layout/layout";

function App() {
  return (
    <div style={{display:"flex",flexDirection:'row'}}>
      <Menu items = {[

        {label: "Home"},
        {label: "Dashboard"},
        {label: "UserList"},
        {label: "profile"},
        {label: "signout"},

    ]}>

      </Menu>
      <Content/>
      <div>Content</div>
      
    </div>
  );
}
function Content(){
  return <div>
    <Routes>
      <Route>path="/" element={<div>Home</div>}</Route>
      <Route>path="/dashboard" element={<div>Dashboard</div>}</Route>
      <Route>path="/userlist" element={<div>UserList</div>}</Route>
      <Route>path="/profile" element={<div>Profile</div>}</Route>

        </Routes>

  </div>
}

export default App;
