import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-bg">
      <Container className="text-center home-content">
        <h1 className="welcome-text">Welcome to Cat Mood Tracker </h1>
        <p className="sub-text">Track your moods with the help of adorable cats! 😸</p>
        <Link to="/moods/new">
          <Button className="mt-4 btn-lg track-btn">Start Tracking</Button>
        </Link>
      </Container>
    </div>
  );
};

export default HomePage;
