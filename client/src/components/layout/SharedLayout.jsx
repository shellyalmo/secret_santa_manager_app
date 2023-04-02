import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
export default SharedLayout;
