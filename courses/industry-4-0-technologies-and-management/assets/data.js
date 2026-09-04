(function () {
  "use strict";
  window.BUSI4331 = {
    modules: [
      {
        key: "technologies", number: 1, name: "Technologies", color: "#e91c24",
        question: "How does an Industry 4.0 system turn physical events into data, insight, and action?",
        business: "Managers need to understand the whole chain—not to become hardware engineers, but to judge whether a connected solution can observe the right event, move trustworthy data, and support a useful decision.",
        classes: ["Class 1 · Industry 4.0 foundations", "Class 2 · Data science and analytics", "Class 3 · Cloud services and connected solutions", "Class 4 · Project checkpoint 1"],
        focus: "Internet of Things architecture · sensors and connectivity · cloud services · operational data · analytics · project opportunity scan",
        evidence: "Trace a business event from the physical world through sensing, transmission, storage, analysis, decision, and response; identify failure points and limits.",
        methods: ["Layered IoT architecture", "Data-to-decision chain", "Sensor and data-source mapping", "Analytics maturity", "Opportunity scan"],
        make: "A map of an Industry 4.0 opportunity in an assigned industry, including problems already addressed and one consequential unresolved gap.",
        carry: "The first checkpoint establishes the opportunity space that students will narrow into a specific problem and stakeholder in the applications stage.",
        verdict: "Connected technology creates value only when the data chain reaches a consequential decision."
      },
      {
        key: "applications", number: 2, name: "Applications", color: "#b8272f",
        question: "Where can connected sensing and analytics change operational performance?",
        business: "Healthcare, logistics, inventory, quality, safety, and security expose different operating conditions. Begin with the problem and context, then justify the technology and data needed.",
        classes: ["Class 5 · Healthcare", "Class 6 · Inventory and quality + checkpoint 2", "Class 7 · Plant safety and security"],
        focus: "Use-case diagnosis · stakeholder pains · sensing strategy · data collection · analytics and target insight · automated response · operational value",
        evidence: "Specify what must be observed, how it becomes usable data, which analysis answers the decision question, and who benefits or bears risk.",
        methods: ["Problem–stakeholder framing", "Sensing strategy", "Data pipeline mapping", "Problem–solution fit", "Value and risk analysis"],
        make: "A defended problem–solution fit connecting a precise pain to sensors, data, analytics, insight, decisions, automation, and stakeholder value.",
        carry: "The second checkpoint freezes the core problem and technical logic before the course adds business-model feasibility and strategic adoption.",
        verdict: "Start with a measurable operating pain; technology is the mechanism, not the question."
      },
      {
        key: "business", number: 3, name: "Business", color: "#4f5964",
        question: "Can a technically plausible Industry 4.0 solution create and capture durable business value?",
        business: "Analytics, business models, and two cases move the analysis beyond a demonstration: who receives value, who pays, what must change, and what can prevent adoption?",
        classes: ["Class 8 · Smart-supply-chain insight", "Class 9 · Business models + checkpoint 3", "Class 10 · Bossard AG case", "Class 11 · Coda Coffee and Bext360 case"],
        focus: "AI-supported insight · autonomous operations · stakeholder system · value proposition · revenue logic · strategy · adoption barriers · case comparison",
        evidence: "Show that data and analytics support a decision, that the decision improves a defined outcome, and that stakeholder and business logic can sustain implementation.",
        methods: ["Closed-loop decision design", "Business-model analysis", "SWOT analysis", "Adoption-barrier critique", "Case evidence"],
        make: "A solution design stating the unit of analysis, measurable pains, data and analytical logic, business model, weaknesses, barriers, and realistic workarounds.",
        carry: "The third checkpoint and cases supply the critique needed to integrate the final twenty-page venture case and defend it under questions.",
        verdict: "A working prototype is not yet a viable transformation; value, adoption, and organization complete the case."
      },
      {
        key: "defense", number: 4, name: "Project Defense", color: "#191919",
        question: "Can the team defend one integrated Industry 4.0 proposal from problem through implementation and business value?",
        business: "The final meetings test whether the full argument holds together and whether every member can explain the technology, data, decision, stakeholder, and business-model choices.",
        classes: ["Class 12 · Project presentations I", "Class 13 · Project presentations II"],
        focus: "Integrated venture case · evidence synthesis · limitations · implementation path · oral defense · constructive peer challenge",
        evidence: "Defend the chain: problem, stakeholder pain, sensing, data, analytics, insight, action, value, business model, risk, and mitigation.",
        methods: ["Integrated proposal", "Evidence-based presentation", "Question-and-answer defense", "Peer critique", "Revision logic"],
        make: "A double-spaced paper of approximately twenty pages plus a thirty-minute group presentation and approximately ten minutes of questions and discussion.",
        carry: "Students leave with a reusable way to evaluate connected operational change without confusing technology novelty with business merit.",
        verdict: "The proposal succeeds when its technical and business arguments survive the same questions."
      }
    ],
    rows: [
      {key:"technologies", label:"Technologies", name:"From physical event to usable decision data", range:"Classes 1–4", color:"#e91c24"},
      {key:"applications", label:"Applications", name:"From operational pain to problem–solution fit", range:"Classes 5–7", color:"#b8272f"},
      {key:"business", label:"Business", name:"From analytical capability to viable value creation", range:"Classes 8–11", color:"#4f5964"},
      {key:"defense", label:"Project Defense", name:"From integrated proposal to accountable defense", range:"Classes 12–13", color:"#191919"}
    ],
    classes: [
      {n:1, group:"technologies", type:"technology", title:"Industry 4.0 Foundations", before:"Read the assigned textbook chapters and identify one operation where real-time visibility could change a decision. Bring the physical event, current information delay, and affected stakeholder.", inside:"Build the architecture from physical assets and sensors through connectivity, infrastructure, analytics, and action. Distinguish digitization, insight, and autonomy, then locate where business value enters the chain.", after:"Draw one data-to-decision chain and mark its decision owner, response time, value measure, and most vulnerable technical or organizational link."},
      {n:2, group:"technologies", type:"technology", title:"Data Science and Analytics for Industry 4.0", before:"Read the assigned analytics chapter. For your Class 1 example, list likely data fields, units, frequency, missingness, and the decision they might support.", inside:"Distinguish descriptive, diagnostic, predictive, and prescriptive uses of operational data. Examine data quality, context, timeliness, model output, and the leap from a pattern or prediction to action.", after:"State one analytical question, the outcome to improve, the evidence required, and what decision would change if the analysis were credible."},
      {n:3, group:"technologies", type:"technology", title:"Cloud Services and Connected Solution Building", before:"Review the platform-neutral lab brief in Brightspace. Bring a proposed sensor event, sample payload, processing rule, dashboard measure, and alert condition.", inside:"Walk an end-to-end workflow: capture a signal, transmit and ingest it, store or process it, analyze and visualize it, and trigger an event or alert. Current tools and access instructions appear in Brightspace.", after:"Document the workflow, verify observable evidence at each step, and explain which failure would make the resulting managerial decision unsafe."},
      {n:4, group:"technologies", type:"technology", title:"Project Development Presentation 1", before:"Prepare the first group checkpoint using the Brightspace rubric: scan an assigned industry, compare existing Industry 4.0 applications, and select an important unresolved gap.", inside:"Present the opportunity scan, receive questions, and distinguish a broad theme from an actionable problem. Peers test importance, evidence, novelty, stakeholder clarity, and technology fit.", after:"Revise the opportunity statement, document what feedback changed, and identify the stakeholder and measurable pain to validate next."},
      {n:5, group:"applications", type:"application", title:"Industry 4.0 in Healthcare", before:"Read the healthcare chapter and identify where sensing or information delay affects safety, service, resource use, or clinical operations.", inside:"Analyze healthcare use cases through sensor deployment, data collection, privacy and reliability constraints, operational decisions, and stakeholder outcomes. Separate a compelling demo from a responsible solution.", after:"Adapt the problem–solution map to a healthcare example and identify a data-quality, privacy, adoption, or false-alarm risk that changes the design."},
      {n:6, group:"applications", type:"application", title:"Inventory, Quality and Project Presentation 2", before:"Read the smart-logistics chapter and prepare the second checkpoint: problem, stakeholders, pains, technology fit, sensing, data, analytics, insight, automated decision, and value.", inside:"Connect visibility and analytics to inventory and quality decisions, then challenge each team’s problem–solution fit. Test whether each data field and analytical output is necessary for the claimed action.", after:"Freeze the problem boundary, unit of analysis, stakeholder, outcome measure, and technical chain. Record assumptions the business stage must address."},
      {n:7, group:"applications", type:"application", title:"Plant Safety and Security", before:"Read the safety and security chapter. Bring one hazardous event or threat and distinguish leading signals from evidence available only after failure.", inside:"Examine sensing, anomaly detection, alerts, escalation, false positives, cybersecurity, and human response. Evaluate when automation should act and when accountable judgment must remain.", after:"Add safety, security, and response-governance questions to your project critique: who monitors, who may override, and what happens when the system fails?"},
      {n:8, group:"business", type:"business", title:"Analytics and Insight in Smart Supply Chains", before:"Read the smart-supply-chain chapter. Trace one decision from real-time operational data to AI-supported insight and an operational response.", inside:"Analyze how connected data supports visibility, prediction, coordination, and increasingly autonomous action. Test whether output is timely, actionable, monitored, and connected to a measurable outcome.", after:"Write the project’s closed loop: observe, analyze, decide, act, measure, and learn. Identify where human review or a stop condition is required."},
      {n:9, group:"business", type:"business", title:"Business Models and Project Presentation 3", before:"Read the business-model chapter and prepare the third checkpoint: sharpen the solution, critique weaknesses and adoption barriers, and propose realistic workarounds.", inside:"Map stakeholders, value proposition, revenue logic, market opportunity, competition, implementation partners, and organizational capabilities. Subject each design to technical, commercial, and adoption challenges.", after:"Build a paper plan covering problem, solution architecture, data and analytics, stakeholder value, SWOT, business model, barriers, and mitigation."},
      {n:10, group:"business", type:"business", title:"Case: Bossard AG", before:"Prepare the authorized Bossard AG case using Brightspace questions. Identify the logistics problem, connected capabilities, affected processes, and evidence of organizational value.", inside:"Reconstruct how Industry 4.0 changes logistics visibility and replenishment, then debate value creation, dependencies, scaling, customer relationships, and risks. Support claims with case facts.", after:"Transfer one defensible lesson—and one caution—from Bossard to your proposal. Explain why the analogy fits."},
      {n:11, group:"business", type:"business", title:"Case: Coda Coffee and Bext360", before:"Prepare the authorized case. Map machine vision, artificial intelligence, Internet of Things, blockchain, supply-chain actors, and the promised value for each actor.", inside:"Evaluate how technology claims connect to traceability, quality, trust, incentives, and value distribution. Compare the problem, network, governance, and adoption logic with Bossard.", after:"State which assumption in your project most needs evidence before its technology and business claims can be accepted."},
      {n:12, group:"defense", type:"defense", title:"Industry 4.0 Project Presentations I", before:"Presenting groups prepare the integrated approximately twenty-page double-spaced paper and defense according to Brightspace. All students prepare course-grounded questions.", inside:"Teams present for approximately thirty minutes and answer questions for approximately ten minutes. The room tests problem importance, architecture, data, analytics, action, value, business model, risks, and implementation.", after:"Presenters document the strongest challenge and implied revision. Non-presenters record one principle and one weakness to apply to their defense."},
      {n:13, group:"defense", type:"defense", title:"Industry 4.0 Project Presentations II", before:"Remaining groups prepare the same integrated paper and defense. Revisit the first presentation meeting and anticipate questions across the full proposal.", inside:"Complete defenses and compare proposals across industries. Every member remains accountable for the whole project, not only the slides or section prepared.", after:"Write a post-defense judgment: what makes the proposal credible, what remains uncertain, and what the team would test first before implementation."}
    ],
    assessments: [
      {label:"Three Project Checkpoints",weight:30,color:"#e91c24",detail:"Three staged group presentations develop one project: opportunity scan; problem–solution fit; and solution design, critique, and mitigation. Rubrics and submission instructions are published in Brightspace.",strong:"Strong checkpoints narrow the problem, connect sensing and data to analysis and action, respond visibly to feedback, and replace vague technology enthusiasm with supported choices."},
      {label:"Term Paper",weight:50,color:"#b8272f",detail:"An approximately twenty-page, double-spaced group proposal for an Industry 4.0 solution to a sharply defined problem. It integrates stakeholder pains, technical and analytical design, SWOT, business model, barriers, and mitigation.",strong:"Strong work makes one traceable argument from problem evidence through data and AI-supported decision logic to measurable value, feasibility, limitations, and a viable business case."},
      {label:"Term Paper Presentation",weight:10,color:"#4f5964",detail:"A group presentation of approximately thirty minutes followed by approximately ten minutes of questions and discussion. Every member must understand and may be evaluated on the complete proposal.",strong:"A strong defense is selective, evidence-led, internally consistent, responsive to questions, and candid about assumptions, risks, trade-offs, and what must be tested next."},
      {label:"Attendance and Participation",weight:10,color:"#191919",detail:"Active engagement in discussions, demonstrations, exercises, cases, project work, and peer questioning. Attendance may use the electronic method announced in Brightspace; a connected device may be required.",strong:"Strong participation advances the room’s analysis: prepare evidence, ask precise questions, test assumptions respectfully, connect concepts, and contribute reliably to group work."}
    ],
    checklist: [
      "I have read the official course outline and checked Brightspace for current meeting, lab, project, and presentation details.",
      "I can access the required textbook through the Carleton University Library’s current licence.",
      "I know how to obtain the Bossard AG and Coda Coffee/Bext360 cases through the authorized course or library route.",
      "I have reviewed the current Brightspace instructions for connected-solution exercises and verified my access.",
      "My group understands the scan → fit → design and critique → integrated paper → defense progression.",
      "I will bring a connected device when required for hands-on work or the announced electronic attendance method."
    ],
    faq: [
      ["Is this a programming course?","The course is about designing and evaluating Industry 4.0 solutions. Hands-on work makes the sensor-to-data-to-insight chain concrete, but the central expectation is to connect technical choices to decisions, value, risks, and implementation."],
      ["Which software or cloud platform will we use?","Brightspace names the currently supported lab platform, access route, and exercise instructions. The durable workflow connects a device or sensor signal, ingests and processes data, analyzes and visualizes it, and configures an event or alert."],
      ["What is the project progression?","Your team scans an industry and selects a gap, establishes problem–solution fit, designs and critiques the solution, integrates the work into the term paper, and defends the proposal."],
      ["Are the three in-class presentations separate projects?","No. They are three graded checkpoints worth 30% together. Each develops the same project and should show how evidence and feedback changed the team’s choices."],
      ["What exactly is the term paper?","It is an approximately twenty-page, double-spaced group venture case joining the problem, stakeholders, architecture, sensing and data, analytics and action, value, SWOT, business model, adoption barriers, and mitigation."],
      ["How does the final defense work?","Each group presents for approximately thirty minutes and answers questions for approximately ten minutes. Every member must understand the whole project. Brightspace publishes current allocation, submission instructions, and deadlines."],
      ["Where do the Bossard and Coda cases fit?","They are business-analysis laboratories. Bossard focuses on connected logistics; Coda Coffee and Bext360 combine machine vision, artificial intelligence, Internet of Things, and blockchain in a supply chain."],
      ["Does the course cover generative artificial intelligence?","The approved scope is Industry 4.0, Internet of Things, operational data and analytics, and artificial intelligence supporting insight and increasingly autonomous decisions. The site does not promise additional generative-artificial-intelligence content."],
      ["How are attendance and participation handled?","Participation includes prepared contributions to exercises, cases, demonstrations, project work, and discussion. Attendance may use the electronic method announced in Brightspace; current instructions appear there."],
      ["Where are current meeting, lab, room, and deadline details?","Brightspace and Banner carry current-offering logistics. The <a href=\"downloads/BUSI-4331-Course-Outline.pdf\" target=\"_blank\" rel=\"noopener\">official course outline (PDF) ↗</a> governs durable requirements and policies."],
      ["Can course cases or textbook files be shared publicly?","No. Use only the authorized library, publisher, or course route. Course and licensed materials are for personal course use and may not be redistributed."],
      ["Is this browser site the official course outline?","No. This site explains the course journey. The official PDF governs requirements and Brightspace provides current operational details."]
    ]
  };
})();
