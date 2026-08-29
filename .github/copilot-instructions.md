# Copilot Instructions — AI Testing

## Always
- Use temperature=0 and fixed seed in eval harness
- Assert structural/semantic properties, not exact strings
- Save eval results to `eval-results/` with ISO timestamp
- Implement evaluators via `Evaluator<T>` interface

## Never
- Assert `response === 'exact string'`
- Overwrite previous eval result files
- Use non-deterministic settings in evals
