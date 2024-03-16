import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  
  return (
      //Once user is logged in, check if session is present and do cool stuffs
    <div className="">
      {!session && (
        <div>
          <p>Not logged in</p>
          <button onClick={() => signIn()}>Log In</button>
        </div>
      )}
      {session && (
        <div>
          <p>Logged in as {session.user.name}</p>
          <button onClick={() => signOut()}>Log out</button>
        </div>
      )}
    </div>
  );
}
