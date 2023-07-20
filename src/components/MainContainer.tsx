import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/MainContainer.module.css";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = (props: MainContainerProps) => {
  return (
    <section className={styles.container}>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </section>
  );
};

export default MainContainer;
