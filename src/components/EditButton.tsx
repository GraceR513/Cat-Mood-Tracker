import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string;
}

const EditButton: React.FC<Props> = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Mood/${id}/edit`);
  };

  return (
    <Button variant="primary" size="sm" className="me-2" onClick={handleClick}>
      ✏️ Edit
    </Button>
  );
};

export default EditButton;
