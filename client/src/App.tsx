import { Provider } from "react-redux";
import SocketProvider from "./context/socketContext";

import { store } from "./app/store";
import { router } from "./route/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <SocketProvider>
          {/* <LoginPage /> */}
          <RouterProvider router={router} />
        </SocketProvider>
      </Provider>
    </>
  );
}

export default App;
