import React, { useState } from "react";

import "./App.css";

export function NotFound() {
  const [error, setError] = useState("");

  return (
    <div style={{ margin: "2em" }}>
      <h1>
        <span className="error-text">Error 404: Page not found</span> <span className="blinking">_</span>
      </h1>
    </div>
  );
}
