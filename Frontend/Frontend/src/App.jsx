import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateWrapper } from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';



function App() {
  const auth = { isAuthenticated: false }; // Replace with actual authentication logic

  return (
    <>
      <Router>
        <AuthProvider>
        <Header />
        <Routes>
          <Route element={<PrivateWrapper auth={auth} />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
