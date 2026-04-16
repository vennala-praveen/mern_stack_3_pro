import { Link } from "react-router-dom";
import { FaDumbbell, FaRunning } from "react-icons/fa"; // Font Awesome Dumbbell icon

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>
            <FaDumbbell style={{ marginRight: "10px" }} />
            Gym Workout
            <FaRunning style={{ marginLeft: "10px" }} />
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
