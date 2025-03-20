export const calculateColorSelect = (element: null | HTMLDivElement) => {
  if (!element) {
    return null;
  }
  const rect = element.getBoundingClientRect();
  const pickerWidth = 220;
  const pickerHeight = 280;
  const margin = 10;
  let newTop = rect.top;
  let newLeft = rect.left - pickerWidth - margin;
  if (newTop + pickerHeight > window.innerHeight - margin) {
    newTop = window.innerHeight - margin - pickerHeight;
  }
  if (newLeft < margin) {
    newLeft = margin;
  }
  return { top: newTop, left: newLeft };
};

export const calculateColorBox = (element: null | HTMLDivElement) => {
  if (!element) {
    return null;
  }
  const rect = element.getBoundingClientRect();
  const pickerWidth = 220;
  const pickerHeight = 280;
  const margin = 10;
  let newTop = rect.top;
  let newLeft = rect.left + 30;
  if (newTop + pickerHeight > window.innerHeight - margin) {
    newTop = window.innerHeight - margin - pickerHeight;
  }
  if (newLeft + pickerWidth > window.innerWidth - margin) {
    newLeft = window.innerWidth - margin - pickerWidth;
  }
  return { top: newTop, left: newLeft };
};
