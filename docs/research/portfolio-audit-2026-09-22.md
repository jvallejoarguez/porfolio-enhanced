# Portfolio review and changes

Reviewed locally on 22 September 2026, following the [community research](./ai-slop-community-2026-09-22.md). This audit records the changes and verification before deployment.

## Assessment

The portfolio contained specific, useful work, but its presentation diluted it with interchangeable promises and decorative proof. The strongest examples were “Every KB” styled as a metric, mandatory three-item summaries on every project, and two numbered sections describing general capabilities and working principles. Those elements asked visitors to infer competence from presentation instead of showing what Javier built.

This is an editorial assessment, not a determination of AI authorship. Recent [web design discussion](https://www.reddit.com/r/webdesign/comments/1we05wp/whats_the_fastest_way_to_tell_a_website_was/) criticizes many of the same conventions, while [designers also dispute blanket bans](https://www.reddit.com/r/UI_Design/comments/1w70kqb/question_about_websites_looking_like_ai_slop/). A grid containing actual projects has a different purpose from a grid filled with vague claims.

## Design direction

Keep the existing identity: ink background `#06080d`, panel `#0d1119`, white text `#f7f9fc`, secondary text `#a8b3c5`, blue actions `#0768c9`, and blue links `#58adff`. Keep Geist as the single type family. Left-align the introduction and project descriptions. Let the existing portrait and project images carry the visual interest; use spacing and headings for hierarchy.

Layout: introduction and portrait → selected projects and archive → dated experience → short personal background → direct contact links. The featured project remains larger than the two personal projects. No content is created just to fill an equal-size box.

An alternate beige/editorial makeover would change the appearance without resolving the weak information. The chosen direction therefore changes the content and removes unnecessary decoration within the existing layout.

## Element-by-element decisions

| Original element                                                               | Assessment                                                                                                       | Applied change                                                                                                             |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| “I build product experiences that hold up in production”                       | Interchangeable claim; tells little about the person or work.                                                    | Introduce Javier by name and describe DigitalBeat, Hard Rock Bet Mexico, and the catalogue component.                      |
| “Proof, not just pixels” / “The stack follows the product” / “earns its place” | Slogans occupying space that could explain the work.                                                             | Plain headings: Selected work, Experience, About me, Get in touch.                                                         |
| “Every KB”, “4 surfaces”, “1.4 → 2.7”                                          | A slogan, scope count, and version range presented as performance evidence. None defines a measured improvement. | Remove metric strips. Keep ownership history around version 1.4 in the case narrative and name the product areas in prose. |
| “14 connected data models”, “Typed”, “Hosted”, “2 application runtimes”        | Implementation trivia inflated into three equal proof tiles.                                                     | Remove the metric model and all five metric arrays. Retain relevant implementation details in each case study.             |
| El Impostor’s player count                                                     | A useful product limit rather than an achievement metric.                                                        | Preserve 3–12 players in its description.                                                                                  |
| Three numbered capabilities and technology pill walls                          | Broad claims repeat the projects and give tools disproportionate visual weight.                                  | Replace with a short About section grounded in existing work and personal projects. Project stacks remain as plain lists.  |
| Three numbered working principles                                              | General standards without individual evidence; not a sequence.                                                   | Remove. Concrete decisions remain in the project narratives.                                                               |
| 01/02/03 on project images and implementation bullets                          | Implies sequence or rank without helping navigation.                                                             | Remove project numbers and use ordinary bullets for implementation decisions.                                              |
| Status dot, check marks, floating “From interface to production” badge         | Repeats nearby text or resembles a status/validation signal.                                                     | Remove. Availability remains stated once in Contact.                                                                       |
| Background grid, blue/purple glows, gradient contact panel, hover lifts        | Repeated attention cues compete with the work.                                                                   | Flat background and panels; retain focus states and functional hover feedback.                                             |
| Oversized self-quoted result with check icon                                   | Gives an authored claim the visual treatment of an endorsement.                                                  | A normal Result heading and paragraph. Shorten the most promotional claims.                                                |
| Large DigitalBeat logo as the primary project preview                          | Identifies the employer but does not show the product.                                                           | Replace with an actual public casino screenshot and a dated case-study caption identifying the contribution.               |
| Repeated location strip and contact buttons                                    | Repeats location and email already provided elsewhere.                                                           | Put location in About and use direct contact links; CV remains in the header and introduction.                             |

## What remains useful

- Real project links, case-study routes, employment dates, role progression, and descriptions of specific constraints.
- A larger featured project and two secondary project cards: these group distinct work samples.
- A chronological experience timeline: unlike arbitrary numbering, it conveys a real relationship.
- Short technology lists on individual projects, where the tools have context.
- The existing portrait and personal-project artwork. El Impostor's SVG is now described as an illustration rather than a screenshot. Nosotros remains clearly described as a private app with a demo.
- Existing keyboard navigation, reduced-motion support, metadata, pre-rendering, CV downloads, and interaction tracking.

## Image provenance and evidence limits

`public/img/hardrockbet-casino.jpg` is an unaltered browser screenshot of [the public Hard Rock Bet Mexico casino](https://www.hardrockbet.mx/casino), captured on 22 September 2026 at a 1440 × 1000 desktop viewport as a guest. It shows navigation, categories, and the game catalogue. No account or game was entered. It replaces the employer logo; it is not a before/after performance comparison. The caption distinguishes the catalogue/portal contribution from game artwork and promotional assets.

The other project descriptions and employment facts are based on the portfolio's existing content. This pass does not independently validate every historical claim. No traffic, conversion, revenue, speed, or adoption figures were invented. Real screenshots of the personal applications would be a useful future addition to their existing illustrations and demo links.

## Verification

- `npm run validate`: lint, seven unit/content tests, TypeScript, production client/SSR builds, and six pre-rendered routes.
- `npm run test:e2e`: five passes; the desktop instance of a mobile-only test is intentionally skipped. Includes desktop/mobile homepage accessibility scans and direct case-study navigation.
- Browser review of the homepage and main case study at desktop and mobile sizes; additional narrow-width overflow and broken-image checks.
- `git diff --check` and formatting checks on changed files.

The browser test runner emits an environment warning about `NO_COLOR` and `FORCE_COLOR`; tests still pass.
