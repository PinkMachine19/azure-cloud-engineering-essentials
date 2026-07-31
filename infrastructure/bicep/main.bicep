targetScope = 'resourceGroup'
@description('Deployment location; defaults to the resource group location.')
param location string = resourceGroup().location
@description('Tags applied to course resources.')
param tags object
// Session-specific modules will be added only when their labs are implemented and validated.
output deploymentScope string = resourceGroup().id
output selectedLocation string = location
