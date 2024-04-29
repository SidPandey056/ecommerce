import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdCategory, MdContacts, MdShop2 } from "react-icons/md";
import PropTypes from "prop-types";
const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to="/">
        <div className="flexCenter gap-x-1">
          <MdHomeFilled /> Home
        </div>
      </NavLink>

      <NavLink
        to="/mens"
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdCategory /> Men's
        </div>
      </NavLink>

      <NavLink
        to="/womens"
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdShop2 /> Women's
        </div>
      </NavLink>

      <NavLink
        to="/kids"
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdContacts /> Kid's
        </div>
      </NavLink>
    </nav>
  );
};
Navbar.propTypes = {
  containerStyles: PropTypes.node,
};
export default Navbar;
