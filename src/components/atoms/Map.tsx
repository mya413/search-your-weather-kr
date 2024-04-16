import { ReactComponent as MapImage } from "@/assets/map.svg";
import { MouseEventHandler } from "react";
import styled from "styled-components";
import { location } from "@/utils/location";

interface MapProps {
  setLocationInfo: any;
}

export default function Map({ setLocationInfo }: MapProps) {
  const onClickHandler: MouseEventHandler<SVGSVGElement> = (e) => {
    const element = e.target as SVGPathElement;
    const clickedElementId = element.id;
    const isLocationMatched = location.filter(
      (loc) => loc.id === clickedElementId
    );

    if (isLocationMatched && clickedElementId) {
      const activeElement = document.querySelector(".active");

      element.classList.add("active");
      setLocationInfo(isLocationMatched);

      if (activeElement) {
        activeElement.classList.remove("active");
      }
    }
  };

  return (
    <MapStyles>
      <MapImage onClick={onClickHandler} />
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
