import { useState } from "react";
import type { TabType } from "./data";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import DescriptionTab from "./components/DescriptionTab";
import SkillsTab from "./components/SkillsTab";
import ExperienceTab from "./components/ExperienceTab";
import ContactTab from "./components/ContactTab";
import styles from "./Home.module.scss";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("description");

  return (
    <div className={styles.profile}>
      <Header />

      <div className={styles.container}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className={styles.tabContent}>
          {activeTab === "description" && <DescriptionTab />}
          {activeTab === "skills" && <SkillsTab />}
          {activeTab === "experience" && <ExperienceTab />}
          {activeTab === "contact" && <ContactTab />}
        </div>
      </div>
    </div>
  );
}
