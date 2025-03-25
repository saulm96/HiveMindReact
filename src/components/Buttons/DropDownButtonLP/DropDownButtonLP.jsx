import { useState } from "react";
import "./dropdownButtonLP.css";

export default function DropDownButtonLP() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-lp-container">
      <p>boton dd</p>
    </div>
  );
}