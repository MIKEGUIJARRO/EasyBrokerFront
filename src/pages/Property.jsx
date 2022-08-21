import { useQuery, useQueryClient } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { Scaffold } from "../components/Scaffold";
import { ContactForm } from "../components/ContactForm";
import { getProperty } from "../utils/api";

export const Property = () => {
  const { id } = useParams();

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { isLoading, error, data, refetch } = useQuery(
    ["property"],
    getProperty.bind(this, id)
  );

  return (
    <div>
      <Scaffold>
        <div className="py-12">
          <h1 className="text-4xl font-bold">
            {isLoading ? "Cargando..." : data?.data.title}
          </h1>
        </div>
        <div>
          {isLoading && <div>"Cargando..."</div>}
          {data?.data && (
            <div className="space-y-4">
              <div
                style={{
                  backgroundImage: `url(${data.data?.property_images[0].url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="h-[24rem] rounded-3xl p-4 bg-slate-300"
              >
                <span className="px-2 py-2 bg-blue-500 text-white rounded-xl">
                  {data.data?.operations[0].type}
                </span>
              </div>
              <div className="space-y-4 p-8 rounded-3xl bg-white">
                <div>
                  <h2 className="text-xl font-semibold">ID</h2>
                  <p className="text-base font-semibold text-gray-500">
                    {data.data?.public_id}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Descripcion</h2>
                  <p className="text-base font-semibold text-gray-500">
                    {data.data?.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Ubicación</h2>
                  <p className="text-base font-semibold text-gray-500">
                    {data.data?.location.name}
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          )}
          <ContactForm id={id} />
        </div>
      </Scaffold>
    </div>
  );
};
