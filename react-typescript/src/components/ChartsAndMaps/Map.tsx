import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet"; // Import Leaflet with type annotations
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { locations } from "../../types/map.type";
import Loading from "../utils/Loading";
import ErrorComponent from "../utils/Error";

const customIcon = new L.Icon({
  iconUrl: require("../../icons/placeholder.png"),
  iconSize: [38, 38],
});

const fetchMapData = async(): Promise<locations> => {
  try {
    return await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const createClusterCustomIcon = function (cluster: any) {
  return new L.DivIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: L.point(33, 33, true),
  });
};

export default function Map() {
  const { data, isError,isLoading } = useQuery<locations>("map-data", fetchMapData);
  if (isLoading) return <Loading />;
  if (isError) return <ErrorComponent />;
  return (
    <div className="grow">
      <div className="flex m-9 ml-12 w-100">
        <MapContainer className="m-auto" center={[0, 0]} zoom={2}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {data?.data?.map(
              ({ country, countryInfo, active, recovered, deaths }, index) => (
                <Marker
                  key={index}
                  position={[countryInfo.lat, countryInfo.long]}
                  icon={customIcon}
                >
                  <Popup>
                    Country Name : {country}
                    <br />
                    No of Active cases : {active}
                    <br />
                    No of Recovered cases : {recovered}
                    <br />
                    No of deaths : {deaths}
                    <br />
                  </Popup>
                </Marker>
              )
            )}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
}
