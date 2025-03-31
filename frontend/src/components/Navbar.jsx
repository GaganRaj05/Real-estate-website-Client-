import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, openAuthModal } = useAuth();

  return (
    <nav className="navbar">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">RealEstate</span>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <a href="/add-property" className="text-gray-700 hover:text-blue-600">
                  Add Property
                </a>
                <button 
                  onClick={logout}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Logout
                </button>
                <span className="text-gray-700">{user.name}</span>
              </>
            ) : (
              <>
                <button 
                  onClick={() => openAuthModal('login')}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Login
                </button>
                <button 
                  onClick={() => openAuthModal('register')}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;