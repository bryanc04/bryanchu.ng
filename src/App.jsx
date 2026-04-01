import { useState, useEffect, useRef, useCallback } from "react";
import { homeData } from "./data/home";
import { aboutData } from "./data/about";
import { skillsData } from "./data/skills";
import { experienceData } from "./data/experience";
import { projectsData } from "./data/projects";
import { researchData } from "./data/research";
import { honorsData } from "./data/honors";
import { contactData } from "./data/contact";
import {
  navConfig,
  pageAddresses,
  pageModules,
  allCommands,
  themes,
} from "./data/nav";
import PixelTrail from './components/PixelTrail/PixelTrail';

/* ── CSS injected once ── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');

:root {
  --bg:#ffffff; --bg1:#ffffff; --bg2:#f9f9f9; --bg3:#f0f0f0;
  --p:#00d4ff; --p2:#0099cc; --p3:#004d77; --p4:#001a33;
  --txt:#111111; --muted:#777777; --dim:#cccccc;
  --accent:#00d4ff;
  --green:#00b86a; --grn2:#008c50;
  --yel:#ffb000; --ora:#ff7b3a; --red:#ee3355;
  --pur:#9333ea; --pink:#db2777; --teal:#0d9488;
  --trans:160ms;
  --border:#e5e5e5;
  --txt-main:#111111;
}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:100%;height:100%;background:var(--bg);color:var(--txt-main);
  font-family:'JetBrains Mono',monospace;font-size:12.5px;line-height:1.6;overflow:hidden;}
body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:900;
  background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.02) 2px,rgba(0,0,0,.02) 4px);}
body::after{content:'';position:fixed;inset:0;pointer-events:none;z-index:899;
  background:radial-gradient(ellipse 110% 100% at 50% 50%,transparent 60%,rgba(0,0,0,.05) 100%);}
#root{width:100vw;height:100vh;}
::-webkit-scrollbar{width:3px;}
::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}

/* ── LAYOUT ── */
.shell{position:relative;z-index:10;width:100vw;height:100vh;
  display:grid;
  grid-template-rows:28px 1fr 24px;
  grid-template-columns:210px 1fr 195px;
  grid-template-areas:"topbar topbar topbar" "side main panel" "stat stat stat";}

/* ── TOP BAR ── */
.topbar{grid-area:topbar;display:flex;align-items:center;
  border-bottom:1px solid var(--border);background:var(--bg1);font-size:10.5px;}
.tb-pill{display:flex;align-items:center;gap:5px;padding:0 11px;height:100%;
  border-right:1px solid var(--border);color:var(--muted);transition:background var(--trans);}
.tb-pill.lit{color:var(--txt-main);background:var(--bg2);}
.led{width:5px;height:5px;border-radius:50%;background:var(--border);}
.led.on{background:var(--p);box-shadow:0 0 5px var(--p);}
.led.grn{background:var(--green);box-shadow:0 0 5px var(--green);}
.led.yel{background:var(--yel);box-shadow:0 0 5px var(--yel);}
.led.red{background:var(--red);box-shadow:0 0 5px var(--red);}
.tb-brand{margin-left:auto;margin-right:6px;color:var(--p);font-weight:700;letter-spacing:.22em;
  font-size:10.5px;transition:color var(--trans);}
.tb-clock{color:var(--muted);font-size:10px;padding:0 10px;border-left:1px solid var(--border);}
.theme-btn{padding:0 10px;height:100%;border:none;background:transparent;
  border-left:1px solid var(--border);color:var(--muted);font-family:inherit;font-size:10px;
  cursor:pointer;transition:all var(--trans);}
.theme-btn:hover{color:var(--p);background:var(--bg3);}

/* ── LEFT SIDEBAR ── */
.side{grid-area:side;border-right:1px solid var(--border);background:var(--bg1);
  display:flex;flex-direction:column;overflow:hidden;}
.s-hdr{padding:4px 9px;background:var(--bg2);font-size:9.5px;font-weight:700;
  color:var(--p2);letter-spacing:.14em;border-bottom:1px solid var(--border);
  display:flex;justify-content:space-between;align-items:center;}
.s-badge{background:var(--border);color:var(--txt-main);padding:0 5px;font-size:9px;border-radius:2px;}
#callstack{padding:4px 0;overflow-y:auto;}
.frame{padding:3px 9px;font-size:10px;cursor:pointer;border-left:2px solid transparent;
  transition:all .1s;color:var(--muted);}
.frame:hover{background:var(--bg2);border-left-color:var(--p2);}
.frame.top{background:var(--bg2);border-left-color:var(--p);color:var(--txt-main);}
.frame.ghost{opacity:.35;}
.frame .fn{color:var(--muted);width:16px;display:inline-block;}
.frame .ff{color:var(--p2);}
.frame .fm{color:var(--txt-main);}
.frame .fa{color:var(--dim);font-size:9px;float:right;}
#regs{padding:5px 9px;font-size:10px;}
.rr{display:flex;justify-content:space-between;margin-bottom:2px;}
.rn{color:var(--p2);width:30px;}
.rv{color:var(--green);font-size:9.5px;}
#bpts{padding:4px 9px;font-size:9.5px;}
.bpt{display:flex;gap:5px;margin-bottom:2px;color:var(--muted);}
.bpt .bd{color:var(--red);}
.bpt .bl2{color:var(--ora);}
.srcmap{padding:5px 9px;font-size:9.5px;color:var(--muted);line-height:1.9;overflow-y:auto;flex:1;}
.srcmap .dir{color:var(--border);}
.srcmap .sf{padding-left:8px;cursor:pointer;border-left:1px solid transparent;
  display:block;transition:all .1s;}
.srcmap .sf:hover{color:var(--p2);border-left-color:var(--p2);}
.srcmap .sf.active{color:var(--p);border-left-color:var(--p);}

/* ── MAIN ── */
.main-area{grid-area:main;display:flex;flex-direction:column;overflow:hidden;background:var(--bg);}
.addrbar{flex-shrink:0;display:flex;align-items:center;gap:8px;padding:4px 12px;
  background:var(--bg1);border-bottom:1px solid var(--border);font-size:10.5px;}
.addr-pc{color:var(--muted);font-size:10px;}
.addr-pc span{color:var(--green);}
.breadcrumb{display:flex;gap:3px;align-items:center;color:var(--muted);}
.bc-sep{color:var(--dim);}
.bc-cur{color:var(--p);font-weight:500;}
.bc-old{color:var(--muted);cursor:pointer;transition:color var(--trans);}
.bc-old:hover{color:var(--p2);}
.addr-mode{margin-left:auto;padding:1px 8px;background:var(--bg2);border:1px solid var(--border);
  color:var(--txt-main);font-size:10px;letter-spacing:.1em;}
