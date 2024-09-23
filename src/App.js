import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // or wherever your CSS file is located
import TopGamers from './components/TopGamers';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TopGamers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
