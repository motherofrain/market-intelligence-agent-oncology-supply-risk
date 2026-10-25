# Market Intelligence Agent — Execution Checklist

**Course:** nd2726, Course 3 "Building No-Code AI Agents with Amazon Quick"
**Project:** Building a Market Research Agent · **Due 25 October 2026 (today)**
**Student:** Kgaugelo Kgare Mmapula
**Submission:** zip file (research brief + screenshots) or public GitHub repository
**Deliverable:** one Research Brief (from the Udacity template) + screenshots, with the work organised in a QuickSuite Space

---

## 0. Before anything

| # | Step | Who | Done |
|---|---|---|---|
| 0.1 | Download the **Research Brief Template** from the lesson's *Lesson Resources* tab | User | DONE |
| 0.2 | Template saved as `research-brief-template.docx`; its structure and the one rubric mismatch are in `BRIEF_STRUCTURE.md` | User + me | DONE |
| 0.3 | Start the lab: *Cloud Resources* tab, Start Cloud Resources, Open Cloud Console, then click the **UdacityQuicksightLab** tile (the pane cannot open that popup, so the user clicks it) | User | DONE |
| 0.4 | QuickSuite confirmed open and signed in; the sidebar has **Spaces**, **Research**, **Chat agents**, Apps, Flows, Analyses, Dashboards and Data | Me | DONE |
| 0.5 | Decide the research topic and business question (see section 1) | User | ☐ |

**Watch out:** Quick Research time is limited ("allocated Quick Research hours"). Pick the topic before spending any of it.

---

## 1. Framing (do this on paper first)

| # | Step | Rubric line it serves | Done |
|---|---|---|---|
| 1.1 | Pick a Kaggle dataset suitable for market or competitive analysis | Instructions step 1 | ☐ |
| 1.2 | Write the **Research Objective**: the business question or decision the work supports | Research Framing #1 | ☐ |
| 1.3 | Write the **Scope**: what is included and what is excluded, covering at least two of — markets/industries, competitor types, timeframe, key constraints | Research Framing #1 | ☐ |
| 1.4 | Plan the **Research Approach**: the kinds of questions to ask, how effort is prioritised, which QuickSuite tools are used | Research Framing #2 | ☐ |

A tight objective is what keeps the research inside the time budget. Write 1.2 and 1.3 before opening Quick Research.

---

## 2. Build (in QuickSuite)

| # | Step | Evidence to capture | Done |
|---|---|---|---|
| 2.1 | Download the chosen Kaggle dataset, keep Kaggle's file format | — | ☐ |
| 2.2 | Create a **Space** and upload the dataset to it | screenshot: Space with dataset | ☐ |
| 2.3 | Create the agent: **Agents → Create agent**, named `Market Intelligence Agent – <Topic>` | screenshot: agent config | ☐ |
| 2.4 | Set the purpose: *"You are a Market Intelligence Agent. Your job is to analyze a dataset and external market signals to produce a market analysis and a leadership-ready brief."* | screenshot: purpose field | ☐ |
| 2.5 | Attach the dataset as the agent's internal knowledge source, then save | screenshot: knowledge source attached | ☐ |
| 2.6 | Run **Quick Research** on a focused objective (competitor landscape, pricing, growth, regional dynamics) | screenshot: research output | ☐ |
| 2.7 | Save the Quick Research outputs so they can be referenced later | screenshot: saved output in the Space | ☐ |
| 2.8 | Use **Quick Chat (Q)** to explore and refine what matters | screenshot: conversation | ☐ |

Quick Research is required: the project is market intelligence, not dataset reporting.

---

## 3. Analyse

| # | Step | Done |
|---|---|---|
| 3.1 | Give the agent the dataset context, the goal, and the Quick Research outputs | ☐ |
| 3.2 | Have it produce a **Market Analysis** covering: competitive landscape, key trends and signals, opportunities and risks, and evidence from both the dataset and Quick Research | ☐ |
| 3.3 | Check every figure the agent states against the dataset or the named source — do not pass on a number you have not verified | ☐ |
| 3.4 | Save the Market Analysis into the Space | ☐ |

**Lesson from NovaTech:** the agent invented a cross-source answer that looked right. Anything it cannot source gets dropped or labelled.

---

## 4. Write the Research Brief

