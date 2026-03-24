# old_site -> new architecture migration summary

## What was extracted (useful)

- Service naming and legacy price anchors (`old_site/index.htm`)
- Contact phone and messenger links (`old_site/index.htm`)
- Legacy consent legal text (`old_site/agree.html`)
- Thanks-page copy (`old_site/thanks.html`)
- Favicon and reusable media assets (`old_site/favicon.ico`, `old_site/img/*`)
- Semantic blocks: hero, trust points, process, offers, reviews-gallery pattern

## What was explicitly excluded

- Legacy HTML/CSS layout and one-page anchors
- jQuery/fancybox/owl/lightbox/mosaicflow stack
- PHP form handlers (`send.php`, `mail147.php`)
- Old animation/effects scripts (`wow`, `skrollr`, timer)
- Embedded analytics/pixel snippets as-is

## Manual replacement required

- Legal consent text still contains legacy domain/email from `ezhevika-studio.ru`
- Service prices are legacy references, not production pricing policy
- Messenger links require business validation before publish

## Structured extraction

See: `data/migration/old-site-extracted.json`
