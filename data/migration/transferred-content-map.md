# Transferred content map (old_site -> new architecture)

## content/

- `content/legal/personal-data-consent.mdx`
  Source: `old_site/agree.html`
  Notes: migrated with explicit manual-replacement markers.

- `content/legal/privacy-policy-placeholder.mdx`
  Source: no standalone privacy text in old site.
  Notes: placeholder template created for legal completion.

- `content/legacy/old-site-semantic-blocks.mdx`
  Source: `old_site/index.htm`
  Notes: semantic blocks only (hero/trust/process/offers/services).

- `content/services/*.mdx`
  Source: `old_site/index.htm`
  Notes: legacy service price anchors appended as historical reference.

## data/

- `data/migration/old-site-extracted.json`
  Structured extraction: contacts, services, semantic blocks, legal notes, assets, exclusions.

- `data/migration/migration-summary.md`
  Human-readable migration summary.

- `data/migration/transferred-content-map.md`
  This file.

## public/

- `public/favicon.ico`
  Source: `old_site/favicon.ico`

- `public/images/legacy/portfolio/*.webp` (35 files)
  Source: `old_site/img/portfolio-webp`

- `public/images/legacy/feedback/*.jpg` (4 files)
  Source: `old_site/img/feedback`

- `public/images/legacy/howwork/*.jpg` (4 files)
  Source: `old_site/img/howwork`

- `public/images/legacy/services/*.jpg` (6 files)
  Source: `old_site/img/services`

- `public/images/legacy/brand/*` (4 files: logo/max/instagram/vk)
  Source: `old_site/img/*`

- `public/images/legacy/backgrounds/*` (6 files)
  Source: `old_site/img/bg*`

## Not transferred (intentional)

- old layout and one-page HTML composition (`old_site/index.htm`)
- jQuery and plugin stack (`old_site/js/*`, `old_site/source/*`, `old_site/lightbox/*`)
- PHP forms (`old_site/send.php`, `old_site/mail147.php`)
- legacy effects/animation scripts
