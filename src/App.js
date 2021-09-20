import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  localStorage.setItem("theme", theme);
  const toggleTheme = (e) => {
    e.preventDefault();
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>Theme Switch</h1>
          <button className='btn' onClick={toggleTheme}>
            switch
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
