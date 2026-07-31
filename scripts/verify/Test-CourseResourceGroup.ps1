[CmdletBinding()] param([Parameter(Mandatory)][guid]$SubscriptionId,[Parameter(Mandatory)][ValidatePattern('^rg-ace-[a-z0-9-]+$')][string]$ResourceGroupName)
$ErrorActionPreference='Stop'; $active=az account show --query id -o tsv
if ($LASTEXITCODE -ne 0 -or $active -ne $SubscriptionId.ToString()) { throw 'Active subscription mismatch.' }
$tag=az group show --name $ResourceGroupName --query "tags.course" -o tsv
if ($LASTEXITCODE -ne 0 -or $tag -ne 'azure-cloud-engineering-essentials') { throw 'Group missing or course tag mismatch.' }
az group show --name $ResourceGroupName --query "{name:name,location:location,tags:tags}" -o json
