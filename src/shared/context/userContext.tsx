import React from "react";
import { useUserData } from "../../hooks/useUserData";

export interface IUserContexData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContexData>({});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data] = useUserData();
  return (
    <>
      <userContext.Provider value={data}>{children}</userContext.Provider>
    </>
  );
}
