import clsx from "clsx";
import styles from "./styles.module.css";
const Card = () => {
  return (
    <div
      className={clsx(
        styles.card,
        "rounded-lg p-10 max-w-2xl backdrop-blur-sm",
      )}
    >
      <h3>hi 👋🏾, I&rsquo;m Benneth Uzochukwu</h3>

      <h1>I build elegant web applications</h1>

      <h4>
        I&rsquo;m a <strong>frontend developer </strong> with 4+ years of
        experience developing web applications with Javascript, Vue.js and
        React, following best practices and working closely with UI teams to
        match beautiful designs with well-written code
      </h4>

      <button>Download Resume</button>
    </div>
  );
};

export default Card;
