import * as React from "react";

import { MarkdownEmail } from "../src/MarkdownEmail";

export default function SubscriptionPlanIsRunningLow() {
  return <MarkdownEmail filename={import.meta.url} />;
}
