"use client";
import HoverableCard from "@/components/elements/cards/hoverable";

import { ImageCard } from "@/components/elements/cards/image";
import { Card } from "@/components/elements/cards/simple";
import Navbar from "@/components/elements/navbar";
import { useEffect, useRef } from "react";
import cartstand from "./../../public/cartstand.png";
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
    <main className="flex flex-col items-center justify-between">
      {/* <Spotlight /> */}
      <section className={styles.mask} ref={maskRef}>
        <div className="max-w-7xl mx-auto">
          <Navbar />

          <div className="grid grid-cols-5 gap-x-3">
            <div className="col-span-5 md:col-span-3">
              <Card />
            </div>
            <div className="col-span-5 md:col-span-2">
              <ImageCard />
            </div>
          </div>

          <HoverableCard
            title="dolorem"
            description="  placeat, dolorem quaerat laudantium, nulla corrupti velit nam optio
            temporibus magnam ipsa facilis ipsum, natus voluptatibus dolorum id
            quia. Eum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Qui sint placeat, dolorem quaerat laudantium, nulla corrupti velit nam"
            subtitle="dolorem quaerat la"
            image={cartstand}
          />
        </div>
      </section>
    </main>
  );
}
