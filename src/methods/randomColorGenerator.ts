export const generateRandomColor = (length: number) => {
  const colors = [];
  for (let i = 0; i < length; i++) {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }
  return colors;
};
