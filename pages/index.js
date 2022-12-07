import 'antd';
// import'./App.css';
import {Menu,Space} from 'antd';

// import{
// DashboardOutlined,
// DollarCircleOutlined,
// MoneyCollectOutlined,
// SwitcherOutlined,
// EditOutlined,} from 'antd-design/icons/lib/icons';

// import { children } from 'react';

function App(){
return(
<div className='App'>
  <header className='App-header'>
    <Space>
      <Menu
      items={[
        {lable:"Home",key:"home"},
        {lable:"User",key:"user"},
        {lable:"",key:"home"},
      ]}></Menu>
      </Space>
      </header>
      </div>
    );
}
export default App;

