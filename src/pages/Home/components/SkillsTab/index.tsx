import styles from "./SkillsTab.module.scss";
import { skillsData } from "../../data";

export default function SkillsTab() {
  return (
    <>
      <h2>Tecnical Skills</h2>
      <div className={styles.skillsWrapper}>
      {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillGroup}>
            <h4>{skill.category}</h4>
            <div>
              {skill.items.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </div>
      ))}
      </div>
      <h2 style={{ marginTop: "20px" }}>Other</h2>
      <ul className={styles.experienceList}>
        <li>Microservices Architecture</li>
        <li>Agile / Scrum Methodology</li>
        <li>System Migration & Legacy Upgrade</li>
      </ul>
    </>
  );
}
