import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMonth } from "../redux/slices/selectedMonthSilce";
import { setExpensesList } from "../redux/slices/expensesListSlice";

const StMonthsListDiv = styled.div`
  padding: 30px;
  border-radius: 30px;
  background-color: #fff;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const StMonthButton = styled.button`
  border-radius: 20px;
  font-size: 20px;
  border: none;
  width: 150px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  color: ${(props) => (props.$clicked ? "#fff" : "#000")};
  background-color: ${(props) => (props.$clicked ? "#eb6530" : "#e1e1e1")};
  &:hover {
    background-color: ${(props) => (props.$clicked ? "#b64e25" : "darkgray")};
  }
`;
const MonthsList = () => {
  const monthsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { selectedMonth } = useSelector((state) => state.selectedMonth);
  const { expenses } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const changeMonthHandler = (number) => {
    window.localStorage.setItem("selectedMonth", number);
    dispatch(setSelectedMonth(number));
    const selectedMonthExpensesList = expenses.filter((expense) => {
      return +expense.date.slice(5, 7) === number;
    });
    dispatch(setExpensesList(selectedMonthExpensesList));
    if (selectedMonthExpensesList.length === 0) {
      // 해당하는 거 없을 때 나오게 하기
    }
  };

  // selectedMonth가 null일 경우 1로 설정
  useEffect(() => {
    if (selectedMonth === null) {
      window.localStorage.setItem("selectedMonth", 1);
      dispatch(setSelectedMonth(1));
    }
  }, []);
  return (
    <StMonthsListDiv>
      {monthsList.map((month) => {
        return (
          <StMonthButton
            $clicked={month === +selectedMonth}
            onClick={() => changeMonthHandler(month)}
            key={month}
          >
            {month}월
          </StMonthButton>
        );
      })}
    </StMonthsListDiv>
  );
};

export default MonthsList;
