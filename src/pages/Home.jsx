import React from "react";
import { CardProperty } from "../components/CardProperty";
import { Scaffold } from "../components/Scaffold";

export const Home = () => {
  return (
    <div>
      <Scaffold>
        <div>
          <h1 className="text-lg">Hola</h1>
          <div>
            <CardProperty
              title={"Title"}
              location={"Location"}
              publicId={"PublicId"}
              type={"Type"}
              key={"PublicId"}
              imageThumbnail={"https://picsum.photos/seed/picsum/200/300"}
            />
          </div>
        </div>
      </Scaffold>
    </div>
  );
};
