(function () {
  "use strict";
  const courseClasses = window.COURSE.classes;
  const cycleMeta = [
    {
      key: "representation", number: 1, range: "Classes 2–4", name: "Representation", color: "#e91c24",
      question: "How can customer language become analyzable without losing the distinction a business decision needs?",
      business: "Customer-experience intelligence, segmentation, and service design",
      paper: "The Local Marketplace", title: "Representing Yelp’s Philadelphia customer reviews", journal: "continuous empirical case",
      data: "72,785 retained reviews from 4,000 businesses",
      methods: ["Tokens and counts", "Term frequency–inverse document frequency", "Sentence embeddings", "Cosine similarity", "Clustering", "Stability and construct audits"],
      make: "A representation audit that links review language to a bounded managerial action and states what the representation cannot establish.",
      result: "You will compare sparse and dense representations, inspect real review neighborhoods, and test whether a plausible cluster interpretation survives category and granularity changes.",
      verdict: "Representation is a choice about what meaning survives"
    },
    {
      key: "measurement", number: 2, range: "Classes 5–7", name: "Measurement", color: "#c93b32",
      question: "When does a model score measure useful future risk—and when is it exploiting information the decision-maker would not have?",
      business: "Business-status risk, targeting, and decision thresholds",
      paper: "The Local Marketplace", title: "Predicting business status and ratings", journal: "continuous empirical case",
      data: "Business records joined to review, rating, category, and timing traces",
      methods: ["Target and estimand design", "Classification", "Regression", "Thresholds", "Error costs", "Leakage and information-timing audits"],
      make: "A decision brief that names the target, prediction time, error tradeoff, operating threshold, and evidence needed before intervention.",
      result: "A seemingly excellent status model falls sharply when a timing shortcut is removed—making leakage, not accuracy, the central teaching result.",
      verdict: "Performance is meaningful only under a valid information contract"
    },
    {
      key: "generative", number: 3, range: "Classes 8–9", name: "LLMs & Agents", color: "#2f6097",
      question: "Can a fluent recommendation remain grounded, complete, eligible, and useful under real decision constraints?",
      business: "Evidence-grounded local search and customer decision support",
      paper: "The Local Marketplace", title: "Retrieval, generation, and agent control", journal: "continuous empirical case",
      data: "Questions, retrieved review passages, business metadata, generated answers, and audit traces",
      methods: ["Retrieval-augmented generation", "Claim-to-source tracing", "Coverage and contradiction tests", "Agent routing", "Stopping rules", "Abstention"],
      make: "A release decision and control policy for an AI assistant, supported by traced evidence and explicit failure and stopping conditions.",
      result: "You will expose recommendations that sound well supported yet fail because a business is closed or a required constraint was never covered.",
      verdict: "Grounded, complete, and usable are separate requirements"
    },
    {
      key: "networks", number: 4, range: "Classes 10–11", name: "Networks", color: "#69558e",
      question: "When do constructed relationships justify a claim about communities, brokerage, competition, or market position?",
      business: "Market positioning, competitor monitoring, partnerships, and differentiation",
      paper: "The Local Marketplace", title: "Constructing and auditing a business-similarity network", journal: "continuous empirical case",
      data: "An 800-business network built from review embeddings and alternative category relations",
      methods: ["Node and edge contracts", "Similarity and distance", "Degree and betweenness centrality", "Community detection", "Network visualization", "Topology sensitivity"],
      make: "A positioning brief whose graph construction, centrality choice, sensitivity test, external-data need, and stop condition are visible.",
      result: "Correcting path semantics changes the centrality story; replacing semantic edges with category edges changes it again. The business conclusion must remain construction-specific.",
      verdict: "A network result belongs to a specified graph—not to the business itself"
    }
  ];

  function keyForCycle(cycle) { return ["foundation", "representation", "measurement", "generative", "networks", "presentations"][cycle]; }
  function typeFor(item) {
    if (item.cycle === 5) return "present";
    if (item.id === 1 || /Concept/i.test(item.kicker)) return "learn";
    if (/Scaffolded/i.test(item.kicker)) return "execute";
    return "challenge";
  }
  function beforeFor(item) {
    if (item.id === 1) return "Bring one business decision you think customer reviews could inform—and one reason the reviews might mislead it.";
    if (item.cycle === 5) return "Arrive for the full session with your presentation materials ready and the common evidence-chain feedback rubric open. Attendance and peer questioning are required on both presentation days.";
    if (typeFor(item) === "learn") return `Read the class title and bring one business decision that could use ${cycleMeta[item.cycle - 1].name.toLowerCase()} evidence.`;
    if (typeFor(item) === "execute") return "Record what you expect the analysis to show and which observation would make you change your initial recommendation.";
    return "Bring the prior class recommendation, one assumption worth challenging, and a prediction about what will change.";
  }
  const classes = courseClasses.map(item => ({
    n: item.id,
    cycle: keyForCycle(item.cycle),
    type: typeFor(item),
    title: item.title,
    inside: `${item.subtitle} The class is organized around this question: ${item.essential} You will work through ${item.segments.length} timed segments containing concepts, real evidence, interaction, interpretation, and a decision.` ,
    before: beforeFor(item),
    after: item.assignment["4301"]
  }));

  window.STUDENT_COURSE = {
    cycles: cycleMeta,
    classes,
    assessments: [
      {label:"Attendance",weight:10,color:"#e91c24",detail:"Attend and participate in the in-class lectures, analytical activities, and both presentation days. Attendance is taken electronically using Poll Everywhere, so register on Poll Everywhere with your Carleton cmail account and bring a connected device such as a smartphone, tablet, or laptop to every class. The full attendance mark requires attending at least 9 of the 11 instructional classes, and both presentation days must be attended.",strong:"Strong participation arrives prepared, contributes to evidence-based discussion, and completes the live decision, interpretation, presentation, and peer-feedback work—not merely the attendance check."},
      {label:"Assignment 1",weight:15,color:"#c93b32",detail:"Apply the course’s AI methods to a supplied business-analytics question and dataset. Submit the report, dataset, and executable Python code together as one zipped file to Brightspace.",strong:"Strong work defines the decision and unit, makes the analysis reproducible, interprets examples and errors, and limits the recommendation to what the evidence supports."},
      {label:"Assignment 2",weight:15,color:"#2f6097",detail:"Complete a second applied analysis that extends the methods and evidence discipline developed later in the course. Submit the report, dataset, and executable Python code as one zipped file to Brightspace.",strong:"Strong work connects analytical choices to a business consequence, tests at least one consequential alternative, and explains what changed and why."},
      {label:"Term Paper",weight:50,color:"#191919",detail:"Develop a group paper around a consequential business problem using secondary data and appropriate AI methods. Submit the paper, dataset, and Python code together as one zipped file to Brightspace so the analysis can be rerun. Students who do not obtain at least a 50% average excluding the term paper will not be allowed to submit it and will lose its marks. Rubrics and the deadline appear on the course page and in the official outline.",strong:"Strong work aligns the problem, data, method, validation, interpretation, and managerial action; documents construction choices; tests robustness; and states what additional evidence would be needed before implementation."},
      {label:"Term Paper Presentation",weight:10,color:"#69558e",detail:"Present the group term paper in class. Introduce the business problem, research question, data, AI method and code implementation, results, limitations, and decision implications within the 15–20 minute presentation.",strong:"Strong work makes the evidence chain easy to inspect, uses analytical displays to support interpretation, and answers questions without overstating the result."}
    ],
    checklist: [
      "I can bring a laptop and connected device to every class.",
      "I have registered on Poll Everywhere with my Carleton cmail account so my attendance can be recorded.",
      "I can open a Python notebook and follow code one step at a time.",
      "I can inspect a table and interpret a basic model result.",
      "I understand that models, data, and code are part of graded submissions.",
      "I have read the official course outline and prerequisites.",
      "I know that current dates, rooms, and deadlines live in the outline and Brightspace."
    ],
    faq: [
      ["Is this primarily a coding course?","No. You will use Python because executable analysis makes evidence inspectable. The central work is defining the business decision, understanding the data, choosing and testing the method, interpreting results, and stating the limits of action."],
      ["Do I need prior experience with embeddings, LLM agents, or networks?","No. Each cycle begins from the underlying concepts and builds toward application. The prerequisites and basic statistical literacy matter; specialized AI experience is not assumed."],
      ["What are the prerequisites?","Third-year standing, BUSI 2401, and STAT 2601. The course precludes additional credit for BUSI 2300 and ECON 4005."],
      ["How does the course meet?","Each week has an in-class lecture and a lab. Remote attendance at the lecture is not permitted. Meeting times and rooms are published in the official course outline and Brightspace."],
      ["Why does the course use one marketplace throughout?","Using one connected dataset lets you see how different methods construct different evidence from the same business setting. You can compare assumptions and results without relearning an unrelated case every week."],
      ["Will every model produce a strong result?","No—and that is deliberate. A performance drop, unstable cluster, incomplete answer, or sensitive network can be the most useful result when it reveals what a manager should not conclude."],
      ["What should the term paper accomplish?","It should connect a consequential business problem to suitable secondary data, an executable AI analysis, careful interpretation, and a decision whose conditions and limitations are clear."],
      ["Can I use generative AI in my coursework?","Follow the official course outline, assignment instructions, and university academic-integrity requirements. You remain responsible for accuracy, sources, code, confidentiality, and the originality of submitted work."],
      ["Where will dates and submission details appear?","All current class dates, meeting information, assessment rules, and submission details are provided in the <a href=\"downloads/BUSI-4301-Course-Outline.pdf\" target=\"_blank\" rel=\"noopener\">official course outline (PDF) ↗</a> and Brightspace."],
      ["Is the browser site the official outline?","No. This site explains the learning design. The downloadable official outline governs dates, grading, policies, and requirements."]
    ]
  };
})();
