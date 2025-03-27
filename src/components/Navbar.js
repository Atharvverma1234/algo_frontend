import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { user, logout, deleteAccount } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account?')) {
      deleteAccount();
      router.push('/');
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Algo Root</div>
      {user && (
        <div className="user-menu">
          <div 
            className="user-icon" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {user.name.charAt(0).toUpperCase()}
          </div>
          {showDropdown && (
            <div className="dropdown">
              <div className="user-info">
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
              <button onClick={handleLogout}>Logout</button>
              <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}