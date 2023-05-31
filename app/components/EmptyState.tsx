import React from "react";

const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:py-8 flex justify-center items-center bg-gray-100 h-full">
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-xl font-semibold text-gray-900">
          Start a new conversation!
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
