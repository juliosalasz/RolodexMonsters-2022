import Card from "../card/card";
import "./cardList.css";

const CardList = ({ filteredMonsters }) => {
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
