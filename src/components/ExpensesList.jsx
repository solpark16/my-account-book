import React from "react";
import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";

const StUl = styled.ul`
  padding: 30px;
  display: flex;
  border: 1px solid green;
  border-radius: 30px;
  flex-direction: column;
  gap: 10px;
`;

const ExpensesList = ({ expenses, expensesList }) => {
  return (
    <StUl>
      {expensesList.map((expense) => {
        return (
          <ExpenseItem key={expense.id} expenses={expenses} expense={expense} />
        );
      })}
    </StUl>
  );
};

export default ExpensesList;
