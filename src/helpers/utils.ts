function getCurrentDate() {
  return new Date().toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export { getCurrentDate };
