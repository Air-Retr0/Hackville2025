import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Academic from './pages/academics';
import Scheduling from './pages/schedule';
import Resources from './pages/resources';
import Home from './pages/home';
import Lost from './pages/lost';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/academic' element={<Academic />} />
        <Route path='/scheduling' element={<Scheduling />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='*' element={<Lost />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes