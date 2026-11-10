# Font sources and usage

## Page typography

The site serves two local variable WOFF2 files through `next/font/local` in
`app/layout.tsx`. No third-party font request is required to render a page.

| Local file | Original source |
| --- | --- |
| `AnthropicSans-Variable.woff2` | https://cdn.jsdelivr.net/npm/anthropic-fonts@1.1.0/cdn/v1/fonts/AnthropicSans@400.woff2 |
| `AnthropicSerif-Variable.woff2` | https://cdn.jsdelivr.net/npm/anthropic-fonts@1.1.0/cdn/v1/fonts/AnthropicSerif@400.woff2 |

The files have a weight axis of 300–800 and an optical-size axis of 16–48.
The page uses `font-optical-sizing: auto`. The original package provides normal
styles; italic page text is synthesized by the browser.

## Social preview images

`lib/social-image.tsx` reads these two local static OTF files when generating
Open Graph images with `ImageResponse`. They remain necessary even though
the page stylesheet uses WOFF2.

| Local file | Original source |
| --- | --- |
| `anthropic-display-regular.otf` | https://assets.claude.ai/Fonts/AnthropicSerif-Display-Regular-Static.otf |
| `anthropic-sans-display-medium.otf` | https://assets.claude.ai/Fonts/AnthropicSans-Display-Medium-Static.otf |

Other static weights and the duplicate legacy Roman/Italic WOFF2 files were
removed after checking source references. Font design, font format, and
local/CDN delivery are separate choices; the page fonts are variable Web
families, while the social preview generator uses the static Display families.
