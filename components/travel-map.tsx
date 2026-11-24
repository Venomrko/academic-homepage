import type { CSSProperties } from 'react';
import travelMaps from '@/lib/data/travel-maps.json';

type Journey = keyof typeof travelMaps;
type MapPlace = {
  name: string;
  coordinates: number[];
  sights?: string[];
};
type MapVenue = MapPlace & { city: string };
type MapContent = {
  title: string;
  places: MapPlace[];
  landmarks?: MapPlace[];
  venues?: MapVenue[];
  visited?: string[];
};

export function TravelMap({ journey }: { journey: Journey }) {
  const map: MapContent = travelMaps[journey];
  const venues = map.venues ?? [];
  const venueCities = new Set(venues.map((venue) => venue.city));
  const markedPlaces = [
    ...map.places.filter((place) => !venueCities.has(place.name)),
    ...(map.landmarks ?? []),
    ...venues,
  ];
  const description = `Map marking ${markedPlaces.map((place) => place.name).join(', ')}.${map.venues?.length ? ' Stars indicate conference venues.' : ''}`;
  return <figure className="travel-map not-prose">
    <div
      className="travel-map-image"
      role="img"
      aria-label={description}
      style={{
        '--travel-map-light': `url("/images/blog/${journey}/maps/light.webp")`,
        '--travel-map-dark': `url("/images/blog/${journey}/maps/dark.webp")`,
      } as CSSProperties}
    />
    <figcaption>
      <div className="travel-map-caption-head">
        <span className="travel-map-title">{map.title}</span>
        {map.venues?.length ? <span className="travel-map-venue-key">
          <svg viewBox="0 0 20 20" aria-hidden="true"><polygon points="10,1 12.6,6.4 18.5,7.2 14.2,11.4 15.2,17.4 10,14.6 4.8,17.4 5.8,11.4 1.5,7.2 7.4,6.4" fill="currentColor" /></svg>
          Conference venue
        </span> : null}
      </div>
      {map.visited?.length ? <p className="travel-map-visited">{map.visited.join(' · ')}</p> : <ul className="travel-map-places" aria-label="Cities and places visited">
        {map.places.map((place) => <li key={place.name}>
          {place.name}
          {place.sights?.length ? <span className="travel-map-sights"> — {place.sights.join(', ')}</span> : null}
        </li>)}
      </ul>}
      <span className="travel-map-attribution">
        © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors
        {' · '}<a href="https://openmaptiles.org/" target="_blank" rel="noreferrer">OpenMapTiles</a>
        {' · '}<a href="https://openfreemap.org/" target="_blank" rel="noreferrer">OpenFreeMap</a>
      </span>
    </figcaption>
  </figure>;
}
