# Social Security Breakeven Calculator

A small, single-file web app for comparing when a later, bigger Social Security check
overtakes an earlier, smaller one — the "breakeven age" — in both nominal and
inflation-adjusted dollars.

**Live app:** https://bobbyinfj.github.io/social-security-breakeven-calculator/

## Not financial advice

This is a rough personal tool, not advice. It assumes flat benefits (no COLA) and
payments starting the month of the claim age, and — importantly — it has **no mortality
or life-expectancy modeling at all**. The "best" claiming age depends enormously on how
long you assume you'll live and on the inflation rate you pick; different assumptions can
point to very different answers. Use it to build intuition about the tradeoffs, not as a
final answer.

## Running it

No build step, no dependencies. Just open `index.html` in a browser, or serve the
directory with any static file server.

```
open index.html
```

## Using your own numbers

The published site ships with generic example numbers. Everything you enter in the
browser (birth date, benefit estimates, inflation rate) is edited live on the page and
saved only in your browser's `localStorage` — nothing is sent anywhere.

If you'd rather set your own defaults so the page opens pre-filled, copy
`config.example.js` to `config.js` (gitignored, never committed) and edit the values:

```
cp config.example.js config.js
```

## License

Do whatever you want with it.
