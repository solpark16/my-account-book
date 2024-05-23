import React from "react";
import styled from "styled-components";

const StMonthsListDiv = styled.div`
  padding: 30px;
  border-radius: 30px;
  border: 1px solid red;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;
const monthsList = [
  {
    name: "jan",
    number: 1,
    isActive: true,
    backColor: "green",
  },
  {
    name: "feb",
    number: 2,
    isActive: false,
    backColor: "white",
  },
  {
    name: "mar",
    number: 3,
    isActive: false,
    backColor: "white",
  },
  {
    name: "apr",
    number: 4,
    isActive: false,
    backColor: "white",
  },
  {
    name: "may",
    number: 5,
    isActive: false,
    backColor: "white",
  },
  {
    name: "jun",
    number: 6,
    isActive: false,
    backColor: "white",
  },
  // {
  //   name: "jul",
  //   number: 7,
  //   isActive: false,
  // },
  // {
  //   name: "aug",
  //   number: 8,
  //   isActive: false,
  // },
  // {
  //   name: "sep",
  //   number: 9,
  //   isActive: false,
  // },
  // {
  //   name: "oct",
  //   number: 10,
  //   isActive: false,
  // },
  // {
  //   name: "nov",
  //   number: 11,
  //   isActive: false,
  // },
  // {
  //   name: "dec",
  //   number: 12,
  //   isActive: false,
  // },
];
const StMonthButton = styled.button`
  border: 1px solid black;
  width: 104px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.$backcolor ? "green" : "white")};
`;
const MonthsList = ({
  expenses,
  setExpensesList,
  selectedMonth,
  setSelectedMonth,
}) => {
  const changeMonthHandler = (number) => {
    window.localStorage.setItem("selectedMonth", number);
    setSelectedMonth(number);
    setExpensesList(
      expenses.filter((expense) => {
        return +expense.date.slice(5, 7) === number;
      })
    );
  };
  return (
    <StMonthsListDiv>
      {monthsList.map((month) => {
        return (
          <StMonthButton
            $backcolor={month.number === +selectedMonth}
            onClick={() => changeMonthHandler(month.number)}
            key={month.number}
          >
            {month.number}월
          </StMonthButton>
        );
      })}
    </StMonthsListDiv>
  );
};

export default MonthsList;
