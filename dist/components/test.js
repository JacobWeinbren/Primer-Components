import { T as u, x as m, n as b, t as c } from "../tailwind.element-irVIh4P3.js";
var f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, a = (p, t, o, r) => {
  for (var e = r > 1 ? void 0 : r ? v(t, o) : t, n = p.length - 1, l; n >= 0; n--)
    (l = p[n]) && (e = (r ? l(t, o, e) : l(e)) || e);
  return r && e && f(t, o, e), e;
};
let s = class extends u() {
  constructor() {
    super(...arguments), this.name = "World";
  }
  render() {
    return m`
			<p>
				Hello,
				<b>${this.name}</b>
				!
			</p>
			<button
				class="bg-orange-200 text-yellow-200 p-2 rounded-full text-2xl"
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
