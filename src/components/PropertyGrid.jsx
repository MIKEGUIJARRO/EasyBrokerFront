import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProperties } from "../utils/api";
import { CardProperty } from "../components/PropertyCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const PropertyGrid = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 15,
  });

  useEffect(() => {
    refetch();
  });

  const prevPageHandler = () => {
    if (pagination.page === 1) {
      return;
    }
    setPagination((prevState) => ({
      ...prevState,
      page: prevState.page - 1,
    }));
  };

  const nextPageHandler = () => {
    if (!isNextPageAvailable()) {
      return;
    }
    setPagination((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  };

  const isNextPageAvailable = () => {
    return data?.data?.pagination?.next_page !== null;
  };

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { isLoading, error, data, refetch } = useQuery(
    ["properties"],
    getProperties.bind(this, pagination)
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data?.content.map((property) => (
          <CardProperty
            title={property.title}
            location={property.location}
            publicId={property.public_id}
            type={property.operations[0].type}
            key={property.public_id}
            imageThumbnail={property.title_image_full}
          />
        ))}
      </div>

      <PaginationButtons
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
        page={pagination.page}
        isNextPageAvailable={isNextPageAvailable()}
      />
    </div>
  );
};

const PaginationButtons = ({
  prevPageHandler,
  nextPageHandler,
  page,
  isNextPageAvailable,
}) => {
  return (
    <div className="p-8 flex justify-center items-center space-x-4">
      {/* Prev Page */}
      <button
        className="p-2 bg-slate-300 rounded-xl font-bold disabled:text-slate-500 disabled:bg-slate-200"
        onClick={prevPageHandler}
        disabled={page === 1 ? true : false}
      >
        <div className="flex justify-center items-center pr-2">
          <HiChevronLeft className="w-6 h-auto p-0" />
          <span>Anterior</span>
        </div>
      </button>
      {/* Page */}
      <div className="p-2 rounded-xl font-bold w-10 flex justify-center">
        {page}
      </div>
      {/* Next Page */}
      <button
        className="p-2 bg-slate-300 rounded-xl font-bold"
        onClick={nextPageHandler}
        disabled={!isNextPageAvailable}
      >
        <div className="flex justify-center items-center pl-2 disabled:text-slate-500 disabled:bg-slate-200">
          <span>Siguiente</span>
          <HiChevronRight className="w-6 h-auto" />
        </div>
      </button>
    </div>
  );
};
