import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import fs from "fs";
import path from "path";
import apiSidebar from "./docs/api/sidebar"; // adjust if needed

function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function reorderSidebar(items) {
  const order = ["Smart Actions", "Core Services", "Power Tools"];

  return items.sort((a, b) => {
    const aIndex = order.indexOf(a.label);
    const bIndex = order.indexOf(b.label);
    return aIndex - bIndex;
  });
}

function preprocessSidebar(items: any[], basePath = "docs"): any[] {
  var reordered = reorderSidebar(items);
  return reordered
    .filter((item) => !(item.type === "doc" && item.id.endsWith("freepower-api")))
    .map((item) => {
      if (item.type === "category") {
        const labelSlug = item.label.toLowerCase().replace(/\s+/g, "-");
        const docId = `api/categories/${labelSlug}`;
        const filePath = path.join(basePath, "api", "categories", `${labelSlug}.md`);

        const indexExists = fs.existsSync(filePath);

        return {
          ...item,
          // collapsed: false,
          collapsible: false,
          ...(indexExists && { link: { type: "doc", id: docId } }),
          items: preprocessSidebar(item.items, basePath),
        };
      }
      return item;
    });
}

const sidebars: SidebarsConfig = {
  docs: [
    "landing",
    // "auth-and-environments",
    {
      type: "category",
      label: "API",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "api/index"
      },
      items: preprocessSidebar(apiSidebar),
    },
  ],
};

export default sidebars;