import { FiHeart } from "react-icons/fi"
1
interface CardProps {
  date: string;
  title: string;
  description: string;
}

const Card = ({ title, date, description }: CardProps) => {
  return (
    <div>
      <div>
        <h5>{date}</h5>
        <FiHeart />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
