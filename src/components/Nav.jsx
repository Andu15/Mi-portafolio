import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
  )
}

export default Nav;
