export function readingTime(text: string, wpm: number = 255): string {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return `${time} min`;
}
