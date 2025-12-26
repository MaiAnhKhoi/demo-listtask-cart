import { useRef } from "react";
import {type  RefObject } from "react";

export const ScrollToSection = () => {
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const section3Ref = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: RefObject<HTMLDivElement| null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {/* MENU */}
      <nav style={{ position: "fixed", top: 0 }}>
        <button onClick={() => scrollTo(section1Ref)}>Section 1</button>
        <button onClick={() => scrollTo(section2Ref)}>Section 2</button>
        <button onClick={() => scrollTo(section3Ref)}>Section 3</button>
      </nav>

      {/* SECTIONS */}
      <div style={{ marginTop: 60 }}>
        <section ref={section1Ref} style={{ height: "100vh" }}>
          <h1>Section 1</h1>
        </section>

        <section ref={section2Ref} style={{ height: "100vh" }}>
          <h1>Section 2</h1>
        </section>

        <section ref={section3Ref} style={{ height: "100vh" }}>
          <h1>Section 3</h1>
        </section>
      </div>
    </div>
  );
};
