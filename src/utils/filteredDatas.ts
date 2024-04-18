export interface data {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}

export const filteredDatas = (data: data[]) => {
  let datas: data[] = [];

  if (data) {
    datas = [...data].filter(
      (item, idx) =>
        idx % 6 === 0 &&
        (item.category === "T1H" ||
          item.category === "SKY" ||
          item.category === "REH" ||
          item.category === "PTY" ||
          item.category === "WSD")
    );
  }
  return datas;
};
