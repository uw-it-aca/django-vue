import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import PagesHome from "@/pages/home.vue";

describe("PagesHome", () => {
  it("renders the page title", () => {
    const wrapper = mount(PagesHome);
    expect(wrapper.html()).toContain("Getting started");
  });

  it("renders the links", () => {
    const wrapper = mount(PagesHome);
    const links = wrapper.findAll("a");
    const hrefs = links.map((link) => link.attributes("href"));
    expect(hrefs).toContain("https://www.docker.com");
    expect(hrefs).toContain("https://nodejs.org/en");
    expect(hrefs).toContain("https://www.djangoproject.com/");
    expect(hrefs).toContain("https://vuejs.org/");
    expect(hrefs).toContain("https://test.solstice.uw.edu");
    expect(hrefs).toContain(
      "https://docs.djangoproject.com/en/5.2/topics/testing/tools/#testing-tools",
    );
    expect(hrefs).toContain("https://test-utils.vuejs.org/");
    expect(hrefs).toContain("https://vitest.dev/");
    expect(hrefs).toContain(
      "https://pycodestyle.pycqa.org/en/latest/index.html",
    );
    expect(hrefs).toContain(
      "https://black.readthedocs.io/en/stable/index.html",
    );
    expect(hrefs).toContain("https://eslint.vuejs.org/");
    expect(hrefs).toContain(
      "https://github.com/ota-meshi/stylelint-config-recommended-vue",
    );
    expect(hrefs).toContain("/customize");
  });
});
