import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative">
        <div className="h-48 bg-gray-700 animate-pulse shimmer" />
      </div>
      <div className="p-6">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-4 animate-pulse shimmer" />
        <div className="h-3 bg-gray-700 rounded w-full mb-2 animate-pulse shimmer" />
        <div className="h-3 bg-gray-700 rounded w-2/3 animate-pulse shimmer" />
      </div>
    </div>
  );
};

export default ShimmerCard;