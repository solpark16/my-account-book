import React, { useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setExpensesList } from "../redux/slices/expensesListSlice";

const StUl = styled.ul`
  background-color: #fff;
  padding: 30px;
  display: flex;
  border-radius: 30px;
  flex-direction: column;
  gap: 10px;
`;
const ExpensesList = () => {
  const { expenses } = useSelector((state) => state.expenses);
  const { expensesList } = useSelector((state) => state.expensesList);
  const { selectedMonth } = useSelector((state) => state.selectedMonth);

  const dispatch = useDispatch();
  // form을 통해 추가될 때마다 expensesList 변경으로 바로 화면에 나오도록 함.
  useEffect(() => {
    const selectedMonthExpenses = expenses.filter((expense) => {
      return +expense.date.slice(5, 7) === +selectedMonth;
    });
    dispatch(setExpensesList(selectedMonthExpenses));
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
