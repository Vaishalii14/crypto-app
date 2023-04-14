import './App.css';
import {  Route,Routes, Link} from 'react-router-dom';
import { Layout,Typography,Space} from 'antd';
import {Navbar,CryptoDetails,Cryptocurrencies,HomePage} from './components';


function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />}>
              </Route>
             
              <Route exact path="/cryptocurrencies"element={<Cryptocurrencies />} >
              </Route>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />}>
              </Route>
             
            </Routes>
          </div>
          
        </Layout>
        <div className="footer">
          <Typography.Title level={5}style={{color:'white', textAlign:'center'}}>
            CryptoApp<br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
