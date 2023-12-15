import './index.css';
import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom';
// import Aboutme from '../src/pages/Aboutme'

function App() {
  return (
<>
  <Navbar />
  <Outlet />
</>
  );
}

export default App;
