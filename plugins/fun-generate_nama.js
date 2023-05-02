function handler(m, { text }) {
  const teks = text || (m.quoted && m.quoted.text) || m.text;
  const alphabet = {
    a: "ka", b: "tu", c: "mi", d: "te", e: "ku", f: "lu", g: "ji", h: "ri", i: "ki",
    j: "zu", k: "me", l: "ta", m: "rin", n: "to", o: "mo", p: "no", q: "ke", r: "shi",
    s: "ari", t: "ci", u: "do", v: "ru", w: "mei", x: "na", y: "fu", z: "zi",
  };
  const namaninja = teks.replace(/[a-z]/gi, (v) => alphabet[v.toLowerCase()] || v);
  const result = `Namaninja: ${namaninja}`;
  m.reply(result);
}

handler.help = ["namaninja <teks>"];
handler.tags = ["fun"];
handler.command = /^(namaninja|namae)$/i;
handler.register = true;
handler.limit = 1;
export default handler;
