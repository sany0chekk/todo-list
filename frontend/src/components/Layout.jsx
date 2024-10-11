import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-[800px] px-4 mx-auto">
      <Outlet />
    </div>
  );
};

export default Layout;
