# Azure Cloud Engineering Essentials

From Local Application to Production-Style Azure Workload

This is a hands-on Azure cloud engineering course that follows one workload from local development through progressively more realistic Azure architecture and operations.

## Why it exists

Many cloud tutorials teach isolated services or certification terminology. This project teaches cloud concepts through an accumulating practical system. The method is: **build it → understand it → secure it → automate it → observe it → break it → recover it → evaluate it**.

## Current state

- The complete course structure, navigation, and ten-layer/98-session map exist.
- Sessions 1–3 are initially developed.
- Sessions 4–98 are structured planning pages, not fabricated lessons.
- The author is personally walking through, validating, correcting, and improving the material.
- The course is not completely validated. See [docs/VALIDATION.md](docs/VALIDATION.md).

## Intended audience

Experienced application developers who want a structured, practical introduction to cloud engineering with Azure. Basic C#, web application, and Git familiarity is assumed.

## Repository structure

- `tools/`, `public/`: static course generator and visual system
- `src/`, `tests/CloudJourney.Tests/`: continuing ASP.NET Core workload and tests
- `infrastructure/`: Bicep and safe parameter examples
- `scripts/`: setup, deploy, verification, and guarded cleanup
- `labs/`: lab support added as sessions are validated
- `architecture/`: decisions and progressive architecture record
- `course-status.json`: machine-readable session state
- `.github/`: Pages publishing and contribution templates

## Status legend

- **Planned**: purpose, objectives, dependencies, and intended outcome exist.
- **Drafted**: substantive text exists but remains under review.
- **Implemented**: lesson, examples, and supporting files exist.
- **Validated**: relevant commands and builds succeeded in a recorded environment.
- **Personally completed**: author completed the learner journey end to end.
- **Published**: lesson is on the public course site.

These states are independent. Implemented does not mean validated.

## Prerequisites

PowerShell 7, Git, Node.js 22 or newer, npm, .NET 8 SDK, Azure CLI, and an Azure account for Session 3 onward.

## Run locally

```powershell
git clone <repository-url>
Set-Location azure-cloud-engineering-essentials
npm ci
npm run dev
```

Open `http://localhost:4173`. Build and check documentation with `npm run check`.

Run the continuing workload:

```powershell
dotnet restore
dotnet test
dotnet run --project .\src\CloudJourney.Web
```

Use the URL printed by .NET and verify `/health`.

## Publish with GitHub Pages

The included workflow builds `dist/` and deploys it. After creating a GitHub repository yourself, push `main`, then select **GitHub Actions** as the Pages source in repository settings. No remote or publication is created by this scaffold.

## Costs and safety

Azure resources may incur charges. Learners are responsible for reviewing costs, confirming tenant/subscription/resource-group scope, and running cleanup. Guarded scripts refuse mismatched subscriptions, unexpected names, and untagged deletion targets, but always inspect the command and target yourself.

Never commit credentials, tenant IDs, subscription IDs, deployment outputs, or local environment files.

## AI disclosure

Artificial intelligence tools were used to help organize the curriculum, draft explanations, create initial code and documentation, and assist with review. The course direction is based on the author’s professional software-development and DevOps experience, along with an extended process of discussing, refining, and connecting practical cloud-engineering concepts. AI-generated output is not assumed correct. The author is personally working through the labs, testing commands, reconciling the code with the documentation, and revising the material as the course develops.

## Technical sources

Developed sessions cite Microsoft Learn and official Azure documentation. Large passages are not copied. Course conventions, teaching simplifications, and unvalidated future plans are identified as such.
