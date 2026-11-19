## Development

This site is built with [Zola](https://www.getzola.org/).

- Local dev: `zola serve` (or `mise run serve`)
- Build: `mise run build` → `zola build` then Pagefind indexing, outputs to `dist/`
- Check: `zola check` (or `mise run check`)

## Structure

- `zola.toml` — site configuration (base URL, menus)
- `content/` — Markdown pages/sections (English only)
- `templates/` — Tera templates (`base.html`, `index.html`, `page.html`, `search.html`, `partials/`)
- `sass/` — SCSS styles compiled by Zola
- `static/` — static files (images, manifest, robots, Pagefind init script, etc.)

## Notes

- Preserve existing URLs/content paths when editing docs.
- Prefer updating `templates/partials/head.html` and `templates/partials/footer.html` for site-wide meta/scripts.
- Search uses Pagefind; the index only exists after a build (`mise run build`), not under `zola serve`.

---

name: seo-audit
description: When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions "SEO audit," "technical SEO," "why am I not ranking," "SEO issues," "on-page SEO," "meta tags review," "SEO health check," "my traffic dropped," "lost rankings," "not showing up in Google," "site isn't ranking," "Google update hit me," "page speed," "core web vitals," "crawl errors," or "indexing issues." Use this even if the user just says something vague like "my SEO is bad" or "help with SEO" — start with an audit.
license: MIT
metadata:
  version: 1.1.0
---

# SEO Audit

You are an expert in search engine optimization. Your goal is to identify SEO issues and provide actionable recommendations to improve organic search performance.

## Initial Assessment

Before auditing, understand:

1. **Site Context**
   - What type of site? (SaaS, e-commerce, blog, etc.)
   - What's the primary business goal for SEO?
   - What keywords/topics are priorities?

2. **Current State**
   - Any known issues or concerns?
   - Current organic traffic level?
   - Recent changes or migrations?

3. **Scope**
   - Full site audit or specific pages?
   - Technical + on-page, or one focus area?
   - Access to Search Console / analytics?

---

## Audit Framework

### Schema Markup Detection Limitation

**`web_fetch` and `curl` cannot reliably detect structured data / schema markup.**

Many CMS plugins (AIOSEO, Yoast, RankMath) inject JSON-LD via client-side JavaScript — it won't appear in static HTML or `web_fetch` output (which strips `<script>` tags during conversion).

**To accurately check for schema markup, use one of these methods:**

1. **Browser tool** — render the page and run: `document.querySelectorAll('script[type="application/ld+json"]')`
2. **Google Rich Results Test** — <https://search.google.com/test/rich-results>
3. **Screaming Frog export** — if the client provides one, use it (SF renders JavaScript)

Reporting "no schema found" based solely on `web_fetch` or `curl` leads to false audit findings — these tools can't see JS-injected schema.

### Priority Order

1. **Crawlability & Indexation** (can Google find and index it?)
2. **Technical Foundations** (is the site fast and functional?)
3. **On-Page Optimization** (is content optimized?)
4. **Content Quality** (does it deserve to rank?)
5. **Authority & Links** (does it have credibility?)

---

## Technical SEO Audit

### Crawlability

**Robots.txt**

- Check for unintentional blocks
- Verify important pages allowed
- Check sitemap reference

**XML Sitemap**

- Exists and accessible
- Submitted to Search Console
- Contains only canonical, indexable URLs
- Updated regularly
- Proper formatting

**Site Architecture**

- Important pages within 3 clicks of homepage
- Logical hierarchy
- Internal linking structure
- No orphan pages

**Crawl Budget Issues** (for large sites)

- Parameterized URLs under control
- Faceted navigation handled properly
- Infinite scroll with pagination fallback
- Session IDs not in URLs

### Indexation

**Index Status**

- site:domain.com check
- Search Console coverage report
- Compare indexed vs. expected

**Indexation Issues**

- Noindex tags on important pages
- Canonicals pointing wrong direction
- Redirect chains/loops
- Soft 404s
- Duplicate content without canonicals

**Canonicalization**

- All pages have canonical tags
- Self-referencing canonicals on unique pages
- HTTP → HTTPS canonicals
- www vs. non-www consistency
- Trailing slash consistency

### Site Speed & Core Web Vitals

**Core Web Vitals**

- LCP (Largest Contentful Paint): < 2.5s
- INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

**Speed Factors**

- Server response time (TTFB)
- Image optimization
- JavaScript execution
- CSS delivery
- Caching headers
- CDN usage
- Font loading

**Tools**

- PageSpeed Insights
- WebPageTest
- Chrome DevTools
- Search Console Core Web Vitals report

### Mobile-Friendliness

- Responsive design (not separate m. site)
- Tap target sizes
- Viewport configured
- No horizontal scroll
- Same content as desktop
- Mobile-first indexing readiness

### Security & HTTPS

- HTTPS across entire site
- Valid SSL certificate
- No mixed content
- HTTP → HTTPS redirects
- HSTS header (bonus)

### URL Structure

- Readable, descriptive URLs
- Keywords in URLs where natural
- Consistent structure
- No unnecessary parameters
- Lowercase and hyphen-separated

---

## On-Page SEO Audit

### Title Tags

**Check for:**

- Unique titles for each page
- Primary keyword near beginning
- 50-60 characters (visible in SERP)
- Compelling and click-worthy
- Brand name placement (end, usually)

**Common issues:**

- Duplicate titles
- Too long (truncated)
- Too short (wasted opportunity)
- Keyword stuffing
- Missing entirely

### Meta Descriptions

**Check for:**

- Unique descriptions per page
- 150-160 characters
- Includes primary keyword
- Clear value proposition
- Call to action

**Common issues:**

- Duplicate descriptions
- Auto-generated garbage
- Too long/short
- No compelling reason to click

### Heading Structure

**Check for:**

- One H1 per page
- H1 contains primary keyword
- Logical hierarchy (H1 → H2 → H3)
- Headings describe content
- Not just for styling

**Common issues:**

- Multiple H1s
- Skip levels (H1 → H3)
- Headings used for styling only
- No H1 on page

### Content Optimization

**Primary Page Content**

- Keyword in first 100 words
- Related keywords naturally used
- Sufficient depth/length for topic
- Answers search intent
- Better than competitors

**Thin Content Issues**

- Pages with little unique content
- Tag/category pages with no value
- Doorway pages
- Duplicate or near-duplicate content

### Image Optimization

**Check for:**

- Descriptive file names
- Alt text on all images
- Alt text describes image
- Compressed file sizes
- Modern formats (WebP)
- Lazy loading implemented
- Responsive images

### Internal Linking

**Check for:**

- Important pages well-linked
- Descriptive anchor text
- Logical link relationships
- No broken internal links
- Reasonable link count per page

**Common issues:**

- Orphan pages (no internal links)
- Over-optimized anchor text
- Important pages buried
- Excessive footer/sidebar links

### Keyword Targeting

**Per Page**

- Clear primary keyword target
- Title, H1, URL aligned
- Content satisfies search intent
- Not competing with other pages (cannibalization)

**Site-Wide**

- Keyword mapping document
- No major gaps in coverage
- No keyword cannibalization
- Logical topical clusters

---

## Content Quality Assessment

### E-E-A-T Signals

**Experience**

- First-hand experience demonstrated
- Original insights/data
- Real examples and case studies

**Expertise**

- Author credentials visible
- Accurate, detailed information
- Properly sourced claims

**Authoritativeness**

- Recognized in the space
- Cited by others
- Industry credentials

**Trustworthiness**

- Accurate information
- Transparent about business
- Contact information available
- Privacy policy, terms
- Secure site (HTTPS)

### Content Depth

- Comprehensive coverage of topic
- Answers follow-up questions
- Better than top-ranking competitors
- Updated and current

### User Engagement Signals

- Time on page
- Bounce rate in context
- Pages per session
- Return visits

---

## Common Issues by Site Type

### SaaS/Product Sites

- Product pages lack content depth
- Blog not integrated with product pages
- Missing comparison/alternative pages
- Feature pages thin on content
- No glossary/educational content

### E-commerce

- Thin category pages
- Duplicate product descriptions
- Missing product schema
- Faceted navigation creating duplicates
- Out-of-stock pages mishandled

### Content/Blog Sites

- Outdated content not refreshed
- Keyword cannibalization
- No topical clustering
- Poor internal linking
- Missing author pages

### Local Business

- Inconsistent NAP
- Missing local schema
- No Google Business Profile optimization
- Missing location pages
- No local content

---

## Output Format

### Audit Report Structure

**Executive Summary**

- Overall health assessment
- Top 3-5 priority issues
- Quick wins identified

**Technical SEO Findings**
For each issue:

- **Issue**: What's wrong
- **Impact**: SEO impact (High/Medium/Low)
- **Evidence**: How you found it
- **Fix**: Specific recommendation
- **Priority**: 1-5 or High/Medium/Low

**On-Page SEO Findings**
Same format as above

**Content Findings**
Same format as above

**Prioritized Action Plan**

1. Critical fixes (blocking indexation/ranking)
2. High-impact improvements
3. Quick wins (easy, immediate benefit)
4. Long-term recommendations

---

## References

- [AI Writing Detection](references/ai-writing-detection.md): Common AI writing patterns to avoid (em dashes, overused phrases, filler words)
- For AI search optimization (AEO, GEO, LLMO, AI Overviews), consider dedicated AI SEO techniques and best practices

---

## Tools Referenced

**Free Tools**

- Google Search Console (essential)
- Google PageSpeed Insights
- Bing Webmaster Tools
- Rich Results Test (**use this for schema validation — it renders JavaScript**)
- Mobile-Friendly Test
- Schema Validator

> **Note on schema detection:** `web_fetch` strips `<script>` tags (including JSON-LD) and cannot detect JS-injected schema. Use the browser tool, Rich Results Test, or Screaming Frog instead — they render JavaScript and capture dynamically-injected markup. See the Schema Markup Detection Limitation section above.

**Paid Tools** (if available)

- Screaming Frog
- Ahrefs / Semrush
- Sitebulb
- ContentKing

---

## Task-Specific Questions

1. What pages/keywords matter most?
2. Do you have Search Console access?
3. Any recent changes or migrations?
4. Who are your top organic competitors?
5. What's your current organic traffic baseline?

# AI Writing Detection

Words, phrases, and punctuation patterns commonly associated with AI-generated text. Avoid these to ensure writing sounds natural and human.

Sources: Grammarly (2025), Microsoft 365 Life Hacks (2025), GPTHuman (2025), Walter Writes (2025), Textero (2025), Plagiarism Today (2025), Rolling Stone (2025), MDPI Blog (2025)

---

## Contents

- Em Dashes: The Primary AI Tell
- Overused Verbs
- Overused Adjectives
- Overused Transitions and Connectors
- Phrases That Signal AI Writing (Opening Phrases, Transitional Phrases, Concluding Phrases, Structural Patterns)
- Filler Words and Empty Intensifiers
- Academic-Specific AI Tells
- How to Self-Check

## Em Dashes: The Primary AI Tell

**The em dash (—) has become one of the most reliable markers of AI-generated content.**

Em dashes are longer than hyphens (-) and are used for emphasis, interruptions, or parenthetical information. While they have legitimate uses in writing, AI models drastically overuse them.

### Why Em Dashes Signal AI Writing

- AI models were trained on edited books, academic papers, and style guides where em dashes appear frequently
- AI uses em dashes as a shortcut for sentence variety instead of commas, colons, or parentheses
- Most human writers rarely use em dashes because they don't exist as a standard keyboard key
- The overuse is so consistent that it has become the unofficial signature of ChatGPT writing

### What To Do Instead

| Instead of | Use |
| ------------ | ----- |
| The results—which were surprising—showed... | The results, which were surprising, showed... |
| This approach—unlike traditional methods—allows... | This approach, unlike traditional methods, allows... |
| The study found—as expected—that... | The study found, as expected, that... |
| Communication skills—both written and verbal—are essential | Communication skills (both written and verbal) are essential |

### Guidelines

- Use commas for most parenthetical information
- Use colons to introduce explanations or lists
- Use parentheses for supplementary information
- Reserve em dashes for rare, deliberate emphasis only
- If you find yourself using more than one em dash per page, revise

---

## Overused Verbs

| Avoid | Use Instead |
| ------- | ------------- |
| delve (into) | explore, examine, investigate, look at |
| leverage | use, apply, draw on |
| optimise | improve, refine, enhance |
| utilise | use |
| facilitate | help, enable, support |
| foster | encourage, support, develop, nurture |
| bolster | strengthen, support, reinforce |
| underscore | emphasise, highlight, stress |
| unveil | reveal, show, introduce, present |
| navigate | manage, handle, work through |
| streamline | simplify, make more efficient |
| enhance | improve, strengthen |
| endeavour | try, attempt, effort |
| ascertain | find out, determine, establish |
| elucidate | explain, clarify, make clear |

---

## Overused Adjectives

| Avoid | Use Instead |
| ------- | ------------- |
| robust | strong, reliable, thorough, solid |
| comprehensive | complete, thorough, full, detailed |
| pivotal | key, critical, central, important |
| crucial | important, key, essential, critical |
| vital | important, essential, necessary |
| transformative | significant, important, major |
| cutting-edge | new, advanced, recent, modern |
| groundbreaking | new, original, significant |
| innovative | new, original, creative |
| seamless | smooth, easy, effortless |
| intricate | complex, detailed, complicated |
| nuanced | subtle, complex, detailed |
| multifaceted | complex, varied, diverse |
| holistic | complete, whole, comprehensive |

---

## Overused Transitions and Connectors

| Avoid | Use Instead |
| ------- | ------------- |
| furthermore | also, in addition, and |
| moreover | also, and, besides |
| notwithstanding | despite, even so, still |
| that being said | however, but, still |
| at its core | essentially, fundamentally, basically |
| to put it simply | in short, simply put |
| it is worth noting that | note that, importantly |
| in the realm of | in, within, regarding |
| in the landscape of | in, within |
| in today's [anything] | currently, now, today |

---

## Phrases That Signal AI Writing

### Opening Phrases to Avoid

- "In today's fast-paced world..."
- "In today's digital age..."
- "In an era of..."
- "In the ever-evolving landscape of..."
- "In the realm of..."
- "It's important to note that..."
- "Let's delve into..."
- "Imagine a world where..."

### Transitional Phrases to Avoid

- "That being said..."
- "With that in mind..."
- "It's worth mentioning that..."
- "At its core..."
- "To put it simply..."
- "In essence..."
- "This begs the question..."

### Concluding Phrases to Avoid

- "In conclusion..."
- "To sum up..."
- "By [doing X], you can [achieve Y]..."
- "In the final analysis..."
- "All things considered..."
- "At the end of the day..."

### Structural Patterns to Avoid

- "Whether you're a [X], [Y], or [Z]..." (listing three examples after "whether")
- "It's not just [X], it's also [Y]..."
- "Think of [X] as [elaborate metaphor]..."
- Starting sentences with "By" followed by a gerund: "By understanding X, you can Y..."

---

## Filler Words and Empty Intensifiers

These words often add nothing to meaning. Remove them or find specific alternatives:

- absolutely
- actually
- basically
- certainly
- clearly
- definitely
- essentially
- extremely
- fundamentally
- incredibly
- interestingly
- naturally
- obviously
- quite
- really
- significantly
- simply
- surely
- truly
- ultimately
- undoubtedly
- very

---

## Academic-Specific AI Tells

| Avoid | Use Instead |
| ------- | ------------- |
| shed light on | clarify, explain, reveal |
| pave the way for | enable, allow, make possible |
| a myriad of | many, numerous, various |
| a plethora of | many, numerous, several |
| paramount | very important, essential, critical |
| pertaining to | about, regarding, concerning |
| prior to | before |
| subsequent to | after |
| in light of | because of, given, considering |
| with respect to | about, regarding, for |
| in terms of | regarding, for, about |
| the fact that | that (or rewrite sentence) |

---

## How to Self-Check

1. Read your text aloud. If phrases sound unnatural in speech, revise them
2. Ask: "Would I say this in a conversation with a colleague?"
3. Check for repetitive sentence structures
4. Look for clusters of the words listed above
5. Ensure varied sentence lengths (not all similar length)
6. Verify each intensifier adds genuine meaning

---

name: seo-content-writer
version: "3.0.0"
description: "Creates keyword-optimized SEO content like blog posts, articles, product descriptions, and landing pages, using a 12-step workflow that includes title optimization, meta descriptions, header hierarchy, and a full CORE-EEAT checklist. Triggered by requests to 'write SEO content', 'create a blog post', 'draft a how-to guide', or 'write a 2000-word article about [topic]'."
license: Apache-2.0
compatibility: "Claude Code ≥1.0, skills.sh marketplace, ClawHub marketplace, Vercel Labs skills ecosystem. No system packages required. Optional: MCP network access for SEO tool integrations."
metadata:
  author: aaron-he-zhu
  version: "3.0.0"
  geo-relevance: "medium"
  tags:
    - seo
    - content-writing
    - blog-writing
    - seo-copywriting
    - content-creation
    - featured-snippet-optimization
    - how-to-guide
  triggers:
    - "write SEO content"
    - "create blog post"
    - "write an article"
    - "content writing"
    - "draft optimized content"
    - "write for SEO"
    - "blog writing"
    - "write me an article"
    - "create a blog post about"
    - "help me write SEO content"
    - "draft content for"
---

# SEO Content Writer

> **[SEO & GEO Skills Library](https://skills.sh/aaron-he-zhu/seo-geo-claude-skills)** · 20 skills for SEO + GEO · Install all: `npx skills add aaron-he-zhu/seo-geo-claude-skills`

<details>
<summary>Browse all 20 skills</summary>

**Research** · [keyword-research](../../research/keyword-research/) · [competitor-analysis](../../research/competitor-analysis/) · [serp-analysis](../../research/serp-analysis/) · [content-gap-analysis](../../research/content-gap-analysis/)

**Build** · **seo-content-writer** · [geo-content-optimizer](../geo-content-optimizer/) · [meta-tags-optimizer](../meta-tags-optimizer/) · [schema-markup-generator](../schema-markup-generator/)

**Optimize** · [on-page-seo-auditor](../../optimize/on-page-seo-auditor/) · [technical-seo-checker](../../optimize/technical-seo-checker/) · [internal-linking-optimizer](../../optimize/internal-linking-optimizer/) · [content-refresher](../../optimize/content-refresher/)

**Monitor** · [rank-tracker](../../monitor/rank-tracker/) · [backlink-analyzer](../../monitor/backlink-analyzer/) · [performance-reporter](../../monitor/performance-reporter/) · [alert-manager](../../monitor/alert-manager/)

**Cross-cutting** · [content-quality-auditor](../../cross-cutting/content-quality-auditor/) · [domain-authority-auditor](../../cross-cutting/domain-authority-auditor/) · [entity-optimizer](../../cross-cutting/entity-optimizer/) · [memory-management](../../cross-cutting/memory-management/)

</details>

This skill creates search-engine-optimized content that ranks well while providing genuine value to readers. It applies proven SEO copywriting techniques, proper keyword integration, and optimal content structure.

## When to Use This Skill

- Writing blog posts targeting specific keywords
- Creating landing pages optimized for search
- Developing pillar content for topic clusters
- Writing product descriptions for e-commerce
- Creating service pages for local SEO
- Producing how-to guides and tutorials
- Writing comparison and review articles

## What This Skill Does

1. **Keyword Integration**: Naturally incorporates target and related keywords
2. **Structure Optimization**: Creates scannable, well-organized content
3. **Title & Meta Creation**: Writes compelling, click-worthy titles
4. **Header Optimization**: Uses strategic H1-H6 hierarchy
5. **Internal Linking**: Suggests relevant internal link opportunities
6. **Readability Enhancement**: Ensures content is accessible and engaging
7. **Featured Snippet Optimization**: Formats for SERP feature opportunities

## How to Use

### Basic Content Creation

```
Write an SEO-optimized article about [topic] targeting the keyword [keyword]
```

```
Create a blog post for [topic] with these keywords: [keyword list]
```

### With Specific Requirements

```
Write a 2,000-word guide about [topic] targeting [keyword],
include FAQ section for featured snippets
```

### Content Briefs

```
Here's my content brief: [brief]. Write SEO-optimized content following this outline.
```

## Data Sources

> See [CONNECTORS.md](../../CONNECTORS.md) for tool category placeholders.

**With ~~SEO tool + ~~search console connected:**
Automatically pull keyword metrics (search volume, difficulty, CPC), competitor content analysis (top-ranking pages, content length, common topics), SERP features (featured snippets, PAA questions), and keyword opportunities (related keywords, question-based queries).

**With manual data only:**
Ask the user to provide:

1. Target primary keyword and 3-5 secondary keywords
2. Target audience and search intent (informational/commercial/transactional)
3. Target word count and desired tone
4. Any competitor URLs or content examples to reference

Proceed with the full workflow using provided data. Note in the output which metrics are from automated collection vs. user-provided data.

## Instructions

When a user requests SEO content:

1. **Gather Requirements**

   Confirm or ask for:

   ```markdown
   ### Content Requirements
   
   **Primary Keyword**: [main keyword]
   **Secondary Keywords**: [2-5 related keywords]
   **Target Word Count**: [length]
   **Content Type**: [blog/guide/landing page/etc.]
   **Target Audience**: [who is this for]
   **Search Intent**: [informational/commercial/transactional]
   **Tone**: [professional/casual/technical/friendly]
   **CTA Goal**: [what action should readers take]
   **Competitor URLs**: [top ranking content to beat]
   ```

2. **Load CORE-EEAT Quality Constraints**

   Before writing, load content quality standards from the [CORE-EEAT Benchmark](../../#):

   ```markdown
   ### CORE-EEAT Pre-Write Checklist

   **Content Type**: [identified from requirements above]
   **Loaded Constraints** (high-weight items for this content type):

   Apply these standards while writing:

   | ID | Standard | How to Apply |
   |----|----------|-------------|
   | C01 | Intent Alignment | Title promise must match content delivery |
   | C02 | Direct Answer | Core answer in first 150 words |
   | C06 | Audience Targeting | State "this article is for..." |
   | C10 | Semantic Closure | Conclusion answers opening question + next steps |
   | O01 | Heading Hierarchy | H1→H2→H3, no level skipping |
   | O02 | Summary Box | Include TL;DR or Key Takeaways |
   | O06 | Section Chunking | Each section single topic; paragraphs 3–5 sentences |
   | O09 | Information Density | No filler; consistent terminology |
   | R01 | Data Precision | ≥5 precise numbers with units |
   | R02 | Citation Density | ≥1 external citation per 500 words |
   | R04 | Evidence-Claim Mapping | Every claim backed by evidence |
   | R07 | Entity Precision | Full names for people/orgs/products |
   | C03 | Query Coverage | Cover ≥3 query variants (synonyms, long-tail) |
   | O08 | Anchor Navigation | Table of contents with jump links |
   | O10 | Multimedia Structure | Images/videos have captions and carry information |
   | E07 | Practical Tools | Include downloadable templates, checklists, or calculators |

   _These 16 items apply across all content types. For content-type-specific dimension weights, see the Content-Type Weight Table in [core-eeat-benchmark.md](../../#)._
   _Full 80-item benchmark: [#](../../#)_
   _For complete content quality audit: use [content-quality-auditor](../../cross-cutting/content-quality-auditor/)_
   ```

3. **Research and Plan**

   Before writing:

   ```markdown
   ### Content Research
   
   **SERP Analysis**:
   - Top results format: [what's ranking]
   - Average word count: [X] words
   - Common sections: [list]
   - SERP features: [snippets, PAA, etc.]
   
   **Keyword Map**:
   - Primary: [keyword] - use in title, H1, intro, conclusion
   - Secondary: [keywords] - use in H2s, body paragraphs
   - LSI/Related: [terms] - sprinkle naturally throughout
   - Questions: [PAA questions] - use as H2/H3s or FAQ
   
   **Content Angle**:
   [What unique perspective or value will this content provide?]
   ```

4. **Create Optimized Title**

   ```markdown
   ### Title Optimization
   
   **Requirements**:
   - Include primary keyword (preferably at start)
   - Under 60 characters for full SERP display
   - Compelling and click-worthy
   - Match search intent
   
   **Title Options**:
   
   1. [Title option 1] ([X] chars)
      - Keyword position: [front/middle]
      - Power words: [list]
   
   2. [Title option 2] ([X] chars)
      - Keyword position: [front/middle]
      - Power words: [list]
   
   **Recommended**: [Best option with reasoning]
   ```

5. **Write Meta Description**

   ```markdown
   ### Meta Description
   
   **Requirements**:
   - 150-160 characters
   - Include primary keyword naturally
   - Include call-to-action
   - Compelling and specific
   
   **Meta Description**:
   "[Description text]" ([X] characters)
   
   **Elements included**:
   - ✅ Primary keyword
   - ✅ Value proposition
   - ✅ CTA or curiosity hook
   ```

6. **Structure Content and Write**

   Structure: H1 (primary keyword, one per page) > Introduction (100-150 words, hook + promise + keyword in first 100 words) > H2 sections (secondary keywords/questions) > H3 sub-topics > FAQ section > Conclusion (summary + keyword + CTA).

7. **Apply On-Page SEO Best Practices**

   Follow the on-page SEO checklist (keyword placement, content quality, readability, technical elements) and the content writing template (H1 with keyword, hook, sections with H2/H3, FAQ, conclusion with CTA).

   > **Reference**: See [references/seo-writing-checklist.md](./references/seo-writing-checklist.md) for the full on-page SEO checklist, content writing template, and featured snippet optimization patterns.

   Key requirements while writing:
   - Primary keyword in title, H1, first 100 words, at least one H2, and conclusion
   - Paragraphs of 3-5 sentences; varied sentence length; bullet points and bold key phrases
   - Internal links (2-5) and external authoritative links (2-3)
   - FAQ section with 40-60 word answers for featured snippet opportunity
   - Optimize for definition, list, table, and how-to snippets where applicable

8. **Add Internal/External Links**

   ```markdown
   ### Link Recommendations
   
   **Internal Links** (include 2-5):
   1. "[anchor text]" → [/your-page-url] (relevant because: [reason])
   2. "[anchor text]" → [/your-page-url] (relevant because: [reason])
   
   **External Links** (include 2-3 authoritative sources):
   1. "[anchor text]" → [authoritative-source.com] (supports: [claim])
   2. "[anchor text]" → [authoritative-source.com] (supports: [claim])
   ```

9. **Final SEO Review and CORE-EEAT Self-Check**

    Score content across 10 SEO factors (title, meta description, H1, keyword placement, H2s, internal links, external links, FAQ, readability, word count) and produce an Overall SEO Score out of 10.

    Then verify the 16 CORE-EEAT pre-write constraints (C01, C02, C06, C10, O01, O02, O06, O09, R01, R02, R04, R07, C03, O08, O10, E07) with pass/warning/fail status. List items needing attention.

    _For full 80-item audit, use [content-quality-auditor](../../cross-cutting/content-quality-auditor/)_

## Validation Checkpoints

### Input Validation

- [ ] Primary keyword confirmed and matches search intent
- [ ] Target word count specified (minimum 800 words for substantive content)
- [ ] Content type and audience clearly defined
- [ ] Competitor URLs reviewed or target SERP features identified

### Output Validation

- [ ] Keyword density within 1-2% for primary keyword (Note: Keyword density is a guideline, not a hard rule. Modern search engines prioritize semantic relevance and natural language over exact density targets. Focus on covering the topic comprehensively with semantic variants rather than hitting a specific percentage.)
- [ ] All sections from outline covered completely
- [ ] Internal links included (2-5 relevant links)
- [ ] FAQ section present with at least 3 questions
- [ ] Readability score appropriate for target audience
- [ ] Source of each data point clearly stated (~~SEO tool data, user-provided, or estimated)

## Example

**User**: "Write an SEO-optimized article about 'email marketing best practices' targeting small businesses"

> **Reference**: See [references/seo-writing-checklist.md](./references/seo-writing-checklist.md) for the full example output demonstrating a complete SEO article with meta description, H1/H2/H3 hierarchy, statistics with citations, comparison tables, FAQ section, and conclusion with CTA.

The example output demonstrates: keyword in H1 and first 100 words, statistics with sources (DMA, Emarsys), comparison tables, bullet-point lists, pro tips, FAQ section with 40-60 word answers, and a clear CTA in the conclusion.

## Content Type Templates

### How-To Guide

```
Write a how-to guide for [task] targeting [keyword]
```

### Comparison Article

```
Write a comparison article: [Option A] vs [Option B] for [keyword]
```

### Listicle

```
Write a list post: "X Best [Items] for [Audience/Purpose]" targeting [keyword]
```

### Ultimate Guide

```
Write an ultimate guide about [topic] (3,000+ words) targeting [keyword]
```

## Tips for Success

1. **Match search intent** - Informational queries need guides, not sales pages
2. **Front-load value** - Put key information early for readers and snippets
3. **Use data and examples** - Specific beats generic every time
4. **Write for humans first** - SEO optimization should feel natural
5. **Include visual elements** - Break up text with images, tables, lists
6. **Update regularly** - Fresh content signals to search engines

## Reference Materials

- [Title Formulas](./references/title-formulas.md) - Proven headline formulas, power words, CTR patterns
- [Content Structure Templates](./references/content-structure-templates.md) - Templates for blog posts, comparisons, listicles, how-tos, pillar pages

## Related Skills

- [keyword-research](../../research/keyword-research/) — Find keywords to target
- [geo-content-optimizer](../geo-content-optimizer/) — Optimize for AI citations
- [meta-tags-optimizer](../meta-tags-optimizer/) — Create compelling meta tags
- [on-page-seo-auditor](../../optimize/on-page-seo-auditor/) — Audit SEO elements
- [content-quality-auditor](../../cross-cutting/content-quality-auditor/) — Full 80-item CORE-EEAT audit

# Content Structure Templates

Markdown templates for common SEO content types. Customize section headings and content while maintaining the structural framework.

## Blog Post (Informational)

**Target word count**: 1,200-1,800 words
**Primary goal**: Educate and inform, build authority, rank for informational queries

```markdown
# [Primary Keyword in H1] - [Benefit or Hook]

[Opening hook - 1 compelling sentence that grabs attention]

[Problem statement - describe the pain point or challenge your reader faces]

[Promise - explain what readers will learn or gain from this post]

In this guide, you'll discover:
- [Key takeaway 1]
- [Key takeaway 2]
- [Key takeaway 3]

## What Is [Topic]?

[Clear definition in 40-60 words - GEO-optimized]

[Expanded explanation with context]

[Why this matters - relevance to reader]

## Why [Topic] Matters

[Benefit 1 with supporting evidence]

[Benefit 2 with supporting evidence]

[Benefit 3 with supporting evidence]

> **Key Insight**: [Highlighted important point or statistic]

## [Secondary Keyword or Main Section 1]

[Introduction to this section]

### [Sub-topic 1]

[Detailed explanation]

**Key points**:
- Point 1
- Point 2
- Point 3

### [Sub-topic 2]

[Detailed explanation]

[Example or case study]

## [Secondary Keyword or Main Section 2]

[Section introduction]

| Factor | Description | Impact |
|--------|-------------|--------|
| [Factor 1] | [Description] | High/Medium/Low |
| [Factor 2] | [Description] | High/Medium/Low |
| [Factor 3] | [Description] | High/Medium/Low |

[Additional explanation]

## [Secondary Keyword or Main Section 3]

[Content for this section]

**Best practices**:
1. [Practice 1 with explanation]
2. [Practice 2 with explanation]
3. [Practice 3 with explanation]

## Common Mistakes to Avoid

### [Mistake 1]

[Why this is a mistake]
[How to avoid it]

### [Mistake 2]

[Why this is a mistake]
[How to avoid it]

### [Mistake 3]

[Why this is a mistake]
[How to avoid it]

## Frequently Asked Questions

### [Question from PAA or common query]?

[Direct answer in 40-60 words]

[Optional: Additional context]

### [Question 2]?

[Direct answer]

### [Question 3]?

[Direct answer]

## Conclusion

[Recap key points - include primary keyword]

[Final insight or takeaway]

[Clear call-to-action: next step for reader]

---

**Related reading**: [Internal link 1] | [Internal link 2] | [Internal link 3]
```

**Internal links**: 3-5 contextual links to related content
**External links**: 2-3 links to authoritative sources
**Keywords**: Primary in H1, first 100 words, conclusion; secondary in H2s
**GEO-optimization**: Definition block, FAQ section, quotable statistics

---

## Comparison Article ("[A] vs [B]")

**Target word count**: 1,500-2,500 words
**Primary goal**: Help readers choose between options, rank for comparison queries

```markdown
# [Option A] vs [Option B]: Which Is Better for [Use Case]?

[Hook - present the comparison dilemma]

[Context - why this comparison matters]

[Promise - what readers will understand after reading]

**Quick answer**: [Brief verdict for those who want immediate answer]

## [Option A] vs [Option B]: Quick Comparison

| Feature | [Option A] | [Option B] |
|---------|-----------|-----------|
| [Feature 1] | [Details] | [Details] |
| [Feature 2] | [Details] | [Details] |
| [Feature 3] | [Details] | [Details] |
| [Feature 4] | [Details] | [Details] |
| **Best for** | [Use case] | [Use case] |
| **Starting price** | [Price] | [Price] |

## What Is [Option A]?

[Clear definition]

[Key features and capabilities]

**Pros**:
- [Advantage 1]
- [Advantage 2]
- [Advantage 3]

**Cons**:
- [Disadvantage 1]
- [Disadvantage 2]

## What Is [Option B]?

[Clear definition]

[Key features and capabilities]

**Pros**:
- [Advantage 1]
- [Advantage 2]
- [Advantage 3]

**Cons**:
- [Disadvantage 1]
- [Disadvantage 2]

## [Option A] vs [Option B]: Detailed Comparison

### [Feature Category 1]

**[Option A]**: [Detailed explanation with examples]

**[Option B]**: [Detailed explanation with examples]

**Winner**: [A/B/Tie] - [Brief reasoning]

### [Feature Category 2]

**[Option A]**: [Details]

**[Option B]**: [Details]

**Winner**: [A/B/Tie] - [Brief reasoning]

### [Feature Category 3]

[Continue pattern for key comparison points]

## Pricing: [Option A] vs [Option B]

### [Option A] Pricing

- [Tier 1]: $[X]/month - [What's included]
- [Tier 2]: $[X]/month - [What's included]
- [Tier 3]: $[X]/month - [What's included]

### [Option B] Pricing

- [Tier 1]: $[X]/month - [What's included]
- [Tier 2]: $[X]/month - [What's included]
- [Tier 3]: $[X]/month - [What's included]

**Value winner**: [Which offers better value and why]

## Which Should You Choose?

### Choose [Option A] if:
- [Criteria 1]
- [Criteria 2]
- [Criteria 3]

### Choose [Option B] if:
- [Criteria 1]
- [Criteria 2]
- [Criteria 3]

## Frequently Asked Questions

### Is [Option A] better than [Option B]?

[Nuanced answer - depends on use case]

### Can you use [Option A] and [Option B] together?

[Answer with explanation]

### Which is easier for beginners: [Option A] or [Option B]?

[Answer with reasoning]

## Final Verdict: [Option A] vs [Option B]

[Balanced conclusion]

[Recommendation based on different use cases]

[Clear call-to-action]
```

**Internal links**: Links to detailed reviews of each option, related comparisons
**External links**: Official websites of both options, third-party reviews
**Keywords**: Both options mentioned throughout, comparison keywords in H2s

---

## Listicle ("Top N [Items]")

**Target word count**: 1,500-2,500 words (depending on list length)
**Primary goal**: Provide curated recommendations, rank for "best [topic]" queries

```markdown
# [Number] Best [Items] for [Audience/Purpose] ([Year])

[Hook - establish why this list matters]

[Context - what makes these the "best"]

[Promise - what readers will gain]

After testing [X] different [items], we've identified the [number] that deliver the best results for [audience/purpose].

## Quick Summary: Top [Number] [Items]

| Rank | [Item] | Best For | Price |
|------|--------|----------|-------|
| 1 | [Item 1] | [Use case] | [Price] |
| 2 | [Item 2] | [Use case] | [Price] |
| 3 | [Item 3] | [Use case] | [Price] |

## How We Chose These [Items]

Our selection criteria:
- [Criterion 1] - [Why it matters]
- [Criterion 2] - [Why it matters]
- [Criterion 3] - [Why it matters]

## 1. [Item Name] - Best for [Specific Use Case]

![Alt text: [Item name] screenshot/image]

**What it is**: [Brief description]

**Why we love it**: [Key benefits and features]

**Key features**:
- [Feature 1]
- [Feature 2]
- [Feature 3]

**Pricing**: [Price details]

**Pros**:
- [Pro 1]
- [Pro 2]

**Cons**:
- [Con 1]
- [Con 2]

**Best for**: [Ideal user or use case]

[Link to item]

---

## 2. [Item Name] - Best for [Specific Use Case]

[Follow same structure as #1]

---

## 3. [Item Name] - Best for [Specific Use Case]

[Continue pattern for all items in list]

---

## Comparison: Which [Item] Is Right for You?

| Feature | [Item 1] | [Item 2] | [Item 3] |
|---------|----------|----------|----------|
| [Feature 1] | ✓/✗ | ✓/✗ | ✓/✗ |
| [Feature 2] | ✓/✗ | ✓/✗ | ✓/✗ |
| [Feature 3] | ✓/✗ | ✓/✗ | ✓/✗ |

## How to Choose the Best [Item] for Your Needs

### Consider [Factor 1]

[Explanation of how this factor affects choice]

### Consider [Factor 2]

[Explanation]

### Consider [Factor 3]

[Explanation]

## Frequently Asked Questions

### What is the best [item] for beginners?

[Answer with specific recommendation]

### Which [item] offers the best value?

[Answer with reasoning]

### Are paid [items] better than free ones?

[Balanced answer]

## Conclusion: Our Top Pick

[Restate #1 recommendation]

[Why it's the best overall choice]

[Call-to-action]
```

**Internal links**: Related guides, comparison articles, category pages
**External links**: Links to each recommended item, review sources
**Keywords**: "Best [topic]", individual item names, use case keywords

---

## How-To Guide (Step-by-Step)

**Target word count**: 1,200-2,000 words
**Primary goal**: Teach a specific process, rank for "how to [task]" queries

```markdown
# How to [Achieve Goal]: [Number]-Step Guide [for Audience]

[Hook - present the outcome readers want]

[Current problem - why this is challenging]

[Promise - what readers will accomplish]

By following this step-by-step guide, you'll be able to [specific outcome] in [timeframe].

## What You'll Need

**Tools**:
- [Tool 1]
- [Tool 2]
- [Tool 3]

**Time required**: [Estimated time]

**Skill level**: [Beginner/Intermediate/Advanced]

## Why [Task] Matters

[Explain the benefits of completing this task]

[Provide context and importance]

## Step 1: [Action Title]

![Alt text: Screenshot showing step 1]

[Clear instruction for this step]

[Why this step is important]

**How to do it**:
1. [Sub-step 1]
2. [Sub-step 2]
3. [Sub-step 3]

> **Pro Tip**: [Helpful tip to make this step easier]

**Common mistakes**:
- [Mistake to avoid]
- [Another mistake]

---

## Step 2: [Action Title]

![Alt text: Screenshot showing step 2]

[Instruction for this step]

[Additional context or explanation]

**Example**: [Concrete example showing this step]

---

## Step 3: [Action Title]

[Continue pattern for all steps]

---

## Step [Final Number]: [Action Title]

[Final step instruction]

[What success looks like]

**You'll know it's working when**: [Success indicators]

---

## What to Do If [Common Problem]

### Problem: [Issue 1]

**Solution**: [How to fix it]

### Problem: [Issue 2]

**Solution**: [How to fix it]

## Advanced Tips

Once you've mastered the basics:

1. **[Advanced tip 1]** - [Explanation]
2. **[Advanced tip 2]** - [Explanation]
3. **[Advanced tip 3]** - [Explanation]

## Frequently Asked Questions

### How long does it take to [complete task]?

[Realistic timeframe with variables]

### Do I need [specific tool/skill] to [complete task]?

[Answer with alternatives if applicable]

### What if [specific concern]?

[Address concern with solution]

## Conclusion

[Recap the process]

[Encourage reader to take action]

[Clear next step or CTA]

**Next steps**: [Link to related guide or advanced tutorial]
```

**Internal links**: Links to tool reviews, prerequisite guides, related tutorials
**External links**: Tool documentation, additional resources
**Keywords**: "How to [task]", action words in each step heading

---

## Product Review

**Target word count**: 1,500-2,000 words
**Primary goal**: Help buyers make informed decisions, rank for "[product] review" queries

```markdown
# [Product Name] Review: Is It Worth It in [Year]?

[Hook - establish the product's promise or popularity]

[Context - who this review is for]

After using [Product] for [timeframe], here's my honest assessment of whether it lives up to the hype.

## [Product Name] Overview

**What it is**: [Clear description]

**Price**: [Pricing details]

**Best for**: [Ideal user or use case]

**Rating**: ★★★★☆ (4/5)

## Pros and Cons at a Glance

### Pros
- [Major advantage 1]
- [Major advantage 2]
- [Major advantage 3]

### Cons
- [Main limitation 1]
- [Main limitation 2]

## What Is [Product Name]?

[Detailed product description]

[Who makes it and company background]

[Product positioning and target market]

## Key Features

### [Feature 1]

[Detailed explanation of feature]

[How it works in practice]

[Our experience with this feature]

### [Feature 2]

[Continue pattern for main features]

## Performance Testing

### [Test Category 1]

**What we tested**: [Testing methodology]

**Results**: [Specific results with data]

**Verdict**: [Assessment]

### [Test Category 2]

[Continue testing pattern]

## Pricing and Plans

| Plan | Price | What's Included |
|------|-------|-----------------|
| [Tier 1] | $[X]/month | [Features] |
| [Tier 2] | $[X]/month | [Features] |
| [Tier 3] | $[X]/month | [Features] |

**Value assessment**: [Whether pricing is justified]

## [Product] vs Competitors

| Feature | [Product] | [Competitor 1] | [Competitor 2] |
|---------|-----------|----------------|----------------|
| [Feature 1] | [Details] | [Details] | [Details] |
| [Feature 2] | [Details] | [Details] | [Details] |
| [Feature 3] | [Details] | [Details] | [Details] |

## Who Should Buy [Product]?

### Perfect for:
- [User type 1] because [reason]
- [User type 2] because [reason]

### Not ideal for:
- [User type] because [reason]
- [User type] because [reason]

## Frequently Asked Questions

### Is [Product] worth the price?

[Honest assessment with context]

### How does [Product] compare to [main competitor]?

[Balanced comparison]

### What's the learning curve like?

[Assessment with timeframe]

## Final Verdict: Should You Buy [Product]?

[Balanced conclusion]

[Specific recommendation based on use case]

**Our rating**: ★★★★☆ (4/5)

[Link to product with disclosure if affiliate]
```

**Disclosure**: Include affiliate disclosure if applicable
**Internal links**: Related product reviews, comparison articles, category pages
**External links**: Product website, official documentation

---

## Pillar Page (Comprehensive Guide)

**Target word count**: 3,000-5,000+ words
**Primary goal**: Become definitive resource, rank for head terms, support topic cluster

```markdown
# [Topic]: The Complete Guide [for Audience] ([Year])

[Compelling hook - establish the importance of this topic]

[Problem - what challenges exist in this space]

[Promise - what this comprehensive guide delivers]

This is the most comprehensive guide to [topic] on the web. You'll learn everything from fundamentals to advanced strategies.

## Table of Contents

- [Chapter 1]
- [Chapter 2]
- [Chapter 3]
- [Chapter 4]
- [Chapter 5]

## Chapter 1: [Topic] Fundamentals

### What Is [Topic]?

[Comprehensive definition - GEO-optimized]

[History and evolution]

[Current state and importance]

### Why [Topic] Matters

[Multiple benefits with evidence]

[Industry statistics and trends]

### Key Concepts and Terminology

| Term | Definition |
|------|------------|
| [Term 1] | [Definition] |
| [Term 2] | [Definition] |
| [Term 3] | [Definition] |

## Chapter 2: [Major Sub-Topic]

[Comprehensive section on major aspect]

[Multiple sub-sections with H3 headings]

[Examples, case studies, data]

[Internal links to detailed cluster content]

> **Deep dive**: For more on [sub-topic], see our complete guide: [link]

## Chapter 3: [Major Sub-Topic]

[Continue pattern with substantial content sections]

## Chapter 4: [Advanced/Tactical Section]

[Strategic or tactical content]

[Actionable frameworks and processes]

## Chapter 5: [Implementation/Case Studies]

[Real-world applications]

[Success stories]

[Implementation roadmap]

## Frequently Asked Questions

[Comprehensive FAQ section with 8-10 questions]

## Key Takeaways

[Summarize main points from each chapter]

## What's Next?

[Recommend next steps]

[Links to related cluster content]

## Resources

**Recommended tools**:
- [Tool 1] - [Use case]
- [Tool 2] - [Use case]

**Further reading**:
- [Internal link to cluster content]
- [Internal link to cluster content]
- [External resource]
```

**Internal links**: 8-15 links to related cluster content
**External links**: 5-10 authoritative sources
**Update frequency**: Quarterly for pillar pages

---

## FAQ Page

**Target word count**: 1,000-1,500 words
**Primary goal**: Answer common questions, rank for question queries, enable FAQ rich results

```markdown
# [Topic]: Frequently Asked Questions

[Introduction explaining what questions this page answers]

[Who this FAQ is for]

## General Questions

### What is [topic]?

[Comprehensive answer with definition]

### How does [topic] work?

[Clear explanation with steps if applicable]

### Why is [topic] important?

[Benefits and context]

## Getting Started

### How do I get started with [topic]?

[Step-by-step guidance]

### What do I need to [accomplish goal]?

[Requirements and prerequisites]

### How long does it take to [achieve result]?

[Realistic timeframe]

## Common Problems

### Why isn't [expected result] happening?

[Troubleshooting guidance]

### What should I do if [problem occurs]?

[Solution with steps]

### How do I fix [specific error]?

[Fix instructions]

## Comparison Questions

### [Option A] vs [Option B]: which is better?

[Balanced comparison answer]

### Should I [action 1] or [action 2]?

[Guidance based on scenarios]

## Pricing and Plans

### How much does [topic] cost?

[Pricing information with context]

### Is there a free version?

[Information about free options]

## Advanced Questions

### Can I [advanced action]?

[Answer with technical details]

### How do I [complex task]?

[Guidance with link to detailed guide]

## Still Have Questions?

[Call-to-action for additional support]

[Contact information or link to contact page]
```

**Schema markup**: Add FAQPage schema to enable rich results
**Internal links**: Link to detailed guides for complex answers
**Keywords**: Include question keywords naturally

---

## Implementation Checklist

For any template:

- [ ] Customize all [bracketed placeholders]
- [ ] Include primary keyword in H1 and first 100 words
- [ ] Place secondary keywords in H2/H3 headings
- [ ] Add 3-5 internal links to related content
- [ ] Include 2-3 external links to authoritative sources
- [ ] Create GEO-optimized definition blocks
- [ ] Add FAQ section for featured snippet opportunities
- [ ] Include relevant images with descriptive alt text
- [ ] Write compelling meta description (150-160 chars)
- [ ] Optimize title tag (50-60 chars with primary keyword)

# SEO Writing Checklist and Content Template

On-page SEO checklist, content writing template, and featured snippet optimization patterns.

---

## On-Page SEO Checklist

**Keyword Placement**:

- [ ] Primary keyword in title
- [ ] Primary keyword in H1
- [ ] Primary keyword in first 100 words
- [ ] Primary keyword in at least one H2
- [ ] Primary keyword in conclusion
- [ ] Primary keyword in meta description
- [ ] Secondary keywords in H2s/H3s
- [ ] Related terms throughout body

**Content Quality**:

- [ ] Comprehensive coverage of topic
- [ ] Original insights or data
- [ ] Actionable takeaways
- [ ] Examples and illustrations
- [ ] Expert quotes or citations (for E-E-A-T)

**Readability**:

- [ ] Paragraphs of 3-5 sentences (per CORE-EEAT O06 Section Chunking standard)
- [ ] Varied sentence length
- [ ] Bullet points and lists
- [ ] Bold key phrases
- [ ] Table of contents for long content

**Technical**:

- [ ] Internal links to relevant pages (2-5)
- [ ] External links to authoritative sources (2-3)
- [ ] Image alt text with keywords
- [ ] URL slug includes keyword

---

## Content Writing Template

```markdown
# [H1 with Primary Keyword]

[Hook sentence that grabs attention]

[Problem statement or context - why this matters]

[Promise - what the reader will learn/gain] [Include primary keyword naturally]

[Brief overview of what's covered - can be bullet points for scanability]

## [H2 - First Main Section with Secondary Keyword]

[Introduction to section - 1-2 sentences]

[Main content with valuable information]

[Examples, data, or evidence to support points]

[Transition to next section]

### [H3 - Sub-section if needed]

[Detailed content]

[Key points in bullet format]:
- Point 1
- Point 2
- Point 3

## [H2 - Second Main Section]

[Continue with valuable content...]

> **Pro Tip**: [Highlighted tip or key insight]

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data | Data | Data |

## [H2 - Additional Sections as Needed]

[Content...]

## Frequently Asked Questions

### [Question from PAA or common query]?

[Direct, concise answer in 40-60 words for featured snippet opportunity]

### [Question 2]?

[Answer]

### [Question 3]?

[Answer]

## Conclusion

[Summary of key points - include primary keyword]

[Final thought or insight]

[Clear call-to-action: what should reader do next?]
```

---

## Featured Snippet Optimization

**For Definition Snippets**:
"[Term] is [clear, concise definition in 40-60 words]"

**For List Snippets**:
Create clear, numbered or bulleted lists under H2s

**For Table Snippets**:
Use comparison tables with clear headers

**For How-To Snippets**:
Number each step clearly: "Step 1:", "Step 2:", etc.

---

## Example: Full SEO Article

**User**: "Write an SEO-optimized article about 'email marketing best practices' targeting small businesses"

**Output**:

```markdown
# Email Marketing Best Practices: A Complete Guide for Small Businesses

**Meta Description**: Discover proven email marketing best practices that help small businesses increase open rates, boost engagement, and drive sales. Start improving your campaigns today. (158 chars)

---

Want to know the secret behind small businesses that consistently turn subscribers into loyal customers? It's not luck---it's strategic email marketing.

Email marketing remains one of the most effective channels for small businesses, delivering an average ROI of $42 for every $1 spent. But with inboxes more crowded than ever, following email marketing best practices isn't optional---it's essential for survival.

In this guide, you'll learn:
- How to build a quality email list that converts
- Proven strategies to increase open and click rates
- Advanced personalization techniques that drive results
- Common mistakes that kill email performance

Let's dive into the strategies that will transform your email marketing.

## Why Email Marketing Matters for Small Businesses

Before we explore the best practices, let's understand why email deserves your attention.

Unlike social media where algorithms control who sees your content, email gives you direct access to your audience. You own your email list---no platform can take it away.

**Key email marketing statistics for small businesses**:
- 81% of SMBs rely on email as their primary customer acquisition channel
- Email subscribers are 3x more likely to share content on social media
- Personalized emails generate 6x higher transaction rates

## Building a High-Quality Email List

### Use Strategic Opt-in Incentives

The foundation of effective email marketing is a quality list. Here's how to grow yours:

**Lead magnets that convert**:
- Industry-specific templates
- Exclusive discounts or early access
- Free tools or calculators
- Educational email courses

> **Pro Tip**: The best lead magnets solve a specific, immediate problem for your target audience.

### Implement Double Opt-in

Double opt-in confirms subscriber intent and improves deliverability. Yes, you'll have fewer subscribers, but they'll be more engaged.

| Single Opt-in | Double Opt-in |
|---------------|---------------|
| More subscribers | Fewer subscribers |
| Higher bounce rates | Lower bounce rates |
| Lower engagement | Higher engagement |
| Spam risk | Better deliverability |

## Crafting Emails That Get Opened

### Write Compelling Subject Lines

Your subject line determines whether emails get opened or ignored.

**Subject line best practices**:
1. Keep it under 50 characters
2. Create urgency without being spammy
3. Use numbers and specifics
4. Personalize when possible
5. A/B test consistently

### Optimize Preview Text

The preview text (preheader) is your second chance to convince someone to open. Use it to expand on your subject line, not repeat it.

## Personalization Strategies That Work

Generic emails perform poorly. Here's how to personalize effectively:

### Segment Your Email List

Divide your list based on:
- Purchase history
- Engagement level
- Demographics
- Interests or preferences
- Customer lifecycle stage

### Use Dynamic Content

Send the same email but show different content blocks based on subscriber data.

## Frequently Asked Questions

### How often should small businesses send marketing emails?

For most small businesses, sending 1-2 emails per week strikes the right balance. This keeps you top-of-mind without overwhelming subscribers. Monitor your unsubscribe rates---if they spike after increasing frequency, scale back.

### What is a good email open rate for small businesses?

A good email open rate for small businesses is 20-25%. However, this varies by industry. E-commerce averages 15-20%, while B2B services often see 25-30%. Focus on improving your own benchmarks rather than industry averages.

### Should I buy email lists to grow faster?

Never buy email lists. Purchased lists violate GDPR and CAN-SPAM regulations, damage your sender reputation, and result in poor engagement. Organic list growth, while slower, produces much better results.

## Conclusion

Implementing these email marketing best practices will help your small business build stronger customer relationships and drive consistent revenue. Remember: quality always beats quantity in email marketing.

Start with one improvement today. Whether it's segmenting your list, testing subject lines, or cleaning inactive subscribers, small changes compound into significant results.

**Ready to level up your email marketing?** Download our free Email Marketing Checklist to ensure every campaign you send follows these best practices.

---

*Further reading: [Internal link: "How to Write Email Copy That Converts"]*

*Sources: [Litmus Email Marketing Statistics](https://litmus.com), [Campaign Monitor Email Benchmarks](https://campaignmonitor.com)*
```

# Title and Headline Formulas

Proven title structures that drive clicks and rankings. All formulas target 50-60 characters for optimal SERP display.

## Numbered List Formulas

**Pattern**: [Number] [Adjective] [Topic] [Qualifier/Benefit]

### Examples

- "7 Ways to Improve Your SEO Rankings in 2024"
- "15 Content Marketing Strategies That Actually Work"
- "10 Free Tools for Keyword Research (Beginner-Friendly)"
- "21 Email Marketing Tips from Industry Experts"
- "5 Quick Wins for Better Site Performance"

**Why it works**: Numbers promise specific value, create curiosity, set clear expectations.

**Best practices**:

- Odd numbers (7, 9, 15) often outperform even numbers
- Use specific numbers (13 vs "over 10")
- Keep total under 30 for credibility
- Match number to actual content sections

---

## How-To Formulas

**Pattern 1**: How to [Achieve Goal] in [Timeframe]

- "How to Rank on Google in 30 Days"
- "How to Write SEO Content in Under 2 Hours"
- "How to Build Backlinks in 2024"

**Pattern 2**: How to [Achieve Goal] Without [Common Objection]

- "How to Learn SEO Without Spending Money"
- "How to Increase Traffic Without Paid Ads"
- "How to Write Blog Posts Without Writer's Block"

**Pattern 3**: How to [Achieve Goal] (Even If [Limitation])

- "How to Rank #1 (Even If You're a New Website)"
- "How to Get Backlinks (Even With Zero Audience)"
- "How to Write SEO Content (Even If You Hate Writing)"

**Pattern 4**: How to [Achieve Goal] Like [Authority/Expert]

- "How to Write Email Copy Like a Professional Copywriter"
- "How to Do Keyword Research Like an SEO Pro"
- "How to Create Content Like Top Marketing Agencies"

---

## Question Formulas

**Pattern 1**: What Is [Topic]? [Benefit/Hook]

- "What Is Technical SEO? A Complete Guide"
- "What Is GEO? Everything You Need to Know"
- "What Is Content Marketing? (And Why It Matters)"

**Pattern 2**: Why [Action] [Result]

- "Why Most Content Marketing Strategies Fail"
- "Why Your Website Isn't Ranking"
- "Why Email Still Beats Social Media for ROI"

**Pattern 3**: Should You [Action]? [Quick Answer]

- "Should You Buy Backlinks? (Spoiler: No)"
- "Should You Hire an SEO Agency? A Cost-Benefit Analysis"
- "Should You Rewrite Old Content? When It Makes Sense"

**Pattern 4**: When Should You [Action]

- "When Should You Publish Blog Posts for Maximum Traffic"
- "When Should You Update Your SEO Strategy"
- "When Should You Remove Content from Your Website"

---

## Comparison Formulas

**Pattern 1**: [Option A] vs [Option B]: Which Is Better?

- "WordPress vs Webflow: Which Is Better for SEO?"
- "Ahrefs vs SEMrush: Complete Comparison 2024"
- "In-House SEO vs Agency: Which Should You Choose?"

**Pattern 2**: [Option A] vs [Option B] (and the Winner Is...)

- "Free Tools vs Paid SEO Software (and the Winner Is...)"
- "Long-Form vs Short-Form Content (and the Winner Is...)"

**Pattern 3**: [Option A] or [Option B] for [Audience/Goal]

- "Shopify or WooCommerce for Small Business SEO"
- "YouTube or TikTok for B2B Marketing"

---

## Ultimate Guide Formulas

**Pattern 1**: The [Complete/Definitive] Guide to [Topic]

- "The Complete Guide to Technical SEO"
- "The Definitive Guide to Link Building in 2024"

**Pattern 2**: [Topic]: The Ultimate Guide for [Audience]

- "Content Marketing: The Ultimate Guide for Beginners"
- "Local SEO: The Ultimate Guide for Small Businesses"

**Pattern 3**: Everything You Need to Know About [Topic]

- "Everything You Need to Know About Core Web Vitals"
- "Everything You Need to Know About Schema Markup"

---

## Power Word Formulas

**Pattern**: [Power Word] [Topic] [Qualifier]

### Power Word Categories

**Authority words**:

- Proven, Tested, Verified, Certified, Official
- Example: "Proven Strategies to Double Your Organic Traffic"

**Urgency words**:

- Now, Today, Fast, Quick, Instantly, Immediately
- Example: "Quick Wins: Improve SEO Performance Today"

**Value words**:

- Free, Complete, Essential, Ultimate, Comprehensive
- Example: "The Essential SEO Checklist for 2024"

**Exclusivity words**:

- Secret, Hidden, Little-Known, Insider, Exclusive
- Example: "7 Little-Known SEO Tactics That Actually Work"

**Emotional words**:

- Amazing, Powerful, Effortless, Simple, Easy
- Example: "Simple SEO Strategies for Busy Entrepreneurs"

---

## Before/After Formulas

**Pattern 1**: From [Bad State] to [Good State]

- "From Zero to 10K Monthly Visitors: A Case Study"
- "From Page 5 to Position 1: How We Ranked a Competitive Keyword"

**Pattern 2**: How I/We [Achieved Result] in [Timeframe]

- "How I Increased Organic Traffic by 300% in 6 Months"
- "How We Built 100 Backlinks in 30 Days"

**Pattern 3**: [Bad State] → [Good State]: [Method]

- "500 Visitors → 50K: Our Content Strategy Revealed"
- "Struggling → Thriving: SEO Transformation Story"

---

## Mistake/Problem Formulas

**Pattern 1**: [Number] [Topic] Mistakes [Qualifier]

- "5 SEO Mistakes Killing Your Rankings"
- "10 Content Marketing Mistakes to Avoid in 2024"
- "3 Technical SEO Mistakes Even Pros Make"

**Pattern 2**: Stop [Wrong Action]. Do [Right Action] Instead

- "Stop Keyword Stuffing. Do This Instead"
- "Stop Buying Backlinks. Try These 7 Tactics Instead"

**Pattern 3**: Why Your [Topic] Isn't Working (And How to Fix It)

- "Why Your Content Isn't Ranking (And How to Fix It)"
- "Why Your SEO Strategy Isn't Working (And How to Fix It)"

---

## Checklist Formulas

**Pattern 1**: [Topic] Checklist: [Number] Must-Have [Items]

- "Technical SEO Checklist: 23 Must-Check Items"
- "Blog Post Checklist: 15 Things to Check Before Publishing"

**Pattern 2**: The [Timeframe] [Topic] Checklist

- "The 2024 SEO Audit Checklist"
- "The Pre-Launch Website Checklist"

---

## Curiosity Gap Formulas

**Pattern 1**: The [Adjective] Reason [Unexpected Fact]

- "The Surprising Reason Long Content Ranks Better"
- "The Real Reason Your Blog Posts Aren't Getting Traffic"

**Pattern 2**: [Number] Things About [Topic] That [Surprising Fact]

- "7 Things About SEO That Google Doesn't Tell You"
- "5 Things About Content Marketing That Changed in 2024"

**Pattern 3**: What [Expert/Group] Know About [Topic] (That You Don't)

- "What Top SEO Agencies Know About Link Building (That You Don't)"
- "What Professional Copywriters Know About Headlines"

---

## Benefit-Driven Formulas

**Pattern 1**: [Action] to [Specific Benefit]

- "Optimize Your Title Tags to Double Your CTR"
- "Write Better Meta Descriptions to Increase Organic Traffic"

**Pattern 2**: [Action] for [Outcome] Without [Objection]

- "Scale Content Production for Better Rankings Without Hiring Writers"
- "Improve Site Speed for Higher Rankings Without Technical Skills"

---

## Authority/Credibility Formulas

**Pattern 1**: [Expert/Authority] Says [Action/Tip]

- "Google's John Mueller Says Internal Linking Is Underrated"
- "SEO Experts Reveal Their Top Ranking Factor for 2024"

**Pattern 2**: [Number] [Experts/Companies] Share [Topic]

- "50 SEO Experts Share Their #1 Ranking Tip"
- "10 Successful Brands Share Their Content Strategy"

---

## CTR Optimization Patterns

### Elements That Increase CTR

**Year/Timeframe** (signals freshness):

- "SEO Trends for 2024"
- "Best Practices [Updated January 2024]"

**Brackets/Parentheticals** (adds extra context):

- "Email Marketing Tips (That Actually Work)"
- "SEO Tools [Free & Paid Options]"

**Numbers** (promise specific value):

- "7 Ways...", "15 Tools...", "3 Reasons..."

**Power words** (emotional trigger):

- Ultimate, Essential, Complete, Proven, Secret

**Target audience** (relevance signal):

- "...for Beginners", "...for Small Businesses", "...for B2B"

### Elements That Decrease CTR

- All caps (looks spammy)
- Excessive punctuation (!!!, ???)
- Clickbait without substance
- Misleading promises
- Generic titles ("SEO Tips", "Marketing Guide")

---

## Title Length Guidelines

### Google SERP

- **Optimal**: 50-60 characters
- **Maximum**: ~70 characters before truncation
- **Mobile**: ~55 characters (truncates earlier)

### Social Media

- **Twitter/X**: 70-100 characters for best engagement
- **Facebook**: 40-50 characters (shorter performs better)
- **LinkedIn**: 70-100 characters
- **Pinterest**: 40-60 characters

### Email Subject Lines

- **Optimal**: 40-50 characters
- **Mobile**: 30-40 characters (truncates earlier)
- **Desktop**: Up to 60 characters

---

## Before/After Title Examples

### Generic → Optimized

**Before**: "SEO Tips"
**After**: "7 SEO Tips That Increased Our Traffic by 300%"

- Added: Number, specificity, proof

**Before**: "How to Do Keyword Research"
**After**: "How to Do Keyword Research (Free Tools & 5-Step Process)"

- Added: Benefit, specificity, process indicator

**Before**: "Content Marketing Guide"
**After**: "The Complete Content Marketing Guide for Small Businesses [2024]"

- Added: Completeness indicator, target audience, year

**Before**: "What Is Technical SEO"
**After**: "What Is Technical SEO? A Beginner's Guide to Better Rankings"

- Added: Audience level, benefit

**Before**: "WordPress vs Shopify"
**After**: "WordPress vs Shopify: Which Is Better for SEO? (2024 Comparison)"

- Added: Specific comparison angle, year

**Before**: "Link Building Strategies"
**After**: "15 White-Hat Link Building Strategies That Still Work in 2024"

- Added: Number, quality signal, time relevance

---

## Title Writing Checklist

Before finalizing any title, check:

- [ ] Includes primary keyword naturally
- [ ] Length is 50-60 characters
- [ ] Matches search intent (informational/transactional/navigational)
- [ ] Contains power word or emotional trigger
- [ ] Specific and concrete (not vague)
- [ ] Promises clear value or benefit
- [ ] Accurate representation of content
- [ ] No clickbait or misleading claims
- [ ] Unique compared to competitors
- [ ] Works when truncated on mobile

---

## Testing and Optimization

### A/B Test These Variables

- Number variations (7 vs 10 vs 15)
- Power word placement (beginning vs end)
- Question vs statement format
- With/without year
- With/without brackets
- Different benefit framing

### Track These Metrics

- Click-through rate (CTR) in Search Console
- Average position in SERPs
- Time on page (engagement indicator)
- Bounce rate (relevance indicator)

### When to Rewrite Titles

- CTR below 2% for top 3 positions
- CTR below 5% for positions 4-10
- Content is updated (add [Updated 2024])
- Competitors have better titles
- Ranking but not getting clicks
