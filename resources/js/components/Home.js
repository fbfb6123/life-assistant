//親コンポーネントから子コンポーネントに渡す

const [inputText, setInputText] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);
  const [type, setType] = useState("inc");
  const [date, setDate] = useState(new Date());