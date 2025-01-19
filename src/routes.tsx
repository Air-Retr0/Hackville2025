import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Academic from './pages/academics';
import Scheduling from './pages/schedule';
import Resources from './pages/resources';
import Home from './pages/home';
import Lost from './pages/lost';
import Editor from './vscode';
import { Resdemics } from './pages/resdemics';
import { ResExternal } from './pages/resexternal';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/academic' element={<Academic />} />
        <Route path='/scheduling' element={<Scheduling />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/vs' element={<Editor />} />
        <Route path='/resources/academics' element={<Resdemics />} />
        <Route path='/resources/external' element={<ResExternal />} />
        <Route path='*' element={<Lost />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes