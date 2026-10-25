const fs=require('fs');
function parse(text){const rows=[];let row=[],f='',q=false;for(let i=0;i<text.length;i++){const c=text[i];
 if(q){if(c==='"'){if(text[i+1]==='"'){f+='"';i++;}else q=false;}else f+=c;}
 else if(c==='"')q=true; else if(c===','){row.push(f);f='';}
 else if(c==='\n'){row.push(f);rows.push(row);row=[];f='';} else if(c!=='\r')f+=c;}
 if(f!==''||row.length){row.push(f);rows.push(row);} return rows;}
const r=parse(fs.readFileSync(__dirname + "/molecule_regulator_matrix_K.M.csv",'utf8'));
const h=r[0], rows=r.slice(1).filter(x=>x.length===h.length).map(x=>Object.fromEntries(h.map((k,i)=>[k,x[i]])));
const N=k=>v=>Number(v[k]||0);

// 3 active shortage listing | 2 discontinuation notice only | 1 resolved or returned | 0 not listed
const usAug = v => { const n=N('base_fda_rows_2026_08_07')(v); if(!n) return 0; return /Current/.test(v.base_fda_status)?3:2; };
const usOct = v => { const n=N('fda_oct_base_rows_still_listed_2026_10_15')(v)+N('fda_oct_new_rows_since_base')(v); if(!n) return 0; return /Current/.test(v.base_fda_status)?3:2; };
const italy = v => N('aifa_rows_started_2026_10_20')(v)>0?3:0;
const state = s => /^active/i.test(s)?3 : /^resolved|^returned/i.test(s)?1 : 0;
const ema = v => state(v.ema_state), ansm = v => state(v.ansm_state);

const data = rows.map(v=>({
  name: v.molecule.replace(/^./,c=>c.toUpperCase()),
  active: N('active_regulators_oct')(v),
  cells: [usAug(v), usOct(v), italy(v), ema(v), ansm(v)],
}));
data.sort((a,b)=> b.active-a.active || b.cells.reduce((s,c)=>s+c,0)-a.cells.reduce((s,c)=>s+c,0));

const COLS=['United States<br><span>7 Aug 2026</span>','United States<br><span>15 Oct 2026</span>','Italy (AIFA)<br><span>20 Oct 2026</span>','European<br><span>Medicines Agency</span>','France (ANSM)'];
const KEY=[['#d5d8dc','Not listed by this regulator'],['#82e0aa','Resolved or returned to supply'],['#f5b041','Discontinuation notice only'],['#e74c3c','Active shortage listing']];

const html=`<!doctype html><html><head><meta charset="utf-8"><title>Shortage heat map</title><style>
:root{font-family:"Segoe UI",system-ui,sans-serif;background:#fff;color:#1b2631}
body{margin:0;padding:18px 26px}
h1{font-size:19px;margin:0 0 5px;font-weight:650}
p.sub{font-size:13.5px;color:#566573;margin:0 0 14px;max-width:940px;line-height:1.45}
table{border-collapse:separate;border-spacing:3px}
th.col{font-size:12.5px;font-weight:600;padding:0 8px 7px;text-align:center;vertical-align:bottom;width:150px;line-height:1.3}
th.col span{font-weight:400;color:#566573;font-size:12px}
th.row{font-size:14px;font-weight:500;text-align:right;padding-right:14px;white-space:nowrap}
td{width:150px;height:28px;border-radius:3px}
.n{font-size:12.5px;color:#566573;text-align:center;padding-left:10px;white-space:nowrap}
.legend{margin-top:14px;display:flex;gap:15px;flex-wrap:wrap;font-size:12.5px;align-items:center}
.legend i{display:inline-block;width:15px;height:15px;border-radius:3px;margin-right:7px;vertical-align:-2px}
.src{margin-top:14px;font-size:12px;color:#808b96}
</style></head><body>
<h1>Injectable cancer medicine shortage status across four regulators</h1>
<p class="sub">The United States column appears twice because two snapshot dates are shown, 7 August 2026 and 15 October 2026. It is the same regulator on both dates, not two. Rows are ordered by the number of regulators listing the medicine as active in October 2026.</p>
<table><tr><th></th>${COLS.map(c=>`<th class="col">${c}</th>`).join('')}<th></th></tr>
${data.map(d=>`<tr><th class="row">${d.name}</th>${d.cells.map(c=>`<td style="background:${KEY[c][0]}"></td>`).join('')}<td class="n">${d.active} active</td></tr>`).join('\n')}
</table>
<div class="legend">${KEY.map(([c,l])=>`<span><i style="background:${c}"></i>${l}</span>`).join('')}</div>
<p class="src">Source: the twelve-row molecule by regulator summary built for this brief from the United States shortage register (7 August and 15 October 2026), the Italian medicines agency (20 October 2026), the European Medicines Agency and the French medicines agency. Prepared by Kgaugelo Kgare Mmapula, 25 October 2026.</p>
</body></html>`;
fs.writeFileSync(__dirname + "/chart_molecule_by_regulator_K.M.html", html);
console.log(data.map(d=>d.name.padEnd(17)+d.active+'  ['+d.cells.join(',')+']').join('\n'));
