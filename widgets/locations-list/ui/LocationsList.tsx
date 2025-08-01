"use client";
import {useEffect, useState} from "react";
import {
    Locations,
    useGetLocationsQuery,
} from "@/features/fetch-locations/FetchLocationsSlice";

export const LocationsList = () => {
    const [page, setPage] = useState(1);
    const [allLocations, setAllLocations] = useState<Locations[]>([]);

    const { data, isFetching } = useGetLocationsQuery({ page });

    useEffect(() => {
        if (data?.results) {
            setAllLocations((prev) => [...prev, ...data.results]);
        }
    }, [data]);

    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <div className="max-w-[1440px] mx-auto my-[40px]">
            <div
                className={`${
                    !isFetching ? "grid grid-cols-4 md:grid-cols-6 gap-4" : ""
                }`}
            >
                {isFetching && allLocations.length === 0 ? (
                    <div className="text-[32px] text-white mx-auto">loading...</div>
                ) : (
                    allLocations.map((loc) => (
                        <div
                            className="bg-gray-800 p-4 rounded text-white shadow"
                            key={loc.id}
                        >
                            <h2 className="text-yellow-400 text-lg font-bold">{loc.name}</h2>
                            <p className="text-sm">Тип: {loc.type}</p>
                            <p className="text-sm">Измерение: {loc.dimension}</p>
                            <p className="text-sm">Жителей: {loc.residents.length}</p>
                        </div>
                    ))
                )}
            </div>

            {data?.info?.next && (
                <div className="text-center mt-6">
                    <button
                        onClick={handleLoadMore}
                        disabled={isFetching}
                        className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                        {isFetching ? "Загрузка..." : "Показать ещё"}
                    </button>
                </div>
            )}
        </div>
    );
};
