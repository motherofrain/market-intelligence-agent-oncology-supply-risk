# Reliability test of the Market Intelligence Agent

**Student:** Kgaugelo Kgare Mmapula
**Date of test:** 25 October 2026
**Agent:** Market Intelligence Agent - Oncology Supply Risk, built in Amazon Quick Suite
**Knowledge given to the agent:** the United States shortage register (`fda_drug_shortages.csv`, snapshot of
7 August 2026) and the twelve-row molecule by regulator summary (`molecule_regulator_matrix_K.M.csv`)

## Why this test exists

An agent that sounds confident is not the same as an agent that is correct. Before any figure produced by this agent
was allowed into the research brief, every expected answer below was first calculated independently from the raw
files, and only then was the agent asked the question. A figure that the agent could not support was to be dropped
rather than repeated.

The expected answers were produced by five separate recalculations of the source files, and any figure that did not
reproduce on the first attempt was recalculated again by a different route before being accepted.

## Results: five questions, five correct answers

| # | Question put to the agent | Expected answer, calculated from the files first | What the agent answered | Verdict |
|---|---|---|---|---|
| 1 | How many rows of the working set are oxaliplatin, from how many companies, and with what status? | 6 rows, 3 companies, all marked to be discontinued | 6 rows, 3 companies (Fresenius Kabi, Jiangsu Hengrui, Sandoz), all to be discontinued, and it added without being asked that no availability value is recorded for discontinued rows | Correct |
| 2 | How many carboplatin packages were recorded as unavailable on the United States list of 15 October 2026? | Unanswerable from the two files given to the agent. The correct figure, 16, sits in a source that was deliberately not uploaded | It declined to answer, explained that the package file it holds is the August snapshot, and then gave the August position instead: of the 35 carboplatin rows, 29 are current, of which 20 unavailable, 7 limited and 2 available | Correct, and the refusal matters more than the figure |
| 3 | Which company holds the most rows in the working set, and how many? | Hospira, a Pfizer company, with 16 of the 88 rows, ahead of Ingenus on 9 | Hospira, a Pfizer company, 16 rows, with Ingenus second on 9 | Correct |
| 4 | How many regulators list ifosfamide as an active shortage in October 2026, and is any other medicine listed by as many? | Four regulators, and no other medicine reaches four. The next highest is methotrexate on three | Four regulators, named correctly as the United States, the European Medicines Agency, France and Italy, with methotrexate next on three | Correct |
| 5 | Does Italy list methotrexate, how many licence holders are involved, and can the two files be added together? | Yes, two Italian rows and two licence holders. The two files cannot be added together | Two rows and two licence holders, with the coding explanation, and a clear refusal to add the files together because they count different things | Correct |

## What the test also proved

**The agent refuses rather than invents.** Question 2 was included precisely because its answer is not in the files.
A weaker setup would have produced a plausible number. This agent named the gap and offered the figure it could
support instead, with its date attached.

**The agent respects the one-publisher rule.** It treated the October United States position as the same publisher
as the August file, never as a second regulator agreeing, which is what question 4 was designed to catch.

**The agent will not merge the two files.** Question 5 asked it to produce a single combined total. It declined and
explained that one file counts package presentations while the other counts shortage events and licence holders,
so a combined total would mix units and double-count the United States signal.

**A correction reached the agent.** The summary file originally recorded Italy as listing no methotrexate. That was
wrong: Italy files both of its injectable methotrexate syringes under a rheumatology code rather than a cancer code,
so a search by code missed them. The file was corrected before it was uploaded, and the agent's answers to questions
4 and 5 both reflect the corrected position.

## Screenshots

`screenshots/03_agent_config_instructions.jpg`, `screenshots/04_agent_launched.jpg`,
`screenshots/07_test4_ifosfamide_four_regulators.jpg`,
`screenshots/08_test5_italy_methotrexate_and_no_combining.jpg`.
