import { Form } from 'react-bootstrap';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const emojiOptions = [
  '😺 Happy',
  '😾 Grumpy',
  '😿 Sad',
  '😹 Laughing',
  '😻 Loving',
  '🙀 Shocked',
  '😼 Sneaky',
  '😽 Kissy',
];

const CatMoodSelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Form.Group className="mb-3" controlId="catMoodSelector">
      <Form.Label>Select Cat Mood</Form.Label>
      <Form.Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Choose a mood</option>
        {emojiOptions.map((emoji) => (
          <option key={emoji} value={emoji}>
            {emoji}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default CatMoodSelector;
