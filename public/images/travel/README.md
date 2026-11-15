These static map thumbnails mark cities, major areas and selected representative sights mentioned in the travel journals. The light and dark images share the same extent and markers; no travel routes are drawn.

Marked places use bold labels. Other labels are limited to countries and major cities, set in smaller, muted regular type.

Multi-country journeys use each city's `sights` array for a compact line of stops. Single-country journeys use a `visited` array for one continuous list without city groups. The optional `landmarks` array adds representative sights, while `venues` adds conference locations marked with stars. Each place has an independent label, offset to avoid other labels, markers and image edges without moving its coordinates. Optional `bounds` provide a minimum extent that expands to include all markers.

Stars and circles share the same color in each theme. Every venue requires a `city`, which replaces that city's separate map marker while preserving its places and sights in the caption. This applies to all journeys, including single-country trips. Venue labels use only the venue name. Label edges anchor close to their markers, with extra spacing only when needed to avoid collisions.

Basemaps were rendered with MapLibre GL JS using OpenFreeMap's Positron and Dark styles. The export style is kept in `scripts/travel-map-renderer.html`. Map data © OpenStreetMap contributors, available under the [Open Database License](https://www.openstreetmap.org/copyright), with OpenMapTiles and OpenFreeMap attribution displayed alongside each map.

Place names and coordinates are maintained in `lib/data/travel-maps.json`. Coordinates use Wikipedia and Wikidata geodata, with OpenStreetMap place data for Hwaseong Haenggung and Eurwangni Beach. The journal text determines which places are included; a marker does not add a new claim about the trip.

Izu is a regional marker anchored near Mount Ōmuro, where the journal's Izu stops are located. Its coordinates come from the [Geological Survey of Japan](https://gbank.gsj.jp/volcano/cgi-bin/volcanic.cgi?id=055).

Conference venues are PACIFICO Yokohama, Austria Center Vienna, OIST Conference Center, COEX and Congress Centrum Bremen. Their coordinates use Wikipedia geodata; OIST uses the campus reference point. ICONIP's conference center is confirmed on its [official venue page](https://iconip2025.apnns.org/venue/).
