import { useCartState } from "context/cartContext";

function App() {
  const state = useCartState();

  console.log("state:", state);
  return (
    <div className="App">
      <header className="App-header">index</header>
      <div>hello1</div>
    </div>
  );
}

export default App;
