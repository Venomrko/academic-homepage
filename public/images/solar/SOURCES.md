# Solar sphere texture

`sphere-mask.png` is a lossless alpha mask captured from the existing Paper Shaders
`Dithering` renderer, then encoded as a one-bit transparent PNG. It preserves the
previous desktop sphere pixels rather than introducing a different illustration.
The foreground colors and responsive placement remain in `app/global.css`.

Capture settings: `shape="sphere"`, `type="4x4"`, `scale={0.5}`, `size={3}`,
`speed={0}`, `frame={600000}`, transparent background, 1120 × 1120 canvas.

- Renderer: [Paper Shaders](https://github.com/paper-design/shaders), Apache-2.0.
- Original homepage settings: [Fumadocs](https://github.com/fuma-nama/fumadocs/blob/dev/apps/docs/app/(home)/page.client.tsx), MIT.
