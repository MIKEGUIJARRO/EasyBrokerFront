import React from "react";

export const CardProperty = ({
  publicId,
  title,
  type,
  location,
  imageThumbnail,
}) => {
  return (
    <div className="max-w-xs w-full rounded-xl shadow-xl overflow-hidden bg-white">
      <div
        style={{ backgroundImage: `url(${imageThumbnail})` }}
        className="h-[16rem] rounded-xl p-4"
      >
        <span className="px-2 py-2 bg-blue-500 text-white rounded-xl">{type}</span>
      </div>
      <div className="p-4">{title}</div>
    </div>
  );
};
