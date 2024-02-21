export const getTotalQuantity = state => {
  // Access the relevant part of the Redux store state where item quantities are stored
  const {items} = state;

  // Ensure items is not undefined
  if (!items) {
    return 0; // Return default value or handle undefined case
  }

  // Calculate total quantity using the item quantities stored in the Redux state
  const totalQuantity = Object.values(items).reduce(
    (total, quantity) => total + quantity,
    0,
  );

  // Return the calculated total quantity
  return totalQuantity;
};
