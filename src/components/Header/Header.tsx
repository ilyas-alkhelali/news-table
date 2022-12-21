import React from "react";
import { useGetDate } from "../../hooks/useGetDate";
import s from "./Header.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { date } = useGetDate();
  const goTo = useNavigate();
  return (
    <div className={s.title_container}>
      <div className={s.disabled_text}>
        <div className={s.title}>
          <div>WORLD WIDE NEWS</div>
        </div>
        <div className={s.date_field}>{date}</div>
      </div>
      {window.location.pathname !== "/" && (
        <div className={s.active_text} onClick={() => goTo(-1)}>
          <div className={s.link}>{"<-"} go back</div>
        </div>
      )}
    </div>
  );
};

export default Header;
