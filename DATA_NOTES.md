# Data sources, dates and the slice rule

Two Kaggle datasets. The first is the agent's main knowledge base; the second adds independent regulators so each
insight can be checked against more than one source, which the rubric's Confidence Assessment asks for.

## 1. Base — FDA Drug Shortages and Discontinuations

- Kaggle: `kylefengkfeng209/fda-drug-shortages-and-discontinuations`
- Licence **CC BY-NC-SA 4.0**, credit "Mind Lab". Underlying data is openFDA, a United States government feed.
- `fda_drug_shortages.csv`: **1,651 rows x 40 columns**, snapshot **7 August 2026**.
  Companions: `fda_shortage_drugs.csv` (239 rows), `fda_shortage_categories.csv` (23 rows).

### The slice rule (reproduce this exactly or the figures will not match)

1. Keep rows where `therapeutic_category_primary` is Oncology -> 106 rows.
2. Remove the mis-tagged medicines: allopurinol (4 rows) and flurazepam (1 row) -> **101 rows**. Dexamethasone and
   hydrocortisone are also mis-tagged elsewhere in the file, but they are filed under Dermatology and Analgesia, so no
   row of theirs ever reaches the Oncology step and nothing of theirs is removed here (verified 25 October 2026).
3. Keep rows whose `dosage_form` contains "Injection" -> **88 rows**, being **12 molecules, 20 companies, 84 package codes**.

Of those 88: 59 Current, 29 To Be Discontinued; 28 Unavailable, 11 Limited, 20 Available.

**Availability is recorded only for the 59 Current rows.** All 29 To Be Discontinued rows leave it blank, so the three
availability figures add to 59 and never to 88. Molecule counts must be taken from the generic name column, because the
active ingredient column is blank on 7 of the 88 rows and splits salt forms.

### Known faults in this file

- `shortage_reason` is **blank on 74%** of all rows, and on 49 of the 88.
- `ndc_count_ingredient` holds ingredient **names**, not a count. The column is mislabelled.
- The arsenic trioxide value in `ndc_products_marketed` reads 787, which is wrong.
- A row is one **package presentation**, not one shortage and not one product. Carboplatin's 35 rows sit on only
  **three posting dates**, so they are waves of listings. Never call them 35 shortages.
- The list is a **rolling twelve-month window**. A notice drops off about a year after posting, which does not mean
  the shortage ended. Of 84 notices posted a year before the snapshot, 82 had gone by 15 October.
- The snapshot is **79 days old**. It overstates carboplatin: 20 presentations read Unavailable on 7 August, 16 on 15 October.

## 2. Layer — Airmid Eireann: Ireland's Open Pharma Data

- Kaggle: `sreepriyaprasannan/airmid-eireann-irelands-open-pharma-data` (67 tables, 355 MB).
  **Only four small tables are used** (about 1.5 MB): `it_aifa_shortages`, `ema_shortages`, `fr_bdpm_availability`,
  and a fresher `fda_shortages` snapshot.
- Licence varies per table: Italy (AIFA) CC BY 4.0 with attribution; the European Medicines Agency asks for
  acknowledgement; France (ANSM) allows reuse provided the data is not altered. Credit all three.

| Source | What it is | As of |
|---|---|---|
| FDA (base) | United States medicines regulator | 7 August 2026 |
| FDA (Airmid copy) | Same regulator, newer snapshot — adds timeliness, **not** a second opinion | 15 October 2026 |
| AIFA | Italy's medicines agency | 20 October 2026 |
| EMA | European Medicines Agency | ifosfamide entry last updated 3 March 2026 |
| ANSM | France's medicines agency | ifosfamide 24 July 2026 |

Joined by a hand-built crosswalk of the 12 molecule names across English, Italian and French, checked against ATC
codes. France needed brand names as well (Holoxan, Trisenox), because its code field is blank on 113 of 710 rows.

## 3. The combined file

`research-outputs/molecule_regulator_matrix_K.M.csv` — 12 rows, one per molecule, every column prefixed with its
source and carrying its own date. Two corrections were applied when building it:

- **Regulator counts now use October.** Gemcitabine and pemetrexed had their FDA notices age off the list, so they
  count 2 and 1 active regulators, not 3 and 2. An earlier draft mixed an August FDA state with October European ones.
- **The Medicaid share for methotrexate was removed**, because its denominator is mostly oral methotrexate and so is
  not comparable with the injectable figures.

### Corrections made on 25 October 2026, after an independent recount of every figure

- **Methotrexate was wrong and is now fixed.** Italy was matched by therapeutic code, and Italy files both of its
  injectable methotrexate prefilled syringes (DOC Generici 15 mg from 31 August 2026, Difa Cooper Velos 10 mg from
  10 September 2026) under the immunosuppressant code used in rheumatology, not the cancer code. Matching by substance
  name finds them. Methotrexate therefore moves from one active non-United States regulator to two, and from two active
  regulators to three. Ifosfamide remains the only molecule listed by all four.
- **Two column names now say what they count.** The United States October column counts only those packages from the
  August snapshot that were still listed on 15 October. A separate column records packages that appear on the October
  list but were absent in August: one for ifosfamide (SteriMax) and one for arsenic trioxide (Fresenius Kabi). Counting
  every row on the October list instead gives eight packages from four companies for ifosfamide, and two for arsenic
  trioxide.
- **The Italian columns use two different scopes, deliberately.** The row count covers only shortages that had already
  started by 20 October 2026, while the licence holder count covers every injectable presentation on the Italian list,
  started or not. The column names now carry that distinction.
- Everything else reproduced exactly: the 88 rows, 84 package codes, 20 companies and 12 molecules; every per molecule
  row count, company count and status split; carboplatin at 16 packages recorded Unavailable on 15 October; and
  Hospira, a Pfizer company, at 16 of the 88 rows, ahead of the next company by seven.

## What this data cannot show

No file here contains South African, SAHPRA or wholesaler data, and none contains a South African price or volume.
Any statement about Dis-Chem, Medipost or local availability must come from the external research, and must be
written as exposure through shared global manufacturers, never as a finding about South African supply.
