import React, { useEffect } from "react";
import "./authorized.css";
import { observer } from "mobx-react-lite";
import avatar from "../../../data/images/userpic.png";
import Loader from "../../bide/bide";
import { Link } from "react-router-dom";

const Authorized = observer(() => {
  useEffect(() => {
    store.checkToken();
    store.getCompaniesInfo();
  }, []);
  const login = localStorage.getItem("login");
  return (
    <div className="authorized">
      <div className="companies-wrapper">
        {store.isCompaniesLoading ? (
          <Loader />
        ) : (
          <>
            <p className="companies-info">
              Использовано компаний
              <span className="companies-number">
                {store.companiesInfo.used}
              </span>
            </p>
            <p className="companies-info">
              Лимит по компаниям
              <span className="companies-number companies-number__limit">
                {store.companiesInfo.limit}
              </span>
            </p>
          </>
        )}
      </div>
      <div className="user-info">
        <span className="username">{login}</span>
        <button
          className="logout"
          onClick={() => {
            store.setToken("");
            localStorage.clear();
          }}
        >
          <Link className="header-nav__link" to="/">
            Выйти
          </Link>
        </button>
      </div>
      <img className="userpic" src={avatar}  />
    </div>
  );
});

export default Authorized;
