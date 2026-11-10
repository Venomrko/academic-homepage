import { profile } from '@/lib/data/profile';
import { socialImage } from '@/lib/social-image';

export const alt = `${profile.name} — Research & Writing`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return socialImage({ title: 'Can Machines Think?' });
}
