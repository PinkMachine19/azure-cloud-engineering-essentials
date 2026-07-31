[CmdletBinding(SupportsShouldProcess,ConfirmImpact='High')] param([Parameter(Mandatory)][guid]$SubscriptionId,[Parameter(Mandatory)][ValidatePattern('^rg-ace-[a-z0-9-]+$')][string]$ResourceGroupName)
$ErrorActionPreference='Stop'; $active=az account show --query id -o tsv
if ($LASTEXITCODE -ne 0 -or $active -ne $SubscriptionId.ToString()) { throw 'Active subscription mismatch.' }
$tag=az group show --name $ResourceGroupName --query "tags.course" -o tsv
if ($LASTEXITCODE -ne 0 -or $tag -ne 'azure-cloud-engineering-essentials') { throw 'Refusing cleanup: course tag mismatch.' }
Write-Warning "This permanently deletes $ResourceGroupName and every resource inside it."
$typed=Read-Host "Type the exact resource group name to continue"
if ($typed -cne $ResourceGroupName) { throw 'Confirmation did not match. Nothing deleted.' }
if ($PSCmdlet.ShouldProcess("subscription $SubscriptionId / $ResourceGroupName",'Delete resource group and all contents')) { az group delete --name $ResourceGroupName --yes; if ($LASTEXITCODE -ne 0) { throw 'Deletion request failed.' } }
