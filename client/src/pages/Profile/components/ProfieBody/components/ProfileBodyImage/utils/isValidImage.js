export function isValidImage(file) {
  return (
    file?.type === "image/png" ||
    file?.type === "image/jpg" ||
    file?.type === "image/jpeg"
  );
}
