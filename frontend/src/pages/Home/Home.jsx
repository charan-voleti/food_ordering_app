import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDowload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedDishId) {
      const element = document.getElementById(
        `dish-${location.state.selectedDishId}`
      );
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.style.boxShadow = "0 0 15px orange";
          element.style.borderRadius = "8px";

          // remove highlight after 2 seconds
          setTimeout(() => {
            element.style.boxShadow = "none";
          }, 2000);
        }, 500);
      }
    }
  }, [location.state]);

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
