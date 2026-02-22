import React from "react";
import { useParams } from "react-router-dom";
import Nagarkot from "./Nagarkot";
import Dhulikhel from "./Dhulikhel";
import Bandipur from "./Bandipur";
import Bhedetar from "./Bhedetar";
import Chandragiri from "./Chandragiri";
import Daman from "./Daman";
import Ghandruk from "./Ghandruk";
import Ilam from "./Ilam";
import Jaljala from "./Jaljala";
import Kalinchowk from "./Kalinchowk";
import PoonHill from "./PoonHill";
import Sailung from "./Sailung";
import Sarangkot from "./Sarangkot";
import Shivapuri from "./Shivapuri";
import Tansen from "./Tansen";

const DiaryDetails = () => {
  const { id } = useParams();

  // Load the appropriate diary details based on ID
  const diaryMap = {
    nagarkot: <Nagarkot />,
    dhulikhel: <Dhulikhel />,
    bandipur: <Bandipur />,
    bhedetar: <Bhedetar />,
    chandragiri: <Chandragiri />,
    daman: <Daman />,
    ghandruk: <Ghandruk />,
    ilam: <Ilam />,
    jaljala: <Jaljala />,
    kalinchowk: <Kalinchowk />,
    poonhill: <PoonHill />,
    sailung: <Sailung />,
    sarangkot: <Sarangkot />,
    shivapuri: <Shivapuri />,
    tansen: <Tansen />,
  };

  // Check if diary entry exists
  if (diaryMap[id?.toLowerCase()]) {
    return diaryMap[id?.toLowerCase()];
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2>Diary entry not found. Coming soon! 📝</h2>
    </div>
  );
};

export default DiaryDetails;
