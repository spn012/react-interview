import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import './App.css';
import EmployeeList from './component/employee/EmployeeList';
import EmployeePage from './component/employee/EmployeePage';
import Home from './component/Home';

function App() {
  return (
    <div className="container">
      <Router>
        <div className="col-md-12">
          <h1 className="text-center" style={style}></h1>
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="/home" element={<h2>Home Page</h2>}></Route>
              <Route path="/employees" element={<EmployeePage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}
const style = {
  color: 'red',
  margin: '10px'
}

export default App;
