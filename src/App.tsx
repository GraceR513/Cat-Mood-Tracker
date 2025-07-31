import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoodListPage from './pages/MoodListPage';
import AddMoodPage from './pages/AddMoodPage';
import EditMoodPage from './pages/EditMoodPage';
import NavBar from './components/NavBar'; // ✅ updated casing
import Footer from './components/Footer';
import QuoteBanner from './components/QuoteBanner';

function App() {
  return (
    <>
      <NavBar />
      <QuoteBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moods" element={<MoodListPage />} />
        <Route path="/moods/new" element={<AddMoodPage />} />
        <Route path="/moods/:id/edit" element={<EditMoodPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
