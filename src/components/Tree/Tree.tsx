import React, { Children, isValidElement } from "react";
import styles from "./styles.module.css";

type Tree = {
  children: Children;
};

export default function Tree({ children }: Tree) {
  return (
    <div className={styles.treeContainer}>
      <div className={styles.treeContent}>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return React.cloneElement(child, {
              key: index,
              level: 0,
            });
          }
          return null;
        })}
      </div>
    </div>
  );
}
