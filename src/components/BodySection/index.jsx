import { useState } from "react";
import { useFetchData } from "~/hooks/useFetchData";
import { Filters } from "~/components/Filters";
import { Navigation } from "~/components/Navigation";
import { Results } from "~/components/Results";

const DATE = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

import "./styles.css";
export const BodySection = () => {
  const [selectedRover, setSelectedRover] = useState("curiosity");
  const [page, setPage] = useState(1);
  const [camera, setCamera] = useState("all");
  const [dateFilter, setDateFilter] = useState(DATE);
  const [sunFilter, setSunFilter] = useState(1000);

  const { data, loading, error } = useFetchData({
    page,
    selectedRover,
    camera,
    dateFilter,
    sunFilter,
  });
  const handleRoverSelect = (rover) => {
    setSelectedRover(rover);
  };
  const handleCameraSelect = (camera) => {
    setCamera(camera.target.value);
  };
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section className="results--container">
      <Filters
        handleRoverSelect={handleRoverSelect}
        selectedRover={selectedRover}
        camera={camera}
        handleCameraSelect={handleCameraSelect}
        setDateFilter={setDateFilter}
        setSunFilter={setSunFilter}
      />
      {data && data.photos.length <= 0 ? (
        <h2>No results found. Try with different filters.</h2>
      ) : (
        data &&
        data.photos && (
          <Results loading={loading} error={error} data={data.photos} />
        )
      )}
      <Navigation
        page={page}
        length={data?.photos?.length}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </section>
  );
};
