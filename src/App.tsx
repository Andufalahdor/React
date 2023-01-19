import React, { useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { TokenContext } from "./shared/context/tokenContex";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";

export function AppComponent() {
  const [token] = useToken();

  return (
    <TokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </PostsContextProvider>
      </UserContextProvider>
    </TokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
