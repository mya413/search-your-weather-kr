import CloseButton from "@/components/atoms/CloseButton";
import { locationInfo } from "@/utils/filteredLocation";
import styled from "styled-components";

interface HeaderProps {
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  locationInfo: locationInfo[];
}

export default function Header({ setIsCardOpen, locationInfo }: HeaderProps) {
  return (
    <HeaderStyle>
      <h3>{`Weather in ${locationInfo[0]?.title[0]}`}</h3>
      <CloseButton setIsCardOpen={setIsCardOpen} />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h3 {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
  }

  @media screen and (max-width: 767px) {
    & > h3 {
      font-size: 24px;
      line-height: 1.2;
    }
  }
`;
