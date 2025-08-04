const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#242424] shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white"> 👨🏻‍💻 Winston Liang</h1>
        <ul className="flex space-x-6 text-gray-300 font-medium">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
