import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CatMoodCard from './CatMoodCard';
import type { Mood } from '../types';
import { AnimatePresence } from 'framer-motion';

interface Props {
  moods: Mood[];
  onDelete?: (id: string) => void;
}

const CatMoodList: React.FC<Props> = ({ moods, onDelete }) => {
  return (
    <Row>
      <AnimatePresence>
        {moods.map((mood) => (
          <Col key={mood.id} md={4}>
            <CatMoodCard mood={mood} onDelete={onDelete} />
          </Col>
        ))}
      </AnimatePresence>
    </Row>
  );
};

export default CatMoodList;
