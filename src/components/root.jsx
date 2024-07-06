import Home from "../pages/Home";
import { 
    useNavigation,
 } from "react-router-dom";

export default function Root() {
    const navigation = useNavigation();

    return (
      <>
        <div
            id="detail"
            className={
                navigation.state === "loading" ? "loading" : ""
              }
        >
            
            <Home />
        </div>
      </>
    );
  }