.vp{flex:1;overflow:hidden;position:relative;}
.disp{position:absolute;inset:0;padding:14px 18px;overflow-y:auto;overflow-x:hidden;word-break:break-word;}

/* ── INPUT BAR ── */
.ibar{flex-shrink:0;display:flex;align-items:center;background:var(--bg1);
  border:1px solid var(--border);position:relative;transition:border-color var(--trans);
  margin:0 12px 12px 12px;border-radius:2px;}
.ibar.focused{border-color:var(--p);}
.ibar-label{padding:7px 10px 7px 12px;color:var(--p);font-size:11.5px;font-weight:700;
  letter-spacing:.05em;user-select:none;background:var(--bg2);border-right:1px solid var(--border);white-space:nowrap;}
.inp{flex:1;background:transparent;border:none;outline:none;color:var(--txt-main);
  font-family:inherit;font-size:12.5px;caret-color:transparent;padding:7px 10px;}
.inp::placeholder{color:var(--dim);}
.inp-hint{padding:0 12px;font-size:10px;color:var(--dim);white-space:nowrap;user-select:none;}

/* autocomplete */
.ac{position:absolute;bottom:100%;left:0;right:0;background:var(--bg2);
  border:1px solid var(--border);border-bottom:none;display:flex;flex-direction:column;
  z-index:60;max-height:240px;overflow-y:auto;box-shadow:0 -4px 12px rgba(0,0,0,.1);}
.ac-r{padding:5px 14px;font-size:11px;color:var(--muted);cursor:pointer;
  display:flex;gap:14px;align-items:baseline;border-bottom:1px solid var(--bg3);}
.ac-r:hover,.ac-r.sel{background:var(--bg2);color:var(--txt-main);}
.ac-cmd{color:var(--p2);min-width:170px;}
.ac-desc{color:var(--muted);font-size:10px;}
.ac-cat{padding:3px 14px;font-size:9px;color:var(--dim);letter-spacing:.12em;
  background:var(--bg2);border-bottom:1px solid var(--bg3);}

@keyframes border-blink {
  0%, 100% { border-color: var(--p); }
  50% { border-color: var(--border); }
}
.ibar.focused {
  animation: border-blink 1.1s step-end infinite;
}

/* quick nav */
.qnav{flex-shrink:0;display:flex;gap:3px;padding:5px 12px;
  background:var(--bg1);border-top:1px solid var(--border);flex-wrap:wrap;}
.qb{background:transparent;border:1px solid var(--border);color:var(--muted);
  font-family:inherit;font-size:10.5px;padding:2px 9px;cursor:pointer;transition:all .1s;}
.qb:hover{border-color:var(--p2);color:var(--p2);background:var(--bg2);}
.qb.on{border-color:var(--p);color:var(--p);background:var(--bg2);}

/* ── RIGHT PANEL ── */
.panel{grid-area:panel;border-left:1px solid var(--border);background:var(--bg1);
  display:flex;flex-direction:column;overflow:hidden;}
.p-hdr{padding:4px 8px;background:var(--bg2);font-size:9.5px;font-weight:700;
  color:var(--p2);letter-spacing:.12em;border-bottom:1px solid var(--border);
  display:flex;justify-content:space-between;}
.hexview{flex:0 0 auto;max-height:38%;padding:5px 6px;overflow-y:auto;font-size:9px;line-height:1.8;}
.hr2{display:flex;gap:3px;}
.ha{color:var(--muted);width:36px;flex-shrink:0;font-size:8.5px;}
.hb-wrap{flex:1;color:var(--border);letter-spacing:.03em;}
.hb{display:inline-block;}
.hb.lit{color:var(--green);}
.hasc{color:var(--dim);font-size:8.5px;}
.watchview{padding:4px 8px;overflow-y:auto;font-size:9.5px;}
.wr{display:flex;justify-content:space-between;padding:2px 3px;border-bottom:1px solid var(--bg3);}
.wk{color:var(--muted);}
.wv{color:var(--green);font-weight:500;}
.wv.warn{color:var(--yel);}
.wv.hot{color:var(--ora);}
.siglog-wrap{flex:1;overflow:hidden;display:flex;flex-direction:column;}
.siglog{padding:4px 8px;font-size:9px;line-height:1.8;overflow-y:auto;flex:1;}

/* ── STATUS BAR ── */
.stat{grid-area:stat;display:flex;align-items:center;
  border-top:1px solid var(--border);background:var(--bg1);font-size:10px;overflow:hidden;}
.sb{display:flex;align-items:center;gap:4px;padding:0 10px;height:100%;
  border-right:1px solid var(--border);white-space:nowrap;color:var(--muted);}
.sb .k{font-size:9px;border:1px solid var(--border);padding:0 3px;color:var(--dim);}
.sb .v{color:var(--p2);}
.sb .vg{color:var(--green);}
.sb .vy{color:var(--yel);}
.sb .vo{color:var(--ora);}
.sb-right{margin-left:auto;display:flex;}

/* ── CONTENT COMPONENTS ── */
.st{font-size:10.5px;font-weight:700;letter-spacing:.15em;color:var(--p2);
  border-bottom:1px solid var(--border);padding-bottom:3px;margin-bottom:12px;}
.st::before{content:'── ';color:var(--border);}

.card{border:1px solid var(--border);margin-bottom:10px;background:var(--bg1);overflow:hidden;
  transition:border-color .15s;}
.card:hover{border-color:#3a3a3a;}
.card-head{padding:8px 12px;display:flex;align-items:center;gap:8px;cursor:pointer;user-select:none;}
.card-head:hover{background:var(--bg2);}
.card-arrow{color:var(--border);font-size:10px;transition:transform .2s,color .15s;flex-shrink:0;}
.card.open .card-arrow{transform:rotate(90deg);color:var(--p);}
.card-htxt{flex:1;}
.card-title{color:var(--txt-main);font-weight:700;font-size:12px;}
.card-sub{color:var(--muted);font-size:10px;margin-top:1px;}
.card-tags{display:flex;gap:4px;flex-wrap:wrap;margin-top:3px;}
.card-body{max-height:0;overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1),opacity .3s ease;
  opacity:0;border-top:0px solid var(--border);}
.card.open .card-body{max-height:2000px;opacity:1;border-top-width:1px;}
.card-body-inner{padding:12px 14px;}

