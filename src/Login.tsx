import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import PreLoginNav from "./Navigation/PreLoginNav";
// import SummerMix from "./Mixes/SummerMix";
// import WinterMix from "./Mixes/WinterMix";
import { useNavigate } from "react-router-dom";

function Login() {
  //   const [showSummerMix, setShowSummerMix] = useState(false);
  //   const [showWinterMix, setShowWinterMix] = useState(false);
  const navigate = useNavigate();

  function goToWinterMix() {
    navigate("/wintermix");
  }

  function goToSummerMix() {
    navigate("/summermix");
  }

  function goToCustomMix() {
    navigate("/custommix");
  }

  //   function summermixes() {
  //     setShowSummerMix((prev) => !prev);
  //   }
  //   function winterMixes() {
  //     setShowWinterMix((prev) => !prev);
  //   }

  return (
    <>
      <div>
        <PreLoginNav />
      </div>

      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>{user?.signInDetails?.loginId}'s Console</h1>
            <h3>Click on the mix you are using</h3>

            <button onClick={goToSummerMix}>Summer Mix</button>

            <button onClick={goToWinterMix}>Winter Mix</button>

            <button onClick={goToCustomMix}>Custom Mix</button>

            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </>
  );
}
export default Login;
