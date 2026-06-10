import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="bg-[#0036B8] h-[70px] flex items-center justify-end px-6 shadow-md flex-shrink-0">
      <img src={logo} alt="SPP" className="h-10 w-auto" />
    </nav>
  );
}

export default Navbar;