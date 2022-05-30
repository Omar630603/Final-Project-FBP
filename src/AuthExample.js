import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate, 
  useNavigate, 
  useLocation,
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/public" element={<PublicPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <ProtectedPage />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  return fakeAuth.isAuthenticated ? (
    <div>
      <h2>Welcome! </h2>
      <button
        onClick={() => {
          fakeAuth.signout(() => navigate("/", { from }));
        }}
      >
        Sign out
      </button>
    </div>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children }) {
  let auth = fakeAuth;
  let location = useLocation();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
function PublicPage() {
  return (
    <div>
      <h2>Public</h2>
    </div>
  );
}
function ProtectedPage() {
  return (
    <div>
      <h2>Private</h2>
    </div>
  );
}
function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      navigate("/private", { from });
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
