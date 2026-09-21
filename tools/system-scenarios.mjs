// Each pair applies the same five lenses to one ordinary and one cloud system.
export const systemScenarios = [
  {
    title: 'Local machine',
    ordinary: 'A person edits a note and saves a file. No network, no cloud: one machine. Exchange can happen entirely inside that machine.',
    ordinaryFlow: ['Person', 'Application', 'OS / Filesystem', 'Local storage'],
    ordinaryModel: [
      'Application, OS/filesystem, and storage device.',
      'File contents, file metadata, and memory.',
      'The application creates or modifies data; the filesystem updates metadata.',
      'Read/write instructions and buffers between software and storage.',
      'File permissions, filesystem rules, and disk capacity.'
    ],
    cloud: 'The same workload now writes persistent state to a cloud storage service through its API, for example Azure Blob Storage. This illustrates an alternative implementation of a storage need; it is not a recommendation to replace every local-file operation.',
    cloudFlow: ['Application / workload', 'Network + storage API', 'Cloud-managed storage'],
    cloudModel: [
      'Application, network client, storage service, and provider-operated storage infrastructure.',
      'Application memory, stored objects, object metadata, and access configuration.',
      'The application creates or modifies data; the service validates and persists the write.',
      'Authenticated API requests carrying data and responses confirming success or failure.',
      'Access permissions, service limits, network availability, and storage durability requirements.'
    ],
    takeaway: 'Software still transforms state and writes it somewhere. Ownership and implementation changed, adding a network/API boundary and different storage semantics.'
  },
  {
    title: 'Ordinary networking',
    ordinary: 'Follow packets between hosts without introducing application behavior. This is one possible routed path: same-subnet traffic may avoid a router; NAT is optional. IPv6 uses neighbor discovery rather than ARP.',
    ordinaryFlow: ['Machine A', 'NIC', 'Switch / Wi-Fi', 'Router / Firewall', 'Network', 'Machine B'],
    ordinaryModel: [
      'Hosts, NICs, switches, routers, and firewalls.',
      'IP addresses, ARP/neighbor tables, routing tables, and firewall connection state.',
      'Encapsulation, forwarding, filtering, and NAT where configured.',
      'Frames on links and IP packets across networks.',
      'Routes, ACLs, VLANs, subnet boundaries, firewall rules, and MTU.'
    ],
    cloud: 'Extend the network to a cloud host over an internet, VPN, or private-circuit path, with appropriate routing and access. An Azure Virtual Network provides the virtual network boundary; an NSG supplies traffic-filtering rules. The provider operates the underlying fabric.',
    cloudFlow: ['On-premises device / network', 'Internet / VPN / private circuit', 'Cloud network / subnet', 'Cloud host / resource'],
    cloudModel: [
      'On-premises devices, connectivity endpoints, virtual network interfaces, and cloud hosts.',
      'Address assignments, route tables, traffic rules, and connection/tunnel state where applicable.',
      'Provider-fabric encapsulation and forwarding, filtering, and optional address translation.',
      'Packets crossing the selected connectivity path and provider network.',
      'Routes, subnet boundaries, NSG rules, MTU, and connectivity capacity.'
    ],
    takeaway: 'Cloud networking is still networking. The provider virtualizes and manages much of the physical infrastructure; addressing, routing, and traffic policy still govern reachability.'
  },
  {
    title: 'Transport / session',
    ordinary: 'Network finds the machine. Transport finds the process. Application defines the meaning. More precisely, routing reaches an interface or endpoint; the OS uses protocol, addresses, and ports to select a socket. An application session is distinct from a transport connection.',
    ordinaryFlow: ['Machine A', 'IP network', 'TCP / UDP + destination port', 'Socket / process on Machine B'],
    ordinaryModel: [
      'Hosts, transport stacks, and sockets used by processes.',
      'Ports and socket buffers; TCP connection, sequence, and timer state; application session state where used.',
      'Socket demultiplexing; TCP segmentation/reassembly, retransmission, and flow control. UDP does not provide TCP’s reliability or ordering.',
      'TCP segments or UDP datagrams carried in IP packets.',
      'Port bindings, protocol rules, timeouts, firewall rules, and connection limits.'
    ],
    cloud: 'Move the receiving process into cloud infrastructure. A public or private endpoint exposes the workload; a load balancer may forward traffic to it. A terminating application proxy instead creates a separate backend connection. These services do not replace TCP/UDP.',
    cloudFlow: ['Client host', 'IP network', 'Cloud endpoint', 'TCP / UDP + destination port', 'Socket / cloud-hosted process'],
    cloudModel: [
      'Client transport stack, cloud endpoint, optional intermediary, and workload sockets/processes.',
      'Socket and TCP connection state; endpoint configuration and intermediary flow mappings where present.',
      'Transport processing at endpoints, with forwarding or connection termination at an intermediary when configured.',
      'TCP segments or UDP datagrams; a terminating proxy exchanges data over separate transport connections.',
      'Exposed ports/protocols, network filtering, idle timeouts, and connection limits.'
    ],
    takeaway: 'Cloud changes where endpoints live and how they are exposed, not the existence of transport/session behavior. TCP remains a byte stream rather than application message boundaries.'
  },
  {
    title: 'Application runtime',
    ordinary: 'Now add the application layer. An application on an organization-operated server interprets a request, validates it, reads or updates data, and returns a result. The response arrow below represents a return to the client, not a new infrastructure layer.',
    ordinaryFlow: ['User device', 'Network', 'Destination machine', 'Transport / port', 'Application', 'State / data', 'Response to user'],
    ordinaryModel: [
      'Client, server, application process, and database/storage.',
      'Memory, application session state, files, and records.',
      'Business logic, computation, validation, and data updates.',
      'Requests, responses, messages, and events.',
      'Authentication, authorization, validation, protocols, timeouts, and reliability requirements.'
    ],
    cloud: 'Host the same application on a cloud VM or a managed platform such as App Service, and use a managed database such as Azure SQL. The team still owns application correctness and data-access decisions; the service choice changes how much of the runtime it operates.',
    cloudFlow: ['Client', 'Cloud edge / network', 'Cloud-hosted application', 'Managed data service', 'Response to client'],
    cloudModel: [
      'Client, cloud ingress, application runtime, and managed data service.',
      'Process memory, application sessions, database records, and runtime configuration.',
      'The same business logic and computation, plus managed query/storage processing.',
      'Application requests/responses and database calls, messages, or events.',
      'Identity and access policy, validation, timeouts, service limits, and reliability requirements.'
    ],
    takeaway: 'The application still processes input, transforms state, communicates, and obeys rules. Cloud changes hosting and management, including persistence, scaling, and failure constraints.'
  },
  {
    title: 'Bootstrap / deployment',
    ordinary: 'A repository and deployment tools create the system that will later serve users. Build an artifact, transfer it to an organization-operated host, configure it, and start the application.',
    ordinaryFlow: ['Source / config', 'Build / deployment tooling', 'Target machine / environment', 'Application starts'],
    ordinaryModel: [
      'Repository, build server, deployment tool, and host.',
      'Source code, artifacts, configuration, and deployment state.',
      'Compile, package, configure, install, and start.',
      'Files, commands, API calls, and secrets or secret references through authorized channels.',
      'Permissions, deployment rules, environment limits, and version compatibility.'
    ],
    cloud: 'A CI/CD pipeline calls cloud control-plane APIs to create or configure infrastructure and deploy the artifact. For example, GitHub Actions can submit Bicep-defined resources through Azure Resource Manager. An accepted deployment request still requires deployment-state and runtime-health verification.',
    cloudFlow: ['Source repo', 'CI/CD pipeline', 'Cloud control plane / API', 'Infrastructure / runtime', 'Application starts'],
    cloudModel: [
      'Repository, pipeline runner, cloud control plane, and target runtime.',
      'Source, artifacts, configuration, desired resource state, and observed deployment state.',
      'Build, package, provision, configure, and reconcile or start the runtime.',
      'Authenticated API calls, artifacts, deployment declarations, and secret references.',
      'Deployment identity, permissions, deployment rules, quotas, and environment limits.'
    ],
    takeaway: 'Bootstrap is inside the same model: components exchange instructions, artifacts, and state under rules to create or configure other components. Cloud adds provider control planes and changes the managed boundary.'
  }
];
