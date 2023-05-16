import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { TokenContext } from "../shared/context/tokenContex";

interface IPostsData {
  author: string;
  title: string;
  created_utc: number;
  score: number;
  img?: string;
  [key: string]: any;
}

export function usePostsData() {
  const [data, setData] = useState<Array<IPostsData>>([]);
  const token = useContext(TokenContext);
  useEffect(() => {
    axios
      .get("https://oauth.reddit.com/best.json?sr_detail=true", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const postsDataArr: Array<IPostsData> = resp.data.data.children.map(
          (currentValue: any) => {
            return {
              author: currentValue.data.author,
              title: currentValue.data.title,
              created_utc: currentValue.data.created_utc,
              score: currentValue.data.score,
              img: currentValue.data.sr_detail.banner_img,
              key: currentValue.data.id
            };
          }
        );
        setData(postsDataArr);
      })
      .catch(console.log);
  }, [token]);
  return [data];
}
