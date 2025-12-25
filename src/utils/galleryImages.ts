
const GALLERY_IMAGE_COUNT = 21; // Adjust if you add/remove images

export function getRandomGalleryImage(): string {
  const idx = Math.floor(Math.random() * GALLERY_IMAGE_COUNT) + 1;
  return `/Gallery/GalleryImage (${idx}).png`;
}

export function pickRandomGalleryImages(count: number): string[] {
  const numbers = Array.from({ length: GALLERY_IMAGE_COUNT }, (_, i) => i + 1);
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers.slice(0, count).map(idx => `/Gallery/GalleryImage (${idx}).png`);
}
