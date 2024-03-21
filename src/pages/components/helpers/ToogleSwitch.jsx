import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function ToogleSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <Form>
        <div className="d-flex align-items-center">
          <i className={`fas ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i>
          <Form.Check
            type="switch"
            id="custom-switch"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="mx-2"
          />
        </div>
      </Form>
    </>
  );
}
