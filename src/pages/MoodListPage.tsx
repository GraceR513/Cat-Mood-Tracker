import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import API from '../api';
import CatMoodList from '../components/CatMoodList';

interface Mood {
  id: string;
  emoji: string;
  note: string;
  date: string;
}

const MoodListPage = () => {
  const [moods, setMoods] = useState<Mood[]>([]);

  useEffect(() => {
    const fetchMoods = async () => {
      try {
        const res = await API.get('/Mood');
        setMoods(res.data);
      } catch (err) {
        console.error('Failed to fetch moods:', err);
      }
    };

    fetchMoods();
  }, []);

  const handleDelete = (id: string) => {
    setMoods((prevMoods) => prevMoods.filter((mood) => mood.id !== id));
  };

  return (
    <Container className="mt-4">
      <h2>Your Cat Mood Entries</h2>
      <CatMoodList moods={moods} onDelete={handleDelete} />
    </Container>
  );
};

export default MoodListPage;
