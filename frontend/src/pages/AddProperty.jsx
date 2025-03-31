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
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Add New Property</h1>
            <button 
              onClick={() => navigate('/properties')}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}
          
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