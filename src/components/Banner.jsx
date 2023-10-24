import { useEffect } from "react";
import { signInWithGoogle, signOut, useAuthState } from "../utils/firebase";

export default function Banner({ title }) {
  const SignInButton = () => (
    <button className="ms-auto btn btn-dark" onClick={signInWithGoogle}>
      Sign in
    </button>
  );

  const SignOutButton = () => (
    <button className="ms-auto btn btn-dark" onClick={signOut}>
      Sign out
    </button>
  );

  const AuthButton = () => {
    const [user] = useAuthState();
    return user ? <SignOutButton /> : <SignInButton />;
  };

  return (
    <div
      style={{
        backgroundColor: "#efefef",
        padding: 20,
        marginBottom: 20,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div></div>
      <h1>{title}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <AuthButton />
      </div>
    </div>
  );
}
