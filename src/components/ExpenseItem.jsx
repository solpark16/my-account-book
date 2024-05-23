import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StLi = styled.li`
  display: flex;
  border: 1px solid blue;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  border-radius: 20px;
`;
const ExpenseItem = ({ expenses, expense }) => {
  const navigate = useNavigate();
  const onClickLiHandler = (expense) => {
    navigate(`/detail/${id}`, {
      state: {
        expense: { expense },
        expenses: { expenses },
      },
    });
  };
  const { id, date, item, description, amount } = expense;
  return (
    <StLi onClick={() => onClickLiHandler(expense)}>
      <div>
        <p>{date}</p>
        <p>
          {item}-{description}
        </p>
      </div>
      <p>{amount}원</p>
    </StLi>
  );
};

export default ExpenseItem;
