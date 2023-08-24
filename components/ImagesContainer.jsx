"use client";

import Image from "next/image";

export default function ImagesContainer({ title, images }) {
  return (
    <div className="pb-4 w-full
    border border-gray-300 rounded-lg
    ">
      <div className="text-xl underline border-b border-gray-300 bg-secondary p-2">{title}</div>
      <div
        className="w-full flex flex-col items-start gap-2 mx-auto
                sm:flex-row sm:justify-start sm:w-full sm:flex-wrap p-2
            "
      >
        {images.length &&
          images.map((image, i) => (
            <Image
              src={image}
              alt="SurgeryImage"
              key={i}
              width="400"
              height="400"
              className="rounded-lg w-full
                        sm:w-60 lg:w-96
                    "
            />
          ))}
      </div>
    </div>
  );
}
