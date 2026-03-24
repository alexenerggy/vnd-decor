# AGENTS.md

## Project
vnd-decor.ru — новый сайт студии свадебного и event-декора.

## Goal
Собрать новый production-ready сайт **с нуля**, без использования legacy-верстки как основы.  
Папка `old-site/` используется только как источник контента, структуры, SEO-артефактов, юридических текстов, изображений и контактов.

## Final stack
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- MDX / markdown content for blog, services and projects
- `next/image` for optimized media
- Metadata API / `generateMetadata` for SEO
- Route Handlers for forms
- Telegram + email notifications
- JSON-LD schema, breadcrumbs, sitemap, robots

Notes:
- no WordPress, Drupal or heavy CMS
- no database at launch
- no legacy PHP
- content-first architecture with static or mostly static pages
- simple, fast, SEO-friendly and easy to deploy on hosting

## Product direction
Сайт должен выглядеть как **editorial premium feminine modern**.

Характер бренда:
- авторская студия свадебного и event-декора
- эстетика: refined, elegant, soft, premium
- не шаблонный wedding landing
- не устаревший one-page сайт
- упор на вкус, визуальную историю события, кейсы, доверие и аккуратную конверсию

## Brand style
Использовать следующие базовые цвета:
- primary: `#614051`
- background: `#F2EBE2`
- text dark: `#37262D`
- soft background: `#FAF7F3`
- border: `#D8CEC7`
- muted accent: `#8A6A79`

UI-принципы:
- много воздуха
- крупная типографика
- большие изображения
- тонкие бордеры
- мягкие rounded corners
- минимум визуального шума
- спокойные hover/focus states
- адаптивность mobile/tablet/desktop
- accessibility basics обязательны

## Typography direction
- serif для headline / editorial block titles
- clean sans-serif для body/UI
- не использовать визуально дешёвые или избыточно декоративные решения

## Architecture rules
Всегда предпочитать:
- простые, чистые, поддерживаемые решения
- переиспользуемые компоненты
- типобезопасность
- semantically correct markup
- server-first подход там, где это уместно
- минимум зависимостей

Не добавлять тяжелые или лишние библиотеки, если задача решается штатными средствами Next.js, Tailwind и TypeScript.

## Legacy migration rules
Папка `old-site/` нужна только для анализа и переноса данных.

Разрешено переносить:
- тексты услуг
- контакты
- изображения
- юридические страницы
- SEO verification files
- favicon / static assets
- смысловые блоки старого сайта
- названия услуг / категорий / кейсов

Запрещено переносить как основу:
- legacy HTML layout
- jQuery plugins
- PHP form handlers
- старую one-page архитектуру
- старые JS-эффекты
- старую визуальную систему

Не рефакторить старый сайт в новый.  
Новый проект должен быть самостоятельной современной кодовой базой.

## Content model
Нужно закладывать архитектуру под следующие типы контента.

### Services
Каждая услуга должна иметь:
- slug
- title
- shortDescription
- seoTitle
- seoDescription
- heroImage
- body/content
- faq
- relatedProjects
- relatedPosts

### Projects
Каждый кейс должен иметь:
- slug
- title
- shortDescription
- style
- format
- location
- season
- gallery
- implementedItems
- relatedServices
- optionalReview

### Blog posts
Каждая статья должна иметь:
- slug
- title
- excerpt
- date
- category
- tags
- coverImage
- seoTitle
- seoDescription
- relatedServices
- relatedProjects
- content

## Site structure
Проектировать сайт не как one-page лендинг, а как масштабируемый бренд-сайт.

