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

const specialized = [
  ['AI / ML', 'Azure AI / Azure OpenAI / AWS Bedrock / SageMaker / GCP Vertex AI'],
  ['Analytics', 'Microsoft Fabric / Synapse / AWS Redshift / Athena / GCP BigQuery'],
  ['IoT', 'Azure IoT / AWS IoT / GCP partner/custom IoT services'],
  ['Search', 'Azure AI Search / Amazon OpenSearch / Vertex AI Search'],
  ['Media', 'provider services, partner services, or custom compute']
];
const children = entries => entries.map(([need, examples]) => `<li><span>${need}</span>${examples ? `<span class="tree-examples">(${examples})</span>` : ''}</li>`).join('');

export const cloudNeeds = `<section id="cloud-needs">
<h2>How Do You Wrap Your Head Around Cloud?</h2>
<p>Do not start with product names. Start with the few things every cloud must do:</p>
<ul><li>Run it</li><li>Store it</li><li>Connect it</li><li>Secure / control it</li><li>Observe / operate it</li><li>Deploy / bootstrap it</li></ul>
<figure class="cloud-needs-tree" aria-labelledby="cloud-needs-caption">
<div class="tree-root">CLOUD</div>
<p class="tree-layer">FOUNDATION — six core capabilities</p>
<ul>${jobs.map(([job, entries], i) => `<li><strong>${i + 1}. ${job}</strong><ul>${children(entries)}</ul></li>`).join('')}</ul>
<p class="tree-layer">BUILT ON THE FOUNDATION — higher-level capabilities</p>
<ul><li><strong>7. SPECIALIZED MANAGED SERVICES</strong><ul>${children(specialized)}</ul></li></ul>
<p>Specialized managed services are not a new set of physical fundamentals. They are higher-level capabilities built on top of the same underlying cloud primitives.</p>
<figcaption id="cloud-needs-caption">Branches 1–6 form the foundation. Branch 7 depends on them; it is not a seventh physical primitive.</figcaption>
</figure>
<h3>AI / ML still depends on:</h3>
<ul><li><b>Run it</b> — model training and inference</li><li><b>Store it</b> — models, embeddings, datasets, vector indexes</li><li><b>Connect it</b> — APIs and service endpoints</li><li><b>Secure / control it</b> — identities, permissions, keys, policies</li><li><b>Observe / operate it</b> — logs, metrics, tracing, safety/usage monitoring</li><li><b>Deploy / bootstrap it</b> — model deployment, configuration, provisioning</li></ul>
<p><b>The catalog grows upward, not downward.</b></p>
<figure class="cloud-needs-tree" aria-labelledby="cloud-hierarchy-caption">
<div class="tree-root">FOUNDATION</div>
<ul>${children([['Run it'], ['Store it'], ['Connect it'], ['Secure / control it'], ['Observe / operate it'], ['Deploy / bootstrap it']])}</ul>
<p>│<br>└── supports the capabilities built on top ↓</p>
<div class="tree-root">BUILT ON TOP</div>
<ul>${children([['AI / ML'], ['Analytics'], ['IoT'], ['Search'], ['Media'], ['other specialized managed services']])}</ul>
<figcaption id="cloud-hierarchy-caption">Specialized managed services are composed from and depend on the foundational cloud capabilities underneath them.</figcaption>
</figure>
<p>The product names change. The underlying needs do not. Every major cloud has to provide ways to run workloads, store state, connect systems, control access, operate the environment, and provision or deploy it.</p>
<p><b>When you encounter a new cloud service, ask which of these six jobs it is really doing.</b></p>
<p class="small">These are examples, not exact equivalents or exclusive categories. AKS, EKS, and GKE are managed Kubernetes offerings; containers can run in other ways too. Terraform works across providers. Some services cover more than one job.</p>
</section>`;
