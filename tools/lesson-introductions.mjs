const introductions = {
  1: {
    why: 'Cloud is easier to reason about when product names are connected to familiar computing needs.',
    covers: 'Use the five-part systems model, identify six foundational cloud jobs, and compare ordinary and cloud versions of five scenarios.',
    materials: 'Conceptual explanations, monochrome diagrams, ordinary/cloud mappings, and short knowledge checks. No installation or deployment is required.',
    route: 'Read the model and cloud overview first. Then work through one scenario at a time; each takeaway is a natural stopping point. Finish with the comparison and knowledge checks.',
    done: 'Explain an ordinary system and its cloud equivalent using components, state, transformation, exchange, and policies. Identify what moved to the provider and which responsibilities remain with the application team.'
  },
  2: {
    why: 'A running application gives cloud concepts a concrete purpose and exposes what local success cannot tell you about production.',
    covers: 'Meet the continuing workload, find its code and supporting files, and follow the local build, test, and health-check walkthrough.',
    materials: 'Repository examples, local .NET commands, verification steps, and a knowledge check. This lesson does not deploy Azure resources.',
    route: 'Start with the system and repository map, then complete one command block at a time. Verify its result before continuing. Stop the local application when you finish.',
    done: 'Locate the workload and its supporting files, explain the local architecture, and record the build, test, and health-check results. If a check fails, record the blocker rather than treating the lab as complete.'
  },
  3: {
    why: 'Choosing a hosting model means deciding which parts of the stack your team will operate.',
    covers: 'Compare on-premises, IaaS, PaaS, and SaaS responsibilities; distinguish IIS from IaaS; inspect the workload’s runtime assumptions.',
    materials: 'A responsibility diagram, a prediction exercise, local inspection commands, and a knowledge check. No cloud deployment is required.',
    route: 'Read the responsibility comparison, pause after the prediction, then inspect the project and answer the knowledge check. Each heading separates a distinct idea.',
    done: 'Explain who operates the host, runtime, application, and data in the models discussed, and why IIS is software while IaaS describes a responsibility boundary.'
  },
  4: {
    why: 'Before changing cloud resources, you need to know which identity, subscription, and lifecycle boundary your commands will affect.',
    covers: 'Understand the Azure resource hierarchy, select an explicit account context, and follow the guarded resource-group creation, verification, and cleanup walkthrough.',
    materials: 'A hierarchy diagram, Azure CLI commands, repository scripts, troubleshooting notes, and a knowledge check. The Azure lab remains unvalidated in the recorded authoring environment.',
    route: 'Learn the hierarchy before starting the lab. Work through the command blocks in order and verify each result. If you pause after creating resources, record their scope and cleanup status; a reading break does not stop charges.',
    done: 'Explain the resource hierarchy and, if you ran the lab, verify the intended group and its cleanup. Record any unexecuted steps or failures rather than claiming lab completion.'
  }
};
const escape = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function introduceLesson(session, article) {
  const intro = introductions[session.id];
  const planned = !intro;
  const why = intro?.why ?? `This planned topic, “${escape(session.title)}”, belongs to the ${escape(session.layerTitle.toLowerCase())} part of the continuing workload journey.`;
  const covers = intro?.covers ?? 'Review the intended purpose, learning objectives, prerequisites, and expected lab outcome. The teaching walkthrough and runnable exercise have not been authored yet.';
  const materials = intro?.materials ?? 'An authoring outline and planning notes. This page is not a completed or validated lesson.';
  const sources = planned
    ? 'This is an AI-assisted curriculum outline shaped by the author’s engineering experience. Topic-specific technical sources and experiments must be added and checked before the lesson is developed.'
    : 'The course combines the author’s software-development and DevOps experience with AI-assisted organization and drafting. The systems framing and course examples are teaching material; technical references are linked in <a href="#lesson-sources">Sources</a>. Linked documentation does not validate a lab: the <a href="../../status/index.html">course status</a> and <a href="https://github.com/PinkMachine19/azure-cloud-engineering-essentials/blob/main/docs/VALIDATION.md">validation record</a> distinguish authored material from executed checks.';
  const route = intro?.route ?? 'Read the purpose and objectives, then the expected outcome and prerequisites. Stop at the end of the outline; there is no learner lab to complete on this page yet.';
  const done = intro?.done ?? 'You have reviewed the intended scope and prerequisites. That completes this planning-page preview, not the future lesson or lab.';
  const words = article.replace(/<[^>]*>/g, ' ').trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  const estimate = planned ? `${minutes}–${minutes + 1} minutes to preview this outline; no lab estimate yet.` : `${minutes}–${minutes + Math.max(2, Math.ceil(minutes / 3))} minutes for a first reading; diagrams, reflection, and commands take additional time. The session estimate below includes practice.`;
  const opening = `<aside class="callout lesson-introduction" aria-label="Before you begin">
<p><b>Why this matters:</b> ${why}</p>
<p><b>What ${planned ? 'this page previews' : 'you will learn'}:</b> ${covers}</p>
<p><b>Material and sources:</b> ${materials} ${sources}</p>
<p><b>How to work through it:</b> ${route} The headings divide the material into manageable sections so you can pause and return without losing your place.</p>
<p><b>Reading pace:</b> ${estimate}</p>
<p><b>Your finish line:</b> ${done} <a href="#lesson-checkpoint">Jump to the end-of-${planned ? 'preview' : 'lesson'} checkpoint</a>.</p>
</aside>`;
  article = article.replace(/(<p class="lede">[\s\S]*?<\/p>)/, '$1' + opening);
  if (!planned) article = article.replace(/<h2>(Technical references|Sources)<\/h2>/, '<h2 id="lesson-sources">$1</h2>');
  return article.replace('</article>', `<section class="callout" id="lesson-checkpoint" aria-label="Completion checkpoint"><h2>End of ${planned ? 'preview' : 'lesson'} — check your progress</h2><p>${done}</p><p>${planned ? 'Return when the full lesson is available, or use the navigation below to inspect the next planned topic.' : 'Use this as a stopping point. Note any unanswered question or unverified step before continuing with the navigation below.'}</p></section></article>`);
}
