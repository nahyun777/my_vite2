// import {useStat} from 'react'
import reactLogo from "./../../assets/logo.svg";
import viteLogo from "/vite.svg";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </div>
  );
}
