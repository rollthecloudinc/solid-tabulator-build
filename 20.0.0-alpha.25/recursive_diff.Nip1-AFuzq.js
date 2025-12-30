import { e as D } from "@nf-internal/chunk-FJYW2LMB";
var y = D((X, T) => { var p = { NUMBER: "NUMBER", BOOLEAN: "BOOLEAN", STRING: "STRING", NULL: "NULL", UNDEFINED: "UNDEFINED", DATE: "DATE", ARRAY: "ARRAY", MAP: "MAP", SET: "SET", ITERABLE_OBJECT: "ITERABLE_OBJECT", DEFAULT: "OBJECT" }; T.exports = { types: p, iterableTypes: [p.ITERABLE_OBJECT, p.MAP, p.ARRAY, p.SET], errors: { EMPTY_DIFF: "No diff object is provided, Nothing to apply", INVALID_DIFF_FORMAT: "Invalid diff format", INVALID_DIFF_OP: "Unsupported operation provided into diff object" } }; });
var g = D((Z, b) => { var d = e => t => t instanceof e, j = e => typeof e == "number", v = e => typeof e == "boolean", P = e => typeof e == "string", _ = d(Date), M = e => typeof e > "u", m = e => e === null, h = d(Array), J = d(Map), k = d(Set), O = e => Object.prototype.toString.call(e) === "[object Object]", V = () => { }, $ = (e, t) => e.getTime() === t.getTime(); function q(e, t = [], n, r) { if (!h(t))
    throw new Error(`Diff path: "${t}" is not valid`); let { length: i } = t; if (i === 0)
    return n; let o = e; for (let a = 0; a < i; a += 1) {
    let f = t[a];
    if (o) {
        if (f == null)
            throw new Error(`Invalid path: "${t}" for object: ${JSON.stringify(e, null, 2)}`);
    }
    else
        throw new Error(`Invalid path: "${t}" for object: ${JSON.stringify(e, null, 2)}`);
    a !== i - 1 ? (o = o[f], r && r(o)) : o[f] = n;
} return e; } function Y(e, t) { let n = t || []; if (n.length === 0)
    return; let r = e, { length: i } = n; for (let o = 0; o < i; o += 1)
    if (o !== i - 1) {
        if (!r[n[o]])
            throw new Error(`Invalid path: "${t}" for object: ${JSON.stringify(e, null, 2)}`);
        r = r[n[o]];
    }
    else if (O(r))
        delete r[n[o]];
    else {
        let a = parseInt(n[o], 10);
        for (; r.length > a;)
            r.pop();
    } return e; } b.exports = { isNumber: j, isBoolean: v, isString: P, isDate: _, isUndefined: M, isNull: m, isArray: h, isMap: J, isSet: k, isIterableObject: O, noop: V, areDatesEqual: $, setValueByPath: q, deleteValueByPath: Y }; });
var W = D((x, U) => { var { types: s, iterableTypes: C, errors: B } = y(), l = g(), F = { [s.NUMBER]: l.isNumber, [s.BOOLEAN]: l.isBoolean, [s.STRING]: l.isString, [s.DATE]: l.isDate, [s.UNDEFINED]: l.isUndefined, [s.NULL]: l.isNull, [s.ARRAY]: l.isArray, [s.MAP]: l.isMap, [s.SET]: l.isSet, [s.ITERABLE_OBJECT]: l.isIterableObject }, R = { [s.DATE]: l.areDatesEqual }; function w(e) { let t = Object.keys(F), n = s.DEFAULT; for (let r = 0; r < t.length; r += 1)
    if (F[t[r]](e)) {
        n = t[r];
        break;
    } return n; } function G(e, t) { return e === t && C.indexOf(e) >= 0; } function H(e, t, n, r) { return n !== r ? !1 : R[n] ? R[n](e, t) : e === t; } function K(e, t, n, r) { let i; return n === s.UNDEFINED && r !== s.UNDEFINED ? i = "add" : n !== s.UNDEFINED && r === s.UNDEFINED ? i = "delete" : H(e, t, n, r) ? l.noop() : i = "update", i; } function z(e, t, n) { if (n === s.ARRAY) {
    let r = e.length > t.length ? new Array(e.length) : new Array(t.length);
    return r.fill(0), new Set(r.map((i, o) => o));
} return new Set(Object.keys(e).concat(Object.keys(t))); } function A(e, t, n, r, i) { let o = { op: n, path: r }; return (n === "add" || n === "update") && (o.val = t), i && n !== "add" && (o.oldVal = e), o; } function S(e, t, n, r, i) { let o = w(e), a = w(t), f = r || [], u = i || []; if (G(o, a)) {
    let E = z(e, t, o).values(), { value: c, done: N } = E.next();
    for (; !N;) {
        Object.prototype.hasOwnProperty.call(e, c) ? Object.prototype.hasOwnProperty.call(t, c) ? S(e[c], t[c], n, f.concat(c), u) : u.push(A(e[c], t[c], "delete", f.concat(c), n)) : u.push(A(e[c], t[c], "add", f.concat(c), n));
        let I = E.next();
        c = I.value, N = I.done;
    }
}
else {
    let E = K(e, t, o, a);
    E != null && u.push(A(e, t, E, r, n));
} return u; } var L = { add: l.setValueByPath, update: l.setValueByPath, delete: l.deleteValueByPath }; function Q(e, t, n) { if (!(t instanceof Array))
    throw new Error(B.INVALID_DIFF_FORMAT); let r = e; return t.forEach(i => { let { op: o, val: a, path: f } = i; if (!L[o])
    throw new Error(B.INVALID_DIFF_OP); r = L[o](r, f, a, n); }), r; } U.exports = { getDiff(e, t, n = !1) { return S(e, t, n); }, applyDiff(e, t, n) { return Q(e, t, n); } }; });
export default W();
