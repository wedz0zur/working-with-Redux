import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "./store/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    if (!cash || isNaN(cash)) return alert("Введите корректную сумму!");
    dispatch({
      type: "ADD_CASH",
      payload: cash,
    });
  };

  const getCash = (cash) => {
    if (!cash || isNaN(cash)) return alert("Введите корректную сумму!");
    dispatch({
      type: "GET_CASH",
      payload: cash,
    });
  };

  const addCustomer = (name) => {
    if (!name) return alert("Введите корректное имя клиента!");
    const customer = {
      id: Date.now(),
      name: name,
    };
    dispatch({
      type: "ADD_CUSTOMER",
      payload: customer,
    });
  };

  const removeCustomer = (customer) => {
    dispatch({
      type: "REMOVE_CUSTOMER",
      payload: customer,
    });
  };

  const getCustomersUsers = () => {
    dispatch(fetchCustomers())
  }

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>Баланс: {cash}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => addCash(Number(prompt("Введите сумму:")))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt("Введите сумму:")))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt("Введите имя клиента:"))}>Добавить клиента</button>
        <button onClick={() => getCustomersUsers()}>Получить клиентов</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              key={customer.id}
              onClick={() => removeCustomer(customer.id)}
              style={{
                padding: "10px",
                border: "1px solid #111",
                marginTop: "5px",
                width: "300px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              {customer.name} <div style={{ cursor: "pointer", }}>❌</div>
            </div>
          ))}
        </div>
      ) : (
        <div>Клиентов нет</div>
      )}
    </div>
  );
}

export default App;
