import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "freepower-api",
    },
    {
      type: "category",
      label: "Freepower.Api",
      items: [
        {
          type: "doc",
          id: "find-icp-by-address",
          label: "FindIcpByAddress",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "recommend-plans-for-icp",
          label: "RecommendPlansForIcp",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "recommend-plans-for-power-bill",
          label: "RecommendPlansForPowerBill",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "recommend-plans-for-what-you-tell-me",
          label: "RecommendPlansForWhatYouTellMe",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-plans-for-icp",
          label: "GetPlansForIcp",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "parse-power-bill",
          label: "ParsePowerBill",
          className: "api-method post",
        },
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
