import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CatMoodCard from './CatMoodCard';
import type { Mood } from '../types'; 

interface Props {
  moods: Mood[];
  onDelete?: (id: string) => void;
}

const CatMoodList: React.FC<Props> = ({ moods, onDelete }) => {
  return (
    <Row>
      {moods.map((mood) => (
        <Col key={mood.id} md={4}>
          <CatMoodCard mood={mood} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
  );
};

export default CatMoodList;