### Core routes
- `/`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`
- `/about`
- `/contacts`
- legal pages if needed

### Primary service routes for launch
- `/prezidium-na-svadbu`
- `/fotozona-na-svadbu`
- `/svadebnaya-floristika`
- `/oformlenie-vyezdnoy-registratsii`

### Secondary / later routes
- `/oformlenie-zala-sharami-na-svadbu` — secondary SEO page, not in top navigation
- `/oformlenie-svadebnogo-shatra` — can be added later
- `/oformlenie-stolov-na-svadbu` — later
- `/svadebnyy-dekor-doma` — later
- `/svadebnaya-arka` — do not create as a separate route at launch; cover inside `/oformlenie-vyezdnoy-registratsii`
- `/zadnik-dlya-prezidiuma` — do not create as a separate route at launch; cover as a strong SEO block inside `/prezidium-na-svadbu`

## Homepage strategy
Главная страница должна закрывать **широкий коммерческий интент**, а не узкую услугу.

Homepage targets:
- декоратор на свадьбу
- услуги декоратора на свадьбу
- студия свадебного декора
- оформление свадьбы
- оформление свадебного зала
- оформление свадьбы цены
- оформить свадьбу в Москве / МО
- оформление свадьбы под ключ

Важно:
- запрос **«оформление свадьбы под ключ»** вести на главную
- не создавать отдельную страницу под этот запрос на старте
- на сайте пояснять, что речь идёт о **комплексном декоре и оформлении**, а не о полном wedding planning

## Homepage requirements
Главная должна быть structured premium homepage, а не старый лендинг.

Предпочтительная структура:
1. Header
2. Hero
3. Brand manifesto / about
4. Featured projects
5. Services overview
6. Process
7. Trust block
8. Reviews
9. CTA / contact form
10. Footer

Главная должна:
- ссылаться на ключевые услуги
- ссылаться на блог
- показывать кейсы
- давать ориентир по работе и стоимости
- усиливать широкий коммерческий интент

## Service page strategy
### `/prezidium-na-svadbu`
Основной коммерческий URL для:
- президиум на свадьбу
- декор свадебного стола жениха и невесты

Также внутри страницы должен быть сильный SEO-блок про:
- задник для президиума на свадьбу

### `/fotozona-na-svadbu`
Основной коммерческий URL для:
- фотозона на свадьбу
- фотозона на свадьбе на улице
- фотозона на свадьбу из шариков

### `/svadebnaya-floristika`
Основной коммерческий URL для:
- свадебная флористика и декор
- оформление свадьбы живыми цветами
- флорист на свадьбу
- свадебные цветочные композиции
- композиции на столы
- цветы на президиум

### `/oformlenie-vyezdnoy-registratsii`
Основной коммерческий URL для:
- выездная церемония свадьбы
- оформление свадебной церемонии
- свадебная арка
- арка из цветов на свадьбу
- арки для свадебной церемонии
- украшение арки на свадьбу

Важно:
- **не создавать отдельную стартовую страницу `/svadebnaya-arka`**
- кластер арки раскрывать внутри `/oformlenie-vyezdnoy-registratsii`

### `/oformlenie-zala-sharami-na-svadbu`
Это вторичная SEO-страница.
Правила:
- не выводить в топ-навигацию
- не делать её центральной услугой бренда
- использовать как дополнительную точку входа из поиска

### `/oformlenie-stolov-na-svadbu`
На старте не делать.
Эту тему пока раскрывать через:
- флористику
- кейсы
- главную
- блог
Позже можно вынести в отдельную страницу.

### `/svadebnyy-dekor-doma`
На старте не делать.
Позже можно вынести в отдельную узкую SEO-страницу или статью.

## Blog strategy
Блог проектируется сразу, даже если наполняется постепенно.

Цели блога:
- сбор информационного SEO-трафика
- внутренняя перелинковка на услуги
- внутренняя перелинковка на кейсы
- поддержка главной и коммерческих страниц

### Launch blog posts
На старте должны быть созданы 2 статьи:
- `/blog/idei-dlya-svadebnogo-dekora`
- `/blog/trendy-svadebnogo-dekora`

### Blog rules
Каждая статья должна:
- ссылаться минимум на 1–2 релевантные услуги
- ссылаться минимум на 1 кейс
- иметь CTA на консультацию / заявку
- быть встроена в общую SEO-архитектуру сайта

### Article intent
#### `idei-dlya-svadebnogo-dekora`
Широкая вдохновляющая статья:
- идеи по зонам
- идеи для церемонии
- идеи для флористики
- идеи для фотозоны
- идеи для президиума

#### `trendy-svadebnogo-dekora`
Экспертная статья:
- тренды по стилям
- тренды по палитрам
- тренды по флористике
- тренды по церемонии
- тренды по материалам и сервировке

## Internal linking rules
Перелинковка обязательна.

### Homepage
Главная должна ссылаться на:
- ключевые услуги
- избранные кейсы
- блоговые статьи
- форму заявки

### Service pages
Каждая страница услуги должна ссылаться на:
- релевантные кейсы
- релевантные статьи блога
- контакт / CTA section

### Projects
Каждый кейс должен ссылаться на:
- связанные услуги
- релевантные статьи блога
- форму консультации

### Blog posts
Каждая статья должна ссылаться на:
- главную
- минимум 1–2 услуги
- минимум 1 кейс
- related posts where relevant

## SEO rules
Проект должен быть SEO-ready.

Обязательно:
- корректный Metadata API
- canonical URLs
- Open Graph / Twitter metadata
- sitemap
- robots
- JSON-LD where appropriate
- breadcrumbs UI + BreadcrumbList schema
- alt texts for all important images
- semantic headings
- internal linking

Важно:
- SEO должно строиться на реальной контентной архитектуре, а не на переоптимизации
- service pages и blog posts должны иметь чёткое разделение по интенту
- secondary SEO pages не должны ломать навигационную простоту сайта

## Images
Использовать `next/image` везде, где это разумно.

Изображения должны:
- иметь понятную структуру хранения
- быть привязаны к контенту
- иметь корректные alt texts
- не вызывать layout shift
- поддерживать хорошие размеры и оптимизацию

## Forms
Не использовать PHP.

Формы должны быть реализованы через Next.js Route Handlers или equivalent server-side approach.

Обязательные требования:
- валидация
- понятные success/error states
- Telegram notifications
- email notifications
- honeypot anti-spam
- по возможности rate limiting
- env-based configuration

## Code style
- Использовать TypeScript строго и аккуратно
- Избегать `any`, если можно использовать нормальные типы
- Дробить код на переиспользуемые компоненты
- Не дублировать layout logic
- Не создавать overly clever abstractions
- Предпочитать читаемый код
- Держать названия файлов и компонентов понятными
- Использовать server components by default, client components only where needed

## Component rules
Нужны переиспользуемые компоненты уровня design system:
- Button
- Container
- SectionHeading
- RichText
- ProjectCard
- ServiceCard / ServiceListItem
- ReviewCard
- Breadcrumbs
- Input
- Textarea
- CTA section
- Image blocks / gallery blocks

Не создавать одноразовые компоненты без необходимости.

## Navigation rules
Top navigation должна быть простой и коммерчески понятной.

### Prefer in top navigation
- Главная
- Портфолио / Проекты
- Услуги
- О студии
- Блог
- Контакты

### Do not put in top navigation
- вторичные SEO-страницы
- узкие кластеры второго уровня
- `/oformlenie-zala-sharami-na-svadbu`
- `/zadnik-dlya-prezidiuma`
- `/svadebnaya-arka` as separate item
- later/secondary pages unless explicitly approved

## Accessibility
Минимум:
- корректные headings
- aria where relevant
- labels for form fields
- keyboard-focus visibility
- sensible contrast
- semantic buttons/links/forms
- no fake interactive elements

## Performance
Учитывать производительность по умолчанию:
- не подключать тяжелые клиентские библиотеки без причины
- не делать лишнюю анимацию
- не раздувать bundle
- по возможности использовать static generation для контентных страниц
- lazy-load where sensible

## Deployment mindset
Проект должен быть удобен для ручного переноса на хостинг.

Нужно:
- понятный `.env.example`
- чистый README
- понятный build flow
- без зависимости от сложной инфраструктуры, если это не требуется

## When editing
При выполнении задач:
1. сначала анализируй текущую структуру проекта
2. не ломай уже созданную архитектуру без причины
3. сохраняй единый visual/system style
4. если что-то неполно, делай best effort implementation
5. если есть placeholder content, явно отмечай это
6. если переносишь что-то из `old-site/`, делай это осознанно и структурировано
7. учитывай утверждённую route map и не создавай лишние страницы без необходимости

## Output expectations
После значимых изменений желательно кратко указывать:
- что создано
- какие файлы добавлены/изменены
- что осталось заполнить вручную
- есть ли placeholders
- как проверить результат

## Important
Предпочитай:
- clean
- minimal
- scalable
- editorial
- premium
- SEO-friendly
- maintainable

Избегай:
- legacy patterns
- visual clutter
- overengineering
- unnecessary dependencies
- outdated landing-page tropes