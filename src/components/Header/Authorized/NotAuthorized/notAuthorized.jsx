import React from "react";
import "./notAuthorized.css";
import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="not-authorized">
      <Link className="sign-up" to="#">
        Зарегистрироваться
      </Link>
      <div className="Divider"></div>
      <Link className="sign-in" to="/auth">
        Войти
      </Link>
    </div>
  );
};

export default NotAuthorized;
