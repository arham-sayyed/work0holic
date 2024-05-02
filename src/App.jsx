import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignInSide from "./components/auth/login";
import SignUp from "./components/auth/signup";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  const isSignedIn = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={isSignedIn ? <Navigate to="/dashboard" /> : <SignInSide />} />
        <Route
          path="/login"
          element={isSignedIn ? <Navigate to="/dashboard" /> : <SignInSide />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/sign-up" element={isSignedIn ? <Navigate to="/dashboard" /> : <SignUp /> } />
      </Routes>
    </Router>
  );
}

export default App;
