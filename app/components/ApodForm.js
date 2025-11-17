"use client";

import { useState } from "react";

const ApodForm = ({ fetchApodData, isLoading }) => {
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [count, setCount] = useState("");
  const [thumbs, setThumbs] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {};
    if (date) params.date = date;
    if (startDate) params.start_date = startDate;
    if (endDate) params.end_date = endDate;
    if (count) params.count = count;
    if (thumbs) params.thumbs = true;
    fetchApodData(params);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">
            Date (YYYY-MM-DD)
          </label>
          <input
            className="rounded border border-slate-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">Count</label>
          <input
            className="rounded border border-slate-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="number"
            min="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            placeholder="1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">
            Start Date (YYYY-MM-DD)
          </label>
          <input
            className="rounded border border-slate-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">
            End Date (YYYY-MM-DD)
          </label>
          <input
            className="rounded border border-slate-300 p-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          type="checkbox"
          checked={thumbs}
          onChange={(e) => setThumbs(e.target.checked)}
        />
        Include video thumbnails
      </label>

      <div className="flex justify-end">
        <button
          className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Fetching…" : "Fetch APOD"}
        </button>
      </div>
    </form>
  );
};

export default ApodForm;
