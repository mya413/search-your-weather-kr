import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface SearchToggleProps {
  isToggle: boolean;
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchToggleButton({
  isToggle,
  setIsToggle,
  isVisible,
  setIsVisible,
}: SearchToggleProps) {
  const toggleHandler = () => {
    setIsToggle(!isToggle);
    setIsVisible(!isVisible);
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
    transition: all 0.3s;
  }
`;
