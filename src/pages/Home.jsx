import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "../components/ExpenseForm";
import MonthsList from "../components/MonthsList";
import ExpensesList from "../components/ExpensesList";
import { useLocation, useNavigate } from "react-router-dom";

// styled-components
const StDiv = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const MOCK_DATA = [
  {
    id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
    date: "2024-01-05",
    item: "식비",
    amount: 100000,
    description: "세광양대창",
  },
  {
    id: "25600f72-53b4-4187-a9c2-47358580e2f8",
    date: "2024-01-10",
    item: "도서",
    amount: 40500,
    description: "모던 자바스크립트",
  },
  {
    id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
    date: "2024-02-02",
    item: "식비",
    amount: 50000,
    description: "회식",
  },
  {
    id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
    date: "2024-02-02",
    item: "간식",
    amount: 500,
    description: "아이스크림",
  },
  {
    id: "25143e72-16e2-22a7-a9c2-47358580e2f8",
    date: "2024-02-02",
    item: "여행",
    amount: 1055000,
    description: "일본여행",
  },
  {
    id: "25600f72-97p2-14a7-a9c2-47363950e2t8",
    date: "2024-02-02",
    item: "미용",
    amount: 155000,
    description: "미용실",
  },
  {
    id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
    date: "2024-02-02",
    item: "도서",
    amount: 75000,
    description:
      "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
  },
];
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState(MOCK_DATA);
  const [selectedMonth, setSelectedMonth] = useState(
    window.localStorage.getItem("selectedMonth")
  );
  const [expensesList, setExpensesList] = useState([]);

  // detail 페이지에서 가져온 삭제 id를 적용해 삭제하는 useEffect
  useEffect(() => {
    if (location.state !== null) {
      if (location.state.deletedExpenses) {
        const { deletedExpenses } = location.state.deletedExpenses;

        setExpenses(deletedExpenses);
        navigate(location.pathname, { state: null, replace: true });
      }
      if (location.state.updatedExpenses) {
        const { updatedExpenses } = location.state.updatedExpenses;

        setExpenses(updatedExpenses);
        navigate(location.pathname, { state: null, replace: true });
      }
    }
  }, []);

  // selectedMonth가 null일 경우 1로 설정
  useEffect(() => {
    if (selectedMonth === null) {
      window.localStorage.setItem("selectedMonth", 1);
      setSelectedMonth(1);
    }
  }, []);

  // form을 통해 추가될 때마다 expensesList 변경으로 바로 화면에 나오도록 함.
  useEffect(() => {
    setExpensesList(
      expenses.filter((expense) => {
        return +expense.date.slice(5, 7) === +selectedMonth;
      })
    );
  }, [expenses]);
  return (
    <StDiv>
      <ExpenseForm selectedMonth={selectedMonth} setExpenses={setExpenses} />
      <MonthsList
        expenses={expenses}
        setExpensesList={setExpensesList}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <ExpensesList expenses={expenses} expensesList={expensesList} />
    </StDiv>
  );
};

export default Home;
