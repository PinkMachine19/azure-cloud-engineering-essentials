const jobs = [
  ['RUN IT', [
    ['Virtual machines', 'Azure VM / AWS EC2 / GCP Compute Engine'],
    ['Serverless', 'Azure Functions / AWS Lambda / GCP Cloud Run functions'],
    ['Containers', 'AKS / EKS / GKE']
  ]],
  ['STORE IT', [
    ['Object storage', 'Azure Blob / AWS S3 / GCP Cloud Storage'],
    ['Block storage', 'Azure Managed Disks / AWS EBS / GCP Persistent Disk'],
    ['Databases', 'Azure SQL / AWS RDS / GCP Cloud SQL']
  ]],
  ['CONNECT IT', [
    ['Virtual networks', 'Azure VNet / AWS VPC / GCP VPC'],
    ['Subnets'], ['Routes'], ['DNS'], ['Load balancing'], ['VPN / private connectivity']
  ]],
  ['SECURE / CONTROL IT', [
    ['Identity and access', 'Microsoft Entra + Azure RBAC / AWS IAM / Google Cloud IAM'],
    ['Firewalls'], ['Secrets / keys'], ['Policies']
  ]],
  ['OBSERVE / OPERATE IT', [
    ['Metrics'], ['Logs'], ['Alerts'], ['Tracing'],
    ['Monitoring platforms', 'Azure Monitor / Amazon CloudWatch / Google Cloud Monitoring']
  ]],
  ['DEPLOY / BOOTSTRAP IT', [
    ['Infrastructure as code', 'Bicep/ARM / AWS CloudFormation / Terraform'],
    ['CI/CD'], ['Configuration'], ['Provisioning'], ['Control-plane APIs']
  ]]
];

export const cloudNeeds = `<section id="cloud-needs">
<h2>How Do You Wrap Your Head Around Cloud?</h2>
<p>Do not start with product names. Start with the few things every cloud must do:</p>
<ul><li>Run it</li><li>Store it</li><li>Connect it</li><li>Secure / control it</li><li>Observe / operate it</li><li>Deploy / bootstrap it</li></ul>
<figure class="cloud-needs-tree" aria-labelledby="cloud-needs-caption">
<div class="tree-root">CLOUD</div>
<ul>${jobs.map(([job, children], i) => `<li><strong>${i + 1}. ${job}</strong><ul>${children.map(([need, examples]) => `<li><span>${need}</span>${examples ? `<span class="tree-examples">(${examples})</span>` : ''}</li>`).join('')}</ul></li>`).join('')}</ul>
<figcaption id="cloud-needs-caption">Six core needs, with example implementations.</figcaption>
</figure>
<p>The product names change. The underlying needs do not. Every major cloud has to provide ways to run workloads, store state, connect systems, control access, operate the environment, and provision or deploy it.</p>
<p><b>When you encounter a new cloud service, ask which of these six jobs it is really doing.</b></p>
<p class="small">These are examples, not exact equivalents or exclusive categories. AKS, EKS, and GKE are managed Kubernetes offerings; containers can run in other ways too. Terraform works across providers. Some services cover more than one job.</p>
</section>`;
