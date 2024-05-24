import styled from "styled-components";
import ExpenseForm from "../components/ExpenseForm";
import MonthsList from "../components/MonthsList";
import ExpensesList from "../components/ExpensesList";

// styled-components
const StDiv = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Home = () => {
  return (
    <StDiv>
      <ExpenseForm />
      <MonthsList />
      <ExpensesList />
    </StDiv>
  );
};

export default Home;
