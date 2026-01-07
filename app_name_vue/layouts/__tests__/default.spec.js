import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import DefaultLayout from "@/layouts/default.vue";

describe("DefaultLayout", () => {
  it("renders the layout with page title", () => {
    const wrapper = mount(DefaultLayout, {
      props: {
        pageTitle: "Test Page",
      },
    });

    // Check app name
    expect(wrapper.text()).toContain("Django+Vue");

    // Check page title from prop
    expect(wrapper.find("h1").text()).toBe("Test Page");

    // Check document title
    expect(document.title).toBe("Test Page - Django+Vue");

    // Check footer year
    const currentYear = new Date().getFullYear();
    expect(wrapper.text()).toContain(
      `Copyright © ${currentYear} University of Washington`,
    );
  });

  it("renders content in slots", () => {
    const wrapper = mount(DefaultLayout, {
      props: {
        pageTitle: "Test Page",
      },
      slots: {
        title: "<h2>Custom Title</h2>",
        description: "<p>My Description</p>",
        content: "<div>My Content</div>",
      },
    });

    // check custom title
    expect(wrapper.find("h1").html()).toContain("<h2>Custom Title</h2>");

    // check description
    expect(wrapper.find("p").text()).toBe("My Description");

    // check content
    expect(wrapper.find('div[class="container-xl"]').html()).toContain(
      "<div>My Content</div>",
    );
  });
});
