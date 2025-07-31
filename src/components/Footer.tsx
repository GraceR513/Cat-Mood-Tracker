import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <Container>
        <small>© {new Date().getFullYear()} Cat Mood Tracker</small>
      </Container>
    </footer>
  );
};

export default Footer;
