import { year, month, day } from "@/utils/date";
import { hours, minutes } from "@/utils/time";

export default function Api(setFn: any, locationInfo: any) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_DATE = year + month + day;
  const BASE_TIME = hours + String(Number(minutes) - 30);
  const LOCATION = locationInfo;

  const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${API_KEY}&numOfRows=60&pageNo=1&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${LOCATION?.[0]?.nx}&ny=${LOCATION?.[0]?.ny}&dataType=json`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setFn(res.response.body.items.item);
    })
    .catch((err) => console.log("error:", err));
}
