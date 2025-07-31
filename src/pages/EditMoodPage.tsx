import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import API from '../api';
import CatMoodForm from '../components/CatMoodForm';

const EditMoodPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [emoji, setEmoji] = useState('😺');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchMood = async () => {
      try {
        const res = await API.get(`/Mood/${id}`);
        const { emoji, note, date } = res.data;
        setEmoji(emoji);
        setNote(note);
        setDate(date);
      } catch (err) {
        console.error('Failed to fetch mood:', err);
      }
    };
    fetchMood();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.put(`/Mood/${id}`, { emoji, note, date });
      navigate('/Mood');
    } catch (err) {
      console.error('Failed to update mood:', err);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Edit Mood 😼</h2>
      <CatMoodForm
        emoji={emoji}
        setEmoji={setEmoji}
        note={note}
        setNote={setNote}
        date={date}
        setDate={setDate}
        onSubmit={handleSubmit}
      />
    </Container>
  );
};

export default EditMoodPage;
