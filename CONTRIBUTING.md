# Contributing

Keep the course honest, reproducible, and connected to the evolving workload.

- Do not mark a command validated unless it was run successfully.
- Record validation date, operating system, PowerShell, Azure CLI, and .NET versions.
- Explain purpose, effect, verification, cleanup, and likely cost for commands that change Azure.
- Prefer Microsoft Learn and official Azure documentation for Azure facts.
- Never commit tenant IDs, subscription IDs, credentials, deployment outputs, or `.env` files.
- Update `course-status.json` and the relevant architecture decision when a session changes the system.

Run `npm run check` before proposing documentation changes and `dotnet test` when the .NET SDK is available.
