import React from "react";
import { usePostsData } from "../../hooks/usePostsData";

export interface IPostsContexData {
  text?: React.ReactNode;
  author: string;
  title: string;
  created_utc: number;
  score: number;
  img?: string;
  [key: string]: any;
}

export const postsContext = React.createContext<Array<IPostsContexData>>([]);

export function PostsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data] = usePostsData();
  return (
    <>
      <postsContext.Provider value={data}> {children} </postsContext.Provider>
    </>
  );
}
