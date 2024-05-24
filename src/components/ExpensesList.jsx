import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";
import { ExpensesContext } from "../context/ExpensesContext";

const StUl = styled.ul`
  background-color: #fff;
  padding: 30px;
  display: flex;
  border-radius: 30px;
  flex-direction: column;
  gap: 10px;
`;
const StListEmpty = styled.div``;
const ExpensesList = () => {
  const { expenses, expensesList, setExpensesList, selectedMonth } =
    useContext(ExpensesContext);
  // form을 통해 추가될 때마다 expensesList 변경으로 바로 화면에 나오도록 함.
  useEffect(() => {
    setExpensesList(
      expenses.filter((expense) => {
        return +expense.date.slice(5, 7) === +selectedMonth;
      })
    );
  }, [expenses]);
  return (
    <StUl>
      {expensesList.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </StUl>
  );
};

export default ExpensesList;
