import { useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 640);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      {phoneActive && (
        <button
          className="fixed top-4 left-7 z-30 text-2xl p-1 bg-gray-800 text-white rounded"
          onClick={() => setShowModal(true)}
        >
          <HiMenuAlt4 />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white h-full   ${
          phoneActive
            ? `z-40 w-64 top-0 fixed transform transition-transform ${
                showModal ? "translate-x-0" : "-translate-x-full"
              }`
            : "w-64 top-[60px] fixed"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {/* <h2 className="text-xl font-bold">Logo</h2> */}
          {phoneActive && (
            <button
              className="text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
          )}
        </div>
        <DivOne location={location} />
      </aside>

      {/* Overlay for Mobile */}
      {phoneActive && showModal && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setShowModal(false)}
        ></div>
      )}
    </>
  );
};

const DivOne = ({ location }) => (
  <div>
    <h5 className="text-lg font-semibold px-4">Dashboard</h5>
    <ul className="mt-4">
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/product"
        text="Product"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/admin/customer"
        text="Customer"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/transaction"
        text="Transaction"
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
);

const Li = ({ url, text, Icon, location }) => (
  <li
    className={`p-4 hover:bg-gray-700 ${
      location.pathname === url ? "bg-gray-700" : ""
    }`}
  >
    <Link to={url} className="flex items-center space-x-2">
      <Icon className="text-lg" />
      <span>{text}</span>
    </Link>
  </li>
);

export default AdminSidebar;
