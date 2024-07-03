import Menu from "./menu";
import Home from "../pages/Home";
import { 
    Outlet,
    useNavigation,
 } from "react-router-dom";

export default function Root() {
    const navigation = useNavigation();

    return (
      <>
        <Menu />
        <Home />
        <div
            id="detail"
            className={
                navigation.state === "loading" ? "loading" : ""
              }
        >
            
            <Outlet />
        </div>
      </>
    );
  }