import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Discover the perfect property that matches your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/properties"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Browse Properties
            </Link>
            <Link 
              to="/properties"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Buy a Home</h3>
            <p className="text-gray-600 mb-4">Find your place with an immersive photo experience and the most listings.</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Search homes</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Sell a Home</h3>
            <p className="text-gray-600 mb-4">No matter what path you take to sell your home, we can help.</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">See options</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Rent a Home</h3>
            <p className="text-gray-600 mb-4">We're creating a seamless online experience for renters.</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Find rentals</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;