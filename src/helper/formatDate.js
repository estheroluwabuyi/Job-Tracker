export function formatDateForInput(date) {
  if (!date) return "";

  const dateObj = typeof date === "string" ? new Date(date) : date;
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatDateForDisplay(date) {
  const targetDate = !date
    ? new Date()
    : typeof date === "string"
      ? new Date(date)
      : date;

  // Use today if invalid
  const validDate = isNaN(targetDate.getTime()) ? new Date() : targetDate;

  return validDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
