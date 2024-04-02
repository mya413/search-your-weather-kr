import styled from "styled-components";
import InputButton from "../atoms/InputButton";

interface SearchInputProps {
  isVisible: boolean;
}

export default function SearchInput({ isVisible }: SearchInputProps) {
  return (
    <SearchInputStyle isVisible={isVisible}>
      <label htmlFor="searchInput">
        도시 이름을 영어로 입력할 경우, 정부에서 지정한 영문 주소의 스펠링과
        동일해야 검색이 가능합니다.
      </label>
      <div>
        <input
          id="searchInput"
          type="text"
          placeholder="e.g. Seoul, Incheon, Busan, Jeolla..."
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
  top: ${(props) => (props.isVisible ? "-10%" : "10%")};
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

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
  & > button {
    position: absolute;
    right: 35px;
    top: 72px;

    &:hover {
      & > svg {
        color: #222;
        transition: all 0.3s;
      }
    }

    & > svg {
      font-size: 20px;
      color: #bbb;
      transition: all 0.3s;
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

  @media screen and (max-width: 768px) {
    & > label {
      font-size: 10px;
    }
  }
`;
