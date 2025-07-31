import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { motion, AnimatePresence } from 'framer-motion';
import type { Mood } from '../types';

interface Props {
  mood: Mood;
  onDelete?: (id: string) => void;
}

const CatMoodCard: React.FC<Props> = ({ mood, onDelete }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this mood?')) {
      setIsVisible(false); // Trigger fade-out animation
      setTimeout(async () => {
        try {
          await API.delete(`/Mood/${mood.id}`);
          onDelete?.(mood.id);
        } catch (err) {
          console.error('Failed to delete mood:', err);
          setIsVisible(true); // Restore visibility if error occurs
        }
      }, 300); // Duration should match transition
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-3 text-center">
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>{mood.emoji}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{mood.date}</Card.Subtitle>
              <Card.Text>{mood.note}</Card.Text>
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => navigate(`/moods/${mood.id}/edit`)}
              >
                Edit
              </Button>
              <Button variant="info" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CatMoodCard;
