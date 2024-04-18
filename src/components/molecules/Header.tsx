import styled from "styled-components";
import Logo from "@/components/atoms/Logo";
import Greeting from "@/components/atoms/Greeting";
import SearchToggleButton from "@/components/atoms/SearchToggleButton";

interface HeaderProps {
  $isSearchToggle: boolean;
  setIsSearchToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  $isSearchToggle,
  setIsSearchToggle,
}: HeaderProps) {
  return (
    <HeaderStyle>
      <Logo />
      <Greeting />
      <SearchToggleButton
        $isSearchToggle={$isSearchToggle}
        setIsSearchToggle={setIsSearchToggle}
      />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
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

  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`;
