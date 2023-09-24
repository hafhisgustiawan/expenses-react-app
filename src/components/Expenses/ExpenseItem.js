import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // parameter disini adalah atribut yang diberikan saat pemanggilan dan akan berbentuk objek, fitur ini bernama props

  //sebuah jsx harus ada root element, seperti dibawah ini ada div sebagai root element

  // useState ini adalah REACT HOOKS video 69
  // parameter di useState function adalah nilai awal
  // variable dekonstruksi array dibawah ini index 0 adalah current value dan index 1 adalah function untuk set value
  // const [title, setTitle] = useState(props.expense.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expense={props.expense} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">${props.expense.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
