import { Link } from "react-router-dom";
import { FaDumbbell, FaRunning } from "react-icons/fa"; // Font Awesome Dumbbell icon

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <h1>
            <FaDumbbell style={{ marginRight: "10px" }} />
            Gym Workout
            <FaRunning style={{ marginLeft: "10px" }} />
          </h1>
        </Link>

        <img src="https://thumbs.dreamstime.com/b/art-illustration-351215485.jpg" alt="" className="header-img"/> 
      </div>

      <div className="mqeen">
          <p>Welcome to Gym Workout – Stay Fit, Stay Strong!</p>
      </div>
    </header>
  );
};

export default NavBar;
