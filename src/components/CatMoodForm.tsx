
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import CatMoodSelector from './CatMoodSelector';
import DatePicker from './DatePicker';
import '../styles/CatMoodForm.css';
import { motion } from 'framer-motion';

interface CatMoodFormProps {
  emoji?: string;
  setEmoji?: Dispatch<SetStateAction<string>>;
  note?: string;
  setNote?: Dispatch<SetStateAction<string>>;
  date?: string;
  setDate?: Dispatch<SetStateAction<string>>;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const CatMoodForm = ({
  emoji,
  setEmoji,
  note,
  setNote,
  date,
  setDate,
  onSubmit
}: CatMoodFormProps) => {
  const [internalEmoji, setInternalEmoji] = useState('');
  const [internalNote, setInternalNote] = useState('');
  const [internalDate, setInternalDate] = useState(new Date().toISOString().split('T')[0]);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentEmoji = emoji ?? internalEmoji;
    const currentNote = note ?? internalNote;
    const currentDate = date ?? internalDate;

    if (!currentEmoji) {
      alert("Please select a cat mood emoji!");
      return;
    }

    if (onSubmit) {
      return onSubmit(e);
    }

    try {
      await API.post('/Mood', { emoji: currentEmoji, note: currentNote, date: currentDate });
      alert("Mood saved successfully! 🐱");
      navigate('/moods');
    } catch (err) {
      console.error('Error saving mood:', err);
      alert("There was a problem saving your mood. Please try again.");
    }
  };

  return (
    <motion.div
      className="cat-form-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h4
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        How’s your 😺 mood today? 
      </motion.h4>
      <Form onSubmit={handleSubmit} className="mt-3">
        <CatMoodSelector value={emoji ?? internalEmoji} onChange={setEmoji ?? setInternalEmoji} />

        <Form.Group className="mb-3" controlId="moodNote">
          <Form.Label>Note (Optional)</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            value={note ?? internalNote}
            onChange={(e) => (setNote ?? setInternalNote)(e.target.value)}
            placeholder="Write a short note about your cat mood"
          />
        </Form.Group>

        <DatePicker date={date ?? internalDate} onDateChange={setDate ?? setInternalDate} />

        <Button variant="info" type="submit">
          Save Mood
        </Button>
      </Form>
    </motion.div>
  );
};

export default CatMoodForm;
