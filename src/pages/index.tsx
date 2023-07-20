import styles from "@/styles/Home.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "@/components/Card";
import { data } from "../server/data";

export default function Home() {
  return (
    <section className={styles.container}>
      <>
        <form className={styles.form}>
          <div className={styles.mainInput}>
            <AiOutlineSearch color="#fff" size={20} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Pesquise no blog"
            />
          </div>
        </form>
        <main>
          {data.map((item) => (
            <Card
              key={item.title}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </main>
      </>
    </section>
  );
}
