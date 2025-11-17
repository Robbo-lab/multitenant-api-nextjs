"use client";

import Image from "next/image";
import Link from "next/link";

const ApodContent = ({ apodData, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-sm text-slate-600">Loading NASA content…</p>
      </div>
    );
  }

  if (!apodData) {
    return (
      <p className="py-8 text-center text-sm text-slate-500">
        Enter your filters above and click <strong>Fetch APOD</strong>.
      </p>
    );
  }

  return (
    <div className="grid gap-6">
      {apodData.map((data, index) => (
        <article
          key={data.date ?? index}
          className="rounded-lg border border-slate-200 bg-white shadow-sm"
        >
          {data.media_type === "image" ? (
            <div className="relative aspect-video overflow-hidden rounded-t-lg bg-slate-100">
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
            <div className="video-container rounded-t-lg">
              <iframe
                src={data.url}
                title={`APOD video for ${data.title}`}
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="space-y-3 p-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {data.date}
              </p>
              <h2 className="text-xl font-semibold text-slate-900">
                {data.title}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              {data.explanation}
            </p>
            <Link
              href={`/nasa-api/details?date=${data.date}`}
              className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
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
