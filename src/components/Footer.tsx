import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link href="https://github.com/tabataSouto">GitHub</Link>
        </li>
        <li>
          <Link href="https://tabata-souto.vercel.app/">Portfólio</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/tabatasouto/">Linkedin</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
