import Body from "./components/Body.jsx";
import {Provider} from 'react-redux';
import appStore from './Utils/Redux/appStore.jsx';

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
          <Body/>
      </Provider>
    </div>
  );
}

export default App;
