import { Button } from 'react-bootstrap';
import API from '../api';

interface Props {
  id: string;
  onDelete: (id: string) => void;
}

const DeleteButton: React.FC<Props> = ({ id, onDelete }) => {
  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this mood?');
    if (!confirm) return;

    try {
      await API.delete(`/Mood/${id}`);
      onDelete(id); // Update UI
    } catch (err) {
      console.error('Failed to delete mood:', err);
      alert('Something went wrong while deleting. Try again!');
    }
  };

  return (
    <Button variant="primary" size="sm" onClick={handleDelete}>
      🗑️ Delete
    </Button>
  );
};

export default DeleteButton;
