import React from "react";
import { createComponent } from "@lit/react";
import { TestComponent } from "@/dist/components/test";

const HelloWorldStory = createComponent({
	react: React,
	tagName: "test-component",
	elementClass: TestComponent,
});

export default {
	title: "Example/HelloWorld",
};

export const Primary = () => <HelloWorldStory></HelloWorldStory>;
