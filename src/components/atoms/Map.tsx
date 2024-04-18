import { MouseEventHandler } from "react";
import { filteredLocationId } from "@/utils/filteredLocation";
import styled from "styled-components";
import { ReactComponent as MapImage } from "@/assets/map.svg";
import { locationInfo } from "@/utils/filteredLocation";

interface MapProps {
  setIsCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  locationInfo: locationInfo[];
  setLocationInfo: React.Dispatch<React.SetStateAction<locationInfo[]>>;
}

export default function Map({
  setIsCardOpen,
  locationInfo,
  setLocationInfo,
}: MapProps) {
  const mapClickedHandler: MouseEventHandler<SVGSVGElement> = (e) => {
    const map = e.target as SVGPathElement;
    const mapId = map.id;
    const matchedInfo = filteredLocationId(mapId);

    if (locationInfo && mapId) {
      const activeMap = document.querySelector(".active");

      setLocationInfo(matchedInfo);
      setIsCardOpen(true);
      map.classList.add("active");

      if (activeMap) {
        activeMap.classList.remove("active");
      }
    }
  };

  return (
    <MapStyles>
      <MapImage onClick={mapClickedHandler} />
    </MapStyles>
  );
}

const MapStyles = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;
