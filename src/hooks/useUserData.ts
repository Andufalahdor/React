import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { TokenContext } from "./../shared/context/tokenContex";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const [data, setData] = useState<IUserData>({});
  const token = useContext(TokenContext);

  useEffect(() => {
    if (!token || token === "undefined") return;

    axios
      .get("https://oauth.reddit.com/api/v1/me.json?raw_json=1", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        const icon = userData.icon_img.split('?')[0];
        setData({ name: userData.name, iconImg: icon });
      })
      .catch(console.log);
  }, [token]);
  return [data];
}
