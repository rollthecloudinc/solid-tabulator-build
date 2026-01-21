import { j as de } from "@nf-internal/chunk-KQGCPFC3";
import { M as ue, k as z, z as pe } from "@nf-internal/chunk-STIBVO4O";
import { a as k, b as _, h as U } from "@nf-internal/chunk-FJYW2LMB";
import * as h from "@angular/core";
import { computed as kt, InjectionToken as L, PLATFORM_ID as bt, EventEmitter as ie, SecurityContext as xt } from "@angular/core";
import { toSignal as wt } from "@angular/core/rxjs-interop";
import { switchMap as yt, mapTo as St, distinctUntilChanged as Tt, shareReplay as Rt, map as vt, takeUntil as Et, first as _t } from "rxjs/operators";
import { isPlatformBrowser as $ } from "@angular/common";
function X() { return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null }; }
var E = X();
function xe(r) { E = r; }
var O = { exec: () => null };
function m(r, t = "") { let e = typeof r == "string" ? r : r.source, n = { replace: (i, s) => { let o = typeof s == "string" ? s : s.source; return o = o.replace(x.caret, "$1"), e = e.replace(i, o), n; }, getRegex: () => new RegExp(e, t) }; return n; }
var x = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: r => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}#`), htmlBeginRegex: r => new RegExp(`^ {0,${Math.min(3, r - 1)}}<(?:[a-z].*>|!--)`, "i") }, ze = /^(?:[ \t]*(?:\n|$))+/, De = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Me = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, P = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ne = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Q = /(?:[*+-]|\d{1,9}[.)])/, we = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ye = m(we).replace(/bull/g, Q).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Be = m(we).replace(/bull/g, Q).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), K = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, je = /^[^\n]+/, V = /(?!\s*\])(?:\\.|[^\[\]\\])+/, qe = m(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", V).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Fe = m(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Q).getRegex(), j = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", J = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, He = m("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", J).replace("tag", j).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Se = m(K).replace("hr", P).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", j).getRegex(), Ue = m(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Se).getRegex(), Y = { blockquote: Ue, code: De, def: qe, fences: Me, heading: Ne, hr: P, html: He, lheading: ye, list: Fe, newline: ze, paragraph: Se, table: O, text: je }, fe = m("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", P).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", j).getRegex(), Ze = _(k({}, Y), { lheading: Be, table: fe, paragraph: m(K).replace("hr", P).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", fe).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", j).getRegex() }), Ge = _(k({}, Y), { html: m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", J).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: O, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: m(K).replace("hr", P).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ye).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }), We = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Xe = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Te = /^( {2,}|\\)\n(?!\s*$)/, Qe = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, q = /[\p{P}\p{S}]/u, ee = /[\s\p{P}\p{S}]/u, Re = /[^\s\p{P}\p{S}]/u, Ke = m(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ee).getRegex(), ve = /(?!~)[\p{P}\p{S}]/u, Ve = /(?!~)[\s\p{P}\p{S}]/u, Je = /(?:[^\s\p{P}\p{S}]|~)/u, Ye = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, Ee = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, et = m(Ee, "u").replace(/punct/g, q).getRegex(), tt = m(Ee, "u").replace(/punct/g, ve).getRegex(), _e = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", nt = m(_e, "gu").replace(/notPunctSpace/g, Re).replace(/punctSpace/g, ee).replace(/punct/g, q).getRegex(), it = m(_e, "gu").replace(/notPunctSpace/g, Je).replace(/punctSpace/g, Ve).replace(/punct/g, ve).getRegex(), rt = m("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Re).replace(/punctSpace/g, ee).replace(/punct/g, q).getRegex(), st = m(/\\(punct)/, "gu").replace(/punct/g, q).getRegex(), ot = m(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), at = m(J).replace("(?:-->|$)", "-->").getRegex(), lt = m("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", at).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), N = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, ct = m(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", N).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), $e = m(/^!?\[(label)\]\[(ref)\]/).replace("label", N).replace("ref", V).getRegex(), Ce = m(/^!?\[(ref)\](?:\[\])?/).replace("ref", V).getRegex(), ht = m("reflink|nolink(?!\\()", "g").replace("reflink", $e).replace("nolink", Ce).getRegex(), te = { _backpedal: O, anyPunctuation: st, autolink: ot, blockSkip: Ye, br: Te, code: Xe, del: O, emStrongLDelim: et, emStrongRDelimAst: nt, emStrongRDelimUnd: rt, escape: We, link: ct, nolink: Ce, punctuation: Ke, reflink: $e, reflinkSearch: ht, tag: lt, text: Qe, url: O }, pt = _(k({}, te), { link: m(/^!?\[(label)\]\((.*?)\)/).replace("label", N).getRegex(), reflink: m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", N).getRegex() }), Z = _(k({}, te), { emStrongRDelimAst: it, emStrongLDelim: tt, url: m(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), ut = _(k({}, Z), { br: m(Te).replace("{2,}", "*").getRegex(), text: m(Z.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }), D = { normal: Y, gfm: Ze, pedantic: Ge }, A = { normal: te, gfm: Z, breaks: ut, pedantic: pt }, dt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ge = r => dt[r];
function y(r, t) { if (t) {
    if (x.escapeTest.test(r))
        return r.replace(x.escapeReplace, ge);
}
else if (x.escapeTestNoEncode.test(r))
    return r.replace(x.escapeReplaceNoEncode, ge); return r; }
function me(r) { try {
    r = encodeURI(r).replace(x.percentDecode, "%");
}
catch {
    return null;
} return r; }
function ke(r, t) { let e = r.replace(x.findPipe, (s, o, a) => { let c = !1, l = o; for (; --l >= 0 && a[l] === "\\";)
    c = !c; return c ? "|" : " |"; }), n = e.split(x.splitPipe), i = 0; if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t)
    if (n.length > t)
        n.splice(t);
    else
        for (; n.length < t;)
            n.push(""); for (; i < n.length; i++)
    n[i] = n[i].trim().replace(x.slashPipe, "|"); return n; }
function I(r, t, e) { let n = r.length; if (n === 0)
    return ""; let i = 0; for (; i < n;) {
    let s = r.charAt(n - i - 1);
    if (s === t && !e)
        i++;
    else if (s !== t && e)
        i++;
    else
        break;
} return r.slice(0, n - i); }
function ft(r, t) { if (r.indexOf(t[1]) === -1)
    return -1; let e = 0; for (let n = 0; n < r.length; n++)
    if (r[n] === "\\")
        n++;
    else if (r[n] === t[0])
        e++;
    else if (r[n] === t[1] && (e--, e < 0))
        return n; return e > 0 ? -2 : -1; }