Use the downloaded template. These section names come straight from the rubric, so keep them.

| # | Section | What must be in it | Done |
|---|---|---|---|
| 4.1 | **Research Objective** | The business question or decision supported | ☐ |
| 4.2 | **Scope of Research** | Included vs excluded, at least two of: markets, competitor types, timeframe, constraints | ☐ |
| 4.3 | **Research Approach** | Types of questions asked, how effort was prioritised, QuickSuite tools used | ☐ |
| 4.4 | **Key Market Insights** | **3–5 insights**; each with *Insight Summary*, *Supporting Evidence/Signals*, *Why This Insight Matters*. Evidence must be specific and verifiable (figures, named sources) and must match the insight | ☐ |
| 4.5 | **Visual Evidence** | Either reference at least one visual, giving chart type + what it shows + which insight it supports, **or** state plainly that no visuals were used. Every referenced visual needs a screenshot | ☐ |
| 4.6 | **Confidence Assessment** | Per insight: source quality, consistency across sources, timeliness, overall confidence **High/Medium/Low** | ☐ |
| 4.7 | **Limitations and Risks** | At least **two** concrete items (missing data, conflicting signals, bias, assumptions) | ☐ |
| 4.8 | **Strategic Implications** | What decisions this could inform, plus **What should not be concluded** with at least **two** explicit non-conclusions | ☐ |
| 4.9 | **Summary for Leadership** | **5–7 sentences**: most important insights, overall confidence level, key takeaways | ☐ |

### Writing rules (this is what failed NovaTech)
- Define every technical term, acronym and product name **where it first appears** — CRM, ROI, AI, Kaggle, QuickSuite, Space, agent, dataset.
- **No code, SQL words or formulas.** No field names in code font, no `COUNT`, no `×` or `=` arithmetic.
- **Complete sentences throughout**, including bullets and table cells.
- Write for a business leader who will not ask a follow-up question.

---

## 5. Package and submit

| # | Step | Who | Done |
|---|---|---|---|
| 5.1 | Add to the Space: dataset reference, Quick Research outputs, Market Analysis, Research Brief, reliability evaluation | Me | ☐ |
| 5.2 | Order the Space so a stakeholder can review it quickly | Me | ☐ |
| 5.3 | Collect all screenshots into `screenshots\`, named by step | Me | ☐ |
| 5.4 | Final read against every rubric line in section 4 | Me | ☐ |
| 5.5 | Check the brief and screenshots for assistant-tool names and lab email addresses before packaging | Me | DONE |
| 5.6 | Zip the brief + screenshots (500 MB limit) **or** push a public GitHub repo | Me | ☐ |
| 5.7 | Upload and submit on the project page | User | ☐ |

---

## Optional, to stand out (the rubric lists these)

- A one-page decision dashboard: top insights, risks, recommended actions.
- "Signal freshness" notes: capture date and why the evidence still holds.
- "What would change our mind?": one or two data points that would overturn each insight.
- An impact vs. effort matrix for the recommended actions, tied to confidence levels.
- A short appendix of the prompts that produced the strongest evidence.

---

## Folder layout

```
E:\Projects\market-intelligence-agent\
  EXECUTION_CHECKLIST.md      this file
  dataset\                    the Kaggle download
  research-outputs\           Quick Research exports, Market Analysis
  screenshots\                evidence for the rubric
  (Research Brief template goes in the root once downloaded)
```

---

## Decisions taken (25 October 2026)

| Question | Decision |
|---|---|
| Topic | **Pharmacy oncology**, framed so the brief doubles as portfolio evidence for **pharmacist roles in Dis-Chem's oncology department** |
| Submission | **Public GitHub repository** (same route as NovaTech) |
| Visuals | **Include at least one chart**, so section 4.5 needs the chart type, what it shows, the insight it supports, and a screenshot |
| Dataset | Being selected — must carry commercial fields (company, product, price, sales, time) and connect honestly to a Dis-Chem oncology decision |

**Framing note.** The Kaggle dataset is the agent's internal knowledge; **Quick Research supplies the South African context** —
Dis-Chem and Clicks, the Single Exit Price system, medical scheme funding, oncology day clinics. So the dataset itself need not be
South African, but the research objective should be a question a Dis-Chem oncology lead would actually ask.
