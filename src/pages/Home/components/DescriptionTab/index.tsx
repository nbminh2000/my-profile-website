import { useState } from "react";
import { MAX_LENGTH } from "../../data";
import styles from "./DescriptionTab.module.scss";

const description = `I graduated with a degree in Information Technology from Viet Korea University of Information and Communication Technology in 2023. In June 2022, I began my journey as an intern Java developer at FPT Software. After completing 3 months of intensive training, I transitioned into the role of a Junior Java Developer, where I have been contributing to projects at FPT Software since then. My short-term career goal is to enhance my coding skills and expand my knowledge in various software technologies, with a focus on continuous professional development. In the long term, I aspire to become a proficient software engineer, contributing to innovative projects and making a positive impact in the tech industry. I am passionate about learning and growth, and I am committed to achieving excellence in my career`;

export default function DescriptionTab() {
  const [expanded, setExpanded] = useState(false);

  const shortText =
    description.length > MAX_LENGTH
      ? description.slice(0, MAX_LENGTH) + "..."
      : description;

  return (
    <div className={styles.content}>
      <h2>About Me</h2>
      <p className={styles.description}>
        {expanded ? description : shortText}
      </p>

      {description.length > MAX_LENGTH && (
        <span
          className={styles.more}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Less" : "More..."}
        </span>
      )}
    </div>
  );
}