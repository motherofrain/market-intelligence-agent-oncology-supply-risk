# Market Intelligence Agent — supply risk in injectable cancer medicines

**Student:** Kgaugelo Kgare Mmapula
**Course:** Building No-Code AI Agents with Amazon Quick (nd2726, Course 3)
**Project:** Building a Market Research Agent
**Date:** 25 October 2026

A market intelligence brief on the supply risk facing injectable cancer medicines, prepared to support a decision
by a South African pharmacy oncology service about which medicines to hold deeper stock cover on, and how to
position the service against competitors.

## The short version

Twelve injectable cancer medicines were tracked across four medicines regulators. **Ifosfamide is the only one in
active shortage with all four at once.** But **South Africa has confirmed disruptions in only two of the twelve,
carboplatin and docetaxel**, and ifosfamide is not among them — so the overseas data did not predict the local
problem. That gap, rather than the shortage itself, is the finding the brief is built on.

## What is in this repository

| Path | What it is |
|---|---|
| `research-brief-content_K.M.md` | **The research brief.** The nine sections required by the template, including a confidence assessment for each insight. |
| `research-outputs/market_analysis_K.M.md` | The market analysis produced by the agent, with the two corrections that were made to it after checking. |
| `research-outputs/quick_research_south_africa_K.M.md` | The external research on the South African market, with every figure traced to a named source and graded for reliability. |
| `research-outputs/agent_reliability_tests_K.M.md` | The five questions used to test the agent before any of its output was trusted, with the expected and actual answers. |
| `research-outputs/molecule_regulator_matrix_K.M.csv` | The twelve-row summary of what four regulators say about each medicine. Built by hand from the source data and corrected twice. |
| `research-outputs/chart_molecule_by_regulator_K.M.html` | The chart, as a page that can be opened in a browser. |
| `research-outputs/chart_build_K.M.js` | The script that builds the chart directly from the summary file, so the figures in it can be reproduced. |
| `dataset/` | The data as downloaded, unchanged. |
| `screenshots/` | Evidence of the work: the space, the agent and its instructions, the grounding tests, the corrections, and the chart. |
| `DATA_NOTES.md` | Sources, licences, dates, the filtering rule, and the known faults in the data. |
| `EXECUTION_CHECKLIST.md`, `BRIEF_STRUCTURE.md` | The working plan and the template structure. |

## How the work was done

1. **Two public datasets** were selected and the figures in them were recomputed from scratch before anything was
   built on them.
2. **A space** was created in Amazon Quick Suite holding the United States shortage register and the twelve-row
   regulator summary.
3. **An agent** was configured with a fixed purpose and eight instruction paragraphs covering which file answers
   which question, the filtering rule, the date of every source, the rule that a second snapshot from the same
   publisher is not a second opinion, and an instruction never to add the two files together.
4. **The agent was tested before it was trusted.** Five questions with answers calculated independently in advance.
   One question was deliberately unanswerable from its files, to see whether it would invent a figure. It refused.
5. **External research** supplied the South African context, and its single most important claim was then checked
   against the original parliamentary record rather than the news report it came from.
6. **Everything the agent produced was recomputed.** Two errors were found and corrected, and both are documented
   rather than quietly fixed.

## The corrections, kept on the record

Three mistakes were found and fixed during this project. They are listed here because the method is part of the
deliverable.

- **The regulator summary said Italy lists no methotrexate.** It does. Italy files both injectable methotrexate
  syringes under a rheumatology code rather than a cancer code, so matching by code missed them. Methotrexate moved
  from two active regulators to three.
- **The agent miscounted discontinuations.** It reported that seven of the twelve medicines carried withdrawal
  notices. The correct figure is nine; seven is the number of individual rows citing discontinuation as the reason.
- **The agent overreached on causation.** It claimed that deterioration on the overseas registers "often precedes"
  a South African disruption and could give months of warning. Nothing supports this: two overlapping cases are not
  a pattern, there is no South African register against which timing could be compared, and ifosfamide is a direct
  counter-example. It was replaced with an honest statement that this is a hypothesis to be tested.

## Data sources and licences

- **United States shortage register**: Kaggle dataset `kylefengkfeng209/fda-drug-shortages-and-discontinuations`,
  licensed CC BY-NC-SA 4.0, credit "Mind Lab". The underlying data is the openFDA public feed. Snapshot of
  7 August 2026.
- **European, Italian and French records, and a later United States snapshot**: Kaggle dataset
  `sreepriyaprasannan/airmid-eireann-irelands-open-pharma-data`. Four tables were used. The Italian data is
  CC BY 4.0 with attribution, the European Medicines Agency asks for acknowledgement, and the French agency permits
  reuse provided the data is not altered.
- **South African context**: published sources only, including a reply to a parliamentary question, government
  gazettes on medicine pricing, the Pharmacy Council's practice rules, and medical scheme publications. Each is
  named at the point it is used.

No internal or confidential information about any company was used.
