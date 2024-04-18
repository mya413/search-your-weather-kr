import styled from "styled-components";

import { locationInfo } from "@/utils/filteredLocation";
import { useEffect } from "react";
import api from "@/services/api";
import { data } from "@/utils/filteredDatas";
import Header from "./Header";
import HeaderInfo from "./HeaderInfo";
import Main from "./Main";

interface CardProps {
  $isCardOpen: boolean;
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  locationInfo: locationInfo[];
  data: data[];
  setData: React.Dispatch<React.SetStateAction<data[]>>;
}

export default function Card({
  $isCardOpen,
  setIsCardOpen,
  locationInfo,
  data,
  setData,
}: CardProps) {
  useEffect(() => {
    api(setData, locationInfo);
  }, [locationInfo]);

  return (
    <CardStyle $isCardOpen={$isCardOpen}>
      <CardInnerBlock>
        <Header setIsCardOpen={setIsCardOpen} locationInfo={locationInfo} />
        <HeaderInfo />
        <Main data={data} />
      </CardInnerBlock>
    </CardStyle>
  );
}

const CardStyle = styled.article<{ $isCardOpen: boolean }>`
  width: ${(props) => (props.$isCardOpen ? "100%" : "0")};
  height: 100%;
  padding-top: 101px;
  transition: all 0.5s;

  @media screen and (max-width: 1024px) {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-top: 0;
    height: ${(props) => (props.$isCardOpen ? "50%" : "0")};
    transition: all 0.5s;
  }
`;

const CardInnerBlock = styled.div`
  height: 100%;
  padding: 50px;
  background: linear-gradient(#6dbef9, #e7f4ff);
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;

  @media screen and (max-width: 1024px) {
    border-top-right-radius: 60px;
    border-bottom-left-radius: 0;
  }
`;
