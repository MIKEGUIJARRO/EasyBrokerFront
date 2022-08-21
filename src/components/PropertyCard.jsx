import React from "react";

export const CardProperty = ({
  publicId,
  title,
  type,
  location,
  imageThumbnail,
}) => {
  return (
    <div className="rounded-3xl shadow-xl overflow-hidden bg-white">
      <div
        style={{ backgroundImage: `url(${imageThumbnail})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}
        className="h-[16rem] rounded-3xl p-4 bg-slate-300"
      >
        <span className="px-2 py-2 bg-blue-500 text-white rounded-xl">
          {type}
        </span>
      </div>
      <div className="p-6 space-y-1">
        <p className="text-lg font-semibold truncate">{title}</p>
        <p className="text-sm font-semibold text-gray-500">{publicId}</p>
        <p className="text-sm font-semibold text-gray-500">{location}</p>
      </div>
    </div>
  );
};
