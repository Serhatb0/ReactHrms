import React, {useState} from "react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";


export default function Navi() {
  const [isAuthenticated, setisAuthenticated] = useState(true)

  function handleSignOut(){
    setisAuthenticated(false)
  }

  function handleSignIn(){
    setisAuthenticated(true)
  }

  


  return (
    <div>
      {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
    </div>
  );
}
