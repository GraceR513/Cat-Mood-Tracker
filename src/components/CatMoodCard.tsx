import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { motion } from 'framer-motion';
import type { Mood } from '../types';

interface Props {
  mood: Mood;
  onDelete?: (id: string) => void;
}

const CatMoodCard: React.FC<Props> = ({ mood, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this mood?')) {
      try {
        await API.delete(`/Mood/${mood.id}`);
        onDelete?.(mood.id);
      } catch (err) {
        console.error('Failed to delete mood:', err);
      }
    }
  };

  return (
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
            onClick={() => navigate(`/Mood/${mood.id}/edit`)}
            className="me-2"
          >
            Edit
          </Button>
          <Button variant="info" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default CatMoodCard;
