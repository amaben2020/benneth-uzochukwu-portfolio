import clsx from "clsx";
const Navbar = () => {
  return (
    <nav className={clsx("bg-gray-400 rounded-lg py-4 px-8 mb-6 flex")}>
      <ul className="flex space-x-4">
        <li>Experiences</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
};

export default Navbar;
