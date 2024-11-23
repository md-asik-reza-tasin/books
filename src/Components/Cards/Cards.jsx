import { useContext } from "react";
import { dataContext } from "../Root/Root";
import Card from "../Card/Card";

export default function Cards() {
  const {dataOfBooks} = useContext(dataContext);
  console.log(dataOfBooks);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-10">Books</h1>
      <div className="grid grid-cols-3">
        {dataOfBooks.map((card) => (
          <Card card={card} key={card.bookId}></Card>
        ))}
      </div>
    </div>
  );
}
