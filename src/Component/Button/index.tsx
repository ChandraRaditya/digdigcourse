import "./index.css";
import { Link } from "react-router-dom";
import React from "react";

interface IProps {
  link: string;
}

const Button: React.FC<IProps> = ({ link }) => {
  return (
    <Link className="btn" to={link}>
      Selengkapnya
    </Link>
  );
};
export default Button;
