import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // or wherever your CSS file is located
import GamerForm from './components/GamerForm';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gamerregister" element={<GamerForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
