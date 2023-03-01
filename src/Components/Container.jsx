import clsx from "clsx";
import React, { Children } from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={clsx(
        "py-8 px-5 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto sm:p-0 md:p-0 lg:-0",
        className
      )}
    >
      {children}
    </div>
  );
}
