import { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "@/components/atoms/Logo";
import Greeting from "@/components/atoms/Greeting";
import SearchToggleButton from "@/components/atoms/SearchToggleButton";
import SearchInput from "@/components/molecules/SearchInput";
import Card from "@/components/molecules/Card";
import Map from "@/components/atoms/Map";
import Api from "@/services/api";

export default function Home() {
  const [isSearchToggle, setIsSearchToggle] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    Api(setData, locationInfo);
  }, [locationInfo]);

  return (
    <HomeStyle>
      <div>
        <Logo />
        <Greeting />
        <SearchToggleButton
          $isSearchToggle={isSearchToggle}
          setIsSearchToggle={setIsSearchToggle}
        />
      </div>
      <SearchInput
        $isSearchToggle={isSearchToggle}
        setIsSearchToggle={setIsSearchToggle}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        locationInfo={locationInfo}
        setLocationInfo={setLocationInfo}
      />
      <div>
        <Map setLocationInfo={setLocationInfo} />
        {locationInfo && isCardOpen ? (
          <Card
            isCardOpen={isCardOpen}
            setIsCardOpen={setIsCardOpen}
            data={data}
            locationInfo={locationInfo}
            setLocationInfo={setLocationInfo}
            setData={setData}
          />
        ) : null}
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }

  & > div:last-child {
    width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    & > div:last-child {
      display: block;
      position: relative;
    }
  }

  @media screen and (max-width: 767px) {
    & > div:first-child {
      justify-content: flex-start;
    }
  }
`;
