import { footer } from "./footer";

const markdown = `

If you have any questions or need help, please review the [The Graph’s Docs](https://thegraph.com/docs/en/), \
or contact us at [info@edgeandnode.com](mailto:info@edgeandnode.com).

${footer}

`;

export const subscriptionsFooter = [
  /<subscriptions-footer ?\/?>/,
  markdown.trim(),
] as const;
