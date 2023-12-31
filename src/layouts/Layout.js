import "../css/App.css";
import NavButton from "../components/NavButton";

function Layout({ children }) {
  return (
    <div className="App">
      <header className="App-header">
        <NavButton to="/" name="Trends" />
      </header>
      <div className="children">{children}</div>
    </div>
  );
}

export default Layout;
