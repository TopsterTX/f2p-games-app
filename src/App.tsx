import React, { useEffect } from "react";
import s from "./App.module.css";
import { Header, Main, Aside } from "./containers";
import { useTypedDispatch, useTypedSelector } from "./hooks";
import { changeDisplayAside } from "./store/reducers/aside/asideActions";

const App: React.FC<{}> = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { isOpen } = useTypedSelector((state) => state.aside);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isOpen]);

  function clickHandler(e: React.MouseEvent<HTMLDivElement>): void {
    e.stopPropagation();

    if (isOpen === true) dispatch(changeDisplayAside(false));
    else return;
  }

  return (
    <div className={s.page} onClick={clickHandler}>
      <Header />
      <Main />
      <Aside />
    </div>
  );
};

export default App;
