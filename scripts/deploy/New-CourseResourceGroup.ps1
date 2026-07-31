[CmdletBinding(SupportsShouldProcess)] param([Parameter(Mandatory)][guid]$SubscriptionId,[Parameter(Mandatory)][ValidatePattern('^rg-ace-[a-z0-9-]+$')][string]$ResourceGroupName,[Parameter(Mandatory)][string]$Location,[Parameter(Mandatory)][ValidatePattern('^[a-zA-Z0-9._-]+$')][string]$Owner)
$ErrorActionPreference='Stop'
if (-not (Get-Command az -ErrorAction SilentlyContinue)) { throw 'Azure CLI is required.' }
$active=az account show --query id -o tsv
if ($LASTEXITCODE -ne 0 -or $active -ne $SubscriptionId.ToString()) { throw "Active subscription does not match $SubscriptionId." }
if ((az group exists --name $ResourceGroupName) -eq 'true') { throw "Resource group already exists; refusing to reuse $ResourceGroupName." }
if ($PSCmdlet.ShouldProcess("subscription $SubscriptionId / $ResourceGroupName",'Create tagged resource group')) { az group create --name $ResourceGroupName --location $Location --tags course=azure-cloud-engineering-essentials environment=learning owner=$Owner --output table; if ($LASTEXITCODE -ne 0) { throw 'Creation failed.' } }
