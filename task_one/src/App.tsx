import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LoginForm from './Components/LoginForm/LoginForm';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{ image: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setLoading(false);
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <div className="App">
      <Header
        toggleSidebar={toggleSidebar}
        isLoggedIn={isLoggedIn}
        onLoginLogout={handleLogout}
        userImage={userData?.image}
      />
      <main className='main-content'>
         {loading ? (
          <div className="loading-screen">
            <span className='loader'></span>
          </div>
        ) : isLoggedIn ? (
          <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1>Login successful</h1>
          </div>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>
        )}
      </main>
      <Footer />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isLoggedIn={isLoggedIn}
        onLoginLogout={handleLogout}/>
    </div>
  );
}

export default App;
