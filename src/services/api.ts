import { year, month, day, hours, minutes } from "@/utils/date";
import { locationInfo } from "@/utils/filteredLocation";
import { data } from "@/utils/filteredDatas";

export default function api(
  setFn: React.Dispatch<React.SetStateAction<data[]>>,
  locationInfo: locationInfo[]
) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;
  const BASE_DATE = year + month + day;
  const BASE_TIME = hours + String(Number(minutes) - 30);
  const LOCATION = locationInfo;

  const url = `${API_URL}?serviceKey=${API_KEY}&numOfRows=60&pageNo=1&base_date=${BASE_DATE}&base_time=${BASE_TIME}&nx=${LOCATION?.[0]?.nx}&ny=${LOCATION?.[0]?.ny}&dataType=json`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setFn(res.response.body.items.item);
    })
    .catch((err) => console.log("error:", err));
}
