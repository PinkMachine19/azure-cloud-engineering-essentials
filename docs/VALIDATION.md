# Validation record

Validation date: 2026-07-31  
Environment: Windows, PowerShell 5.1, Git 2.55.0, Node 24.18.0, npm 11.16.0, Azure CLI 2.88.0.

## Executed successfully

- Static site generation with `npm run build`.
- Documentation tests and internal-link checks with `npm test`.
- Azure CLI discovery with `az version`.
- PowerShell syntax parsing for repository scripts.
- Safe guard behavior for resource-group creation and cleanup scripts without changing Azure.

## Not executed

- `dotnet build`, `dotnet test`, and local application startup: the .NET SDK was not installed in the authoring environment.
- Azure sign-in, subscription selection, resource-group creation, tag mutation, or deletion: these require the learner's Azure account and could affect billable resources.
- GitHub Pages deployment: no remote repository or publication was authorized.
- Sessions 4–98 labs: planning only.

“Implemented” means the lesson or scaffold exists. It does not imply technical validation or personal completion.

## First-principles session insertion — 2026-09-21

- Environment: Windows, PowerShell 7, Node 24.18.0, npm 11.16.0, .NET SDK 10.0.302.
- `npm run check` passed: 99 generated sessions, manifest assertions, and all internal file links.
- Original 98 titles retain their order; original three authored lessons are unchanged apart from session numbering (now 2–4).
- Browser inspection confirmed existing styling and the new interactive knowledge check.
- `dotnet test` was attempted; the unchanged test project fails to compile with missing xUnit symbols (`IClassFixture`, `Fact`). Application build succeeded. No Azure operations were run.
- Earlier dated records above describe the pre-insertion numbering. New Session 1 is conceptual; planned labs are now Sessions 5–99.

## Paired ordinary/cloud walkthrough — 2026-09-21

- Reworked all five Session 1 scenarios into ordinary diagram/mapping, cloud diagram/mapping, and takeaway.
- Added ten plain monochrome ASCII diagrams, ten five-category mappings, and an ordinary/cloud comparison table.
- Browser inspection confirmed diagram rendering and semantic definition lists. Existing course navigation and global styling remain in place.
- `npm run check` passes; a focused content check confirms five scenario pairs and all ten complete mappings. No workload or Azure operations changed; the previously recorded .NET test compilation issue remains outside this content revision.
