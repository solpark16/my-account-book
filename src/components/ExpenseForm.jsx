import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// 일단 대기
import styled from "styled-components";
// import useInput from "../hooks/useInput";
//   styled-components
const StForm = styled.form`
  border: 1px solid purple;
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;
const StInputBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
`;
const ExpenseForm = ({ selectedMonth, setExpenses }) => {
  // 나중에 selectedMonth 따라 바뀌는걸로 변경하기
  const [date, setDate] = useState(`2024-01-01`);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  // 지출 항목 추가 이벤트 함수
  const addExpenseHandler = (e) => {
    e.preventDefault();
    // 유효성 검사 (나중에 date 변경해야함)
    if (!date.trim() || !item.trim() || !amount.trim() || !description.trim()) {
      alert("다채워");
      return;
    }
    // 새로운 지출 항목 객체
    const newExpense = {
      id: uuidv4(),
      date,
      item,
      amount,
      description,
    };
    // 기존 지출 항목들에 새로운 지출 항목 추가
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    // 각 인풋 초기화
    setDate("2024-01-01");
    setItem("");
    setAmount("");
    setDescription("");
  };
  return (
    <StForm>
      <StInputBox>
        <label>날짜</label>
        <input
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </StInputBox>
      <StInputBox>
        <label>항목</label>
        <input
          type="text"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </StInputBox>
      <StInputBox>
        <label>금액</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </StInputBox>
      <StInputBox>
        <label>내용</label>
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </StInputBox>
      <button onClick={addExpenseHandler}>저장</button>
    </StForm>
  );
};

export default ExpenseForm;
