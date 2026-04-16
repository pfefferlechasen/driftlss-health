export function ogImageUrl(title: string): string {
  return `/api/og?title=${encodeURIComponent(title)}`;
}
