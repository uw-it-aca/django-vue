import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it, vi } from "vitest";
import { ref } from "vue";

// Mock the composable
vi.mock("@/composables/mouse", () => ({
  useMouse: () => ({
    x: ref(123),
    y: ref(456),
  }),
}));

import PagesCustomize from "@/pages/customize.vue";

describe("PagesCustomize", () => {
  const pinia = createPinia();

  it("renders the page", () => {
    const wrapper = mount(PagesCustomize, {
      global: {
        plugins: [pinia],
        provide: {
          mq: {
            current: "lg",
          },
        },
      },
    });

    // Check page title
    expect(wrapper.html()).toContain("Customizing your app");

    // Check composable output
    expect(wrapper.html()).toContain("Mouse position is at: 123, 456");

    // Check util output
    expect(wrapper.html()).toContain("2065559876 formatted to (206) 555-9876");

    // Check for hello-world component
    expect(wrapper.findComponent({ name: "HelloWorld" }).exists()).toBe(true);

    // Check for injected mq value
    expect(wrapper.html()).toContain("lg");
  });
});
