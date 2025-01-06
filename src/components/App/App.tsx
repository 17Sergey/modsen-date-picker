import { FC } from "react";

import Counter from "@components/Counter";

import CrossIconUrl from "@assets/CrossIcon.svg";

export const App: FC = () => {
  return (
    <>
      <h1>Hello Library!</h1>
      <Counter />
      <img src={CrossIconUrl} />
    </>
  );
};
