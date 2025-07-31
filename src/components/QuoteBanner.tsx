import { Alert } from 'react-bootstrap';

const quotes = [
  'Cats choose us; we don’t own them.',
  'Time spent with cats is never wasted.',
  'What greater gift than the love of a cat?',
  'Cats are connoisseurs of comfort.'
];

const QuoteBanner = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <Alert variant="info" className="text-center rounded-0">
      <strong>Cat Wisdom:</strong> {randomQuote}
    </Alert>
  );
};

export default QuoteBanner;
