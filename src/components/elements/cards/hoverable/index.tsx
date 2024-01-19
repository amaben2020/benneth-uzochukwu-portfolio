import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

export type TCard = {
  title: string;
  image: StaticImageData;
  description: string;
  subtitle: string;
};

const HoverableCard = ({ title, image, description, subtitle }: TCard) => {
  return (
    <div className={clsx(styles["card-zoom"], styles.card)}>
      <div className={styles.top}>
        <p className={styles.title}>{title}</p>
        <p className={clsx(styles.subtitle, "gradient-text")}>{subtitle}</p>
      </div>

      <div className={styles.info}>
        <div className={styles.image}>
          <Image
            src={image}
            width={423}
            alt=""
            height={234}
            className={styles["card-zoom-image"]}
          />
          <div className={styles.drape}></div>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.notification}>Coming soon</div>
    </div>
  );
};

export default HoverableCard;
