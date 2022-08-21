import React from "react";
import { Scaffold } from "../components/Scaffold";
import { PropertyGrid } from "../components/PropertyGrid";
export const Home = () => {
  return (
    <div>
      <Scaffold>
        <div>
          <div className="py-12">
            <h1 className="text-4xl font-bold">Propiedades</h1>
          </div>
          <PropertyGrid />
          <div></div>
        </div>
      </Scaffold>
    </div>
  );
};
