import { ReactComponent as MapImage } from "@/assets/map.svg";
import styled from "styled-components";

export default function Map() {
  return (
    <MapStyles>
      <MapImage />
    </MapStyles>
  );
}

const MapStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;
