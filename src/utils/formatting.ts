export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function sentenceCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
