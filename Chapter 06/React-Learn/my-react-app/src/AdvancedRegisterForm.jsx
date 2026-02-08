import { useState } from "react";

function AdvancedRegisterForm() {
  // ===== STATE =====
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // ===== VALIDATION FUNCTIONS =====
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  // ===== VALIDATE SINGLE FIELD (REALTIME) =====
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Họ và tên không được để trống";
        else if (value.length < 3)
          error = "Họ và tên phải có ít nhất 3 ký tự";
        break;

      case "email":
        if (!validateEmail(value))
          error = "Email không đúng định dạng";
        break;

      case "password":
        if (!validatePassword(value))
          error =
            "Mật khẩu tối thiểu 8 ký tự, gồm chữ cái và chữ số";
        break;

      case "confirmPassword":
        if (value !== form.password)
          error = "Mật khẩu xác nhận không khớp";
        break;

      case "gender":
        if (!value) error = "Vui lòng chọn giới tính";
        break;

      case "agree":
        if (!value) error = "Bạn phải đồng ý điều khoản sử dụng";
        break;

      default:
        break;
    }

    return error;
  };

  // ===== HANDLE CHANGE =====
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setForm({
      ...form,
      [name]: newValue,
    });

    setErrors({
      ...errors,
      [name]: validateField(name, newValue),
    });
  };

  // ===== HANDLE SUBMIT =====
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Tạo tài khoản thành công!");

      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        agree: false,
      });
    }
  };

  // ===== UI =====
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Form tạo tài khoản</h2>

      <input
        type="text"
        name="name"
        placeholder="Họ và tên"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && (
        <p className="error">{errors.password}</p>
      )}

      <input
        type="password"
        name="confirmPassword"
        placeholder="Xác nhận mật khẩu"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={form.gender === "male"}
            onChange={handleChange}
          />
          Nam
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={form.gender === "female"}
            onChange={handleChange}
          />
          Nữ
        </label>

        {errors.gender && (
          <p className="error">{errors.gender}</p>
        )}
      </div>

      <label>
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        Tôi đồng ý điều khoản sử dụng
      </label>
      {errors.agree && <p className="error">{errors.agree}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default AdvancedRegisterForm;
