import { Route, Routes } from 'react-router-dom';
import BoardSection from './section/BoardSection';
import AuthSection from './section/AuthSection';

import './App.css'

function App() {
  return (
    <Routes>
        <Route path="/auth" element={<AuthSection />} exact />
        <Route path="/*" element={<BoardSection />} exact />
    </Routes>
  );
}

export default App;
