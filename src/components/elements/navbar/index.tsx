import clsx from "clsx";
import styles from "./styles.module.css";
const Navbar = () => {
  return (
    <nav
      className={clsx(
        styles["frosted-glass"],
        "bg-white rounded-lg py-4 px-8 mb-6 flex",
      )}
    >
      <ul>
        <li>Experiences</li>
        <li>Projects</li>
      </ul>
    </nav>
  );
};

export default Navbar;
