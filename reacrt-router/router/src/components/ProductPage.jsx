import React from "react";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  // useNavigate là một hook trong react -router - dom
  const navigate = useNavigate();
  return (
    <div>
      {/* useNavigate dùng để điều hướng trang */}
      <button onClick={() => navigate("contact")}>Click go to Contact</button>
      {/* useNavigate với history  */}
      <button onClick={() => navigate(-2)}>Click go to Back Back</button>
      <button onClick={() => navigate(-1)}>Click go to Back</button>
      <button onClick={() => navigate(1)}>Click go to Next</button>
      <button onClick={() => navigate(2)}>Click go to Next Next</button>
      {/* useNavigate với replace */}
      {/* Khi sử dụng useNavigate với replace sẽ giống với khi điều hướng trang nhưng
        nếu replace = true thì sẽ không lưu lại history */}
      <button onClick={() => navigate("/contact", { replace: true })}>
        Go to Contact
      </button>

      {/* useNavigate để chuyển dữ liệu */}
      <button onClick={() => navigate("/contact", { state: { count: 10 } })}>
         Contact with data
      </button>
    </div>
  );
}

export default ProductPage;
