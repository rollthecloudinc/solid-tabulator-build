import { a as Z } from "@nf-internal/chunk-5F3OA6QR";
import { c as B, e as d } from "@nf-internal/chunk-FJYW2LMB";
var y = d(s => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    s.MAX_HASHABLE_LENGTH = s.INIT = s.KEY = s.DIGEST_LENGTH = s.BLOCK_SIZE = void 0;
    s.BLOCK_SIZE = 64;
    s.DIGEST_LENGTH = 32;
    s.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    s.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    s.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
});
var O = d(_ => {
    "use strict";
    Object.defineProperty(_, "__esModule", { value: !0 });
    _.RawSha256 = void 0;
    var h = y(), m = (function () { function i() { this.state = Int32Array.from(h.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return i.prototype.update = function (a) { if (this.finished)
        throw new Error("Attempted to update an already finished hash."); var r = 0, e = a.byteLength; if (this.bytesHashed += e, this.bytesHashed * 8 > h.MAX_HASHABLE_LENGTH)
        throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; e > 0;)
        this.buffer[this.bufferLength++] = a[r++], e--, this.bufferLength === h.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0); }, i.prototype.digest = function () { if (!this.finished) {
        var a = this.bytesHashed * 8, r = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), e = this.bufferLength;
        if (r.setUint8(this.bufferLength++, 128), e % h.BLOCK_SIZE >= h.BLOCK_SIZE - 8) {
            for (var t = this.bufferLength; t < h.BLOCK_SIZE; t++)
                r.setUint8(t, 0);
            this.hashBuffer(), this.bufferLength = 0;
        }
        for (var t = this.bufferLength; t < h.BLOCK_SIZE - 8; t++)
            r.setUint8(t, 0);
        r.setUint32(h.BLOCK_SIZE - 8, Math.floor(a / 4294967296), !0), r.setUint32(h.BLOCK_SIZE - 4, a), this.hashBuffer(), this.finished = !0;
    } for (var n = new Uint8Array(h.DIGEST_LENGTH), t = 0; t < 8; t++)
        n[t * 4] = this.state[t] >>> 24 & 255, n[t * 4 + 1] = this.state[t] >>> 16 & 255, n[t * 4 + 2] = this.state[t] >>> 8 & 255, n[t * 4 + 3] = this.state[t] >>> 0 & 255; return n; }, i.prototype.hashBuffer = function () { for (var a = this, r = a.buffer, e = a.state, t = e[0], n = e[1], o = e[2], L = e[3], x = e[4], u = e[5], b = e[6], S = e[7], f = 0; f < h.BLOCK_SIZE; f++) {
        if (f < 16)
            this.temp[f] = (r[f * 4] & 255) << 24 | (r[f * 4 + 1] & 255) << 16 | (r[f * 4 + 2] & 255) << 8 | r[f * 4 + 3] & 255;
        else {
            var c = this.temp[f - 2], l = (c >>> 17 | c << 15) ^ (c >>> 19 | c << 13) ^ c >>> 10;
            c = this.temp[f - 15];
            var C = (c >>> 7 | c << 25) ^ (c >>> 18 | c << 14) ^ c >>> 3;
            this.temp[f] = (l + this.temp[f - 7] | 0) + (C + this.temp[f - 16] | 0);
        }
        var w = (((x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7)) + (x & u ^ ~x & b) | 0) + (S + (h.KEY[f] + this.temp[f] | 0) | 0) | 0, T = ((t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)) + (t & n ^ t & o ^ n & o) | 0;
        S = b, b = u, u = x, x = L + w | 0, L = o, o = n, n = t, t = w + T | 0;
    } e[0] += t, e[1] += n, e[2] += o, e[3] += L, e[4] += x, e[5] += u, e[6] += b, e[7] += S; }, i; })();
    _.RawSha256 = m;
});
var K = d(p => {
    "use strict";
    Object.defineProperty(p, "__esModule", { value: !0 });
    p.Sha256 = void 0;
    var A = B("tslib"), v = y(), E = O(), I = Z(), H = (function () { function i(a) { if (this.hash = new E.RawSha256, a) {
        this.outer = new E.RawSha256;
        var r = U(a), e = new Uint8Array(v.BLOCK_SIZE);
        e.set(r);
        for (var t = 0; t < v.BLOCK_SIZE; t++)
            r[t] ^= 54, e[t] ^= 92;
        this.hash.update(r), this.outer.update(e);
        for (var t = 0; t < r.byteLength; t++)
            r[t] = 0;
    } } return i.prototype.update = function (a) { if (!((0, I.isEmptyData)(a) || this.error))
        try {
            this.hash.update((0, I.convertToBuffer)(a));
        }
        catch (r) {
            this.error = r;
        } }, i.prototype.digestSync = function () { if (this.error)
        throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, i.prototype.digest = function () { return (0, A.__awaiter)(this, void 0, void 0, function () { return (0, A.__generator)(this, function (a) { return [2, this.digestSync()]; }); }); }, i; })();
    p.Sha256 = H;
    function U(i) { var a = (0, I.convertToBuffer)(i); if (a.byteLength > v.BLOCK_SIZE) {
        var r = new E.RawSha256;
        r.update(a), a = r.digest();
    } var e = new Uint8Array(v.BLOCK_SIZE); return e.set(a), e; }
});
var M = d(g => {
    "use strict";
    Object.defineProperty(g, "__esModule", { value: !0 });
    var G = B("tslib");
    (0, G.__exportStar)(K(), g);
});
export { M as a };
