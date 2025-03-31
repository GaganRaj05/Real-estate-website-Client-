const PropertyCard = ({ property }) => {
    return (
      <div className="property-card">
        <img 
          src={property.image || 'https://via.placeholder.com/300x200'} 
          alt={property.title} 
          className="property-image"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
          <p className="text-gray-600 mb-2">{property.address}</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold">${property.price.toLocaleString()}</span>
            <div className="flex space-x-2">
              <span className="text-sm text-gray-500">{property.bedrooms} beds</span>
              <span className="text-sm text-gray-500">{property.bathrooms} baths</span>
              <span className="text-sm text-gray-500">{property.sqft} sqft</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PropertyCard;