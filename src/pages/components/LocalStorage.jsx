import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function LocalStorage() {
  const [val, setVal] = useState("");

  const handleSave = () => {
    localStorage.setItem("value", val);
    setVal("");
  };
  const handleRemove = () => {
    localStorage.removeItem("value", val);
  };

  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Save in local storage & remove</Card.Title>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <Button variant="primary" className="mx-2" onClick={handleSave}>
            Save
          </Button>
          <Button variant="danger" className="mx-2" onClick={handleRemove}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
