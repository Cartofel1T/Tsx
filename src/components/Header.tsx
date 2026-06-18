import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-blue-700 h-16 flex items-center justify-end px-6 shadow-md">
      <img src={logo} alt="SPP" className="h-10 w-auto object-contain" />
    </header>
  );
}
