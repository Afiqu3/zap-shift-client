import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);
  // console.log(serviceCenters);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    // console.log(location)

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log(district, coord);
      // go to the location
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="bg-white p-20 mt-10 mb-25 rounded-3xl">
      <div>
        <h2 className="text-secondary text-4xl font-extrabold mb-10">
          We are available in 64 districts
        </h2>

        <div>
          <form onSubmit={handleSearch} className="flex">
            <label className="input outline-none rounded-full bg-[#eff2f6]">
              <svg
                className="h-[1em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" name="location" required placeholder="Search" />
            </label>

            <button className="btn shadow-none bg-primary rounded-full -ml-9 z-50 font-semibold">
              Search
            </button>
          </form>
        </div>

        <div className="mt-22">
          <h3 className="my-22 font-bold text-secondary text-2xl">
            We deliver almost all over Bangladesh
          </h3>

          <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={false}
            className="h-[550px]"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {serviceCenters.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br /> Service Area:{" "}
                  {center.covered_area.join(", ")}.
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
