"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
export default function Home() {
  const maskRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Get a reference to the .mask element.
    if (maskRef.current) {
      // Add an event to catch mouse movements.
      document.addEventListener("pointermove", (event) => {
        // Calculate mouse position in percentages.
        let x = Number((event?.clientX / window.innerWidth) * 100);
        let y = Number((event?.clientY / window.innerHeight) * 100);

        // Update the custom property values on the body.
        maskRef.current?.style.setProperty("--mouse-x", x + "%");
        maskRef.current?.style.setProperty("--mouse-y", y + "%");
      });
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Spotlight /> */}
      <section className={styles.mask} ref={maskRef}>
        <div className="max-w-5xl mx-auto">
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
