(function () {
  "use strict";
  window.BUSI2301 = {
    modules: [
      {
        key: "design", number: 1, name: "Design the Operating System", color: "#e91c24",
        question: "What must the operation deliver, and how should its products, services, processes, and capacity fit that promise?",
        business: "Translate competitive priorities into an operating system that can actually deliver them.",
        classes: ["Class 1 · Operations strategy + productivity", "Class 2 · Product and service design", "Class 3 · Process design + facility layout", "Class 4 · Capacity + decision theory"],
        focus: "Operating strategy · product/service design · process choice · layout · capacity · decisions under uncertainty",
        evidence: "Demand, customer requirements, process volumes and variety, resource limits, costs, payoffs, and productivity measures.",
        methods: ["Input–transformation–output", "Competitive priorities", "Productivity ratios", "Process–volume fit", "Capacity analysis", "Decision trees"],
        make: "A coherent design choice whose capacity, process, and economics support the customer promise.",
        carry: "The design becomes the operating baseline against which later inventory, network, planning, and quality decisions are tested.",
        verdict: "Operations strategy is the set of choices that makes a business promise deliverable."
      },
      {
        key: "flow", number: 2, name: "Configure the Network and Flow", color: "#b8272f",
        question: "Where should resources sit, how much inventory should the system carry, and how should material move through the network?",
        business: "Balance service, cost, responsiveness, and risk across locations, inventories, suppliers, and logistics.",
        classes: ["Class 5 · Location planning", "Class 6 · Inventory management", "Class 7 · Supply chain + logistics", "Class 8 · Linear programming"],
        focus: "Location · inventory policy · supply networks · logistics · constrained optimization",
        evidence: "Fixed and variable costs, geographic demand, lead times, order costs, carrying costs, service targets, capacities, and constraints.",
        methods: ["Factor rating", "Locational break-even", "Economic order quantity", "Reorder point", "Supply-chain mapping", "Linear programming"],
        make: "A network and flow policy that states where resources belong, how inventory is replenished, and which constraints bind.",
        carry: "Students learn that local efficiency can damage total-system performance—and that every optimum depends on its assumptions.",
        verdict: "Manage the whole flow, not one department’s cost."
      },
      {
        key: "planning", number: 3, name: "Plan Demand and Resources", color: "#4f5964",
        question: "How should uncertain demand become a feasible production, workforce, and material plan?",
        business: "Coordinate what customers may want with what the operation can source, schedule, and deliver.",
        classes: ["Class 9 · Demand forecasting", "Class 10 · Aggregate planning + master scheduling", "Class 11 · MRP, DRP + ERP"],
        focus: "Forecasting · forecast error · aggregate planning · master scheduling · dependent-demand planning",
        evidence: "Time-series demand, forecast errors, capacity, workforce and inventory costs, bills of material, lead times, and inventory records.",
        methods: ["Moving averages", "Exponential smoothing", "Forecast-error measures", "Level/chase planning", "Master schedule", "Material requirements planning"],
        make: "A traceable planning chain from demand estimate to aggregate plan, master schedule, and timed material requirements.",
        carry: "Students see how one assumption propagates through purchasing, labor, capacity, inventory, and customer service.",
        verdict: "A forecast is an input to a decision—not a promise about the future."
      },
      {
        key: "control", number: 4, name: "Control Quality and Integrate", color: "#191919",
        question: "How can managers distinguish routine variation from a process that needs intervention—and connect the semester’s decisions?",
        business: "Improve quality without reacting blindly to noise, then diagnose the operation as one linked system.",
        classes: ["Class 12 · Quality management + statistical quality control", "Class 13 · Integrated practice"],
        focus: "Quality systems · continuous improvement · process variation · statistical control · cross-topic integration",
        evidence: "Defect and failure costs, process observations, control limits, capability, and the assumptions carried across earlier models.",
        methods: ["Cost of quality", "Plan–Do–Check–Act", "Six Sigma", "Control charts", "Process capability", "Integrated diagnosis"],
        make: "A justified intervention: improve the process when evidence signals a cause, or leave a stable process alone while addressing capability.",
        carry: "The final class reconnects design, flow, planning, and control into one managerial decision system.",
        verdict: "Control is not inspection after the fact; it is learning how the process behaves."
      }
    ],
    rows: [
      {key:"foundation", label:"Foundation", name:"Operations as a managerial system", range:"Class 1", color:"#191919"},
      {key:"design", label:"System Design", name:"Products, processes, capacity + uncertainty", range:"Classes 2–4", color:"#e91c24"},
      {key:"flow", label:"Network + Flow", name:"Location, inventory, supply chain + optimization", range:"Classes 5–8", color:"#b8272f"},
      {key:"planning", label:"Planning", name:"Demand, aggregate resources + materials", range:"Classes 9–11", color:"#4f5964"},
      {key:"quality", label:"Control", name:"Quality + statistical process control", range:"Class 12", color:"#6c747d"},
      {key:"integration", label:"Integration", name:"General practice across the operating system", range:"Class 13", color:"#191919"}
    ],
    classes: [
      {n:1, group:"foundation", type:"frame", title:"Operations Strategy + Productivity", before:"Read Chapters 1 and 2. Bring one example of a business whose operating choices clearly strengthen—or contradict—its market promise.", inside:"Model operations as an input–transformation–output system; distinguish goods from services; connect competitive priorities, order winners, productivity, and operations strategy.", after:"Write the customer promise, two operating capabilities it requires, and one measure that would reveal whether the system is delivering."},
      {n:2, group:"design", type:"design", title:"Product and Service Design", before:"Read Chapter 4 and review the posted practice set. Identify one design choice that shifts cost or difficulty downstream into operations.", inside:"Translate customer requirements into design priorities; examine standardization, mass customization, design for operations, reliability, and ethical/environmental consequences.", after:"Explain how one design feature changes process requirements, quality risk, capacity, or total cost."},
      {n:3, group:"design", type:"design", title:"Process Design + Facility Layout", before:"Read Chapter 6. Classify a familiar operation by volume, variety, process type, and layout; be ready to defend the fit.", inside:"Choose among process structures and layouts, trace flow, locate bottlenecks, and test whether the process design fits demand volume and variety.", after:"Draw a simple process map and name one layout or flow change that would improve a defined performance measure."},
      {n:4, group:"design", type:"design", title:"Capacity Planning + Decision Theory", before:"Read Chapter 5 and Connect Supplement 5S. Attempt the capacity, break-even, expected-value, and decision-tree practice questions before viewing solutions.", inside:"Measure capacity and utilization, compare expansion timing, calculate break-even volumes, and structure decisions under uncertainty using payoffs and probabilities.", after:"State the recommended capacity choice, the demand assumption driving it, and the threshold at which the decision changes."},
      {n:5, group:"flow", type:"flow", title:"Location Planning + Quiz 1", before:"Prepare Quiz 1 on Chapter 5 and Supplement 5S, then read Chapter 8. Brightspace provides current quiz instructions.", inside:"Complete the quiz in the opening 30 minutes; then compare qualitative and quantitative location factors using factor rating, locational break-even, and geographic reasoning.", after:"Recommend a location using explicit criteria and show which change in cost, demand, or strategic priority would reverse it."},
      {n:6, group:"flow", type:"flow", title:"Inventory Management", before:"Read Chapter 11. Work the economic-order-quantity and reorder-point practice problems without opening the solutions first.", inside:"Separate cycle, safety, anticipation, and pipeline inventory; calculate order quantity and reorder point; connect policy assumptions to service and total cost.", after:"Specify what to order, how much, when, and which assumption makes the policy vulnerable."},
      {n:7, group:"flow", type:"flow", title:"Supply Chain Management + Quiz 2", before:"Prepare Quiz 2 on Chapter 11, then read Chapter 15. Map the organizations and flows behind one product you use.", inside:"Complete the quiz in the opening 30 minutes; then diagnose sourcing, coordination, logistics, information distortion, resilience, and total-system trade-offs.", after:"Identify one supply-chain failure mode and propose a response that does not merely push cost or risk to another member."},
      {n:8, group:"flow", type:"flow", title:"Linear Programming", before:"Read Connect Supplement 6S. Translate at least two word problems into decision variables, an objective, and constraints.", inside:"Formulate constrained resource-allocation problems, solve them graphically or with the assigned tool, and interpret feasible regions, binding constraints, slack, and managerial meaning.", after:"Explain the recommended allocation in plain language and name one important real-world consideration absent from the model."},
      {n:9, group:"planning", type:"plan", title:"Demand Forecasting", before:"Read Chapter 3. Calculate at least two forecasting methods and their errors using the posted practice data.", inside:"Distinguish judgmental and quantitative forecasting; apply moving averages and exponential smoothing; compare errors and diagnose bias rather than selecting by habit.", after:"Choose a forecast for a stated decision horizon and explain the error measure, trade-off, and operational consequence."},
      {n:10, group:"planning", type:"plan", title:"Aggregate Planning + Master Scheduling + Quiz 3", before:"Prepare Quiz 3 on Chapter 3, then read Chapter 12. Compare level, chase, and mixed planning before class.", inside:"Complete the quiz in the opening 30 minutes; then translate demand into aggregate capacity, workforce, inventory, and backlog choices before disaggregating into a master schedule.", after:"Defend a plan against cost, feasibility, workforce, service, and implementation criteria—not total cost alone."},
      {n:11, group:"planning", type:"plan", title:"MRP, DRP + ERP", before:"Read Chapter 13. Bring a simple product structure and trace one component through lead time, inventory on hand, and demand.", inside:"Use bills of material, master schedules, inventory records, and lead times to calculate gross and net requirements and planned-order releases; connect MRP, DRP, and ERP.", after:"Trace one changed demand or lead-time assumption through purchasing, production, inventory, and delivery."},
      {n:12, group:"quality", type:"integrate", title:"Quality Management + Statistical Quality Control", before:"Read Chapters 9 and 10. Distinguish a quality problem caused by process design from one revealed by statistical evidence.", inside:"Connect prevention, appraisal, and failure costs to continuous improvement; use control charts to separate common- and special-cause variation; distinguish control from capability.", after:"Decide whether to intervene, improve capability, or keep observing—and support that decision with the process evidence."},
      {n:13, group:"integration", type:"integrate", title:"Integrated Operations Practice", before:"Attempt the cumulative practice problems under exam conditions. Mark uncertainty instead of opening solutions mid-problem.", inside:"Connect strategy, design, capacity, location, inventory, optimization, forecasting, planning, materials, and quality through mixed managerial problems.", after:"Build a targeted final-exam study plan around errors in model choice, setup, calculation, interpretation, and managerial recommendation."}
    ],
    assessments: [
      {label:"Quiz 1",weight:10,color:"#e91c24",detail:"An individual quiz covering strategic capacity planning and decision theory. It occupies the first 30 minutes of its scheduled class; Brightspace provides current delivery instructions.",strong:"Strong work selects the correct model, shows the setup, calculates accurately, and interprets what the result means for the manager."},
      {label:"Quiz 2",weight:10,color:"#b8272f",detail:"An individual quiz covering inventory management. It occupies the first 30 minutes of its scheduled class; collaboration is prohibited.",strong:"Strong work connects economic order quantity and reorder-point calculations to their assumptions, units, and operating consequences."},
      {label:"Quiz 3",weight:10,color:"#4f5964",detail:"An individual quiz covering demand forecasting. It occupies the first 30 minutes of its scheduled class and tests both calculation and interpretation.",strong:"Strong work calculates forecasts and errors correctly, compares alternatives using an appropriate error measure, and recognizes bias or weak assumptions."},
      {label:"Attendance",weight:10,color:"#6c747d",detail:"Attendance is taken electronically using Poll Everywhere, supported by Carleton’s Educational Development Centre. Register on Poll Everywhere with your cmail account and bring a connected device — smartphone, tablet, or laptop — to class. Full credit requires missing no more than two classes and answering the Poll Everywhere attendance question in class.",strong:"Attendance supports the worked examples and practice that turn formulas into managerial judgment. Missing more than two classes reduces the overall attendance grade by 50%."},
      {label:"Final Examination",weight:60,color:"#191919",detail:"The individual final is non-cumulative: it covers course topics not assessed in the three quizzes and includes quantitative and qualitative questions. It is written online, taken remotely. The University publishes the date and time, and the scheduling office determines eligibility for a deferred final examination. Students who do not obtain at least a 50% average on their term work (the quizzes) may be refused permission by the instructor to take the final examination and will fail the course.",strong:"Strong work chooses and executes the appropriate method, shows reasoning, checks units and assumptions, and interprets the result as an operations decision."}
    ],
    checklist: [
      "I have read the official course outline and checked Brightspace for current meeting, quiz, and final-exam details.",
      "I have access to the required 8th Canadian edition textbook and the assigned Connect supplements.",
      "I know where weekly slide decks, practice questions, and solutions will appear in Brightspace.",
      "I have an approved calculator and know how to use it for the course’s quantitative work.",
      "I will attempt practice problems fully before comparing my work with the posted solutions.",
      "I have registered on Poll Everywhere with my cmail account and can bring a connected device to class for electronic attendance."
    ],
    faq: [
      ["Why is operations management useful outside an operations concentration?","Every function depends on an operating system. Marketing promises service, finance funds capacity and inventory, information systems enable planning, and strategy depends on whether the organization can reliably deliver. This course makes those operational consequences visible."],
      ["Is the course conceptual or quantitative?","Both. You will learn why a method fits a decision, set it up, perform the calculation, inspect assumptions, and explain what the result means. A correct number without interpretation is incomplete; confident prose without analysis is also incomplete."],
      ["How is the course delivered?","Lectures are held in class; one or two classes might be offered on Zoom. The quizzes are online, taken in class. The final examination is online, taken remotely. The class meets once a week for three hours."],
      ["Who can take this course?","The prerequisite is second-year standing, and the course is restricted to selected Sprott programs."],
      ["What is covered by the three quizzes?","Quiz 1 covers Chapter 5 and Supplement 5S; Quiz 2 covers Chapter 11; Quiz 3 covers Chapter 3. Topics assessed in the quizzes are excluded from the non-cumulative final examination."],
      ["Where do I find Decision Theory and Linear Programming?","Supplement 5S: Decision Theory and Supplement 6S: Linear Programming are not in the printed text; they are provided online through McGraw-Hill Connect. Access to Connect is included in the Connect and Connect + Print textbook ISBNs."],
      ["How should I use the weekly practice questions?","Attempt each problem completely before opening the solution. Then diagnose whether an error came from model choice, setup, calculation, units, assumptions, or interpretation. Merely reading a worked solution does not create exam readiness."],
      ["How is attendance recorded?","Attendance is taken electronically using Poll Everywhere, supported by Carleton’s Educational Development Centre. Register with your cmail account and bring a connected device to class. Full credit requires missing no more than two classes and answering the Poll Everywhere attendance question in class; missing more than two classes reduces the attendance grade by 50%."],
      ["What calculator may I use?","Use an approved business calculator listed in the official outline, such as the Texas Instruments BA II Plus, HP 12C, Staples Financial Calculator, Sharp EL-738C, or HP 10bII. Confirm current examination rules before relying on a device."],
      ["What happens if I miss a quiz or examination?","Only circumstances recognized by University policy may qualify for accommodation. Contact the teaching team promptly and provide the required documentation; the instructor determines the appropriate form and schedule."],
      ["When and how is the final examination delivered?","The final examination is online, taken remotely. The University publishes its date and time. The final is individual, non-cumulative, and covers topics not assessed in the three quizzes. Students who do not obtain at least a 50% average on their term work (the quizzes) may be refused permission to take it and will fail the course."],
      ["Where are official requirements and current delivery details?","The <a href=\"downloads/BUSI-2301-Course-Outline.pdf\" target=\"_blank\" rel=\"noopener\">official course outline (PDF) ↗</a> governs requirements and policies. Brightspace provides current meeting details, quiz instructions, final-exam information, and weekly materials."],
      ["Is this browser site the official course outline?","No. This site explains the course design and helps you navigate it. The official PDF governs requirements and policies; current Brightspace instructions govern operational delivery."]
    ]
  };
})();
