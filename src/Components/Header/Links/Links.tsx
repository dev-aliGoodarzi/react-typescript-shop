// React
import React from "react";
// React
// Modules
import { Link } from "react-router-dom";
// Modules
// CSS
import styles from "./Links.module.css";
// CSS

type LinkProps = {
  options: { to: string; nameForDisplay: string; isSelected: boolean };
  onClick: Function;
};

const Links: React.FunctionComponent<LinkProps> = ({
  options: { to, nameForDisplay, isSelected },
  onClick,
}) => {
  return (
    <Link
      className={`${styles.link} ${isSelected && styles.active}`}
      onClick={() => onClick(nameForDisplay)}
      to={to}
    >
      {nameForDisplay}
    </Link>
  );
};

export default Links;
