import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* {props.items.length === 0 && <p>Item not found</p>} */}
      {props.items.length > 0 &&
        props.items.map((el, index) => (
          // key disini penting karena react membutuhkannya untuk identifier, hal ini wajib ketika anda melakukan mapping terhadap sebuah items, cek video 88
          <ExpenseItem key={index} expense={el} />
        ))}
    </ul>
  );
};

export default ExpensesList;
