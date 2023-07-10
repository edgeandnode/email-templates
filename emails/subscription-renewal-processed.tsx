import * as React from "react";

import { MarkdownEmail } from "../src/MarkdownEmail";

export default function SubscriptionRenewalProcessed() {
  return <MarkdownEmail filename={import.meta.url} />;
}
