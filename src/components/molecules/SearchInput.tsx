import { ChangeEventHandler, KeyboardEventHandler } from "react";
import styled from "styled-components";
import DeleteButton from "../atoms/DeleteButton";
import { filteredLocationTitle } from "@/utils/filteredLocation";
import { locationInfo } from "@/utils/filteredLocation";

interface SearchInputProps {
  $isSearchToggle: boolean;
  setIsSearchToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputSearch: string;
  setInputSearch: React.Dispatch<React.SetStateAction<string>>;
  setLocationInfo: React.Dispatch<React.SetStateAction<locationInfo[]>>;
}

export default function SearchInput({
  $isSearchToggle,
  setIsSearchToggle,
  setIsCardOpen,
  inputSearch,
  setInputSearch,
  setLocationInfo,
}: SearchInputProps) {
  const searchInputHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newInputValue = e.target.value;
    setInputSearch(newInputValue);
  };

  const enterKeyHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const matchedInfo = filteredLocationTitle(inputSearch);

    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter" && matchedInfo.length !== 0) {
      setLocationInfo(matchedInfo);
      setIsCardOpen(true);
      setIsSearchToggle(false);
    } else if (e.key === "Enter" && matchedInfo.length === 0) {
      alert("일치하는 도시를 찾을 수 없습니다! 😢");
      setInputSearch("");
    }
  };

  return (
    <SearchInputStyle $isSearchToggle={$isSearchToggle}>
      <label htmlFor="searchInput">
        지도를 클릭하거나 도시 검색을 통해 날씨를 알아볼 수 있어요!
      </label>
      <div>
        <input
          id="searchInput"
          type="text"
          placeholder="날씨가 궁금한 도시명을 검색해주세요..."
          onChange={searchInputHandler}
          onKeyDown={enterKeyHandler}
          value={inputSearch}
        />
        <DeleteButton setInputSearch={setInputSearch} />
      </div>
    </SearchInputStyle>
  );
}

const SearchInputStyle = styled.section<{
  $isSearchToggle: boolean;
}>`
  width: 100%;
  position: fixed;
  background-color: #fff;
  padding: 40px 30px;
  top: ${(props) => (props.$isSearchToggle ? "101px" : "-101px")};
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 1;

  & > div {
    width: 70%;
    position: relative;

    & > input {
      width: 100%;
      height: 40px;
      font-size: 12px;
      padding: 0 10px;
      border-radius: 20px;
      border: 1px solid #bbb;
      background-color: #eee;
      outline-color: #86c5ff;
    }
  }

  & > label {
    font-size: 14px;
    color: #86c5ff;
    font-weight: 600;
    margin-bottom: 20px;
    transition: all 0.3s;
  }

  @media screen and (max-width: 1024px) {
    & > label {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 767px) {
    & > div {
      width: 100%;
    }

    & > label {
      font-size: 12px;
      line-height: 1.6;
    }
  }
`;
