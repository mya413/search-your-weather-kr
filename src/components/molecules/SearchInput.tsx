import styled from "styled-components";
import InputButton from "../atoms/InputButton";

interface SearchInputProps {
  isToggle: boolean;
}

export default function SearchInput({ isToggle }: SearchInputProps) {
  return (
    <SearchInputStyle isToggle={isToggle}>
      <label htmlFor="searchInput">
        도시 이름을 영어로 입력할 경우, 정부에서 지정한 영문 주소의 스펠링과
        동일해야 검색이 가능합니다.
      </label>
      <div>
        <input
          id="searchInput"
          type="text"
          placeholder="e.g. Seoul, Incheon, Busan..."
        />
        <InputButton />
      </div>
    </SearchInputStyle>
  );
}

const SearchInputStyle = styled.div<SearchInputProps>`
  width: 100%;
  position: fixed;
  background-color: #fff;
  padding: 40px 30px;
  top: ${(props) => (props.isToggle ? "101px" : "-101px")};
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
