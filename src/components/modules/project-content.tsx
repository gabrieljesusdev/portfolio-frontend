"use client";

export function ProjectContent({ video }: { video: string; images: string[] }) {
  return (
    <div className="flex max-w-7xl flex-col">
      <video
        className="flex mx-auto h-full w-full md:w-7xl"
        controls
        src={video}
      />
    </div>
  );
}
