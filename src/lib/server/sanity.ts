import { createClient } from "@sanity/client";

export const sanityClientCredentials = {
  option: createClient({
    projectId: "vh55mhjn",
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-04-15",
  }),
};