.tag{font-size:9.5px;padding:1px 6px;border:1px solid var(--border);color:var(--muted);}
.tag.g{border-color:var(--grn2);color:var(--green);}
.tag.o{border-color:#884400;color:var(--ora);}
.tag.y{border-color:#887700;color:var(--yel);}
.tag.p{border-color:#6633aa;color:var(--pur);}
.tag.r{border-color:#882233;color:var(--red);}
.tag.t{border-color:#117766;color:var(--teal);}

.bar-row{display:grid;grid-template-columns:130px 1fr 36px;gap:8px;align-items:center;margin-bottom:6px;}
.bar-label{color:var(--txt-main);font-size:11px;}
.bar-track{height:6px;background:var(--bg2);border:1px solid var(--border);position:relative;overflow:hidden;}
.bar-fill{height:100%;background:var(--p);box-shadow:0 0 4px var(--p);}
.bar-pct{color:var(--p2);font-size:10px;text-align:right;}

.kv-row{display:flex;gap:0;margin-bottom:4px;font-size:11.5px;}
.kk{color:var(--muted);width:130px;flex-shrink:0;}
.kv2{color:var(--txt-main);}

.bul{margin-bottom:6px;font-size:11.5px;padding-left:14px;position:relative;color:var(--txt-main);}
.bul::before{content:'▸';position:absolute;left:0;color:var(--border);}

.prose{color:var(--txt-main);font-size:11.5px;line-height:1.75;margin-bottom:10px;}
.prose.muted{color:var(--muted);}

.codeblock{background:var(--bg2);border:1px solid var(--border);border-left:3px solid var(--p);
  padding:8px 12px;margin:8px 0;font-size:11px;line-height:1.7;color:var(--teal);overflow-x:auto;white-space:pre;}

.ascii-name{color:var(--p);font-weight:700;font-size:11px;line-height:1.0;}
.bbox{border:1px solid var(--border);padding:10px 14px;margin-bottom:12px;background:var(--bg1);}
.metrics2col{display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:8px;}

@keyframes bl{0%,100%{opacity:1}50%{opacity:0}}
.bl{animation:bl 1.1s step-end infinite;}
@keyframes card-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.card{animation:card-in .3s ease both;}
@keyframes bar-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.bar-fill{transform-origin:left;animation:bar-grow .6s cubic-bezier(.4,0,.2,1) both;}

/* contact shell */
.csh-out{flex:1;overflow-y:auto;padding:10px 14px;font-size:11.5px;line-height:1.75;}
@keyframes sig-in{from{opacity:0;transform:translateX(4px)}to{opacity:1;transform:none}}
.sig-new{animation:sig-in .3s ease;}
@keyframes wipe-anim{
    0%{clip-path:inset(0 100% 0 0);opacity:1;}
    50%{clip-path:inset(0 0% 0 0);opacity:1;}
    100%{clip-path:inset(0 0 0 100%);opacity:0;}
}
.wipe{position:fixed;inset:0;z-index:800;pointer-events:none;background:var(--p);opacity:0;clip-path:inset(0 100% 0 0);}
.wipe.go{animation:wipe-anim 0.35s ease-in-out forwards;}

@media(max-width:900px){
  .side,.panel{display:none;}
  .shell{grid-template-columns:1fr;grid-template-areas:"topbar""main""stat";}
}
`;

/* ════════════════════════════════════
   HELPER: parse inline {color:text} markup
════════════════════════════════════ */
const COLOR_MAP = {
  green: "var(--green)",
  orange: "var(--ora)",
  yellow: "var(--yel)",
  purple: "var(--pur)",
  teal: "var(--teal)",
  red: "var(--red)",
  accent: "var(--p)",
  dim: "var(--muted)",
};

function parseInline(text) {
  if (!text) return text;
  const parts = [];
  const re = /\{(\w+):([^}]+)\}/g;
  let last = 0,
    m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const col = COLOR_MAP[m[1]] || "inherit";
    parts.push(
      <span key={m.index} style={{ color: col, fontWeight: 600 }}>
        {m[2]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/* ════════════════════════════════════
   COMPONENTS
════════════════════════════════════ */
function Tag({ label, type = "" }) {
  return <span className={`tag ${type}`}>{label}</span>;
}

function BarRow({ label, pct, delay = 0 }) {
  return (
    <div className="bar-row" style={{ animationDelay: `${delay}s` }}>
      <span className="bar-label">{label}</span>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: `${pct}%`, animationDelay: `${delay}s` }}
        />
      </div>
      <span className="bar-pct">{pct}%</span>
    </div>
  );
}

function KVRow({ k, v, valueColor }) {
  const col =
    valueColor === "green"
      ? "var(--green)"
      : valueColor === "accent"
        ? "var(--p)"
        : "var(--txt-main)";
  return (
    <div className="kv-row">
      <span className="kk">{k}</span>
      <span className="kv2" style={{ color: col }}>
        {parseInline(v)}
      </span>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <div className="bul">
      {typeof children === "string" ? parseInline(children) : children}
    </div>
  );
}

function renderBodyItem(item, idx) {
  if (!item) return null;
  switch (item.type) {
    case "prose":
      return (
        <div key={idx} className={`prose${item.muted ? " muted" : ""}`}>
          {item.label && (
            <strong style={{ color: COLOR_MAP[item.labelColor] || "inherit" }}>
              {item.label}{" "}
            </strong>
          )}
          {parseInline(item.text)}
        </div>
      );
    case "bullets":
      return (
        <div key={idx}>
          {(item.items || []).map((b, i) =>
            typeof b === "string" ? (
              <Bullet key={i}>{b}</Bullet>
            ) : (
              <div key={i} className="bul">
                <span
                  style={{
                    color: COLOR_MAP[b.highlightColor] || "var(--p2)",
                    fontWeight: 600,
                  }}
                >
                  {b.highlight}
                </span>{" "}
                {b.text}
              </div>
            ),
          )}
        </div>
      );
    case "kv":
      return (
        <div key={idx}>
          {(item.rows || []).map((r, i) => (
            <KVRow key={i} k={r.key} v={r.value} valueColor={r.valueColor} />
          ))}
        </div>
      );
    case "code":
      return (
        <pre key={idx} className="codeblock">
          {item.text}
        </pre>
      );
    case "metrics2col":
      return (
        <div key={idx} className="metrics2col">
          {item.rows.map((r, i) => (
            <KVRow key={i} k={r.key} v={r.value} valueColor={r.color} />
          ))}
        </div>
      );
    default:
      return null;
  }
}

function ExpandCard({ card }) {
  const [open, setOpen] = useState(card.defaultOpen || false);
  return (
    <div className={`card${open ? " open" : ""}`}>
      <div className="card-head" onClick={() => setOpen((o) => !o)}>
        <span className="card-arrow">▶</span>
        <div className="card-htxt">
          <div className="card-title">{card.title}</div>
          <div className="card-sub">{card.sub}</div>
          <div className="card-tags">
            {(card.tags || []).map((t, i) => (
              <Tag key={i} label={t.label} type={t.type} />
            ))}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-body-inner">
          {/* skills: bars type */}
          {card.type === "bars" &&
            (card.bars || []).map((b, i) => (
              <BarRow key={i} label={b.label} pct={b.pct} delay={i * 0.05} />
            ))}
          {/* skills: bullets type */}
          {card.type === "bullets" &&
            (card.bullets || []).map((b, i) => <Bullet key={i}>{b}</Bullet>)}
          {/* generic body */}
          {(card.body || []).map((item, i) => renderBodyItem(item, i))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   PAGES
════════════════════════════════════ */
function HomePage() {
  const d = homeData;
  return (
    <>
      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
        <pre className="ascii-name" style={{ flexShrink: 0, margin: 0 }}>{`  ██████╗ ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗
  ██╔══██╗██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║
  ██████╔╝██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║
  ██╔══██╗██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║
  ██████╔╝██║  ██║   ██║   ██║  ██║██║ ╚████║
  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝`}</pre>
        <pre className="ascii-name" style={{ fontSize: '3px', lineHeight: 1.0, color: 'var(--muted)', margin: 0 }}>{`                                        ::..::::-===--:--=-:                                          
                                   :-*%%@@@@@@@%%@%@@@%@%%%%%*=:                                      
                                 -+%@%@%@@@@@@@@@%%%%@@@@@@%%%%%%#+-:                                  
                            :.:*%@@@@@%@@@@@@@@@%@@@@@@@@@@@@@@%%%%%#*-                                
                         :::-#%%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@%%#*-:                             
                        :--###%%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@%%%%*=                            
                      :::=#%%@@%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@@%%%%%*--                          
                     :.:##@%@%@@%@@@@@@@@@@@@@@@%%@@@@@@@@@@@@@@%%%%@%%%%%%*-::                        
                     ::=%%@%%@@@@@@@@@@@@@@@@@@@@%%@@@@@@@@@@@@@%%@@@%%%%%%*-::                        
                     :-#%%%%%%@@@@@@@@@@@@%%@%%@@%%@%%@@@@@@@@@@@@%%@@@#%%%%%*--                       
                     :+#%%%%%%%%%@@@@@@@@@@%%%%@%%%%%@@@@%%%%@@@@@@@@%@%%%#%%#=:-                      
                    :-#%%%%%%@%@@@@@@@@@@@@@@@%%@@%%%@@@%%%%%%@@@@@@@@@%%%%#%%+-::                     
                   :--#%@@@%%%%@@@@@@@@@@@@@@@@@%%@@@%%##%%%%@@@@@@@@%%######=---                    
                    :-%@%%%%%%@@@@%@@@%@@@@@@@@@@@@@@@@%##%%%%@%@@@@@@@@%#%##%#*--:                    
                   ::*%%%%@@%@@%@@%@%%@@@@@@@@@@@@@@@@@%%%%%%@@@%@@@@@@@@%%%#%#*-::                    
                    :#@%%%%@@%@@%@@@@@%@@@@@@@@@@@@@@@@@%%%%%@@@@@%@%%@@@@@@%%%=::                     
                    :=@%%@%%%@@@@@@@@@@@@@@@@@@@@%%%%%%@%%%%%@%@@%%%%%%%%%%%%%%=                       
                    :-%%%%%%%%%@%@@@@@@@@@@@@@@@%%%%%%%%%%%###%%#%#%%%%%%%%%%%#-                       
                      :::*%%%@%%%%@@%%%@%%%@@%%%%%%%%%%##%%###%%%%%##%%%%%%%%#%%%*:                       
                     ::::=%%%%%%%###%######*+++****###%#*#******+======+*#%%%%%%%-                       
                      :::*%%%%@%*+===+++**##+#=--====-==-===+##+#=*----=+*%%##%#:                       
                      ::*%#%%@#==---======**===-----:--::---===-----::--=#%%%%*                       
                      ::***%%@*=-------------::-----::-:::::::::::::::---*%%%%=                       
                      ::=++#%@*=----::::::::::::----::::::::::::::::::---*%#*=                        
                       :=+++#%#=---::::::::::::----:::-::::::::::::::::--+*#=-:                       
                      :-+==*#*=---:::::::::::-----:::---::::::::::::::--+**--                        
                      ::===+++=---:::::::::::-----:::::--:::    ::::::--==---                        
                        -====+=----:::::::::---:=-:::-=:::::    ::::::------:                        
                         :==--=----::::::::::--:----::-::::     ::::::---::                          
                           :--=----:::::::::::::::::::::::     :::::::--::                           
                            :------:::::::::::::::-:::::::   ::::::::::                               
                             :-----:::::::::::-------:::::  ::::::::::-                               
                             :#-----::::::::--====+==---:::::::::::::--                               
                            ::-+-----:::::::======-------:::::::::::-+=                               
                             ::*=----::::::::-----:::::::::::::::::-#*                                
                             ::------:::::::::::::::::::::::::::-=#@#:                               
                               :==----:::::::::::::.:::::::::---+*=-                                
                               :--=---::::::::::  ::::::::-----==                                  
                               :----==--::::::::::::::::--------                                   
                               :------===---::::::::::---------:                                   
                              :--------=====-----===----::::--                                    
                               --------------====-----::::::--:                                   
                              =-----------------:::::::::::---                                   
                            =#==-----------::::::::::::::::::----*%%=                             `}</pre>
      </div>

      <div className="bbox" style={{ marginTop: 12 }}>
        <KVRow k="name" v={d.name} />
        <KVRow k="school" v={`${d.school}  ${d.degree}`} />
        <KVRow k="gpa" v={d.gpa} valueColor="green" />
        <KVRow k="email" v={d.email} valueColor="accent" />
        <KVRow k="web" v={d.web} valueColor="accent" />
        <div className="kv-row">
          <span className="kk">status</span>
          <span className="kv2" style={{ color: "var(--ora)" }}>
            ▶ {d.status}
          </span>
        </div>
      </div>

      <div
        className="bbox"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 16px",
        }}
      >
        {d.highlights.map((h, i) => {
          const col =
            h.color === "green"
              ? "var(--green)"
              : h.color === "yellow"
                ? "var(--yel)"
                : h.color === "purple"
                  ? "var(--pur)"
                  : h.color === "orange"
                    ? "var(--ora)"
                    : "var(--muted)";
          return (
            <div key={i}>
              <div className="kv-row">
                <span className="kk">{h.key}</span>
                <span>
                  <span style={{ color: col, fontWeight: 700 }}>{h.value}</span>{" "}
                  <span style={{ color: "var(--muted)", fontSize: "10px" }}>
                    {h.note}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 10 }}>
        navigate with buttons above · type a command below · click call stack
        frames to jump back{" "}
      </div>
    </>
  );
}


function GenericCardPage({ title, subtitle, cards }) {
  return (
    <div>
      <div className="st">
        {title.toUpperCase()}
        <span style={{ color: "var(--dim)", fontSize: 9, marginLeft: 6 }}>
          // {subtitle}
        </span>
      </div>
      {cards.map((c) => (
        <ExpandCard key={c.id} card={c} />
      ))}
      <div style={{ color: "var(--muted)", fontSize: 11, marginTop: 6 }}>
        ▸ click any card to expand{" "}
        <span className="bl" style={{ color: "var(--p)" }}>
          ▋
        </span>
      </div>
    </div>
  );
}

function LsPage({ onNavigate }) {
  return (
    <div>
      <div className="st">COMMANDS</div>
      <div className="bbox">
        {[
          ["home", "landing screen"],
          ["about", "background, values, arc"],
          ["skills", "languages, ML, infra, algorithms"],
          ["experience", "3 internships — UCSC, CMU/RIT, Samsung"],
          ["projects", "list all projects"],
          ["research", "IEEE papers + ongoing work"],
          ["honors", "USACO, PhysicsBowl, AMC, ARML, Cambridge"],
          ["contact", "interactive bash shell"],
          ["ls / help", "this screen"],
          ["theme", "cycle interface theme"],
          ["clear", "reset terminal output"],
        ].map(([k, v]) => (
          <KVRow key={k} k={k} v={v} />
        ))}
      </div>
   
    </div>
  );
}

function ContactPage({ pid, startTime, fakeMem, fakeCpu }) {
  const outRef = useRef(null);
  const [lines, setLines] = useState([
    `<span style="color:var(--p2)">; ── contact shell ─────────────────────────────────────────────</span>`,
    `<span style="color:var(--muted)">; type 'help' to list commands</span>`,
    `<span style="color:var(--border)">────────────────────────────────────────────────────────────────</span>`,
    `<span style="color:var(--muted)">bryan@portfolio  bash 5.2  pid ${pid}  <span style="color:var(--green)">ready</span></span>`,
    ``,
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCmd = useCallback(
    (raw) => {
      if (!raw.trim()) return;
      const prompt = `<span style="color:var(--p2)">bryan@portfolio $</span> ${raw}`;
      const cmd = raw.trim().toLowerCase();

      if (cmd === "clear") {
        setLines([]);
        return;
      }

      const cmds = contactData.shellCommands;
      const uname = () => [
        `<span style="color:var(--p)">Linux portfolio-host 6.5.0 #1 SMP x86_64 GNU/Linux</span>`,
        `<span style="color:var(--muted)">PID: ${pid}  uptime: ${Math.floor((Date.now() - startTime) / 1000)}s  load: ${(fakeCpu / 100).toFixed(2)}</span>`,
      ];
      const ps = () => [
        `<span style="color:var(--p2)">  PID   CMD</span>`,
        `  ${pid}  <span style="color:var(--p)">portfolio.elf</span>`,
        `  ${pid + 1}  <span style="color:var(--p)">particles</span>`,
        `  ${pid + 2}  <span style="color:var(--p)">hex_dumper</span>`,
        `  ${pid + 3}  <span style="color:var(--p)">metrics_daemon</span>`,
      ];
      const fn = cmd === "uname" ? uname : cmd === "ps" ? ps : cmds[cmd];
      const result = fn
        ? fn()
        : [
            `<span style="color:var(--red)">bash: ${raw}: command not found</span>  <span style="color:var(--muted)">(try 'help')</span>`,
          ];
      setLines((prev) => [...prev, prompt, ...result]);
    },
    [pid, startTime, fakeCpu],
  );

  useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [lines]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        ref={outRef}
        className="csh-out"
        style={{ flex: 1, overflowY: "auto" }}
      >
        {lines.map((l, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: l || "&nbsp;" }} />
        ))}
      </div>
      <div
        style={{
          padding: "6px 14px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <span style={{ color: "var(--p2)" }}>bryan@portfolio $</span>
        <input
          autoFocus
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCmd(inputVal);
              setInputVal("");
            }
          }}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "var(--txt-main)",
            fontFamily: "inherit",
            fontSize: 12,
            caretColor: "var(--p)",
          }}
          placeholder="type a command..."
        />
        <span className="bl" style={{ color: "var(--p)" }}>
          ▋
        </span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   PARTICLES (canvas)
════════════════════════════════════ */


/* ════════════════════════════════════
   HEX DUMP
════════════════════════════════════ */
function HexView({ viewName }) {
  const enc = new TextEncoder();
  const str = (viewName + "::frame\0bryan_chung\0brown_univ\0gdb_v14\0").padEnd(
    64,
    "\0",
  );
  const bytes = Array.from(enc.encode(str)).slice(0, 56);
  const rows = [];
  for (let i = 0; i < bytes.length; i += 7) {
    const row = bytes.slice(i, i + 7);
    const addr = (0x7fff9a00 + i).toString(16).toUpperCase();
    rows.push({ addr, row });
  }
  return (
    <div className="hexview">
      {rows.map(({ addr, row }, ri) => (
        <div key={ri} className="hr2">
          <span className="ha">{addr}</span>
          <span className="hb-wrap">
            {row.map((b, j) => (
              <span key={j} className={`hb${b !== 0 ? " lit" : ""}`}>
                {b.toString(16).padStart(2, "0")}{" "}
              </span>
            ))}
          </span>
          <span className="hasc">
            {row
              .map((b) => (b > 31 && b < 127 ? String.fromCharCode(b) : "."))
              .join("")}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════
   MAIN APP
════════════════════════════════════ */
export default function App() {
  const [view, setView] = useState("boot");
  const [callStack, setCallStack] = useState([]);
  const [signals, setSignals] = useState([]);
  const [hitCounts, setHitCounts] = useState({});
  const [themeIdx, setThemeIdx] = useState(0);
  const [wipe, setWipe] = useState(false);
  const [ibarFocused, setIbarFocused] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [acVisible, setAcVisible] = useState(false);
  const [acIdx, setAcIdx] = useState(-1);
  const [hist, setHist] = useState([]);
  const [hIdx, setHIdx] = useState(-1);
  const [clock, setClock] = useState("");
  const [uptime, setUptime] = useState("00:00");
  const [fakeCpu, setFakeCpu] = useState(2.0);
  const [fakeMem, setFakeMem] = useState(18.4);
  const [irqCount, setIrqCount] = useState(0);
  const [regs, setRegs] = useState({
    rip: "0x00401000",
    rsp: "0x7fff9a40",
    rbp: "0x7fff9a50",
    rax: "0x00000000",
    rdi: "0x00000001",
    rsi: "0x7fff9b00",
    efl: "IF PF",
  });
  const startTime = useRef(Date.now());
  const pid = useRef((Math.random() * 90000 + 10000) | 0);
  const inpRef = useRef(null);
  const dispRef = useRef(null);
  const [bootDone, setBootDone] = useState(false);
  const [bootLines, setBootLines] = useState([]);
  const contactModeRef = useRef(false);

  const currentTheme = themes[themeIdx];

  // Apply theme CSS vars
  useEffect(() => {
    const root = document.documentElement;
    if (themeIdx === 0) {
      // reset to default - black/white with color accents
      Object.entries({
        "--bg": "#ffffff",
        "--bg1": "#ffffff",
        "--bg2": "#f9f9f9",
        "--bg3": "#f0f0f0",
        "--p": "#00d4ff",
        "--p2": "#0099cc",
        "--p3": "#004d77",
        "--p4": "#001a33",
        "--txt": "#111111",
        "--txt-main": "#111111",
        "--muted": "#777777",
        "--dim": "#cccccc",
        "--border": "#e5e5e5",
        "--accent": "#00d4ff",
        "--green": "#00b86a",
        "--grn2": "#008c50",
        "--yel": "#ffb000",
        "--ora": "#ff7b3a",
        "--red": "#ee3355",
        "--pur": "#9333ea",
        "--pink": "#db2777",
        "--teal": "#0d9488",
      }).forEach(([k, v]) => root.style.setProperty(k, v));
    } else {
      const vars = currentTheme.vars;
      Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
      // Keep BG black for all themes
      root.style.setProperty("--bg", "#000000");
      root.style.setProperty("--bg1", "#000000");
      root.style.setProperty("--bg2", "#0a0a0a");
      root.style.setProperty("--bg3", "#121212");
      root.style.setProperty("--border", "#1a1a1a");
      root.style.setProperty("--txt-main", "#ffffff");
      root.style.setProperty("--muted", "#888888");
      root.style.setProperty("--dim", "#444444");
      root.style.setProperty("--accent", vars["--p"] || "#00d4ff");
    }
  }, [themeIdx, currentTheme]);

  // Autofocus input
  useEffect(() => {
    if (bootDone && inpRef.current) {
      setTimeout(() => inpRef.current.focus(), 50);
    }
  }, [view, bootDone]);

  // Clock tick
  useEffect(() => {
    const tick = () => {
      const n = new Date(),
        p = (x) => String(x).padStart(2, "0");
      setClock(
        `${n.getFullYear()}-${p(n.getMonth() + 1)}-${p(n.getDate())}  ${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}`,
      );
      const s = Math.floor((Date.now() - startTime.current) / 1000);
      setUptime(`${p(Math.floor(s / 60))}:${p(s % 60)}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Metrics
  useEffect(() => {
    const id = setInterval(() => {
      setFakeCpu((c) =>
        Math.max(0.4, Math.min(14, c + (Math.random() - 0.47) * 1.3)),
      );
      setFakeMem((m) =>
        Math.max(14, Math.min(34, m + (Math.random() - 0.5) * 0.5)),
      );
      setIrqCount((i) => i + Math.floor(Math.random() * 4));
    }, 900);
    return () => clearInterval(id);
  }, []);

  // Boot sequence
  useEffect(() => {
    const BOOT = [
      `<span style="color:#333">GNU gdb (Ubuntu 14.2) 14.2</span>`,
      `<span style="color:#333">Copyright (C) 2023 Free Software Foundation, Inc.</span>`,
      `<span style="color:#555">Reading symbols from portfolio.elf...</span>`,
      "",
      `<span style="color:#333">[0.000] Loading ELF sections...</span>`,
      `<span style="color:#333">[0.041] .text   0x00401000  r-x  executable</span>`,
      `<span style="color:#333">[0.082] .data   0x00601000  rw-  read-write</span>`,
      `<span style="color:#333">[0.121] .rodata 0x004ff000  r--  read-only</span>`,
      `<span style="color:var(--p)">[0.160] OK  Brown University · GPA 4.0 · Applied Math-CS + Physics</span>`,
      `<span style="color:var(--p)">[0.200] OK  IEEE ICAIC 2024 · first author</span>`,
      `<span style="color:var(--p)">[0.240] OK  USACO Platinum · PhysicsBowl 18th intl</span>`,
      `<span style="color:var(--p)">[0.280] OK  3× internships loaded: UCSC · CMU/RIT · Samsung</span>`,
      `<span style="color:#555">[0.340] --  Kafka consumers healthy · Docker ready</span>`,
      `<span style="color:var(--p)">[0.400] OK  Breakpoint 1 at home+0x0</span>`,
      "",
      `<span style="color:#d0d0d0;font-weight:700">Breakpoint 1, home () at portfolio.c:1</span>`,
      `<span style="color:#555">(gdb) run</span>`,
      "",
    ];
    let i = 0;
    const id = setInterval(() => {
      if (i >= BOOT.length) {
        clearInterval(id);
        setTimeout(() => {
          setBootDone(true);
          doNavigate("home");
        }, 350);
        return;
      }
      setBootLines((prev) => [...prev, BOOT[i++]]);
    }, 55);
    return () => clearInterval(id);
    // eslint-disable-next-line
  }, []);

  const addSignal = useCallback((msg) => {
    const n = new Date(),
      p = (x) => String(x).padStart(2, "0");
    const entry = `[${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}] ${msg}`;
    setSignals((prev) => {
      const next = [...prev, entry];
      return next.length > 8 ? next.slice(-8) : next;
    });
  }, []);

  const pushFrame = useCallback(
    (name) => {
      const addr = pageAddresses[name] || "0x00402000";
      const mod = pageModules[name] || name;
      setCallStack((prev) => {
        const next = prev.length >= 8 ? prev.slice(1) : prev;
        return [...next, { name, addr, mod }];
      });
      setHitCounts((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
      setIrqCount((i) => i + 1);
      const base = 0x7fff9a40;
      setRegs({
        rip: addr,
        rsp: "0x" + (base - (callStack.length + 1) * 0x10).toString(16),
        rbp: "0x" + (base - callStack.length * 0x10).toString(16),
        rax:
          "0x" +
          Math.floor(Math.random() * 7)
            .toString(16)
            .padStart(8, "0"),
        rdi:
          "0x" +
          Math.floor(Math.random() * 0xfffff)
            .toString(16)
            .padStart(8, "0"),
        rsi: "0x7fff9b00",
        efl: "IF PF",
      });
      addSignal(`SIGSWITCHVIEW → ${name}()`);
    },
    [callStack.length, addSignal],
  );

  const doNavigate = useCallback(
    (cmd) => {
      const c = (cmd || "").trim().toLowerCase();
      if (!c) return;
      contactModeRef.current = c === "contact";
      setView(c === "ls" ? "ls" : c);
      if (c !== "boot" && c !== "ls") pushFrame(c);
      else if (c === "ls") pushFrame("ls");
    },
    [pushFrame],
  );

  const navigate = useCallback(
    (cmd) => {
      setWipe(true);
      setTimeout(() => {
        setWipe(false);
        doNavigate(cmd);
      }, 175);
    },
    [doNavigate],
  );

  // Autocomplete
  const acMatches = inputVal
    ? allCommands
        .filter((x) => x.cmd.startsWith(inputVal.toLowerCase()))
        .slice(0, 12)
    : [];

  const handleKeyDown = useCallback(
    (e) => {
      if (contactModeRef.current) return;
      if (e.key === "Tab") {
        e.preventDefault();
        if (acMatches.length > 0) {
          const pick = acMatches[Math.max(0, acIdx)];
          setInputVal(pick.cmd);
          setAcVisible(false);
        }
      } else if (e.key === "ArrowDown" && acVisible) {
        e.preventDefault();
        const ni = Math.min(acIdx + 1, acMatches.length - 1);
        setAcIdx(ni);
        setInputVal(acMatches[ni]?.cmd || inputVal);
      } else if (e.key === "ArrowUp" && acVisible) {
        e.preventDefault();
        const ni = Math.max(acIdx - 1, 0);
        setAcIdx(ni);
        setInputVal(acMatches[ni]?.cmd || inputVal);
      } else if (e.key === "ArrowUp") {
        setHIdx((hi) => {
          const ni = Math.min(hi + 1, hist.length - 1);
          if (hist.length > 0) setInputVal(hist[hist.length - 1 - ni] || "");
          return ni;
        });
      } else if (e.key === "ArrowDown" && !acVisible) {
        setHIdx((hi) => {
          if (hi > 0) {
            setInputVal(hist[hist.length - 1 - (hi - 1)] || "");
            return hi - 1;
          }
          setInputVal("");
          return -1;
        });
      } else if (e.key === "Enter") {
        const v = inputVal;
        if (v) {
          setHist((prev) => [...prev, v]);
          setHIdx(-1);
        }
        setAcVisible(false);
        setInputVal("");
        navigate(v);
      } else if (e.key === "Escape") {
        setAcVisible(false);
        setInputVal("");
      }
    },
    [inputVal, acVisible, acIdx, acMatches, hist, navigate],
  );

  const accentHex =
    themeIdx === 0 ? "#00d4ff" : currentTheme.vars["--p"] || "#00d4ff";

  const renderPage = () => {
    if (!bootDone) {
      return (
        <div style={{ padding: "14px 18px" }}>
          {bootLines.map((l, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: l || "&nbsp;" }} />
          ))}
        </div>
      );
    }
    if (view === "contact") {
      return (
        <ContactPage
          pid={pid.current}
          startTime={startTime.current}
          fakeMem={fakeMem}
          fakeCpu={fakeCpu}
        />
      );
    }
    return (
      <div ref={dispRef} className="disp">
        {view === "home" && <HomePage />}
        {view === "about" && (
          <GenericCardPage
            title="about"
            subtitle="about.c"
            cards={aboutData.cards}
          />
        )}
        {view === "skills" && (
          <GenericCardPage
            title="skills"
            subtitle="skills.c"
            cards={skillsData.cards}
          />
        )}
        {view === "experience" && (
          <GenericCardPage
            title="experience"
            subtitle="exp.c"
            cards={experienceData.cards}
          />
        )}
        {view === "projects" && (
          <GenericCardPage
            title="projects"
            subtitle="proj.c"
            cards={projectsData.cards}
          />
        )}
        {view === "research" && (
          <GenericCardPage
            title="research"
            subtitle="research.c"
            cards={researchData.cards}
          />
        )}
        {view === "honors" && (
          <GenericCardPage
            title="honors"
            subtitle="honors.c"
            cards={honorsData.cards}
          />
        )}
        {(view === "ls" || view === "help") && <LsPage onNavigate={navigate} />}
      </div>
    );
  };

  const watchData = {
    view,
    depth: callStack.length,
    heap: fakeMem.toFixed(1) + "MB",
    sp: "0x" + (0x7fff9a40 - callStack.length * 0x10).toString(16),
    pid: pid.current,
    irq: irqCount,
    "up(s)": Math.floor((Date.now() - startTime.current) / 1000),
  };

  return (
    <>
      <style>{CSS}</style>
      <PixelTrail
        gridSize={40}
        trailSize={0.02}
        maxAge={500}
        interpolate={5}
        color={accentHex}
      />
      <div className={`wipe${wipe ? " go" : ""}`} />
      {/* Cursor */}
      <CustomCursor />
      <div className="shell">
        {/* TOP BAR */}
        <div className="topbar">
          <div className="tb-pill lit">
            <span className="led on" />
            GDB 14.2
          </div>
          <div className="tb-pill">
            <span className="led grn" />
            STDIN
          </div>
          <div className="tb-pill">
            <span className="led yel" />
            portfolio.elf
          </div>
          <div className="tb-pill">
            <span className="led" />
            thread 1/1
          </div>
          <span className="tb-brand">// BRYAN CHUNG //</span>
          <span className="tb-clock">{clock}</span>
          <button
            className="theme-btn"
            onClick={() => {
              const ni = (themeIdx + 1) % themes.length;
              setThemeIdx(ni);
              addSignal(`SIGTHEME → ${themes[ni].id}`);
            }}
          >
            [{currentTheme.label}]
          </button>
        </div>

        {/* LEFT SIDEBAR */}
        <div className="side">
          <div className="s-hdr">
            CALL STACK <span className="s-badge">{callStack.length}</span>
          </div>
          <div id="callstack">
            {[...callStack].reverse().map((f, i) => (
              <div
                key={i}
                className={`frame${i === 0 ? " top" : ""}${i > 5 ? " ghost" : ""}`}
                onClick={() => i > 0 && navigate(f.name)}
              >
                <span className="fn">#{callStack.length - 1 - i}</span>{" "}
                <span className="ff">{f.mod}::</span>
                <span className="fm">{f.name}()</span>
                <span className="fa">{f.addr.slice(-4)}</span>
              </div>
            ))}
          </div>

          <div className="s-hdr" style={{ marginTop: 4 }}>
            REGISTERS{" "}
            <span style={{ color: "var(--dim)", fontSize: "8.5px" }}>
              x86-64
            </span>
          </div>
          <div id="regs">
            {Object.entries(regs).map(([k, v]) => (
              <div key={k} className="rr">
                <span className="rn">{k}</span>
                <span className="rv">{v}</span>
              </div>
            ))}
          </div>

          <div className="s-hdr" style={{ marginTop: 4 }}>
            BREAKPOINTS
          </div>
          <div id="bpts">
            {Object.entries(hitCounts)
              .slice(0, 5)
              .map(([k, v]) => (
                <div key={k} className="bpt">
                  <span className="bd">●</span>
                  <span className="bl2">{k}+0x0</span>
                  <span style={{ color: "var(--dim)" }}>×{v}</span>
                </div>
              ))}
          </div>

          <div className="s-hdr" style={{ marginTop: 4 }}>
            SOURCE MAP
          </div>
          <div className="srcmap">
            <div className="dir">portfolio/</div>
            {navConfig.map((n) => (
              <span
                key={n.id}
                className={`sf${view === n.id ? " active" : ""}`}
                onClick={() => navigate(n.cmd)}
              >
                &nbsp;&nbsp;{n.id === "contact" ? "contact" : n.id}.c
              </span>
            ))}
          </div>
        </div>

        {/* MAIN */}
        <div className="main-area">
          <div className="addrbar">
            <span className="addr-pc">
              PC: <span>{pageAddresses[view] || "0x00401000"}</span>
            </span>
            <span style={{ color: "var(--dim)" }}>│</span>
            <div className="breadcrumb">
              <span className="bc-old" onClick={() => navigate("home")}>
                main()
              </span>
              <span className="bc-sep">›</span>
              <span className="bc-cur">{view}()</span>
            </div>
            <span className="addr-mode">{view.toUpperCase()}</span>
          </div>

          <div
            className="vp"
            style={
              view === "contact" && bootDone
                ? { display: "flex", flexDirection: "column" }
                : {}
            }
          >
            {renderPage()}
          </div>

          {/* Input bar (hidden in contact mode since contact has own input) */}
          {(!bootDone || view !== "contact") && (
            <div className={`ibar${ibarFocused ? " focused" : ""}`}>
              <span className="ibar-label">(gdb) ▶</span>
              <div style={{ flex: 1, position: "relative" }}>
                {acVisible && acMatches.length > 0 && (
                  <div className="ac">
                    {(() => {
                      let lastCat = "";
                      return acMatches.map((x, i) => {
                        const sep =
                          x.cat !== lastCat ? (
                            <div key={`cat-${x.cat}`} className="ac-cat">
                              {x.cat.toUpperCase()}
                            </div>
                          ) : null;
                        lastCat = x.cat;
                        return [
                          sep,
                          <div
                            key={x.cmd}
                            className={`ac-r${acIdx === i ? " sel" : ""}`}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              setInputVal(x.cmd);
                              setAcVisible(false);
                            }}
                          >
                            <span className="ac-cmd">{x.cmd}</span>
                            <span className="ac-desc">{x.desc}</span>
                          </div>,
                        ];
                      });
                    })()}
                  </div>
                )}
                  <div
                    style={{
                      position: "relative",
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    <input
                      ref={inpRef}
                      className="inp"
                      type="text"
                      autoComplete="off"
                      spellCheck={false}
                      value={inputVal}
                      placeholder="type: help, about, projects, skills…"
                      onChange={(e) => {
                        setInputVal(e.target.value);
                        setAcVisible(!!e.target.value);
                        setAcIdx(-1);
                      }}
                      onKeyDown={handleKeyDown}
                      onFocus={() => {
                        setIbarFocused(true);
                        setAcVisible(!!inputVal);
                      }}
                      onBlur={() => setIbarFocused(false)}
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                      }}
                    />
                    {/* Mirror span for cursor positioning */}
                    <div
                      style={{
                        padding: "7px 10px",
                        fontSize: "12.5px",
                        color: "transparent",
                        whiteSpace: "pre",
                        pointerEvents: "none",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {inputVal}
                      {ibarFocused && (
                        <span
                          className="bl"
                          style={{
                            color: "var(--p)",
                            marginLeft: 1,
                            pointerEvents: "none",
                            fontWeight: 300,
                          }}
                        >
                          |
                        </span>
                      )}
                    </div>
                  </div>
              </div>
              <span className="inp-hint">TAB to complete</span>
            </div>
          )}

          <div className="qnav">
            {bootDone &&
              navConfig.map((n) => (
                <button
                  key={n.id}
                  className={`qb${view === n.id ? " on" : ""}`}
                  onClick={() => navigate(n.cmd)}
                >
                  {n.label}
                </button>
              ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="panel">
          <div className="p-hdr">
            MEM DUMP{" "}
            <span style={{ color: "var(--dim)", fontSize: "8.5px" }}>
              @0x7fff9a00
            </span>
          </div>
          <HexView viewName={view} />

          <div
            className="p-hdr"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            WATCH
          </div>
          <div className="watchview">
            {Object.entries(watchData).map(([k, v]) => {
              const isHot =
                (k === "heap" && parseFloat(v) > 28) ||
                (k === "irq" && irqCount > 100);
              const isWarn = k === "depth" && callStack.length > 5;
              const cls = isHot ? "wv hot" : isWarn ? "wv warn" : "wv";
              return (
                <div key={k} className="wr">
                  <span className="wk">{k}</span>
                  <span className={cls}>{String(v)}</span>
                </div>
              );
            })}
          </div>

          <div className="siglog-wrap">
            <div
              className="p-hdr"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              SIGNALS
            </div>
            <div className="siglog">
              {signals.map((s, i) => (
                <div
                  key={i}
                  className={i === signals.length - 1 ? "sig-new" : ""}
                  style={{
                    color:
                      i === signals.length - 1 ? "var(--muted)" : "var(--dim)",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATUS BAR */}
        <div className="stat">
          <div className="sb">
            <span className="k">ENTER</span>exec
          </div>
          <div className="sb">
            <span className="k">TAB</span>complete
          </div>
          <div className="sb">
            <span className="k">↑↓</span>history
          </div>
          <div className="sb">
            <span className="k">ESC</span>clear
          </div>
          <div className="sb">
            frames <span className="vg">{callStack.length}</span>
          </div>
          <div className="sb">
            pid <span className="v">{pid.current}</span>
          </div>
          <div className="sb-right">
            <div className="sb">
              cpu{" "}
              <span className={fakeCpu > 9 ? "vo" : "vg"}>
                {fakeCpu.toFixed(1)}%
              </span>
            </div>
            <div className="sb">
              mem <span className="vg">{fakeMem.toFixed(1)}MB</span>
            </div>
            <div className="sb">
              up <span className="v">{uptime}</span>
            </div>
            <div className="sb">
              irq <span className="vo">{irqCount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════ */
function CustomCursor() {
  const curRef = useRef(null);

  useEffect(() => {
    const el = curRef.current;
    if (!el) return;

    const h = (e) => {
      // Direct DOM update is much faster than React state for 60fps cursor
      el.style.transform = `translate3d(${e.clientX - 1}px, ${e.clientY - 13}px, 0)`;
    };
    window.addEventListener("pointermove", h, { passive: true });
    return () => window.removeEventListener("pointermove", h);
  }, []);

  return (
    <div
      ref={curRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        top: 0,
        left: 0,
        willChange: "transform",
        color: "var(--p)",
        fontSize: 14,
        textShadow: "0 0 8px var(--p), 0 0 20px var(--p)",
        animation: "bl 1.1s step-end infinite",
        userSelect: "none",
      }}
    >
      ▋
    </div>
  );
}
