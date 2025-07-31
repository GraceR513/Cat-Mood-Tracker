import { Form } from 'react-bootstrap';

interface Props {
  date: string;
  onDateChange: (newDate: string) => void;
}

const DatePicker: React.FC<Props> = ({ date, onDateChange }) => {
  return (
    <Form.Group className="mb-3" controlId="date">
      <Form.Label>Date</Form.Label>
      <Form.Control
        type="date"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default DatePicker;
