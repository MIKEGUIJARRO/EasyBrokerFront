import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Scaffold } from "../components/Scaffold";

export const Property = () => {
  const { id } = useParams();
    
  return (
    <div>
      <Scaffold>
        <div>Property</div>
        <div>{id}</div>
      </Scaffold>
    </div>
  );
};
