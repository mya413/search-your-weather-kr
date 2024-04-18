import { useState } from "react";
import styled from "styled-components";
import SearchInput from "@/components/molecules/SearchInput";
import { data } from "@/utils/filteredDatas";
import { locationInfo } from "@/utils/filteredLocation";
import Header from "@/components/molecules/Header";
import Main from "@/components/molecules/Main";

export default function Home() {
  const [$isSearchToggle, setIsSearchToggle] = useState(false);
  const [$isCardOpen, setIsCardOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState<data[]>([]);
  const [locationInfo, setLocationInfo] = useState<locationInfo[]>([]);

  return (
    <HomeStyle>
      <Header
        $isSearchToggle={$isSearchToggle}
        setIsSearchToggle={setIsSearchToggle}
      />
      <SearchInput
        $isSearchToggle={$isSearchToggle}
        setIsSearchToggle={setIsSearchToggle}
        setIsCardOpen={setIsCardOpen}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        setLocationInfo={setLocationInfo}
      />
      <Main
        $isCardOpen={$isCardOpen}
        setIsCardOpen={setIsCardOpen}
        locationInfo={locationInfo}
        setLocationInfo={setLocationInfo}
        data={data}
        setData={setData}
      />
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
