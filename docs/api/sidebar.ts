import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/freepower-api",
    },
    {
      type: "category",
      label: "Core Services",
      items: [
        {
          type: "doc",
          id: "api/get-all-plans-available-for-icp",
          label: "Get all plans available for icp",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/parse-power-bill",
          label: "Parse power bill",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/address-search-validator",
          label: "Address search & validator",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/find-icp-for-address",
          label: "Find ICP for address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-icp-details",
          label: "Get ICP details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-free-powers-privacy-policy",
          label: "Get Free Power’s Privacy Policy",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Power Tools",
      items: [
        {
          type: "doc",
          id: "api/generate-usage-estimation-for-a-household",
          label: "Generate usage estimation for a household",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/estimate-power-costs-for-a-specific-icp",
          label: "Estimate power costs for a specific ICP",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/estimate-power-costs-for-custom-or-unofficial-plans",
          label: "Estimate power costs for custom or unofficial plans",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Smart Actions",
      items: [
        {
          type: "doc",
          id: "api/find-icp-by-address",
          label: "Find ICP by address",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/recommend-best-plans-for-icp",
          label: "Recommend best plans for Icp",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/recommend-best-plans-for-power-bill",
          label: "Recommend best plans for power bill",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/recommend-best-plans-for-what-you-tell-me",
          label: "Recommend best plans for what you tell me",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
