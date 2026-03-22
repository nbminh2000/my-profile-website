import React, { useState } from "react";
import styles from "./SearchForm.module.scss";
import Results from "./Result";

const data = [
  {
    type: "Khoá học",
    name: "React cơ bản",
    img: "/src/assets/images/nbm-logo.png",
  },
  {
    type: "Khoá học",
    name: "Java Spring Boot",
    img: "/src/assets/images/nbm-logo.png",
  },
  {
    type: "Khoá học",
    name: "Java Microservice",
    img: "/src/assets/images/nbm-logo.png",
  },
  {
    type: "Video",
    name: "Golang cho người mới",
    img: "/src/assets/images/nbm-logo.png",
  },
  {
    type: "Video",
    name: "SQL nâng cao",
    img: "/src/assets/images/nbm-logo.png",
  },
  {
    type: "Bài viết",
    name: "Java Microservice",
    img: "/src/assets/images/nbm-logo.png",
  },
  {
    type: "Bài viết",
    name: "Golang cho người mới",
    img: "/src/assets/images/nbm-logo.png",
  },
  {
    type: "Bài viết",
    name: "SQL nâng cao",
    img: "/src/assets/images/nbm-logo.png",
  },
];
export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [courses, setcourses] = useState([]);
  const [videos, setVideos] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      setIsOpen(false);
      setPosts([]);
      setVideos([]);
      setcourses([]);
      return;
    }
    setIsOpen(true);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    const courses = filtered.filter((item) => item.type === "Khoá học");
    const videos = filtered.filter((item) => item.type === "Video");
    const posts = filtered.filter((item) => item.type === "Bài viết");
    setcourses(courses);
    setVideos(videos);
    setPosts(posts);
    console.log(filtered);
    console.log(courses);
    console.log(videos);
    console.log(posts);
  };
  return (
    <div className={styles.body}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInput}>
          <div className={styles.searchIcon}></div>
          <input
            className={styles.input}
            name="search"
            placeholder="Tìm kiếm khoá học, bài viết, video, ..."
            value={query}
            onChange={handleSearch}
          />
        </div>
        {isOpen && (
          <div className={styles.dropdown}>
            <div className={styles.dropdownBody}>
              <div className={styles.headerSearch}>
                <span>Kết quả tìm kiếm cho "{query}"</span>
              </div>

              {courses.length > 0 && <Results data={courses} />}
              {videos.length > 0 && <Results data={videos} />}
              {posts.length > 0 && <Results data={posts} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
