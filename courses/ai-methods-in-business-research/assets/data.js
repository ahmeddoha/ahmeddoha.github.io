window.STUDENT_COURSE = {
  cycles: [
    {
      key: "representation", number: 1, name: "Representation", color: "#b72d49",
      question: "How can customer language become analyzable without losing the construct we care about?",
      business: "E-commerce review intelligence and conversion",
      paper: "Lee, Cheng, Mao & Manzoor (2025)", title: "Guided Diverse Concept Miner", journal: "Information Systems Research",
      data: "23,720 product-choice journeys",
      methods: ["Sparse vectors", "Contextual embeddings", "Semantic geometry", "Guided concepts", "Leakage and stability audits"],
      make: "A representation model card, an executable GDCM audit, a construct-validity verdict, and a proposed extension.",
      result: "The public reconstruction is partial and diagnostically valuable: a released row index perfectly leaks conversion, while clean paths do not recover the reported performance.",
      verdict: "Partial reconstruction · critical leakage finding"
    },
    {
      key: "measurement", number: 2, name: "Measurement", color: "#d17722",
      question: "When can biased synthetic choices add information without being mistaken for human responses?",
      business: "Conjoint market research and the cost of human data",
      paper: "Wang, Zhang & Zhang (2026)", title: "Large Language Models for Market Research", journal: "Marketing Science",
      data: "Vaccine and sports-car conjoint studies",
      methods: ["Estimands", "Synthetic-data bias", "Naïve pooling", "AI-augmented estimation", "Equivalent human sample value"],
      make: "A bias decomposition, reconstructed error curves, a data-value calculation, and a decision-aware measurement extension.",
      result: "The public package recovers the reported 24.9%–79.8% human-data-saving range and shows why naïve synthetic substitution fails.",
      verdict: "Largely verified"
    },
    {
      key: "generative", number: 3, name: "LLMs & Agents", color: "#7553a3",
      question: "Can an LLM or agentic workflow become a reproducible and valid component of business research?",
      business: "Evaluation of strategic business models",
      paper: "Doshi, Bell, Mirzayev & Vanneste (2025)", title: "Generative Artificial Intelligence and Evaluating Strategic Decisions", journal: "Strategic Management Journal",
      data: "Two 60-business-model studies · 28 reconstruction targets",
      methods: ["LLM systems as treatments", "Retrieval and tools", "Agent routing and stopping", "Evaluator validity", "Model and policy drift"],
      make: "A complete AI-system manifest, evaluator audit, aggregation analysis, evidence-boundary verdict, and robust future study.",
      result: "The published-table audit registers 28 targets and reconstructs the diversity-versus-scaling arithmetic, exposing the boundary between a published-table audit and raw-response reproduction.",
      verdict: "Published-table audit · raw package pending"
    },
    {
      key: "networks", number: 4, name: "Networks", color: "#187971",
      question: "When should relational structure change a forecast and a business decision?",
      business: "Retail product relations, sales forecasting, and inventory",
      paper: "Liu et al. (2025)", title: "Beyond Complements and Substitutes", journal: "Information Systems Research",
      data: "3,000,888 Favorita rows · 33 product families",
      methods: ["Edge construction", "Signed directed graphs", "Centrality", "Communities", "Graph neural networks", "Topology sensitivity"],
      make: "An edge contract, a graphed and analyzed retail network, forecast comparisons, a topology multiverse, and a scoped extension.",
      result: "The public-data graph has 161 directed signed edges. Own-history and graph-aware forecasts are compared side by side, and the verdict is scoped to what the public data supports.",
      verdict: "Scoped public-data reconstruction"
    }
  ],
  classes: [
    {n:1,cycle:"representation",type:"learn",title:"How text becomes a measurable representation",inside:"Learn how computers turn customer reviews into numerical features, positions in a semantic space, and interpretable concepts. Use the Lee et al. paper to ask whether those representations preserve the intended business meaning.",before:"Read the Lee et al. abstract and bring one business concept you have seen measured with text.",after:"A map of the paper’s claims, a record of how text was represented, a validity plan, and predictions about what should reproduce."},
    {n:2,cycle:"representation",type:"execute",title:"Reconstruct customer-review concept discovery",inside:"Inspect 23,720 customer shopping journeys and rerun the paper’s analysis. Test whether an unintended row number reveals the purchase outcome, compare reported and reconstructed predictive performance, and examine concept meaning and stability.",before:"Record what you expect to reproduce and why before seeing the reconstructed results.",after:"Executable evidence, a list of discrepancies, a validity judgment, and research opportunities created by the gaps."},
    {n:3,cycle:"representation",type:"defend",title:"Representation research workshop",inside:"Defend how a published paper converted language into data, which result you recovered, whether the representation is valid, and how a follow-up study could improve it.",before:"Submit your runnable reconstruction, draft methods section, and one evidence display before the workshop deadline.",after:"A peer-reviewed revision plan and a stronger proposed study."},
    {n:4,cycle:"measurement",type:"learn",title:"Measuring preferences with human and synthetic data",inside:"Distinguish predicting an outcome from measuring a construct such as customer preference. Compare methods for combining human and artificial-intelligence-generated responses, quantify bias and uncertainty, and calculate the potential savings in human data.",before:"Bring one example from your discipline in which prediction and measurement could be confused.",after:"A table defining the quantity to be measured, a decomposition of possible bias, the augmented estimator worked by hand, and a map of the focal paper’s claims."},
    {n:5,cycle:"measurement",type:"execute",title:"Reconstruct artificial-intelligence-augmented market research",inside:"Rerun the vaccine and sports-car choice studies, rebuild the estimation-error curves and human-data-saving calculations, and test why simply mixing synthetic and human responses can be biased.",before:"Define the quantity the study attempts to estimate and identify what counts as ground truth.",after:"Reconstructed error curves, the recovered human-data-saving range, and a record of how results change under alternative choices."},
    {n:6,cycle:"measurement",type:"defend",title:"Measurement research workshop",inside:"Defend what a published paper attempted to measure, evaluate its bias and uncertainty, explain whether the measure supports a real decision, and propose an improved design.",before:"Submit the reconstruction, your validity and decision-value judgment, the extension, and its methods section.",after:"Reviewer feedback and a revised measurement design tied to a consequential decision."},
    {n:7,cycle:"generative",type:"learn",title:"Designing large language model and agent studies",inside:"Treat the entire system as the research intervention: model, instructions, retrieved evidence, tools, task routing, stopping rules, evaluator, method for combining outputs, and software version.",before:"Bring one published artificial-intelligence claim and list everything the phrase “we used a large language model” leaves unspecified.",after:"A complete system record, agent-decision map, evaluator design, version-change register, and map of the focal paper’s claims."},
    {n:8,cycle:"generative",type:"execute",title:"Reconstruct artificial evaluators of strategic decisions",inside:"Reconstruct how artificial intelligence compared business models. Test whether repeated judgments from one evaluator or judgments from diverse evaluators produce better rankings, compare those rankings with experts, and identify what cannot be verified without raw responses.",before:"Predict whether repeated judgments or evaluator diversity should improve the ranking more, and explain why.",after:"A clear statement of the evidence reached, a reconstruction of the ranking calculations, a data-access judgment, and a more robust evaluator design."},
    {n:9,cycle:"generative",type:"defend",title:"Large language model and agent research workshop",inside:"Defend the complete system behind a published study and test whether its result changes across instructions, evidence, tools, evaluators, agent rules, or model versions.",before:"Submit preserved outputs and execution logs, the full system and agent-policy record, evaluator audit, and proposed study.",after:"A peer-reviewed design and a clear account of which findings should survive changes in the artificial-intelligence system."},
    {n:10,cycle:"networks",type:"learn",title:"How relationships become analyzable networks",inside:"Define entities as nodes and relationships as edges. Calculate how information moves across connected entities, identify influential nodes and communities, compare with suitable benchmark networks, and test construction choices.",before:"Bring one business relationship from your discipline, state the event that creates it, and explain what information should travel across it.",after:"A precise definition of nodes and edges, a Graph Neural Network calculation completed by hand, a validity plan, and reconstruction targets."},
    {n:11,cycle:"networks",type:"execute",title:"Reconstruct a retail product network",inside:"Use public grocery-sales records to connect product families. Compare forecasts using only a product’s own sales history with forecasts using product relationships, then inspect communities, influential products, and alternative network definitions.",before:"Predict whether product relationships should improve the forecast beyond sales history alone and state the comparison needed to test that prediction.",after:"A 161-relationship network, forecast comparison, sensitivity analysis, evidence-bounded conclusion, and possible extensions."},
    {n:12,cycle:"networks",type:"defend",title:"Network and Graph Neural Network research workshop",inside:"Defend the nodes and edges in a published study, reproduce its focal result, test alternative network definitions, compare with non-network methods, and propose a business-research extension.",before:"Submit a near-independent reconstruction, several defensible network constructions, a methods section, and the proposed study.",after:"An editorial decision and a mature relational research design."},
    {n:13,cycle:"capstone",type:"capstone",title:"Individual capstone proposal conference",inside:"Defend your original study’s business problem, theory, public data, constructs, analytical method, feasibility evidence, validity safeguards, and expected contribution.",before:"Submit the final written research proposal and prepare a concise, evidence-based defense of its major design choices.",after:"An editorial decision, a specific revision plan, and an archival plan for the proposed research."}
  ],
  assessments: [
    {label:"Cycle 1 · Representation research dossier",weight:15,color:"#b72d49",detail:"Reconstruct how a published paper turns text into a business measure. Define the corpus and unit, reproduce the representation, recover the focal result, test whether the concepts are meaningful and stable, and propose an improved representation with a methods section.",strong:"Strong work separates code execution from construct validity and limits the substantive claim to what the representation evidence supports."},
    {label:"Cycle 2 · Measurement research dossier",weight:15,color:"#d17722",detail:"Reconstruct how a published paper turns human, synthetic, or behavioural observations into a measure. Define the construct and quantity being estimated, recover the result, test bias and uncertainty, assess decision value, and propose an improved measurement design.",strong:"Strong work distinguishes prediction from measurement and explains how uncertainty, timing, or contamination affects the decision claim."},
    {label:"Cycle 3 · LLMs & Agents research dossier",weight:15,color:"#7553a3",detail:"Reconstruct a published large language model or agent study as a complete system. Record the model, prompts, evidence, tools, agent rules, evaluator, outputs, and logs; recover the focal result; test sensitivity to system changes; and specify the extension.",strong:"Strong work makes the system repeatable, separates evaluator agreement from truth, and identifies which conclusion survives model or policy changes."},
    {label:"Cycle 4 · Networks research dossier",weight:15,color:"#187971",detail:"Reconstruct a published network or Graph Neural Network study. Define the nodes, relationships, direction, and time; rebuild the graph and focal analysis; compare with non-network methods; test communities, influential nodes, and alternative graph definitions; and specify the extension.",strong:"Strong work defends how the network was built and shows whether the business conclusion survives credible alternative constructions."},
    {label:"Research workshop contributions",weight:16,color:"#61707d",detail:"Complete four assessed workshop roles at 4% each in Classes 3, 6, 9, and 12. Depending on the class, serve as author, computational auditor, theory discussant, methods reviewer, or editor and prepare evidence before the discussion.",strong:"Strong work uses specific evidence to improve a peer’s claim and produces clear revision guidance. Speaking frequently, by itself, earns no credit."},
    {label:"Final written research proposal",weight:20,color:"#c89546",detail:"Develop one original business study from your strongest cycle extension. State the problem, theory gap, question or hypotheses, and contribution; identify public data, sample, and constructs; specify the method and analysis; and address feasibility, validity, ethics, managerial value, and reproducibility.",strong:"Strong work aligns the theory, data, method, evidence, and claim and shows that the proposed study is important, feasible, and auditable before full execution."},
    {label:"Final proposal presentation and oral defense",weight:4,color:"#2e2529",detail:"In Class 13, present the proposal as a research argument. Explain how the reconstructed paper motivates the study and defend the theory, constructs, public data, method, feasibility evidence, validity safeguards, and expected contribution. Submit a short revision plan after the discussion.",strong:"Strong work answers questions with evidence, acknowledges unresolved limits, and converts criticism into specific improvements to the research design."}
  ],
  checklist: [
    "I can run Python and open a Jupyter notebook.",
    "I can read a regression or predictive-results table at a basic level.",
    "I have Git available or know where I will obtain help setting it up.",
    "I can bring a laptop to every class.",
    "I understand that the course uses public research data and executable code.",
    "I can access O’Reilly Learning through Carleton Library and have obtained the two purchase-designated methods texts.",
    "I have read the official course outline and recorded the Brightspace deadlines."
  ],
  faq: [
    ["Is this primarily a coding course?","No. Code is the medium through which evidence becomes inspectable. You are assessed on methodological reasoning, validity, interpretation, reconstruction discipline, and research design—not programming cleverness."],
    ["Which methods books do I need to buy?","Purchase <i>Text as Data</i> by Grimmer, Roberts, and Stewart and <i>Network Analysis</i> by Rawlings and colleagues unless you already have lawful full-text library access. Carleton Library’s O’Reilly Learning database provides <i>Hands-On Large Language Models</i>, <i>AI Engineering</i>, <i>Graph Neural Networks in Action</i>, and Pinheiro’s <i>Network Science</i> at no additional cost. Jurafsky and Martin’s online manuscript and the Rawlings R companion are free."],
    ["Do I need prior experience with embeddings, LLM experiments, or Graph Neural Networks?","No. Each cycle begins with a detailed methods class. You should, however, be able to follow Python, work with tabular data, and interpret basic empirical results."],
    ["What does “reconstruct a paper” mean?","You identify published claims, trace their data and computational dependencies, execute the deepest lawful evidence path available, compare recovered with reported results, diagnose discrepancies, and document the boundary of your verdict."],
    ["May I choose any paper for the student workshop?","No. Workshop papers come from a faculty-curated, cross-disciplinary reading pool whose public evidence path has been screened. This protects the quality and feasibility of the exercise."],
    ["What if my reconstruction does not match the paper?","A mismatch can be excellent research work when targets were registered, the pipeline is traceable, and the discrepancy is diagnosed. Concealing it, changing the target after seeing results, or overstating execution is unacceptable."],
    ["Can I use generative AI in my coursework?","Yes, when the assignment permits it and use is transparent. Record provider/model, date or version, prompts, relevant outputs, verification, and your substantive decisions. You remain responsible for correctness, citations, confidentiality, and originality."],
    ["Can I attend remotely?","No. This is an in-class doctoral research seminar, and students’ remote attendance is not permitted unless formally authorized. A laptop capable of running Python, Jupyter, and Git is required in every class."],
    ["Will I have to pay for model API access?","No. A precomputed path is supplied for any exercise that would otherwise require paid API access."],
    ["Is there a final exam?","No conventional exam. The course culminates in an individual research proposal and oral defense grounded in the evidence skills developed across all four cycles."],
    ["Where will dates and submission details appear?","The <a href=\"downloads/BUSI-6306-Course-Outline.pdf\" target=\"_blank\" rel=\"noopener\">official course outline (PDF) ↗</a> explains the course sequence, requirements, grading, and policies. Current meeting dates, times, rooms, University-scheduled breaks, and submission deadlines are published in Banner and Brightspace."]
  ]
};
