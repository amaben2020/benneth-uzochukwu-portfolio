"use client";
import Card from "@/components/elements/card";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
export default function Home() {
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationFrameId: number | null;

    const handleMouseMove = (event: any) => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          let x = Number((event?.clientX / window.innerWidth) * 100);
          let y = Number((event?.clientY / window.innerHeight) * 100);

          maskRef.current?.style.setProperty("--mouse-x", x + "%");
          maskRef.current?.style.setProperty("--mouse-y", y + "%");

          animationFrameId = null;
        });
      }
    };

    document.addEventListener("pointermove", handleMouseMove);

    return () => {
      document.removeEventListener("pointermove", handleMouseMove);
      cancelAnimationFrame(Number(animationFrameId));
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Spotlight /> */}
      <section className={styles.mask} ref={maskRef}>
        <div className="max-w-7xl mx-auto">
          <Card />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sint
          placeat, dolorem quaerat laudantium, nulla corrupti velit nam optio
          temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum id
          quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Qui sint placeat, dolorem quaerat laudantium, nulla corrupti velit nam
          optio temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum
          id quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Qui sint placeat, dolorem quaerat laudantium, nulla corrupti
          velit nam optio temporibus magnam ipsa facilis ipsum, natus
          voluptatibus dolorum id quia. Eum! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Qui sint placeat, dolorem quaerat
          laudantium, nulla corrupti velit nam optio temporibus magnam ipsa
          facilis ipsum, natus voluptatibus dolorum id quia. Eum! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Qui sint placeat,
          dolorem quaerat laudantium, nulla corrupti velit nam optio temporibus
          magnam ipsa facilis ipsum, natus voluptatibus dolorum id quia. Eum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sint
          placeat, dolorem quaerat laudantium, nulla corrupti velit nam optio
          temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum id
          quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Qui sint placeat, dolorem quaerat laudantium, nulla corrupti velit nam
          optio temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum
          id quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Qui sint placeat, dolorem quaerat laudantium, nulla corrupti
          velit nam optio temporibus magnam ipsa facilis ipsum, natus
          voluptatibus dolorum id quia. Eum! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Qui sint placeat, dolorem quaerat
          laudantium, nulla corrupti velit nam optio temporibus magnam ipsa
          facilis ipsum, natus voluptatibus dolorum id quia. Eum! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Qui sint placeat,
          dolorem quaerat laudantium, nulla corrupti velit nam optio temporibus
          magnam ipsa facilis ipsum, natus voluptatibus dolorum id quia. Eum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sint
          placeat, dolorem quaerat laudantium, nulla corrupti velit nam optio
          temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum id
          quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Qui sint placeat, dolorem quaerat laudantium, nulla corrupti velit nam
          optio temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum
          id quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Qui sint placeat, dolorem quaerat laudantium, nulla corrupti
          velit nam optio temporibus magnam ipsa facilis ipsum, natus
          voluptatibus dolorum id quia. Eum! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Qui sint placeat, dolorem quaerat
          laudantium, nulla corrupti velit nam optio temporibus magnam ipsa
          facilis ipsum, natus voluptatibus dolorum id quia. Eum! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Qui sint placeat,
          dolorem quaerat laudantium, nulla corrupti velit nam optio temporibus
          magnam ipsa facilis ipsum, natus voluptatibus dolorum id quia. Eum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui sint
          placeat, dolorem quaerat laudantium, nulla corrupti velit nam optio
          temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum id
          quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Qui sint placeat, dolorem quaerat laudantium, nulla corrupti velit nam
          optio temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum
          id quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Qui sint placeat, dolorem quaerat laudantium, nulla corrupti
          velit nam optio temporibus magnam ipsa facilis ipsum, natus
          voluptatibus dolorum id quia. Eum! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Qui sint placeat, dolorem quaerat
          laudantium, nulla corrupti velit nam optio temporibus magnam ipsa
          facilis ipsum, natus voluptatibus dolorum id quia. Eum!
        </div>
      </section>
    </main>
  );
}
