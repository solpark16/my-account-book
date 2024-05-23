import React, { useRef, useState } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { expense } = location.state.expense;
  const { expenses } = location.state.expenses;
  // const { deleteExpenseHandler } = location.state.deleteExpenseHandler;
  const [date, setDate] = useState(expense.date);
  const [item, setItem] = useState(expense.item);
  const [amount, setAmount] = useState(expense.amount);
  const [description, setDescription] = useState(expense.description);
  const inputRef = useRef(null);
  const savedValueRef = useRef("");
  const handleInputChange = (e) => {
    // 입력 필드 값 변경 시 ref에 값 저장
    savedValueRef.current = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 시 저장된 값을 알림
    setDate(savedValueRef.current);
    alert(`Saved value: ${savedValueRef.current}`);
  };

  const deleteExpenseHandler = (deleteExpenseId) => {
    const deletedExpenses = expenses.filter((expense) => {
      return deleteExpenseId !== expense.id;
    });
    return deletedExpenses;
  };

  const clickTest = () => {
    const deleteExpenseId = expense.id;
    const deletedExpenses = deleteExpenseHandler(deleteExpenseId);
    navigate(`/`, { state: { deletedExpenses: { deletedExpenses } } });
  };
  return (
    <div>
      <label>날짜</label>
      <input ref={inputRef} onChange={handleInputChange} />
      {/* <label>항목</label>
      <input value={item} onChange={(e) => setItem(e.target.value)} />
      <label>금액</label>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <label>내용</label>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /> */}
      <button onClick={handleSubmit}>수정</button>
      <button onClick={clickTest}>삭제</button>
      <button>뒤로 가기</button>
    </div>
  );
};

export default Detail;

// 한번 해보는거임
