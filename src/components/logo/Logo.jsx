
import { NavbarBrand } from "react-bootstrap";
import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <NavbarBrand as={Link} to="/" className="logo-icon">
          <BsBagCheckFill />
          ShoppiFy
        </NavbarBrand>
  )
}

export default Logo