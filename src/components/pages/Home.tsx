import { FC, memo } from "react";
import { Outlet } from "react-router-dom";

export const Home: FC = memo(() => {
  return (
    <div className="">
      <p>Homeページです</p>
      <Outlet />
    </div>
  );
});
