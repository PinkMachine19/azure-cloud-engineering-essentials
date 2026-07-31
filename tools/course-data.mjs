export const layers = [
  ['Cloud foundations', ['Course orientation and the system we will build','Cloud responsibility: on-premises, IaaS, PaaS, and SaaS','How Azure organizes resources','Regions, availability zones, resilience, scalability, and elasticity','Cost fundamentals, budgets, and cleanup discipline']],
  ['Compute', ['Run the application locally and establish the baseline','Deploy the application to an Azure virtual machine','Host the .NET application with IIS on the VM','Measure the management burden introduced by IaaS','Deploy the same application to Azure App Service','Compare VM hosting with PaaS hosting','Scale up, scale out, health checks, and deployment slots','Containerize the application','Deploy with Azure Container Apps','Place AKS in the compute decision map','Add an Azure Functions background task','Choose a compute model for the workload']],
  ['Networking', ['Follow a request from the user to the application','IP addresses, ports, protocols, and traffic flow','Azure virtual networks and address spaces','Subnets and workload separation','Network Security Groups','Routes and route tables','Azure DNS and name resolution','Public endpoints versus private connectivity','Service endpoints','Private endpoints and Azure Private Link','VNet integration for App Service','VNet peering','Load Balancer, Application Gateway, and Azure Front Door','Web Application Firewall','VPN, hybrid connectivity, and ExpressRoute foundations','Diagnose a broken network path']],
  ['Data and storage', ['Storage accounts and storage architecture','Blob, Files, Queues, Tables, and managed disks','Storage redundancy and access tiers','Add Blob Storage to the application','Add Azure SQL Database','Managed database versus a database hosted on a VM','Backups, retention, point-in-time restore, and recovery','Secure database and storage connectivity']],
  ['Identity, access, and secrets', ['Microsoft Entra ID foundations','Authentication versus authorization','Azure role-based access control','Users, groups, service principals, and workload identities','Least privilege in practice','Azure Key Vault','Managed identities','Replace a connection-string secret with managed identity','Certificates and environment-specific configuration']],
  ['Observability and operations', ['Azure Monitor','Application Insights','Log Analytics','Metrics, logs, traces, and events','Correlation IDs and distributed request tracing','Alerts, dashboards, and action groups','Health checks and availability tests','Basic KQL','Introduce and diagnose an application failure','Introduce and diagnose an infrastructure failure','Operational runbooks and incident response']],
  ['Automation and infrastructure as code', ['Azure CLI fundamentals','Idempotence and repeatability','Bicep fundamentals','Parameters, modules, outputs, and dependencies','Recreate the course environment with Bicep','Development, test, and production configuration','CI/CD deployment','Deployment validation and rollback','Infrastructure drift and configuration consistency']],
  ['Governance, security, and cost', ['Tags and naming conventions','Resource locks','Azure Policy','Defender for Cloud','Security posture and audit visibility','Budgets and cost alerts','Rightsizing and removing waste','Quotas, limits, and capacity','Shared responsibility revisited','Threat-model the completed workload']],
  ['Reliability and recovery', ['High availability versus disaster recovery','Redundancy and fault domains','Retry, timeout, and circuit-breaker concepts','Autoscaling','Backup and restore','Recovery point and recovery time objectives','Regional failure and failover concepts','Conduct a recovery exercise','Confirm recovery instead of assuming it works']],
  ['Well-Architected review', ['Introduction to the Azure Well-Architected Framework','Reliability review','Security review','Cost Optimization review','Operational Excellence review','Performance Efficiency review','Tradeoffs among the five pillars','Final architecture review','Final capstone and cleanup']]
];

let id = 0;
export const sessions = layers.flatMap(([layer, titles], layerIndex) => titles.map((title, index) => ({
  id: ++id, layer: layerIndex + 1, layerTitle: layer, title, indexInLayer: index + 1,
  status: id <= 3 ? 'implemented' : 'planned',
  technicalValidation: id <= 2 ? 'partially-validated' : 'not-validated',
  personallyCompleted: false, published: false
})));

export const statusDefinitions = {
  planned: 'Purpose, objectives, dependencies, and intended lab outcome exist.',
  drafted: 'Substantive lesson text exists but is still under review.',
  implemented: 'The lesson, examples, and supporting files are present.',
  validated: 'Relevant commands and builds succeeded in a recorded environment.',
  'personally-completed': 'The author completed the learner journey end to end.',
  published: 'The lesson is available on the public course site.'
};

export const refs = {
  s1: [
    ['Install .NET on Windows','https://learn.microsoft.com/dotnet/core/install/windows'],
    ['Azure CLI installation','https://learn.microsoft.com/cli/azure/install-azure-cli-windows'],
    ['Azure cost management documentation','https://learn.microsoft.com/azure/cost-management-billing/']
  ],
  s2: [
    ['Shared responsibility in the cloud','https://learn.microsoft.com/azure/security/fundamentals/shared-responsibility'],
    ['Cloud computing service models','https://learn.microsoft.com/training/modules/describe-cloud-service-types/']
  ],
  s3: [
    ['Azure fundamental concepts','https://learn.microsoft.com/azure/cloud-adoption-framework/ready/considerations/fundamental-concepts'],
    ['Manage Azure subscriptions with Azure CLI','https://learn.microsoft.com/cli/azure/manage-azure-subscriptions-azure-cli'],
    ['Manage resource groups with Azure CLI','https://learn.microsoft.com/azure/azure-resource-manager/management/manage-resource-groups-cli'],
    ['Tag resources with Azure CLI','https://learn.microsoft.com/azure/azure-resource-manager/management/tag-resources-cli']
  ]
};
