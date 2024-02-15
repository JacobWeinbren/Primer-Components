import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

@customElement("test-component")
export class TestComponent extends TailwindElement() {
	@property()
	name?: string = "World";

	render() {
		return html`
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
}
