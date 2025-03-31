import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyForm from '../components/PropertyForm';
import { useAuth } from '../context/AuthContext';

const AddProperty = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    navigate('/properties');
    return null;
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Property submitted:', data);
      navigate('/properties');
    } catch (err) {
      setError('Failed to add property. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Property</h1>
          
          {error && <div className="mb-4 text-red-500">{error}</div>}
          
          <PropertyForm 
            onSubmit={onSubmit} 
            buttonText={isSubmitting ? 'Adding Property...' : 'Add Property'}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProperty;