export const alphabetic = (text: string) =>
  text.replace(/[^a-zA-ZçÇğĞıİöÖşŞüÜ ]+/g, '');

export const removeNotNumbers = (text: string) => text.replace(/[^0-9]+/g, '');
