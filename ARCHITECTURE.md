# Architecture

## Eval pipeline
Load cases from `cases/` → run LLM at temp=0 → apply evaluators → score → save to `eval-results/`.

## Evaluator types

| Type | What it checks |
|---|---|
| `SchemaEvaluator` | Output matches expected JSON schema |
| `SemanticEvaluator` | Cosine similarity to reference answer |
| `FactEvaluator` | Key facts present in output |
| `SafetyEvaluator` | No harmful/policy-violating content |
| `LatencyEvaluator` | Response time within budget |

## CI integration
Regression suite runs on every PR. A 5% drop in any evaluator pass rate fails the build.
