
import DiceGame from "./DiceGame/components/DiceGame";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../src/DiceGame/redux/reducers/rootReducer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div>
        <DiceGame />
      </div>
    </Provider>
  );
}

export default App;
