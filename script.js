// FAQ FUNCTIONALITY
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}


// emails 
// const okEmailAddresses = ["regentholloway@ou.edu", 'regentnagel@ou.edu', 'regentstevenson@ou.edu', 'regentross@ou.edu', 'regentbraught@ou.edu', 'regentwaits@ou.edu', 'regentwilliams@ou.edu', 'daniel_hamlin@ou.edu', 'stitt@gov.ok.gov'];
// const ouEmailAddresses = ["mountford@ou.edu", "ldmiller@ou.edu", "cwalker@ou.edu", "dsurratt@ou.edu", "officeofthepresident@ou.edu", "andre.wright@ou.edu"];
const emailAddresses = ["regentholloway@ou.edu", 
"integrity@ou.edu",         'regentnagel@ou.edu', 'regentstevenson@ou.edu', 'regentross@ou.edu', 'regentbraught@ou.edu', 'regentwaits@ou.edu', 'daniel_hamlin@ou.edu', "mountford@ou.edu", "ldmiller@ou.edu",
 "studentaffairs@ou.edu",               "dsurratt@ou.edu", "officeofthepresident@ou.edu", "andre.wright@ou.edu"];

// SUBJECTS SYNONYMS - subjectLine built and used below 
const URGENTSynonyms = ["URGENT", "IMMEDIATE", "PRESSING", "CRITICAL", "IMPORTANT", "PRIORITY", "PRESSING"];
const demandSubjectSynonyms = ["DEMAND", "REQUEST", "ASK", "NEED", "ACTION"];
const colonSynonyms = [":", " - ", " -- "];

const reinstateSubjectSynonyms = ["REINSTATE", "RESTORE"];
const subjectBase = "MEL CURTH IN FULL STANDING";

// GENERAL SYNONYMS

// OU ADMIN paragraph 1
const greetings = ["Dear", "To", "Attention"];
const adminSynonyms = ["Administrator", "Admin", "Admin Team", "Admin Staff", "Admin Leadership"];
const closings = ["Sincerely", "Respectfully", "Best", "Yours Truly", "Yours Sincerely", "Yours Respectfully", "Yours Best", "Yours Truly"];

const concernedSynonyms = ["concerned", "outraged", "disappointed", "upset", "angry", "furious", "indignant", "displeased", "disgruntled"];
const writingSynonyms = ["writing", "emailing", "messaging", "contacting", "reaching out"];
const expressSynonyms = ["express", "voice", "state", "share", "make known", "make clear", "make clear"];
const extremeSynonyms = ["extreme", "utter", "complete", "absolute", "total", "full", "complete"];
const moralOutrageSynonyms = ["moral indignation", "moral indignation", "moral disgust"];
const decisionSynonyms = ["decision", "action", "move", "step", "response", "reaction", "reaction"];

// OU ADMIN paragraph 2
const setsSynonyms = ["sets", "places", "puts"];
const dangerousSynonyms = ["dangerous", "harmful", "destructive", "detrimental"];
const precedentSynonyms = ["precedent", "example", "model", "pattern", "guide"];
const universitySynonyms = ["University of Oklahoma", "OU", "University", "Institution"];

// OU ADMIN paragraph 3
const demandSynonyms = ["demand", "request", "ask", "required", "call for", " request for", "demand for"];
const immediatelySynonyms = ["immediately", "promptly", "swiftly", "quickly"];
const reinstateSynonyms = ["reinstate", "restore"];
const improperlySynonyms = ["improperly", "inappropriately", "unfairly", "unjustly", "unreasonably", "unwisely"];
const penalizedSynonyms = ["penalized", "punished", "disciplined", "sanctioned"];
const reaffirmSynonyms = ["reaffirm", "reinforce", "strengthen", "uphold", "maintain"];

// BOTH final line
const continuousSynonyms = ["continuous", "ongoing", "persistent", "unending", "unceasing"];

// OK STATE PARAGRAPH 3:
const oklahomaSynonyms = ["Oklahoma", "OK"];
const leadersSynonyms = ["leaders", "officials", "representatives", "government officials", "politicians", "lawmakers", "legislators", "policy-makers"];

// RELATIONSHIP
const relationship = ["a student", "a faculty/staff member", "an alumnus", "a community member"];

