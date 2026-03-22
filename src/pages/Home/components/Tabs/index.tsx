import { useEffect, useRef } from "react";
import type { TabType } from "../../data";
import styles from "./Tabs.module.scss";

type TabsProps = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement>(null);

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
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ),
      )}
    </div>
  );
}