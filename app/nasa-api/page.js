"use client";

import { useState } from "react";

import ApodForm from "../components/ApodForm";
import ApodContent from "../components/ApodContent";

const NASA_API_URL = "https://api.nasa.gov/planetary/apod";

export default function NasaApi() {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchApodData = async (params) => {
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY || "";
    let apiUrl = `${NASA_API_URL}?api_key=${apiKey}`;

    for (const key in params) {
      apiUrl += `&${key}=${params[key]}`;
    }

    try {
      setIsLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch APOD data");
      }
      const data = await response.json();
      setApodData(Array.isArray(data) ? data : [data]);
      setError("");
    } catch (err) {
      setError(err.message || "Error fetching APOD data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 py-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-blue-600">
          NASA APIs
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          Astronomy Picture of the Day
        </h1>
        <p className="text-sm text-slate-600">
          Search photos and videos from NASA&apos;s APOD feed by date range or
          count. Toggle thumbnails to include previews for video entries.
        </p>
      </div>

      <ApodForm fetchApodData={fetchApodData} isLoading={isLoading} />

      {error && (
        <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <ApodContent apodData={apodData} isLoading={isLoading} />
    </div>
  );
}
