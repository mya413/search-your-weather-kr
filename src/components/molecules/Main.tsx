import styled from "styled-components";
import Card from "@/components/molecules/Card/Card";
import Map from "@/components/atoms/Map";
import { data } from "@/utils/filteredDatas";
import { locationInfo } from "@/utils/filteredLocation";

interface MainProps {
  $isCardOpen: boolean;
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  locationInfo: locationInfo[];
  setLocationInfo: React.Dispatch<React.SetStateAction<locationInfo[]>>;
  data: data[];
  setData: React.Dispatch<React.SetStateAction<data[]>>;
}

export default function Main({
  $isCardOpen,
  setIsCardOpen,
  locationInfo,
  setLocationInfo,
  data,
  setData,
}: MainProps) {
  return (
    <MainStyle>
      <Map
        setIsCardOpen={setIsCardOpen}
        locationInfo={locationInfo}
        setLocationInfo={setLocationInfo}
      />
      <Card
        $isCardOpen={$isCardOpen}
        setIsCardOpen={setIsCardOpen}
        locationInfo={locationInfo}
        data={data}
        setData={setData}
      />
    </MainStyle>
  );
}

const MainStyle = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: block;
    position: relative;
  }
`;
