import React from "react";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";
import { Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
const FeatureTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
      {loading && <h4 className="text-center">Loading...</h4>}

      {error && <h4 className="text-center">{error}</h4>}

      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeatureTourList;
