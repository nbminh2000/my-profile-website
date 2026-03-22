import { useState, useRef, useEffect } from "react";
import { experienceData } from "../../data";
import styles from "./ExperienceTab.module.scss";

export default function ExperienceTab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pointRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // 👉 move indicator + auto scroll
  useEffect(() => {
    const el = pointRefs.current[activeIndex];
    if (el && indicatorRef.current) {
      indicatorRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
      indicatorRef.current.style.width = `${el.offsetWidth}px`;

      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  // 👉 support multiple experiences per year
  const current = experienceData[activeIndex];
  const experienceList = Array.isArray(current.items)
  ? current.items
  : [];

  return (
    <>
      <h2>Experience</h2>

      <div className={styles.timelineWrapper}>
        {/* Timeline */}
        <div className={styles.timeline}>
          <div ref={indicatorRef} className={styles.indicator} />

          {experienceData.map((item, index) => {
            return (
            <div
              key={index}
              ref={(el) => {
                pointRefs.current[index] = el;
              }}
              className={`${styles.point} ${
                activeIndex === index ? styles.activePoint : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span>{item.year}</span>
            </div>
          )})}
        </div>

        {/* Content */}
        <div className={styles.experienceContent}>
          {experienceList.map((experience, idx: number) => (
            <div key={idx} className={styles.card}>
              <h3>{experience.title}</h3>

              <p>
                <strong>Company:</strong> {experience.company}
              </p>

              <p>
                <strong>Domain:</strong> {experience.domain}
              </p>

              <p>
                <strong>Team Size:</strong> {experience.teamSize}
              </p>

              <p>
                <strong>Work:</strong>
              </p>
              <ul>
                {experience.work.map((w: string, i: number) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>

              <p>
                <strong>Tech:</strong>
              </p>
              <div className={styles.techList}>
                {experience.tech.map((t: string, i: number) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}