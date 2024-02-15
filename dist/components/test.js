import { T as u, x as m, n as b, t as c } from "../tailwind.element-CoQc3UIb.js";
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, a = (p, t, n, r) => {
  for (var e = r > 1 ? void 0 : r ? v(t, n) : t, o = p.length - 1, l; o >= 0; o--)
    (l = p[o]) && (e = (r ? l(t, n, e) : l(e)) || e);
  return r && e && f(t, n, e), e;
};
let s = class extends u() {
  constructor() {
    super(...arguments), this.name = "World";
  }
  render() {
    return m`
			<p>Hello, <b>${this.name}</b>!</p>
			<button
				class="bg-orange-200 text-green-200 p-2 rounded-full text-2xl"
			>
				Hello world!
			</button>
		`;
  }
};
a([
  b()
], s.prototype, "name", 2);
s = a([
  c("test-component")
], s);
export {
  s as TestComponent
};
