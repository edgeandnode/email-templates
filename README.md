# transactional email templates

## Workflow

1. Make changes to the `.md` files in `emails/` directory.
2. Run `pnpm install && pnpm export` to generate HTML files.
3. Upload the files `out/` directory to Campaign Monitor.

## What is this?

- Email templates are defined in the `.md` files in `emails/` directory.

- The subscriptions footer is defined in `src/subscriptions-footer.ts`.

- The global footer is defined in `src/footer.ts`.

- The `{{ wordsInCurlyBraces }}` are [Liquid] variables used by [Campaign Monitor].

- All `.tsx` files in the `emails/` at this point are the same and can be disregarded.
  - We use them to generate the HTML.
  - In the future, we can also build emails with custom designs.

[liquid]: https://shopify.github.io/liquid/basics/introduction/
[campaign monitor]: https://thegraph.createsend.com/overview/D24F7435362A3000
