import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false); // ✅ update React state
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>TaskManager</h3>
      <div>
        {!isAuth ? (
          <>
            <Link style={styles.link} to="/login">Login</Link>
            <Link style={styles.link} to="/register">Register</Link>
          </>
        ) : (
          <button onClick={logout} style={styles.logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    background: "#1f2937",
    color: "#fff",
  },
  logo: { margin: 0 },
  link: {
    marginLeft: "20px",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
  logout: {
    background: "#ef4444",
    border: "none",
    color: "white",
    padding: "8px 14px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Navbar;
