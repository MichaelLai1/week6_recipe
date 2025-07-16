import React from "react";

function SummaryStats({ data }) {
  const total = data.length;
  const avgTime =
    total > 0
      ? Math.round(
          data.reduce((sum, r) => sum + r.readyInMinutes, 0) / total
        )
      : 0;

  const cuisineCounts = {};
  data.forEach((r) => {
    r.cuisines.forEach((c) => {
      cuisineCounts[c] = (cuisineCounts[c] || 0) + 1;
    });
  });

  const mostCommonCuisine =
    Object.entries(cuisineCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  return (
    <div className="summary">
      <p>Total Recipes: {total}</p>
      <p>Average Ready Time: {avgTime} mins</p>
      <p>Most Common Cuisine: {mostCommonCuisine}</p>
    </div>
  );
}

export default SummaryStats;
