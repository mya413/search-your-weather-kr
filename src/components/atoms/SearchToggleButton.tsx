import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface SearchToggleProps {
  $isSearchToggle: boolean;
  setIsSearchToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchToggleButton({
  $isSearchToggle,
  setIsSearchToggle,
}: SearchToggleProps) {
  const toggleHandler = () => {
    setIsSearchToggle(!$isSearchToggle);
  };

  return (
    <SearchToggleButtonStyle type="button" onClick={toggleHandler}>
      <FaSearch />
    </SearchToggleButtonStyle>
  );
}

const SearchToggleButtonStyle = styled.button`
  position: absolute;
  right: 30px;
  top: 40px;

  & > svg {
    font-size: 20px;
    color: #bbb;
  }

  @media screen and (max-width: 767px) {
    & > svg {
      font-size: 16px;
    }
  }
`;
