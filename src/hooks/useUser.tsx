import React, { createContext, useEffect, useState } from "react";
import { storage } from "../helpers/localStorage";
import { $request } from "../api/request";

export interface IUser {
  email: string;
  id: number;
  credits: number;
  avatar: string;
}

export interface IUserContext {
  user: IUser | null;

  setUser: (user: IUser) => void;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

const useUserData = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = storage.get("token");

    const getUser = async (token: string) => {
      const config = { headers: { authorization: token } };
      const res = await $request.get("/user", config);
      setUser(res.data);
    };

    if (token) {
      getUser(token);
      return;
    }
    const createUser = async () => {
      const res = await $request.get("/user/create");
      const token: string = res.data.token;
      storage.set("token", token);

      getUser(token);
    };
    createUser();
  }, []);

  return { user, setUser };
};

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const data = useUserData();

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
