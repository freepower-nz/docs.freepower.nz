import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "freepower-api",
    },
    {
      type: "category",
      label: "Actions",
      items: [
        {
          type: "doc",
          id: "find-icp-by-address",
          label: "Find ICP by address",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "recommend-best-plans-for-icp",
          label: "Recommend best plans for Icp",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "recommend-best-plans-for-power-bill",
          label: "Recommend best plans for power bill",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "recommend-best-plans-for-what-you-tell-me",
          label: "Recommend best plans for what you tell me",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-all-plans-available-for-icp",
          label: "Get all plans available for icp",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "parse-power-bill",
          label: "Parse power bill",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "ICP",
      items: [
        {
          type: "doc",
          id: "find-icp-by-address",
          label: "Find ICP by address",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Power Bill",
      items: [
        {
          type: "doc",
          id: "recommend-best-plans-for-power-bill",
          label: "Recommend best plans for power bill",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Freepower.Api",
      items: [
        {
          type: "doc",
          id: "get-privacy-policy",
          label: "Get Free Power’s Privacy Policy",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "address-search",
          label: "AddressSearch",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "find-icp-for-given-address",
          label: "FindIcpForGivenAddress",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "get-icp-details",
          label: "GetIcpDetails",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "get-cost-estimations-for-icp-and-usage",
          label: "GetCostEstimationsForIcpAndUsage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-usage-estimation-for-household",
          label: "GetUsageEstimationForHousehold",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-cost-estimations-for-usage-and-plans",
          label: "GetCostEstimationsForUsageAndPlans",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
