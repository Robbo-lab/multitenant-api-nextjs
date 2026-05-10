"use client";

import Image from "next/image";
import Link from "next/link";

const ApodContent = ({ apodData, isLoading }) => {
  if (isLoading) {
    return (
      <div className="surface-card flex min-h-[18rem] items-center justify-center rounded-[1rem] px-6 py-10">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-teal-600" />
          <p className="mt-4 text-sm font-medium text-slate-700">
            Loading results…
          </p>
        </div>
      </div>
    );
  }

  if (!apodData) {
    return (
      <div className="rounded-md border border-dashed border-slate-300 bg-white/60 px-6 py-10 text-center">
        <p className="text-sm text-slate-500">
          Set your filters and choose <strong>Fetch APOD</strong> to load
          results.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {apodData.map((data, index) => (
        <article
          key={data.date ?? index}
          className="surface-card overflow-hidden rounded-[0.875rem]"
        >
          {data.media_type === "image" ? (
            <div className="relative aspect-video bg-slate-100">
              <Image
                src={data.url}
                alt={data.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            <div className="video-container">
              <iframe
                src={data.url}
                title={`APOD video for ${data.title}`}
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="space-y-4 p-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {data.date}
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                {data.title}
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              {data.explanation}
            </p>
            <Link
              href={`/nasa-api/details?date=${data.date}`}
              className="inline-flex items-center text-sm font-semibold text-teal-800 hover:text-teal-700"
            >
              View details →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ApodContent;
