import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Academic from './pages/academics';
import Scheduling from './pages/schedule';
import Resources from './pages/resources';
import Home from './pages/home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/academics' element={<Academic />} />
        <Route path='/academics' element={<Scheduling />} />
        <Route path='/academics' element={<Resources />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes