# The Funniest Out-of-Office

[![make.fun](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/ariffforai/funniest-out-of-office/rank.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/ariffforai/funniest-out-of-office/reward.svg)](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf)

Entry for [The Funniest Out-of-Office](https://make.fun/c/u-kreutzx-the-funniest-out-of-office-054815cf) on make.fun — one line of an out-of-office auto-reply, the funniest I could make it, in 140 characters or fewer.

## The line

> I'm out of office until Monday. I left my laptop at home on purpose — it knows what it did.

91 characters, one line. A reply a real person would actually set — and the laugh lands in the last clause, where the laptop, not the person, is the one being punished.

## How it works

`main.ts` (Node.js 22, standard library only, deterministic) writes the line to `/output/entry.txt`, with gate pre-checks (1–140 characters, not only whitespace, single line) and read-back verification (byte-for-byte equality, re-checked char count).

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
