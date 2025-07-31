import React from 'react';
import { Container } from 'react-bootstrap';
import CatMoodForm from '../components/CatMoodForm';


const AddMoodPage: React.FC = () => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Add a New Cat Mood</h2>
      <CatMoodForm />
    </Container>
  );
};

export default AddMoodPage;
