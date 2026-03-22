import { useEffect, useRef, useState } from "react";
import type { TabType } from "../../data";
import styles from "./Tabs.module.scss";

type TabsProps = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
};

const tabIcons = {
  description: "👤",
  skills: "🛠️",
  experience: "💼",
  contact: "📞",
};

const tabLabels = {
  description: "Description",
  skills: "Skills",
  experience: "Experience",
  contact: "Contact",
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const activeIndex = [
      "description",
      "skills",
      "experience",
      "contact",
    ].indexOf(activeTab);
    const currentTab = tabRefs.current[activeIndex];

    if (currentTab && indicatorRef.current) {
      const { offsetLeft, offsetWidth } = currentTab;

      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  useEffect(() => {
    const handleResize = () => {
      // trigger lại logic set indicator
      setActiveTab(activeTab);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab, setActiveTab]);

  return (
    <div className={styles.tabs}>
      <div ref={indicatorRef} className={styles.indicator} />

      {["description", "skills", "experience", "contact"].map(
        (tab, index) => (
          <button
            key={tab}
            ref={(el) => void (tabRefs.current[index] = el)}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab as TabType)}
            title={tabLabels[tab as TabType]} // tooltip cho mobile
          >
            {isMobile ? (
              <span className={styles.icon}>{tabIcons[tab as TabType]}</span>
            ) : (
              tabLabels[tab as TabType]
            )}
          </button>
        ),
      )}
    </div>
  );
}