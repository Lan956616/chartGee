export const handleInputKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>
) => {
  if (e.key === "Enter" || e.key === "Escape") {
    e.preventDefault();
    e.currentTarget.blur();
  }
};
