import clsx from "clsx";

import styles from "./styles.module.css";
export const Card = () => {
  return (
    <div
      className={clsx(
        styles.card,
        "rounded-lg p-10 max-w-2xl backdrop-blur-sm hover:bg-black cursor-pointer transition-all duration-300 hover:text-white hover:border-white hover:border-2",
      )}
    >
      <h3>hi 👋🏾, I&rsquo;m Benneth Uzochukwu</h3>

      <h1>I build elegant web applications</h1>

      <h4 className="leading-snug text-lg">
        Experienced <strong>frontend engineer </strong> adept in crafting
        powerful web applications with 4+ years of expertise. Proficient in
        React (Next.js, Gatsby), Typescript, JavaScript, and CSS. Committed to
        implementing best practices, collaborating closely with designs and
        stakeholders to create magic. 🚀💻🎨
      </h4>

      <button className="rounded-full mt-5 p-3 border">Download Resume</button>
    </div>
  );
};
