# DataMind AI — Week 01 wireframes and interface contract

## Delivered scope
Next.js App Router, TypeScript, Tailwind CSS. Twenty exported routes, grouped navigation, Basic/Advanced controls, five role previews, artifact header slots, accessible explicit state messages, and read-only researcher presentation.

## Layout wireframe
Desktop: 246px persistent sidebar → workspace selector → five navigation groups → mode switch → guide → role preview. Main: breadcrumb header → title and artifact badge → page content → footer.
Mobile: menu button opens the sidebar. Content uses one column; overview cards use two columns. Native links, buttons and selects support keyboard navigation with visible focus indicators.
Overview: introduction panel → four empty-state summary cards → workflow links and offline activity panel → decision trace link.
Other routes: heading and artifact badge → artifact search → explicit waiting-for-data state → contract/integration note. Search filters the current empty artifact collection and displays a matching empty-state message.

## Modes and permissions
Basic contains exactly the nine core pages listed below for every role. Advanced contains twenty pages for admin; role filtering may reduce this count. Role restriction takes precedence over mode restriction. An advanced-only route in Basic displays an explicit banner with a switch action. Restricted routes render a 403 card without loading their content.

The supplied playbook references a separate PDF role matrix that was not supplied. The following is provisional: all five roles may view general pages; Security Events is limited to reviewer/admin; Benchmarking and Ablation to researcher/admin. Researcher and viewer are read-only throughout; research pages are always read-only. Confirm this matrix and exact URLs with P1/P5; P4 is the assigned reviewer. The role selector is a UI preview, not authenticated authorization. API authorization is required before connecting sensitive data.

## Page inventory
| Group | Page | Route | Basic | Artifact contract | Roles |
|---|---|---|---|---|---|
| Analysis | Overview | /analysis/overview/ | Yes | ArtifactEnvelope | all five roles |
| Analysis | Data Quality | /analysis/data-quality/ | Yes | DataQualityReport | all five roles |
| Analysis | EDA | /analysis/eda/ | Yes | EDAReport | all five roles |
| Modelling | Models | /modelling/models/ | Yes | ModelReport | all five roles |
| Modelling | Model Comparison | /modelling/model-comparison/ | No | Pending backend contract confirmation | all five roles |
| Modelling | Predictions | /modelling/predictions/ | Yes | PredictionReport | all five roles |
| Trust | Explainability | /trust/explainability/ | Yes | Pending backend contract confirmation | all five roles |
| Trust | Counterfactual/What-if | /trust/what-if/ | No | Pending backend contract confirmation | all five roles |
| Trust | Fairness | /trust/fairness/ | No | Pending backend contract confirmation | all five roles |
| Trust | Uncertainty | /trust/uncertainty/ | No | Pending backend contract confirmation | all five roles |
| Control | Agent Activity | /control/agent-activity/ | Yes | Pending backend contract confirmation | all five roles |
| Control | Human Approval | /control/human-approval/ | Yes | HITLRequest | all five roles |
| Control | Decision Trace | /control/decision-trace/ | Yes | DecisionTrace | all five roles |
| Control | Security Events | /control/security-events/ | No | Pending backend contract confirmation | reviewer, admin |
| MLOps & Research | Experiments | /mlops/experiments/ | No | Pending backend contract confirmation | all five roles |
| MLOps & Research | Versioning | /mlops/versioning/ | No | Pending backend contract confirmation | all five roles |
| MLOps & Research | Monitoring | /mlops/monitoring/ | No | Pending backend contract confirmation | all five roles |
| MLOps & Research | Drift | /mlops/drift/ | No | Pending backend contract confirmation | all five roles |
| MLOps & Research | Benchmarking | /mlops/benchmarking/ | No | Pending backend contract confirmation | researcher, admin |
| MLOps & Research | Ablation | /mlops/ablation/ | No | Pending backend contract confirmation | researcher, admin |

## Evidence and visual conventions
No fabricated analytics, metrics, event streams or artifact identifiers. Summary values use an em dash until a real connection exists. Every container includes ArtifactBadge with optional artifactId and schemaVersion; missing evidence is labeled. Status always includes text or icon, never just color. Okabe–Ito blue, orange, teal, and purple tokens are included for future charts. The shell uses a muted green visual theme.

## Verification
From frontend/: npm install, npm test -- --run, npm run typecheck, npm run build. Node 20 LTS or a compatible newer runtime is required. Tests cover route uniqueness, all role/mode combinations, the exact nine pages, twenty admin pages, restriction precedence, researcher read-only, visible disabled/403 states and interactive mode/role changes.

## Integration limits
No authentication, backend fetching, live SSE, upload flow, model execution or generated research results are implemented in this week-one shell. The separate PDF and P1/P5 schemas were unavailable; unknown artifact mappings remain explicitly pending. A rendered 403 card is an interface state on static hosting; server HTTP authorization must be implemented with the API. No browser QA was available because the managed browser helper is absent.
