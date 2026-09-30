# What makes a portfolio read as human (research, 30 Sep 2026)

Notes behind the text-first redesign. Keep them in mind before adding anything back.

## What reviewers look for

- A weak site hurts more than no site; write-ups and READMEs count for more ([profy.dev survey of ~60 hiring managers](https://profy.dev/article/portfolio-websites-survey)).
- Hiring managers now discount generic finished projects and look for how something was built and what was hard ([HN, Sep 2025](https://news.ycombinator.com/item?id=45273403)). A site that feels like low effort counts against you ([HN, Sep 2024](https://news.ycombinator.com/item?id=41656015)).
- Reviewers skim: 3 to 5 projects that are easy to scan ([NN/g](https://www.nngroup.com/articles/ux-design-portfolios/)). No skill bars ([Josh Comeau](https://www.joshwcomeau.com/effective-portfolio/)).

## Design tells to avoid

From [Adrian Krebs' scan of 1,590 Show HN pages](https://www.adriankrebs.ch/blog/design-slop/), [Impeccable's slop list](https://impeccable.style/slop/) and [Hallmark's anti-patterns](https://github.com/Nutlope/hallmark/blob/main/skills/hallmark/references/anti-patterns.md):

- Inter, Geist or Space Grotesk; a serif italic accent word
- Permanent dark mode with mid-grey body text; a single glowing accent
- All-caps or numbered section labels, eyebrow text over every heading
- Identical card grids, bento grids, hairline card borders, stat banners
- Hero with name, role and two buttons; badge or status dot above the H1
- Fade-in on every section, scale on every card hover, gradients and glows
- Invented metrics

The previous two versions of this site hit most of these. The section formula itself (hero, card grid, timeline, "Get in touch" panel) is the biggest tell.

## What praised personal sites do

Sampled from [HN "most beautiful personal blog UI" (2026)](https://news.ycombinator.com/item?id=47302553) and well-known developer sites (leerob.com, emilkowal.ski, paco.me, benji.org, jakub.kr, delba.dev, szymonkaliski.com, nicolasbouliane.com, macwright.com):

- One narrow column of text, small headings, lists instead of cards
- A first-person paragraph that says where you work and what you actually do
- Projects as a list: name, one line, year
- One personal detail (where you live, a drawing, "updated" date)
- Real artifacts on project pages: screenshots, video, a live link ([Simon Willison](https://simonwillison.net/2022/Nov/6/what-to-blog-about/))

Caveat: the text-only versions of these sites work because their owners are already known. Without that, the work has to be visible on the homepage, so this site keeps the plain writing but shows real screenshots in the Work list.

## Writing rules

From [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), the [GOV.UK style guide](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/) and [Paul Graham, Write Simply](https://paulgraham.com/simply.html):

- Say "is", not "serves as". Plain verbs: built, fixed, moved, cut.
- No "not X but Y", "X rather than Y", rhetorical lists of three, "-ing" tails ("…, ensuring smooth performance").
- Avoid: seamless, leverage, robust, showcase, pivotal, testament, empower, passionate, crafting.
- Few em dashes and little bold. Sentence case headings.
- Only claims you can back: a real number (46 KB gzipped, measured from the 2.7.1 build) beats "high-performance".
- Case study shape: what it is, your part, the hard problem and how you handled it, a link or artifact. A few short paragraphs.

## Ideas not done yet

- A short "what I'd change" paragraph per project, in Javier's own words.
- A real phone recording of El Impostor mid-round to replace the illustrated cover.
- A /now page, if it will be kept up to date.
