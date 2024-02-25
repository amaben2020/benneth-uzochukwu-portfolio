import clsx from "clsx";

import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
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

      <div className="flex flex-col items-center md:flex-row justify-between gap-6">
        <Link
          href="/cv.pdf"
          // download="cv"
          className="rounded-3xl mt-5 px-5 py-2 border-2 hover:bg-white  font-bold hover:text-black hover:border-black"
          target="_blank"
        >
          Download Resume
        </Link>

        <div className="flex md:flex-wrap">
          {socialLinks.map((elem) => (
            <Link
              href={elem.link}
              key={elem.id}
              className="hover:transition-all hover:scale-105 duration-300"
              target="_blank"
            >
              {elem.image}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