function generateRandomEmail() {
  // RANDOMIZED SYNONYMS everytime func is called
  const urgent = URGENTSynonyms[Math.floor(Math.random() * URGENTSynonyms.length)];
  const demandSubject = demandSubjectSynonyms[Math.floor(Math.random() * demandSubjectSynonyms.length)];
  const colon = colonSynonyms[Math.floor(Math.random() * colonSynonyms.length)];
  const reinstateSubject = reinstateSubjectSynonyms[Math.floor(Math.random() * reinstateSubjectSynonyms.length)];

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const admin = adminSynonyms[Math.floor(Math.random() * adminSynonyms.length)];
  const closing = closings[Math.floor(Math.random() * closings.length)];

  const concerned = concernedSynonyms[Math.floor(Math.random() * concernedSynonyms.length)];
  const writing = writingSynonyms[Math.floor(Math.random() * writingSynonyms.length)];
  const express = expressSynonyms[Math.floor(Math.random() * expressSynonyms.length)];
  const extreme = extremeSynonyms[Math.floor(Math.random() * extremeSynonyms.length)];
  const moralOutrage = moralOutrageSynonyms[Math.floor(Math.random() * moralOutrageSynonyms.length)];
  const decision = decisionSynonyms[Math.floor(Math.random() * decisionSynonyms.length)];

  const sets = setsSynonyms[Math.floor(Math.random() * setsSynonyms.length)];
  const dangerous = dangerousSynonyms[Math.floor(Math.random() * dangerousSynonyms.length)];
  const precedent = precedentSynonyms[Math.floor(Math.random() * precedentSynonyms.length)];
  const university = universitySynonyms[Math.floor(Math.random() * universitySynonyms.length)];

  const demand = demandSynonyms[Math.floor(Math.random() * demandSynonyms.length)];
  const immediately = immediatelySynonyms[Math.floor(Math.random() * immediatelySynonyms.length)];
  const reinstate = reinstateSynonyms[Math.floor(Math.random() * reinstateSynonyms.length)];
  const improperly = improperlySynonyms[Math.floor(Math.random() * improperlySynonyms.length)];
  const penalized = penalizedSynonyms[Math.floor(Math.random() * penalizedSynonyms.length)];
  const reaffirm = reaffirmSynonyms[Math.floor(Math.random() * reaffirmSynonyms.length)];

  const continuous = continuousSynonyms[Math.floor(Math.random() * continuousSynonyms.length)];

  const oklahoma = oklahomaSynonyms[Math.floor(Math.random() * oklahomaSynonyms.length)];
  const leaders = leadersSynonyms[Math.floor(Math.random() * leadersSynonyms.length)];

  // get 3 emails from each list and combine them into emailAddresses array!!
  // const randomOU = [...ouEmailAddresses].sort(() => Math.random() - 0.5).slice(0, 3);
  // const randomOK = [...ouEmailAddresses].sort(() => Math.random() - 0.5).slice(0, 3);
  // const emailAddresses = [...randomOU, ...randomOK];

  const subjectLine = `${urgent} ${demandSubject} ${colon} ${reinstateSubject} ${subjectBase}`
  const emailBody =

    `${greeting} ${admin} and ${oklahoma} ${leaders},

As a ${concerned} community member, I am ${writing} to ${express} ${extreme} ${moralOutrage} over your ${decision} to place Graduate Teaching Assistant Mel Curth on administrative leave. 

The OU administration’s capitulation ${sets} a ${dangerous} ${precedent} at the ${university} by emboldening a culture in which academic integrity is optional, and professors can be bullied into overriding their professional judgment to avoid political retaliation. 

We ${demand} that ${university} ${immediately} ${reinstate} Mel Curth and any other ${improperly} ${penalized} faculty in full standing, issue a public apology, and ${reaffirm} the right of OU faculty to grade based on academic performance, free from political interference.

In a time when higher education is under ${continuous} assault, stand on the right side of history now!

${closing},`;

  const encodedSubject = encodeURIComponent(subjectLine);
  const encodedBody = encodeURIComponent(emailBody);
  //const emailLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;
  const emailLink = `mailto:${emailAddresses.join(
    ","
  )}?subject=${encodedSubject}&body=${encodedBody}`;
  window.location.href = emailLink;

  emailCount("sendEmailButton")
}

// Attach the function to a button to track clicks 
document
  .getElementById("sendEmailButton")
  .addEventListener("click", generateRandomEmail);

async function emailCount(buttonID) {

  const url = 'https://oklahoma-tracking-368099953691.us-east4.run.app?button=0'

  const response = fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
