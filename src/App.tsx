import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AllMountains } from './components/AllMountains/all-mountains';
import SingleMountain from './components/SingleMountain/singleMountain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllMountains />} />
        <Route path="/mountains/:id" element={<SingleMountain />} />
      </Routes>
    </Router>
  );
}

export default App;
