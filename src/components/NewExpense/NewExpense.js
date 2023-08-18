import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const showHandler = () => {
    setIsOpen(true);
  };

  const hideHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="new-expense">
      {!isOpen && <button onClick={showHandler}>Add New Expense</button>}
      {isOpen && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideHandler} />}
    </div>
  );
};

export default NewExpense;
