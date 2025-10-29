import React from "react";

const AuthProvider = ({ children }) => {
  const authinfo = {};
  return <AuthContext value={authinfo}>{children}</AuthContext>;
};

export default AuthProvider;
