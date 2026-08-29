# AI Testing — Agent Doctrine

## What this repo is
AI system testing framework: LLM output evaluation, adversarial testing, regression suites, and evals-as-code.
By Cherry Shanaley (Chan), AI Solutions Engineer.

## Tech stack
- TypeScript strict, Vitest, OpenAI evals patterns, custom eval harness

## Coding rules
- All evals are deterministic — use fixed seeds and temperature=0 for testable outputs
- Eval cases in `cases/` as JSON — input, expected output schema, pass criteria
- Evaluators in `lib/evaluators/` — each implements `Evaluator<T>` interface
- Never assert exact LLM output strings — assert structural/semantic properties
- Regression suite in `regression/` — runs automatically on CI
- Eval results saved to `eval-results/` with timestamp — never overwrite previous runs

## Commands
```bash
npm install
npm run test            # unit tests
npm run eval            # run full eval suite
npm run eval:regression # regression only
```

## Do not
- Assert exact LLM output strings
- Use temperature > 0 in eval harness
- Overwrite previous eval results
