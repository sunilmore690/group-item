import SelectGroup from "./components/SelectGroup";
import "./styles.css";
const options = [
  {
    label: "New",
    value: 40,
    color: "grey"
  },
  {
    label: "On Hold",
    value: 40,
    color: "orange"
  },
  {
    label: "Approved",
    value: 40,
    color: "green"
  }
];
export default function App() {
  return (
    <div className="App dark">
      <SelectGroup options={options} />
    </div>
  );
}
