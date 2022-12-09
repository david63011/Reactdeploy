import logo from '../images/dollars.png';
import logo2 from '../images/bull.png';
import logo3 from '../images/oso.png';
function NavBar() {
  return (
    <div className="NavBar">
      <h1 className="logoname">The Crypto Market</h1>
      <div className="icons">
        <img className="img-money" src={logo2} alt="/"></img>
        <img className="img-money" src={logo} alt="/"></img>
        <img className="img-money" src={logo3} alt="/"></img>
      </div>
    </div>
  );
}

export default NavBar;
