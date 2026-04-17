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
          <img src="https://thumbs.dreamstime.com/b/art-illustration-351215485.jpg" alt="" className="header-img"/>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