function be(r, t, e, n, i) { let s = t.href, o = t.title || null, a = r[1].replace(i.other.outputLinkReplace, "$1"); n.state.inLink = !0; let c = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: e, href: s, title: o, text: a, tokens: n.inlineTokens(a) }; return n.state.inLink = !1, c; }
function gt(r, t, e) {
    let n = r.match(e.other.indentCodeCompensation);
    if (n === null)
        return t;
    let i = n[1];
    return t.split(`
`).map(s => { let o = s.match(e.other.beginningSpace); if (o === null)
        return s; let [a] = o; return a.length >= i.length ? s.slice(i.length) : s; }).join(`
`);
}
var B = class {
    options;
    rules;
    lexer;
    constructor(r) { this.options = r || E; }
    space(r) { let t = this.rules.block.newline.exec(r); if (t && t[0].length > 0)
        return { type: "space", raw: t[0] }; }
    code(r) {
        let t = this.rules.block.code.exec(r);
        if (t) {
            let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
            return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? e : I(e, `
`) };
        }
    }
    fences(r) { let t = this.rules.block.fences.exec(r); if (t) {
        let e = t[0], n = gt(e, t[3] || "", this.rules);
        return { type: "code", raw: e, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: n };
    } }
    heading(r) { let t = this.rules.block.heading.exec(r); if (t) {
        let e = t[2].trim();
        if (this.rules.other.endingHash.test(e)) {
            let n = I(e, "#");
            (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (e = n.trim());
        }
        return { type: "heading", raw: t[0], depth: t[1].length, text: e, tokens: this.lexer.inline(e) };
    } }
    hr(r) {
        let t = this.rules.block.hr.exec(r);
        if (t)
            return { type: "hr", raw: I(t[0], `
`) };
    }
    blockquote(r) {
        let t = this.rules.block.blockquote.exec(r);
        if (t) {
            let e = I(t[0], `
`).split(`
`), n = "", i = "", s = [];
            for (; e.length > 0;) {
                let o = !1, a = [], c;
                for (c = 0; c < e.length; c++)
                    if (this.rules.other.blockquoteStart.test(e[c]))
                        a.push(e[c]), o = !0;
                    else if (!o)
                        a.push(e[c]);
                    else
                        break;
                e = e.slice(c);
                let l = a.join(`
`), p = l.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                n = n ? `${n}
${l}` : l, i = i ? `${i}
${p}` : p;
                let d = this.lexer.state.top;
                if (this.lexer.state.top = !0, this.lexer.blockTokens(p, s, !0), this.lexer.state.top = d, e.length === 0)
                    break;
                let u = s.at(-1);
                if (u?.type === "code")
                    break;
                if (u?.type === "blockquote") {
                    let b = u, f = b.raw + `
` + e.join(`
`), w = this.blockquote(f);
                    s[s.length - 1] = w, n = n.substring(0, n.length - b.raw.length) + w.raw, i = i.substring(0, i.length - b.text.length) + w.text;
                    break;
                }
                else if (u?.type === "list") {
                    let b = u, f = b.raw + `
` + e.join(`
`), w = this.list(f);
                    s[s.length - 1] = w, n = n.substring(0, n.length - u.raw.length) + w.raw, i = i.substring(0, i.length - b.raw.length) + w.raw, e = f.substring(s.at(-1).raw.length).split(`
`);
                    continue;
                }
            }
            return { type: "blockquote", raw: n, tokens: s, text: i };
        }
    }
    list(r) {
        let t = this.rules.block.list.exec(r);
        if (t) {
            let e = t[1].trim(), n = e.length > 1, i = { type: "list", raw: "", ordered: n, start: n ? +e.slice(0, -1) : "", loose: !1, items: [] };
            e = n ? `\\d{1,9}\\${e.slice(-1)}` : `\\${e}`, this.options.pedantic && (e = n ? e : "[*+-]");
            let s = this.rules.other.listItemRegex(e), o = !1;
            for (; r;) {
                let c = !1, l = "", p = "";
                if (!(t = s.exec(r)) || this.rules.block.hr.test(r))
                    break;
                l = t[0], r = r.substring(l.length);
                let d = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, F => " ".repeat(3 * F.length)), u = r.split(`
`, 1)[0], b = !d.trim(), f = 0;
                if (this.options.pedantic ? (f = 2, p = d.trimStart()) : b ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, p = d.slice(f), f += t[1].length), b && this.rules.other.blankLine.test(u) && (l += u + `
`, r = r.substring(u.length + 1), c = !0), !c) {
                    let F = this.rules.other.nextBulletRegex(f), le = this.rules.other.hrRegex(f), ce = this.rules.other.fencesBeginRegex(f), he = this.rules.other.headingBeginRegex(f), Le = this.rules.other.htmlBeginRegex(f);
                    for (; r;) {
                        let H = r.split(`
`, 1)[0], C;
                        if (u = H, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), C = u) : C = u.replace(this.rules.other.tabCharGlobal, "    "), ce.test(u) || he.test(u) || Le.test(u) || F.test(u) || le.test(u))
                            break;
                        if (C.search(this.rules.other.nonSpaceChar) >= f || !u.trim())
                            p += `
` + C.slice(f);
                        else {
                            if (b || d.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ce.test(d) || he.test(d) || le.test(d))
                                break;
                            p += `
` + u;
                        }
                        !b && !u.trim() && (b = !0), l += H + `
`, r = r.substring(H.length + 1), d = C.slice(f);
                    }
                }
                i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(l) && (o = !0));
                let w = null, ae;
                this.options.gfm && (w = this.rules.other.listIsTask.exec(p), w && (ae = w[0] !== "[ ] ", p = p.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: l, task: !!w, checked: ae, loose: !1, text: p, tokens: [] }), i.raw += l;
            }
            let a = i.items.at(-1);
            if (a)
                a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
            else
                return;
            i.raw = i.raw.trimEnd();
            for (let c = 0; c < i.items.length; c++)
                if (this.lexer.state.top = !1, i.items[c].tokens = this.lexer.blockTokens(i.items[c].text, []), !i.loose) {
                    let l = i.items[c].tokens.filter(d => d.type === "space"), p = l.length > 0 && l.some(d => this.rules.other.anyLine.test(d.raw));
                    i.loose = p;
                }
            if (i.loose)
                for (let c = 0; c < i.items.length; c++)
                    i.items[c].loose = !0;
            return i;
        }
    }
    html(r) { let t = this.rules.block.html.exec(r); if (t)
        return { type: "html", block: !0, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] }; }
    def(r) { let t = this.rules.block.def.exec(r); if (t) {
        let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
        return { type: "def", tag: e, raw: t[0], href: n, title: i };
    } }
    table(r) {
        let t = this.rules.block.table.exec(r);
        if (!t || !this.rules.other.tableDelimiter.test(t[2]))
            return;
        let e = ke(t[1]), n = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
        if (e.length === n.length) {
            for (let o of n)
                this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
            for (let o = 0; o < e.length; o++)
                s.header.push({ text: e[o], tokens: this.lexer.inline(e[o]), header: !0, align: s.align[o] });
            for (let o of i)
                s.rows.push(ke(o, s.header.length).map((a, c) => ({ text: a, tokens: this.lexer.inline(a), header: !1, align: s.align[c] })));
            return s;
        }
    }
    lheading(r) { let t = this.rules.block.lheading.exec(r); if (t)
        return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) }; }
    paragraph(r) {
        let t = this.rules.block.paragraph.exec(r);
        if (t) {
            let e = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
            return { type: "paragraph", raw: t[0], text: e, tokens: this.lexer.inline(e) };
        }
    }
    text(r) { let t = this.rules.block.text.exec(r); if (t)
        return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) }; }
    escape(r) { let t = this.rules.inline.escape.exec(r); if (t)
        return { type: "escape", raw: t[0], text: t[1] }; }
    tag(r) { let t = this.rules.inline.tag.exec(r); if (t)
        return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: t[0] }; }
    link(r) { let t = this.rules.inline.link.exec(r); if (t) {
        let e = t[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
            if (!this.rules.other.endAngleBracket.test(e))
                return;
            let s = I(e.slice(0, -1), "\\");
            if ((e.length - s.length) % 2 === 0)
                return;
        }
        else {
            let s = ft(t[2], "()");
            if (s === -2)
                return;
            if (s > -1) {
                let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
                t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, a).trim(), t[3] = "";
            }
        }
        let n = t[2], i = "";
        if (this.options.pedantic) {
            let s = this.rules.other.pedanticHrefTitle.exec(n);
            s && (n = s[1], i = s[3]);
        }
        else
            i = t[3] ? t[3].slice(1, -1) : "";
        return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n = n.slice(1) : n = n.slice(1, -1)), be(t, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    } }
    reflink(r, t) { let e; if ((e = this.rules.inline.reflink.exec(r)) || (e = this.rules.inline.nolink.exec(r))) {
        let n = (e[2] || e[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[n.toLowerCase()];
        if (!i) {
            let s = e[0].charAt(0);
            return { type: "text", raw: s, text: s };
        }
        return be(e, i, e[0], this.lexer, this.rules);
    } }
    emStrong(r, t, e = "") { let n = this.rules.inline.emStrongLDelim.exec(r); if (!n || n[3] && e.match(this.rules.other.unicodeAlphaNumeric))
        return; if (!(n[1] || n[2] || "") || !e || this.rules.inline.punctuation.exec(e)) {
        let s = [...n[0]].length - 1, o, a, c = s, l = 0, p = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        for (p.lastIndex = 0, t = t.slice(-1 * r.length + s); (n = p.exec(t)) != null;) {
            if (o = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !o)
                continue;
            if (a = [...o].length, n[3] || n[4]) {
                c += a;
                continue;
            }
            else if ((n[5] || n[6]) && s % 3 && !((s + a) % 3)) {
                l += a;
                continue;
            }
            if (c -= a, c > 0)
                continue;
            a = Math.min(a, a + c + l);
            let d = [...n[0]][0].length, u = r.slice(0, s + n.index + d + a);
            if (Math.min(s, a) % 2) {
                let f = u.slice(1, -1);
                return { type: "em", raw: u, text: f, tokens: this.lexer.inlineTokens(f) };
            }
            let b = u.slice(2, -2);
            return { type: "strong", raw: u, text: b, tokens: this.lexer.inlineTokens(b) };
        }
    } }
    codespan(r) { let t = this.rules.inline.code.exec(r); if (t) {
        let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), i = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
        return n && i && (e = e.substring(1, e.length - 1)), { type: "codespan", raw: t[0], text: e };
    } }
    br(r) { let t = this.rules.inline.br.exec(r); if (t)
        return { type: "br", raw: t[0] }; }
    del(r) { let t = this.rules.inline.del.exec(r); if (t)
        return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) }; }
    autolink(r) { let t = this.rules.inline.autolink.exec(r); if (t) {
        let e, n;
        return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), { type: "link", raw: t[0], text: e, href: n, tokens: [{ type: "text", raw: e, text: e }] };
    } }
    url(r) { let t; if (t = this.rules.inline.url.exec(r)) {
        let e, n;
        if (t[2] === "@")
            e = t[0], n = "mailto:" + e;
        else {
            let i;
            do
                i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
            while (i !== t[0]);
            e = t[0], t[1] === "www." ? n = "http://" + t[0] : n = t[0];
        }
        return { type: "link", raw: t[0], text: e, href: n, tokens: [{ type: "text", raw: e, text: e }] };
    } }
    inlineText(r) { let t = this.rules.inline.text.exec(r); if (t) {
        let e = this.lexer.state.inRawBlock;
        return { type: "text", raw: t[0], text: t[0], escaped: e };
    } }
}, S = class G {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(t) { this.tokens = [], this.tokens.links = Object.create(null), this.options = t || E, this.options.tokenizer = this.options.tokenizer || new B, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 }; let e = { other: x, block: D.normal, inline: A.normal }; this.options.pedantic ? (e.block = D.pedantic, e.inline = A.pedantic) : this.options.gfm && (e.block = D.gfm, this.options.breaks ? e.inline = A.breaks : e.inline = A.gfm), this.tokenizer.rules = e; }
    static get rules() { return { block: D, inline: A }; }
    static lex(t, e) { return new G(e).lex(t); }
    static lexInline(t, e) { return new G(e).inlineTokens(t); }
    lex(t) {
        t = t.replace(x.carriageReturn, `
`), this.blockTokens(t, this.tokens);
        for (let e = 0; e < this.inlineQueue.length; e++) {
            let n = this.inlineQueue[e];
            this.inlineTokens(n.src, n.tokens);
        }
        return this.inlineQueue = [], this.tokens;
    }
    blockTokens(t, e = [], n = !1) {
        for (this.options.pedantic && (t = t.replace(x.tabCharGlobal, "    ").replace(x.spaceLine, "")); t;) {
            let i;
            if (this.options.extensions?.block?.some(o => (i = o.call({ lexer: this }, t, e)) ? (t = t.substring(i.raw.length), e.push(i), !0) : !1))
                continue;
            if (i = this.tokenizer.space(t)) {
                t = t.substring(i.raw.length);
                let o = e.at(-1);
                i.raw.length === 1 && o !== void 0 ? o.raw += `
` : e.push(i);
                continue;
            }
            if (i = this.tokenizer.code(t)) {
                t = t.substring(i.raw.length);
                let o = e.at(-1);
                o?.type === "paragraph" || o?.type === "text" ? (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue.at(-1).src = o.text) : e.push(i);
                continue;
            }
            if (i = this.tokenizer.fences(t)) {
                t = t.substring(i.raw.length), e.push(i);
                continue;
            }
            if (i = this.tokenizer.heading(t)) {
                t = t.substring(i.raw.length), e.push(i);
                continue;
            }
            if (i = this.tokenizer.hr(t)) {
                t = t.substring(i.raw.length), e.push(i);
                continue;
            }
            if (i = this.tokenizer.blockquote(t)) {
                t = t.substring(i.raw.length), e.push(i);
                continue;
            }
            if (i = this.tokenizer.list(t)) {
                t = t.substring(i.raw.length), e.push(i);
                continue;
            }
            if (i = this.tokenizer.html(t)) {
                t = t.substring(i.raw.length), e.push(i);
                continue;
            }
            if (i = this.tokenizer.def(t)) {
                t = t.substring(i.raw.length);
                let o = e.at(-1);
                o?.type === "paragraph" || o?.type === "text" ? (o.raw += `
` + i.raw, o.text += `
` + i.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = { href: i.href, title: i.title });
                continue;
            }
            if (i = this.tokenizer.table(t)) {
                t = t.substring(i.raw.length), e.push(i);
                continue;
            }
            if (i = this.tokenizer.lheading(t)) {
                t = t.substring(i.raw.length), e.push(i);
                continue;
            }
            let s = t;
            if (this.options.extensions?.startBlock) {
                let o = 1 / 0, a = t.slice(1), c;
                this.options.extensions.startBlock.forEach(l => { c = l.call({ lexer: this }, a), typeof c == "number" && c >= 0 && (o = Math.min(o, c)); }), o < 1 / 0 && o >= 0 && (s = t.substring(0, o + 1));
            }
            if (this.state.top && (i = this.tokenizer.paragraph(s))) {
                let o = e.at(-1);
                n && o?.type === "paragraph" ? (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : e.push(i), n = s.length !== t.length, t = t.substring(i.raw.length);
                continue;
            }
            if (i = this.tokenizer.text(t)) {
                t = t.substring(i.raw.length);
                let o = e.at(-1);
                o?.type === "text" ? (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : e.push(i);
                continue;
            }
            if (t) {
                let o = "Infinite loop on byte: " + t.charCodeAt(0);
                if (this.options.silent) {
                    console.error(o);
                    break;
                }
                else
                    throw new Error(o);
            }
        }
        return this.state.top = !0, e;
    }
    inline(t, e = []) { return this.inlineQueue.push({ src: t, tokens: e }), e; }
    inlineTokens(t, e = []) { let n = t, i = null; if (this.tokens.links) {
        let a = Object.keys(this.tokens.links);
        if (a.length > 0)
            for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;)
                a.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    } for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;)
        n = n.slice(0, i.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex); for (; (i = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;)
        n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex); let s = !1, o = ""; for (; t;) {
        s || (o = ""), s = !1;
        let a;
        if (this.options.extensions?.inline?.some(l => (a = l.call({ lexer: this }, t, e)) ? (t = t.substring(a.raw.length), e.push(a), !0) : !1))
            continue;
        if (a = this.tokenizer.escape(t)) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        if (a = this.tokenizer.tag(t)) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        if (a = this.tokenizer.link(t)) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        if (a = this.tokenizer.reflink(t, this.tokens.links)) {
            t = t.substring(a.raw.length);
            let l = e.at(-1);
            a.type === "text" && l?.type === "text" ? (l.raw += a.raw, l.text += a.text) : e.push(a);
            continue;
        }
        if (a = this.tokenizer.emStrong(t, n, o)) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        if (a = this.tokenizer.codespan(t)) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        if (a = this.tokenizer.br(t)) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        if (a = this.tokenizer.del(t)) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        if (a = this.tokenizer.autolink(t)) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        if (!this.state.inLink && (a = this.tokenizer.url(t))) {
            t = t.substring(a.raw.length), e.push(a);
            continue;
        }
        let c = t;
        if (this.options.extensions?.startInline) {
            let l = 1 / 0, p = t.slice(1), d;
            this.options.extensions.startInline.forEach(u => { d = u.call({ lexer: this }, p), typeof d == "number" && d >= 0 && (l = Math.min(l, d)); }), l < 1 / 0 && l >= 0 && (c = t.substring(0, l + 1));
        }
        if (a = this.tokenizer.inlineText(c)) {
            t = t.substring(a.raw.length), a.raw.slice(-1) !== "_" && (o = a.raw.slice(-1)), s = !0;
            let l = e.at(-1);
            l?.type === "text" ? (l.raw += a.raw, l.text += a.text) : e.push(a);
            continue;
        }
        if (t) {
            let l = "Infinite loop on byte: " + t.charCodeAt(0);
            if (this.options.silent) {
                console.error(l);
                break;
            }
            else
                throw new Error(l);
        }
    } return e; }
}, R = class {
    options;
    parser;
    constructor(r) { this.options = r || E; }
    space(r) { return ""; }
    code({ text: r, lang: t, escaped: e }) {
        let n = (t || "").match(x.notSpaceStart)?.[0], i = r.replace(x.endingNewline, "") + `
`;
        return n ? '<pre><code class="language-' + y(n) + '">' + (e ? i : y(i, !0)) + `</code></pre>
` : "<pre><code>" + (e ? i : y(i, !0)) + `</code></pre>
`;
    }
    blockquote({ tokens: r }) {
        return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
    }
    html({ text: r }) { return r; }
    heading({ tokens: r, depth: t }) {
        return `<h${t}>${this.parser.parseInline(r)}</h${t}>
`;
    }
    hr(r) {
        return `<hr>
`;
    }
    list(r) {
        let t = r.ordered, e = r.start, n = "";
        for (let o = 0; o < r.items.length; o++) {
            let a = r.items[o];
            n += this.listitem(a);
        }
        let i = t ? "ol" : "ul", s = t && e !== 1 ? ' start="' + e + '"' : "";
        return "<" + i + s + `>
` + n + "</" + i + `>
`;
    }
    listitem(r) {
        let t = "";
        if (r.task) {
            let e = this.checkbox({ checked: !!r.checked });
            r.loose ? r.tokens[0]?.type === "paragraph" ? (r.tokens[0].text = e + " " + r.tokens[0].text, r.tokens[0].tokens && r.tokens[0].tokens.length > 0 && r.tokens[0].tokens[0].type === "text" && (r.tokens[0].tokens[0].text = e + " " + y(r.tokens[0].tokens[0].text), r.tokens[0].tokens[0].escaped = !0)) : r.tokens.unshift({ type: "text", raw: e + " ", text: e + " ", escaped: !0 }) : t += e + " ";
        }
        return t += this.parser.parse(r.tokens, !!r.loose), `<li>${t}</li>
`;
    }
    checkbox({ checked: r }) { return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox">'; }
    paragraph({ tokens: r }) {
        return `<p>${this.parser.parseInline(r)}</p>
`;
    }
    table(r) {
        let t = "", e = "";
        for (let i = 0; i < r.header.length; i++)
            e += this.tablecell(r.header[i]);
        t += this.tablerow({ text: e });
        let n = "";
        for (let i = 0; i < r.rows.length; i++) {
            let s = r.rows[i];
            e = "";
            for (let o = 0; o < s.length; o++)
                e += this.tablecell(s[o]);
            n += this.tablerow({ text: e });
        }
        return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + n + `</table>
`;
    }
    tablerow({ text: r }) {
        return `<tr>
${r}</tr>
`;
    }
    tablecell(r) {
        let t = this.parser.parseInline(r.tokens), e = r.header ? "th" : "td";
        return (r.align ? `<${e} align="${r.align}">` : `<${e}>`) + t + `</${e}>
`;
    }
    strong({ tokens: r }) { return `<strong>${this.parser.parseInline(r)}</strong>`; }
    em({ tokens: r }) { return `<em>${this.parser.parseInline(r)}</em>`; }
    codespan({ text: r }) { return `<code>${y(r, !0)}</code>`; }
    br(r) { return "<br>"; }
    del({ tokens: r }) { return `<del>${this.parser.parseInline(r)}</del>`; }
    link({ href: r, title: t, tokens: e }) { let n = this.parser.parseInline(e), i = me(r); if (i === null)
        return n; r = i; let s = '<a href="' + r + '"'; return t && (s += ' title="' + y(t) + '"'), s += ">" + n + "</a>", s; }
    image({ href: r, title: t, text: e, tokens: n }) { n && (e = this.parser.parseInline(n, this.parser.textRenderer)); let i = me(r); if (i === null)
        return y(e); r = i; let s = `<img src="${r}" alt="${e}"`; return t && (s += ` title="${y(t)}"`), s += ">", s; }
    text(r) { return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : y(r.text); }
}, ne = class {
    strong({ text: r }) { return r; }
    em({ text: r }) { return r; }
    codespan({ text: r }) { return r; }
    del({ text: r }) { return r; }
    html({ text: r }) { return r; }
    text({ text: r }) { return r; }
    link({ text: r }) { return "" + r; }
    image({ text: r }) { return "" + r; }
    br() { return ""; }
}, T = class W {
    options;
    renderer;
    textRenderer;
    constructor(t) { this.options = t || E, this.options.renderer = this.options.renderer || new R, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ne; }
    static parse(t, e) { return new W(e).parse(t); }
    static parseInline(t, e) { return new W(e).parseInline(t); }
    parse(t, e = !0) {
        let n = "";
        for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if (this.options.extensions?.renderers?.[s.type]) {
                let a = s, c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
                if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
                    n += c || "";
                    continue;
                }
            }
            let o = s;
            switch (o.type) {
                case "space": {
                    n += this.renderer.space(o);
                    continue;
                }
                case "hr": {
                    n += this.renderer.hr(o);
                    continue;
                }
                case "heading": {
                    n += this.renderer.heading(o);
                    continue;
                }
                case "code": {
                    n += this.renderer.code(o);
                    continue;
                }
                case "table": {
                    n += this.renderer.table(o);
                    continue;
                }
                case "blockquote": {
                    n += this.renderer.blockquote(o);
                    continue;
                }
                case "list": {
                    n += this.renderer.list(o);
                    continue;
                }
                case "html": {
                    n += this.renderer.html(o);
                    continue;
                }
                case "paragraph": {
                    n += this.renderer.paragraph(o);
                    continue;
                }
                case "text": {
                    let a = o, c = this.renderer.text(a);
                    for (; i + 1 < t.length && t[i + 1].type === "text";)
                        a = t[++i], c += `
` + this.renderer.text(a);
                    e ? n += this.renderer.paragraph({ type: "paragraph", raw: c, text: c, tokens: [{ type: "text", raw: c, text: c, escaped: !0 }] }) : n += c;
                    continue;
                }
                default: {
                    let a = 'Token with "' + o.type + '" type was not found.';
                    if (this.options.silent)
                        return console.error(a), "";
                    throw new Error(a);
                }
            }
        }
        return n;
    }
    parseInline(t, e = this.renderer) { let n = ""; for (let i = 0; i < t.length; i++) {
        let s = t[i];
        if (this.options.extensions?.renderers?.[s.type]) {
            let a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
            if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
                n += a || "";
                continue;
            }
        }
        let o = s;
        switch (o.type) {
            case "escape": {
                n += e.text(o);
                break;
            }
            case "html": {
                n += e.html(o);
                break;
            }
            case "link": {
                n += e.link(o);
                break;
            }
            case "image": {
                n += e.image(o);
                break;
            }
            case "strong": {
                n += e.strong(o);
                break;
            }
            case "em": {
                n += e.em(o);
                break;
            }
            case "codespan": {
                n += e.codespan(o);
                break;
            }
            case "br": {
                n += e.br(o);
                break;
            }
            case "del": {
                n += e.del(o);
                break;
            }
            case "text": {
                n += e.text(o);
                break;
            }
            default: {
                let a = 'Token with "' + o.type + '" type was not found.';
                if (this.options.silent)
                    return console.error(a), "";
                throw new Error(a);
            }
        }
    } return n; }
}, M = class {
    options;
    block;
    constructor(t) { this.options = t || E; }
    static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
    preprocess(t) { return t; }
    postprocess(t) { return t; }
    processAllTokens(t) { return t; }
    provideLexer() { return this.block ? S.lex : S.lexInline; }
    provideParser() { return this.block ? T.parse : T.parseInline; }
}, mt = class {
    defaults = X();
    options = this.setOptions;
    parse = this.parseMarkdown(!0);
    parseInline = this.parseMarkdown(!1);
    Parser = T;
    Renderer = R;
    TextRenderer = ne;
    Lexer = S;
    Tokenizer = B;
    Hooks = M;
    constructor(...r) { this.use(...r); }
    walkTokens(r, t) { let e = []; for (let n of r)
        switch (e = e.concat(t.call(this, n)), n.type) {
            case "table": {
                let i = n;
                for (let s of i.header)
                    e = e.concat(this.walkTokens(s.tokens, t));
                for (let s of i.rows)
                    for (let o of s)
                        e = e.concat(this.walkTokens(o.tokens, t));
                break;
            }
            case "list": {
                let i = n;
                e = e.concat(this.walkTokens(i.items, t));
                break;
            }
            default: {
                let i = n;
                this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach(s => { let o = i[s].flat(1 / 0); e = e.concat(this.walkTokens(o, t)); }) : i.tokens && (e = e.concat(this.walkTokens(i.tokens, t)));
            }
        } return e; }
    use(...r) { let t = this.defaults.extensions || { renderers: {}, childTokens: {} }; return r.forEach(e => { let n = k({}, e); if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach(i => { if (!i.name)
        throw new Error("extension name required"); if ("renderer" in i) {
        let s = t.renderers[i.name];
        s ? t.renderers[i.name] = function (...o) { let a = i.renderer.apply(this, o); return a === !1 && (a = s.apply(this, o)), a; } : t.renderers[i.name] = i.renderer;
    } if ("tokenizer" in i) {
        if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
        let s = t[i.level];
        s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
    } "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens); }), n.extensions = t), e.renderer) {
        let i = this.defaults.renderer || new R(this.defaults);
        for (let s in e.renderer) {
            if (!(s in i))
                throw new Error(`renderer '${s}' does not exist`);
            if (["options", "parser"].includes(s))
                continue;
            let o = s, a = e.renderer[o], c = i[o];
            i[o] = (...l) => { let p = a.apply(i, l); return p === !1 && (p = c.apply(i, l)), p || ""; };
        }
        n.renderer = i;
    } if (e.tokenizer) {
        let i = this.defaults.tokenizer || new B(this.defaults);
        for (let s in e.tokenizer) {
            if (!(s in i))
                throw new Error(`tokenizer '${s}' does not exist`);
            if (["options", "rules", "lexer"].includes(s))
                continue;
            let o = s, a = e.tokenizer[o], c = i[o];
            i[o] = (...l) => { let p = a.apply(i, l); return p === !1 && (p = c.apply(i, l)), p; };
        }
        n.tokenizer = i;
    } if (e.hooks) {
        let i = this.defaults.hooks || new M;
        for (let s in e.hooks) {
            if (!(s in i))
                throw new Error(`hook '${s}' does not exist`);
            if (["options", "block"].includes(s))
                continue;
            let o = s, a = e.hooks[o], c = i[o];
            M.passThroughHooks.has(s) ? i[o] = l => { if (this.defaults.async)
                return Promise.resolve(a.call(i, l)).then(d => c.call(i, d)); let p = a.call(i, l); return c.call(i, p); } : i[o] = (...l) => { let p = a.apply(i, l); return p === !1 && (p = c.apply(i, l)), p; };
        }
        n.hooks = i;
    } if (e.walkTokens) {
        let i = this.defaults.walkTokens, s = e.walkTokens;
        n.walkTokens = function (o) { let a = []; return a.push(s.call(this, o)), i && (a = a.concat(i.call(this, o))), a; };
    } this.defaults = k(k({}, this.defaults), n); }), this; }
    setOptions(r) { return this.defaults = k(k({}, this.defaults), r), this; }
    lexer(r, t) { return S.lex(r, t ?? this.defaults); }
    parser(r, t) { return T.parse(r, t ?? this.defaults); }
    parseMarkdown(r) { return (e, n) => { let i = k({}, n), s = k(k({}, this.defaults), i), o = this.onError(!!s.silent, !!s.async); if (this.defaults.async === !0 && i.async === !1)
        return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.")); if (typeof e > "u" || e === null)
        return o(new Error("marked(): input parameter is undefined or null")); if (typeof e != "string")
        return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected")); s.hooks && (s.hooks.options = s, s.hooks.block = r); let a = s.hooks ? s.hooks.provideLexer() : r ? S.lex : S.lexInline, c = s.hooks ? s.hooks.provideParser() : r ? T.parse : T.parseInline; if (s.async)
        return Promise.resolve(s.hooks ? s.hooks.preprocess(e) : e).then(l => a(l, s)).then(l => s.hooks ? s.hooks.processAllTokens(l) : l).then(l => s.walkTokens ? Promise.all(this.walkTokens(l, s.walkTokens)).then(() => l) : l).then(l => c(l, s)).then(l => s.hooks ? s.hooks.postprocess(l) : l).catch(o); try {
        s.hooks && (e = s.hooks.preprocess(e));
        let l = a(e, s);
        s.hooks && (l = s.hooks.processAllTokens(l)), s.walkTokens && this.walkTokens(l, s.walkTokens);
        let p = c(l, s);
        return s.hooks && (p = s.hooks.postprocess(p)), p;
    }
    catch (l) {
        return o(l);
    } }; }
    onError(r, t) {
        return e => {
            if (e.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
                let n = "<p>An error occurred:</p><pre>" + y(e.message + "", !0) + "</pre>";
                return t ? Promise.resolve(n) : n;
            }
            if (t)
                return Promise.reject(e);
            throw e;
        };
    }
}, v = new mt;
function g(r, t) { return v.parse(r, t); }
g.options = g.setOptions = function (r) { return v.setOptions(r), g.defaults = v.defaults, xe(g.defaults), g; };
g.getDefaults = X;
g.defaults = E;
g.use = function (...r) { return v.use(...r), g.defaults = v.defaults, xe(g.defaults), g; };
g.walkTokens = function (r, t) { return v.walkTokens(r, t); };
g.parseInline = v.parseInline;
g.Parser = T;
g.parser = T.parse;
g.Renderer = R;
g.TextRenderer = ne;
g.Lexer = S;
g.lexer = S.lex;
g.Tokenizer = B;
g.Hooks = M;
g.parse = g;
var Ht = g.options, Ut = g.setOptions, Zt = g.use, Gt = g.walkTokens, Wt = g.parseInline;
var Xt = T.parse, Qt = S.lex;
import * as Oe from "@angular/common/http";
import * as se from "@angular/platform-browser";
var $t = ["*"], Ct = "Copy", At = "Copied", It = (() => { class r {
    constructor() { this._buttonClick$ = new z, this.copied = wt(this._buttonClick$.pipe(yt(() => de(pe(!0), ue(3e3).pipe(St(!1)))), Tt(), Rt(1))), this.copiedText = kt(() => this.copied() ? At : Ct); }
    onCopyToClipboardClick() { this._buttonClick$.next(); }
    static { this.\u0275fac = function (n) { return new (n || r); }; }
    static { this.\u0275cmp = h.\u0275\u0275defineComponent({ type: r, selectors: [["markdown-clipboard"]], decls: 2, vars: 3, consts: [[1, "markdown-clipboard-button", 3, "click"]], template: function (n, i) { n & 1 && (h.\u0275\u0275domElementStart(0, "button", 0), h.\u0275\u0275domListener("click", function () { return i.onCopyToClipboardClick(); }), h.\u0275\u0275text(1), h.\u0275\u0275domElementEnd()), n & 2 && (h.\u0275\u0275classProp("copied", i.copied()), h.\u0275\u0275advance(), h.\u0275\u0275textInterpolate(i.copiedText())); }, encapsulation: 2, changeDetection: 0 }); }
} return r; })(), Ot = new L("CLIPBOARD_OPTIONS"), Ae = class {
}, xn = (() => {
    class r {
        transform(e, n) {
            return e == null && (e = ""), n == null && (n = ""), typeof e != "string" ? (console.error(`LanguagePipe has been invoked with an invalid value type [${typeof e}]`), e) : typeof n != "string" ? (console.error(`LanguagePipe has been invoked with an invalid parameter [${typeof n}]`), e) : "```" + n + `
` + e + "\n```";
        }
        static { this.\u0275fac = function (n) { return new (n || r); }; }
        static { this.\u0275pipe = h.\u0275\u0275definePipe({ name: "language", type: r, pure: !0 }); }
    }
    return r;
})(), re = (function (r) { return r.CommandLine = "command-line", r.LineHighlight = "line-highlight", r.LineNumbers = "line-numbers", r; })(re || {}), Pt = new L("MARKED_EXTENSIONS"), Lt = new L("MARKED_OPTIONS"), zt = new L("MERMAID_OPTIONS"), Dt = "[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information", Mt = "[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information", Nt = "[ngx-markdown] When using the `mermaid` attribute you *have to* include Mermaid files to `angular.json` or use imports. See README for more information", Bt = "[ngx-markdown] When using the `clipboard` attribute you *have to* include Clipboard files to `angular.json` or use imports. See README for more information", jt = "[ngx-markdown] When using the `clipboard` attribute you *have to* provide the `viewContainerRef` parameter to `MarkdownService.render()` function", qt = "[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information", Pe = new L("SECURITY_CONTEXT"), Ie = class extends R {
    constructor() { super(...arguments), this.\u0275NgxMarkdownRendererExtendedForExtensions = !1, this.\u0275NgxMarkdownRendererExtendedForMermaid = !1; }
}, oe = (() => {
    class r {
        get options() { return this._options; }
        set options(e) { this._options = k(k({}, this.DEFAULT_MARKED_OPTIONS), e); }
        get renderer() { return this.options.renderer; }
        set renderer(e) { this.options.renderer = e; }
        constructor(e, n, i, s, o, a, c, l) { this.clipboardOptions = e, this.extensions = n, this.mermaidOptions = s, this.platform = o, this.securityContext = a, this.http = c, this.sanitizer = l, this.DEFAULT_MARKED_OPTIONS = { renderer: new R }, this.DEFAULT_KATEX_OPTIONS = { delimiters: [{ left: "$$", right: "$$", display: !0 }, { left: "$", right: "$", display: !1 }, { left: "\\(", right: "\\)", display: !1 }, { left: "\\begin{equation}", right: "\\end{equation}", display: !0 }, { left: "\\begin{align}", right: "\\end{align}", display: !0 }, { left: "\\begin{alignat}", right: "\\end{alignat}", display: !0 }, { left: "\\begin{gather}", right: "\\end{gather}", display: !0 }, { left: "\\begin{CD}", right: "\\end{CD}", display: !0 }, { left: "\\[", right: "\\]", display: !0 }] }, this.DEFAULT_MERMAID_OPTIONS = { startOnLoad: !1 }, this.DEFAULT_CLIPBOARD_OPTIONS = { buttonComponent: void 0 }, this.DEFAULT_PARSE_OPTIONS = { decodeHtml: !1, inline: !1, emoji: !1, mermaid: !1, markedOptions: void 0, disableSanitizer: !1 }, this.DEFAULT_RENDER_OPTIONS = { clipboard: !1, clipboardOptions: void 0, katex: !1, katexOptions: void 0, mermaid: !1, mermaidOptions: void 0 }, this._reload$ = new z, this.reload$ = this._reload$.asObservable(), this.options = i; }
        parse(e, n = this.DEFAULT_PARSE_OPTIONS) { let { decodeHtml: i, inline: s, emoji: o, mermaid: a, disableSanitizer: c } = n, l = k(k({}, this.options), n.markedOptions), p = l.renderer || this.renderer || new R; this.extensions && (this.renderer = this.extendsRendererForExtensions(p)), a && (this.renderer = this.extendsRendererForMermaid(p)); let d = this.trimIndentation(e), u = i ? this.decodeHtml(d) : d, b = o ? this.parseEmoji(u) : u, f = this.parseMarked(b, l, s); return (c ? f : this.sanitizer.sanitize(this.securityContext, f)) || ""; }
        render(e, n = this.DEFAULT_RENDER_OPTIONS, i) { let { clipboard: s, clipboardOptions: o, katex: a, katexOptions: c, mermaid: l, mermaidOptions: p } = n; a && this.renderKatex(e, k(k({}, this.DEFAULT_KATEX_OPTIONS), c)), l && this.renderMermaid(e, k(k(k({}, this.DEFAULT_MERMAID_OPTIONS), this.mermaidOptions), p)), s && this.renderClipboard(e, i, k(k(k({}, this.DEFAULT_CLIPBOARD_OPTIONS), this.clipboardOptions), o)), this.highlight(e); }
        reload() { this._reload$.next(); }
        getSource(e) { if (!this.http)
            throw new Error(qt); return this.http.get(e, { responseType: "text" }).pipe(vt(n => this.handleExtension(e, n))); }
        highlight(e) { if (!$(this.platform) || typeof Prism > "u" || typeof Prism.highlightAllUnder > "u")
            return; e || (e = document); let n = e.querySelectorAll('pre code:not([class*="language-"])'); Array.prototype.forEach.call(n, i => i.classList.add("language-none")), Prism.highlightAllUnder(e); }
        decodeHtml(e) { if (!$(this.platform))
            return e; let n = document.createElement("textarea"); return n.innerHTML = e, n.value; }
        extendsRendererForExtensions(e) { let n = e; return n.\u0275NgxMarkdownRendererExtendedForExtensions === !0 || (this.extensions?.length > 0 && g.use(...this.extensions), n.\u0275NgxMarkdownRendererExtendedForExtensions = !0), e; }
        extendsRendererForMermaid(e) { let n = e; if (n.\u0275NgxMarkdownRendererExtendedForMermaid === !0)
            return e; let i = e.code; return e.code = s => s.lang === "mermaid" ? `<div class="mermaid">${s.text}</div>` : i(s), n.\u0275NgxMarkdownRendererExtendedForMermaid = !0, e; }
        handleExtension(e, n) {
            let i = e.lastIndexOf("://"), s = i > -1 ? e.substring(i + 4) : e, o = s.lastIndexOf("/"), a = o > -1 ? s.substring(o + 1).split("?")[0] : "", c = a.lastIndexOf("."), l = c > -1 ? a.substring(c + 1) : "";
            return l && l !== "md" ? "```" + l + `
` + n + "\n```" : n;
        }
        parseMarked(e, n, i = !1) { if (n.renderer) {
            let s = k({}, n.renderer);
            delete s.\u0275NgxMarkdownRendererExtendedForExtensions, delete s.\u0275NgxMarkdownRendererExtendedForMermaid, delete n.renderer, g.use({ renderer: s });
        } return i ? g.parseInline(e, n) : g.parse(e, n); }
        parseEmoji(e) { if (!$(this.platform))
            return e; if (typeof joypixels > "u" || typeof joypixels.shortnameToUnicode > "u")
            throw new Error(Dt); return joypixels.shortnameToUnicode(e); }
        renderKatex(e, n) { if ($(this.platform)) {
            if (typeof katex > "u" || typeof renderMathInElement > "u")
                throw new Error(Mt);
            renderMathInElement(e, n);
        } }
        renderClipboard(e, n, i) { if (!$(this.platform))
            return; if (typeof ClipboardJS > "u")
            throw new Error(Bt); if (!n)
            throw new Error(jt); let { buttonComponent: s, buttonTemplate: o } = i, a = e.querySelectorAll("pre"); for (let c = 0; c < a.length; c++) {
            let l = a.item(c), p = document.createElement("div");
            p.style.position = "relative", l.parentNode.insertBefore(p, l), p.appendChild(l);
            let d = document.createElement("div");
            d.classList.add("markdown-clipboard-toolbar"), d.style.position = "absolute", d.style.top = ".5em", d.style.right = ".5em", d.style.zIndex = "1", p.insertAdjacentElement("beforeend", d), p.onmouseenter = () => d.classList.add("hover"), p.onmouseleave = () => d.classList.remove("hover");
            let u;
            if (s) {
                let f = n.createComponent(s);
                u = f.hostView, f.changeDetectorRef.markForCheck();
            }
            else if (o)
                u = n.createEmbeddedView(o);
            else {
                let f = n.createComponent(It);
                u = f.hostView, f.changeDetectorRef.markForCheck();
            }
            let b;
            u.rootNodes.forEach(f => { d.appendChild(f), b = new ClipboardJS(f, { text: () => l.innerText }); }), u.onDestroy(() => b.destroy());
        } }
        renderMermaid(e, n = this.DEFAULT_MERMAID_OPTIONS) { if (!$(this.platform))
            return; if (typeof mermaid > "u" || typeof mermaid.initialize > "u")
            throw new Error(Nt); let i = e.querySelectorAll(".mermaid"); i.length !== 0 && (mermaid.initialize(n), mermaid.run({ nodes: i })); }
        trimIndentation(e) {
            if (!e)
                return "";
            let n;
            return e.split(`
`).map(i => { let s = n; return i.length > 0 && (s = isNaN(s) ? i.search(/\S|$/) : Math.min(i.search(/\S|$/), s)), isNaN(n) && (n = s), s ? i.substring(s) : i; }).join(`
`);
        }
        static { this.\u0275fac = function (n) { return new (n || r)(h.\u0275\u0275inject(Ot, 8), h.\u0275\u0275inject(Pt, 8), h.\u0275\u0275inject(Lt, 8), h.\u0275\u0275inject(zt, 8), h.\u0275\u0275inject(bt), h.\u0275\u0275inject(Pe), h.\u0275\u0275inject(Oe.HttpClient, 8), h.\u0275\u0275inject(se.DomSanitizer)); }; }
        static { this.\u0275prov = h.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
    }
    return r;
})(), wn = (() => { class r {
    get disableSanitizer() { return this._disableSanitizer; }
    set disableSanitizer(e) { this._disableSanitizer = this.coerceBooleanProperty(e); }
    get inline() { return this._inline; }
    set inline(e) { this._inline = this.coerceBooleanProperty(e); }
    get clipboard() { return this._clipboard; }
    set clipboard(e) { this._clipboard = this.coerceBooleanProperty(e); }
    get emoji() { return this._emoji; }
    set emoji(e) { this._emoji = this.coerceBooleanProperty(e); }
    get katex() { return this._katex; }
    set katex(e) { this._katex = this.coerceBooleanProperty(e); }
    get mermaid() { return this._mermaid; }
    set mermaid(e) { this._mermaid = this.coerceBooleanProperty(e); }
    get lineHighlight() { return this._lineHighlight; }
    set lineHighlight(e) { this._lineHighlight = this.coerceBooleanProperty(e); }
    get lineNumbers() { return this._lineNumbers; }
    set lineNumbers(e) { this._lineNumbers = this.coerceBooleanProperty(e); }
    get commandLine() { return this._commandLine; }
    set commandLine(e) { this._commandLine = this.coerceBooleanProperty(e); }
    constructor(e, n, i) { this.element = e, this.markdownService = n, this.viewContainerRef = i, this.error = new ie, this.load = new ie, this.ready = new ie, this._clipboard = !1, this._commandLine = !1, this._disableSanitizer = !1, this._emoji = !1, this._inline = !1, this._katex = !1, this._lineHighlight = !1, this._lineNumbers = !1, this._mermaid = !1, this.destroyed$ = new z; }
    ngOnChanges() { this.loadContent(); }
    loadContent() { if (this.data != null) {
        this.handleData();
        return;
    } if (this.src != null) {
        this.handleSrc();
        return;
    } }
    ngAfterViewInit() { !this.data && !this.src && this.handleTransclusion(), this.markdownService.reload$.pipe(Et(this.destroyed$)).subscribe(() => this.loadContent()); }
    ngOnDestroy() { this.destroyed$.next(), this.destroyed$.complete(); }
    render(e, n = !1) { return U(this, null, function* () { let i = { decodeHtml: n, inline: this.inline, emoji: this.emoji, mermaid: this.mermaid, disableSanitizer: this.disableSanitizer }, s = { clipboard: this.clipboard, clipboardOptions: this.getClipboardOptions(), katex: this.katex, katexOptions: this.katexOptions, mermaid: this.mermaid, mermaidOptions: this.mermaidOptions }, o = yield this.markdownService.parse(e, i); this.element.nativeElement.innerHTML = o, this.handlePlugins(), this.markdownService.render(this.element.nativeElement, s, this.viewContainerRef), this.ready.emit(); }); }
    coerceBooleanProperty(e) { return e != null && `${String(e)}` != "false"; }
    getClipboardOptions() { if (this.clipboardButtonComponent || this.clipboardButtonTemplate)
        return { buttonComponent: this.clipboardButtonComponent, buttonTemplate: this.clipboardButtonTemplate }; }
    handleData() { this.render(this.data); }
    handleSrc() { this.markdownService.getSource(this.src).subscribe({ next: e => { this.render(e).then(() => { this.load.emit(e); }); }, error: e => this.error.emit(e) }); }
    handleTransclusion() { this.render(this.element.nativeElement.innerHTML, !0); }
    handlePlugins() { this.commandLine && (this.setPluginClass(this.element.nativeElement, re.CommandLine), this.setPluginOptions(this.element.nativeElement, { dataFilterOutput: this.filterOutput, dataHost: this.host, dataPrompt: this.prompt, dataOutput: this.output, dataUser: this.user })), this.lineHighlight && this.setPluginOptions(this.element.nativeElement, { dataLine: this.line, dataLineOffset: this.lineOffset }), this.lineNumbers && (this.setPluginClass(this.element.nativeElement, re.LineNumbers), this.setPluginOptions(this.element.nativeElement, { dataStart: this.start })); }
    setPluginClass(e, n) { let i = e.querySelectorAll("pre"); for (let s = 0; s < i.length; s++) {
        let o = n instanceof Array ? n : [n];
        i.item(s).classList.add(...o);
    } }
    setPluginOptions(e, n) { let i = e.querySelectorAll("pre"); for (let s = 0; s < i.length; s++)
        Object.keys(n).forEach(o => { let a = n[o]; if (a) {
            let c = this.toLispCase(o);
            i.item(s).setAttribute(c, a.toString());
        } }); }
    toLispCase(e) { let n = e.match(/([A-Z])/g); if (!n)
        return e; let i = e.toString(); for (let s = 0, o = n.length; s < o; s++)
        i = i.replace(new RegExp(n[s]), "-" + n[s].toLowerCase()); return i.slice(0, 1) === "-" && (i = i.slice(1)), i; }
    static { this.\u0275fac = function (n) { return new (n || r)(h.\u0275\u0275directiveInject(h.ElementRef), h.\u0275\u0275directiveInject(oe), h.\u0275\u0275directiveInject(h.ViewContainerRef)); }; }
    static { this.\u0275cmp = h.\u0275\u0275defineComponent({ type: r, selectors: [["markdown"], ["", "markdown", ""]], inputs: { data: "data", src: "src", disableSanitizer: "disableSanitizer", inline: "inline", clipboard: "clipboard", clipboardButtonComponent: "clipboardButtonComponent", clipboardButtonTemplate: "clipboardButtonTemplate", emoji: "emoji", katex: "katex", katexOptions: "katexOptions", mermaid: "mermaid", mermaidOptions: "mermaidOptions", lineHighlight: "lineHighlight", line: "line", lineOffset: "lineOffset", lineNumbers: "lineNumbers", start: "start", commandLine: "commandLine", filterOutput: "filterOutput", host: "host", prompt: "prompt", output: "output", user: "user" }, outputs: { error: "error", load: "load", ready: "ready" }, features: [h.\u0275\u0275NgOnChangesFeature], ngContentSelectors: $t, decls: 1, vars: 0, template: function (n, i) { n & 1 && (h.\u0275\u0275projectionDef(), h.\u0275\u0275projection(0)); }, encapsulation: 2 }); }
} return r; })(), yn = (() => { class r {
    constructor(e, n, i, s, o) { this.domSanitizer = e, this.elementRef = n, this.markdownService = i, this.viewContainerRef = s, this.zone = o; }
    transform(e, n) { return U(this, null, function* () { if (e == null)
        return ""; if (typeof e != "string")
        return console.error(`MarkdownPipe has been invoked with an invalid value type [${typeof e}]`), e; let i = yield this.markdownService.parse(e, n); return this.zone.onStable.pipe(_t()).subscribe(() => this.markdownService.render(this.elementRef.nativeElement, n, this.viewContainerRef)), this.domSanitizer.bypassSecurityTrustHtml(i); }); }
    static { this.\u0275fac = function (n) { return new (n || r)(h.\u0275\u0275directiveInject(se.DomSanitizer, 16), h.\u0275\u0275directiveInject(h.ElementRef, 16), h.\u0275\u0275directiveInject(oe, 16), h.\u0275\u0275directiveInject(h.ViewContainerRef, 16), h.\u0275\u0275directiveInject(h.NgZone, 16)); }; }
    static { this.\u0275pipe = h.\u0275\u0275definePipe({ name: "markdown", type: r, pure: !0 }); }
} return r; })();
function Ft(r) { return [oe, r?.loader ?? [], r?.clipboardOptions ?? [], r?.markedOptions ?? [], r?.mermaidOptions ?? [], r?.markedExtensions ?? [], { provide: Pe, useValue: r?.sanitize ?? xt.HTML }]; }
var Sn = (() => { class r {
    static forRoot(e) { return { ngModule: r, providers: [Ft(e)] }; }
    static forChild() { return { ngModule: r }; }
    static { this.\u0275fac = function (n) { return new (n || r); }; }
    static { this.\u0275mod = h.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = h.\u0275\u0275defineInjector({}); }
} return r; })();
export { Ot as CLIPBOARD_OPTIONS, It as ClipboardButtonComponent, Ie as ExtendedRenderer, Ae as KatexSpecificOptions, xn as LanguagePipe, Pt as MARKED_EXTENSIONS, Lt as MARKED_OPTIONS, zt as MERMAID_OPTIONS, wn as MarkdownComponent, Sn as MarkdownModule, yn as MarkdownPipe, oe as MarkdownService, R as MarkedRenderer, re as PrismPlugin, Pe as SECURITY_CONTEXT, Bt as errorClipboardNotLoaded, jt as errorClipboardViewContainerRequired, Dt as errorJoyPixelsNotLoaded, Mt as errorKatexNotLoaded, Nt as errorMermaidNotLoaded, qt as errorSrcWithoutHttpClient, Ft as provideMarkdown };
