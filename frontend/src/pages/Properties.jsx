import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { useAuth } from '../context/AuthContext';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockProperties = [
          {
            id: 1,
            title: 'Modern Apartment in Downtown',
            description: 'Beautiful modern apartment with great views',
            address: '123 Main St, Cityville',
            price: 350000,
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1200,
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          },
          {
            id: 2,
            title: 'Cozy Suburban Home',
            description: 'Perfect family home with large backyard',
            address: '456 Oak Ave, Townsville',
            price: 475000,
            bedrooms: 3,
            bathrooms: 2.5,
            sqft: 1800,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          },
          {
            id: 3,
            title: 'Luxury Waterfront Villa',
            description: 'Stunning waterfront property with private dock',
            address: '789 Beach Blvd, Coastal City',
            price: 1200000,
            bedrooms: 4,
            bathrooms: 3.5,
            sqft: 3200,
            image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          },
          {
            id: 4,
            title: 'Charming Cottage',
            description: 'Quaint cottage with modern amenities',
            address: '101 Forest Lane, Woodville',
            price: 275000,
            bedrooms: 2,
            bathrooms: 1,
            sqft: 950,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          },
          {
            id: 5,
            title: 'Urban Loft',
            description: 'Spacious loft in the arts district',
            address: '202 Gallery Ave, Metropolis',
            price: 625000,
            bedrooms: 1,
            bathrooms: 1,
            sqft: 1500,
            image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          },
          {
            id: 6,
            title: 'Suburban Townhouse',
            description: 'Low-maintenance townhouse with community pool',
            address: '303 Park Circle, Suburbia',
            price: 325000,
            bedrooms: 3,
            bathrooms: 2.5,
            sqft: 1650,
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          }
        ];
        setProperties(mockProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Available Properties</h1>
          {user && (
            <Link 
              to="/add-property"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Add Property
            </Link>
          )}
        </div>

        {properties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No properties found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;