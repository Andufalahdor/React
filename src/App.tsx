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
import { commentContext } from "./shared/context/commentContext";

export function AppComponent() {
  const [commentValue, setCommentValue] = useState("");

  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  return (
    <TokenContext.Provider value={token}>
      <UserContextProvider>
        <PostsContextProvider>
          <CommentProvider
            value={{
              value: commentValue,
              onChange: setCommentValue,
            }}
          >
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </CommentProvider>
        </PostsContextProvider>
      </UserContextProvider>
    </TokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
