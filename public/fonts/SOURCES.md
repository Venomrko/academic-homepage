# Current fonts: jsDelivr WOFF2

The site loads Anthropic Sans and Anthropic Serif directly from the pinned npm
package `anthropic-fonts@1.1.0` on jsDelivr:

- https://cdn.jsdelivr.net/npm/anthropic-fonts@1.1.0/cdn/v1/fonts/AnthropicSans@400.woff2
- https://cdn.jsdelivr.net/npm/anthropic-fonts@1.1.0/cdn/v1/fonts/AnthropicSerif@400.woff2

These are variable web fonts with a weight axis of 300-800 and an optical-size
axis of 16-48. Each family uses one file for all supported weights, with
`font-optical-sizing: auto`. They are not the static Display files listed below.
The package has normal-style files only; existing italic styling is synthesized
by the browser. The stylesheet declares the actual weight range rather than
loading the package's duplicate files for individual weights.

The local files below remain as provenance for the earlier prototype and are
not referenced by the current stylesheet.

## Previous Anthropic Display fonts

Unmodified static OpenType fonts from Claude's official documentation, used for
this local prototype. Both families' normal styles have weights 400, 500, 600, and 700;
the italic style has weight 400.

Source page and inline declarations for the Serif Display family:
https://code.claude.com/docs/en/overview

The Sans Display files come from the same official assets host. Their embedded
font metadata identifies them as Anthropic Sans Display and confirms the weights.

| Local file | Official source |
| --- | --- |
| `anthropic-display-regular.otf` | https://assets.claude.ai/Fonts/AnthropicSerif-Display-Regular-Static.otf |
| `anthropic-display-italic.otf` | https://assets.claude.ai/Fonts/AnthropicSerif-Display-RegularItalic-Static.otf |
| `anthropic-display-medium.otf` | https://assets.claude.ai/Fonts/AnthropicSerif-Display-Medium-Static.otf |
| `anthropic-display-semibold.otf` | https://assets.claude.ai/Fonts/AnthropicSerif-Display-Semibold-Static.otf |
| `anthropic-display-bold.otf` | https://assets.claude.ai/Fonts/AnthropicSerif-Display-Bold-Static.otf |
| `anthropic-sans-display-regular.otf` | https://assets.claude.ai/Fonts/AnthropicSans-Display-Regular-Static.otf |
| `anthropic-sans-display-italic.otf` | https://assets.claude.ai/Fonts/AnthropicSans-Display-RegularItalic-Static.otf |
| `anthropic-sans-display-medium.otf` | https://assets.claude.ai/Fonts/AnthropicSans-Display-Medium-Static.otf |
| `anthropic-sans-display-semibold.otf` | https://assets.claude.ai/Fonts/AnthropicSans-Display-Semibold-Static.otf |
| `anthropic-sans-display-bold.otf` | https://assets.claude.ai/Fonts/AnthropicSans-Display-Bold-Static.otf |

## Previous Anthropic Serif fonts

Retained from the earlier prototype. These files are no longer referenced by the
current page styles.

Unmodified web fonts from Anthropic's public website, used for this local prototype.
The original CSS declares a variable weight range of 300–800 for both styles.

Source stylesheet:
https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/css/ant-brand.shared.11407e92c.min.css

Roman:
https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/69971a1551eb6cda0d656e8a_AnthropicSerif-Roman-Web.woff2

Italic:
https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/69971a15a9fb8c1107a3570e_AnthropicSerif-Italic-Web.woff2
