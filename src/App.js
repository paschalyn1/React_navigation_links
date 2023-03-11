import "./styles.css";
import { useState } from "react";
import Pants from "./Pants";
import Dress from "./Dress";
import Clothes from "./Clothes";
import Shoes from "./Shoes";

export default function App() {
  const [pages, setPages] = useState("");

  return (
    <div className="App">
      <button onClick={() => setPages("Shoes")}>Shoes</button>
      <button onClick={() => setPages("Clothes")}>Clothes</button>
      <button onClick={() => setPages("Dress")}>Dress</button>
      <button onClick={() => setPages("Pants")}>Pants</button>
      {
        (() => {
          if(pages === "Clothes") return <Clothes />
          if(pages === "Dress") return <Dress />
          if(pages === "Shoes") return <Shoes />
          if(pages === "Pants") return <Pants />
        })()
      }
    </div>
  );
}
