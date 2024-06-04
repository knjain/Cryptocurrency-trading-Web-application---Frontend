export const getButtonClass = ({ stateType, state }) => {
  const baseClass =
    "rounded-full py-2 pl-3 pr-4 focus:bg-gradient-to-r focus:from-newWhite to-newWhite";
  if (state === stateType) {
    return `${baseClass} bg-gradient-to-r from-newStart via-newMid to-newEnd`; // Additional class for active state
  }
  return baseClass;
};
