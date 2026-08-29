import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { auth } from "../src/utils/firebase";
import { useEffect } from "react";
const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=>unsubscribe()
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
