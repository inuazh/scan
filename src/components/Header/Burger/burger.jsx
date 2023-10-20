import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import scan from "../../../data/images/scan-footer.svg";
import userpic from "../../../data/images/userpic.png";
import store from "../../store";
import "./burger.css";
import { observer } from "mobx-react-lite";


const Burger = observer(() => {
  
  const [isActive, setActive] = useState(false);

  const login = localStorage.getItem("login");

  useEffect(() => {
    store.checkToken();
    store.getCompaniesInfo();
  }, []);

  return (
    <div className="burger-open" onClick={() => setActive(true)}>
      {isActive ? (
        <div className="burger-menu">
          <div className="burger-top">
            <img className="burger-logo" src={scan} />
            <btn
              className="burger-close"
              onClick={(e) => {
                e.stopPropagation();
                setActive(false);
              }}
            ></btn>
          </div>
          <nav className="burger-nav">
            <Link className="headnav__link" to="/">
              Главная
            </Link>
            <Link className="headnav__link" to="#rates">
              Тарифы
            </Link>
            <Link className="headnav__link" to="#">
              FAQ
            </Link>
          </nav>
          {store.token ? (
            <div className="burger__user-info">
              <span className="burger__username">{login}</span>
              <img
                className="burger__user-avatar"
                src={userpic}
           
              />
              <button
                className="burger__logout"
                onClick={() => {
                  store.setToken("");
                  localStorage.clear();
                }}
              >
                <Link to="/">Выйти</Link>
              </button>
            </div>
          ) : (
            <div className="burger__not-signed">
              <Link className="burger__sign-up" to="#">
                Зарегистрироваться
              </Link>
              <Link className="burger__sign-in" to="/auth">
                Войти
              </Link>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
});

export default Burger;

