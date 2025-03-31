const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
      <img 
        src={property.image || 'https://via.placeholder.com/300x200'} 
        alt={property.title} 
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
      />
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{property.title}</h3>
        <p className="text-gray-600 mb-3 text-sm sm:text-base">{property.address}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">${property.price.toLocaleString()}</span>
          <div className="flex space-x-2 sm:space-x-3">
            <span className="text-xs sm:text-sm text-gray-500">{property.bedrooms} beds</span>
            <span className="text-xs sm:text-sm text-gray-500">{property.bathrooms} baths</span>
            <span className="text-xs sm:text-sm text-gray-500">{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;