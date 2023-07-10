import * as React from "react";

import { MarkdownEmail } from "../src/MarkdownEmail";

export default function SubscriptionExpiresIn24Hours() {
  return <MarkdownEmail filename={import.meta.url} />;
}
