export function timestampToLocaleDate(timestamp: string): string {
  return toTitleCase(
    new Date(timestamp).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  );
}

function toTitleCase(text: string, locale = navigator.language) {
  return text
    .toLocaleLowerCase(locale)
    .replace(/(?<!\S)\S/gu, (match) => match.toLocaleUpperCase(locale));
}
