const milestones = [
  {
    id: "resume", date: "2024-08-02", title: "Resume, final pass",
    lede: "",
    notes: [
      ["The proofread", "Remove every typo, test every link, and read each bullet aloud. Ask someone inside the company—or a senior engineer who hires—to tell you what they understand in ten seconds."],
      ["If you lack that network", "Use a university career center, alumni groups, engineering communities, or reciprocal peer reviews (your friend or your friends' friend. Yes! This is the time to ask for anything by any means, respectfully of course, and don't be ashamed about it).<br><br>Give reviewers a rubric: measurable impact, clarity, structure, and relevance to the role.<br><br><a href=\"https://www.youtube.com/watch?v=BYUy1yvjHxE\" target=\"_blank\" rel=\"noreferrer\">Check out this Youtube Video on Creating Your Resume for Google ↗</a>"]
    ],
  },
  {
    id: "referral", date: "2024-08-04", title: "Referral & application",
    lede: "My referrer submitted the referral and explained why they believed I was a fit. I received the invitation email, accepted it, and completed the job application.",
    notes: [
      ["Before asking", "<ul><li>A short intro about why you are reaching out.</li><li>Send the job link (Google doesn’t need this, but other companies usually do).</li><li>A fit summary (word limit varies by company). Make it easy for the person to give an honest, specific referral.</li></ul><p class=\"appreciation\">Appreciate their help.</p>"],
      ["After the invitation", "Apply promptly and check every field. A referral can improve context and visibility, but it does not replace a strong application or the interview bar."]
    ],
  },
  {
    id: "survey", date: "2024-09-16", title: "Candidate survey",
    lede: "",
    notes: [
      ["What I remember", "I don’t remember the survey well enough to describe its contents accurately. I approached it thoughtfully and answered based on my actual experience rather than trying to reverse-engineer a perfect candidate profile. If you receive something similar, follow the instructions provided for your application and answer authentically."]
    ],
  },
  {
    id: "oa", date: "2024-09-23", title: "Online assessment",
    lede: "My 2024 online assessment included several coding problems under time pressure. I had enough time to reason carefully, test my solutions, and revisit edge cases instead of racing to submit. The format may be different for other roles or application cycles.",
    notes: [
      ["Use the first minutes", "Read all questions, estimate difficulty, and choose an order. Clarify input constraints, then name the data structure and complexity you are targeting before you code."],
      ["Test like an engineer", "Test small, empty, duplicate, boundary, and worst-case inputs. In my assessment, I wrote both my own test cases and their expected answers. If you get an expected answer wrong and then adjust your solution to match it, you can end up convincing yourself that incorrect code is correct. Work out each expected answer independently before using it to judge your solution. Unlike a platform such as LeetCode, where the judge checks your output against answers you don't have to supply, this part felt more like working at a whiteboard: you are responsible for checking your own reasoning. Re-read the prompt before submitting. Assessment formats vary, so treat the instructions provided with your assessment as the source of truth."]
    ],
  },
  {
    id: "invite", date: "2024-10-01", title: "On-site invitation",
    lede: "After passing the assessment, I was invited to the interview loop. I had some flexibility to choose the date, which meant I could protect focused preparation time rather than accepting the earliest slot from panic.",
    notes: [
      ["Schedule honestly", "Choose enough runway to regain fluency, do mock interviews, and sleep normally. Ask your coordinator about timing, format, breaks, and accommodations before the day."],
      ["Prepare the environment", "Google’s official virtual interview guide recommends joining early, checking audio and video, and having backup options. Practice in the same kind of collaborative editor you will use."]
    ],
  },
  {
    id: "onsite", date: "2024-10-18", title: "Interview day",
    lede: "My interview loop included multiple technical rounds and a behavioral round. The sequence and exact format can vary by role, level, and candidate.",
    notes: [
      ["Technical rounds", "Clarify the problem, state your assumptions, discuss trade-offs, and narrate your thinking. Write readable code, test it aloud, and understand its time and space complexity. <strong>Keep your written work organized enough that another engineer could follow your approach and testing without additional explanation.</strong> That habit helped me considerably during my interviews."],
      ["Behavioral round", "Prepare a small library of real stories about ambiguity, conflict, failure, leadership, and learning. Use situation, action, and result—but keep the emphasis on your decisions and reflection. <a href=\"https://www.amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep\" target=\"_blank\" rel=\"noreferrer\">See Amazon’s behavioral interview guide for example topics ↗</a>"]
    ],
  },
  {
    id: "passed", date: "2024-10-31", title: "I passed the loop",
    lede: "On October 31, I received the email: I had passed the interviews. Geez—I cannot put into words how mentally tough it was to wait for the result. Let’s just say I was dreaming about it every single day. Then the team-match phase began: finding a team where both sides see a genuine fit.",
    notes: [
      ["Before you celebrate", "Passing the loop is significant, but it is not always the final offer. Ask your recruiter what remains, what can vary, and how to prepare for match conversations."],
      ["The team-match questionnaire", "After the interviews, recruiting asked about my interests and practical constraints as part of the matching process. The exact questions and process can change, so use the information provided by your recruiter. Separately, I found it useful to think about the environment where I learn best and what I wanted to ask a future manager."]
    ],
  },
  {
    id: "match", date: "2024-11-04", title: "Team match",
    lede: "I spoke with one team, we both said yes, and I stopped matching. I would not recommend making your decision before talking to more than one team. I had heard horror stories about people rejecting a match and then not matching at all. As an international student whose time in the U.S. always felt like it was on the clock, I also had an intense urge to start working as soon as possible.",
    notes: [
      ["Questions worth asking", "What would I own in 90 days? How does the manager give feedback? What happened to the last new grad? How is on-call handled? Team match is tough because it is almost impossible to truly know a team before joining it, and even reassuring answers can turn into false promises."],
      ["Do not optimize for two weeks", "A mismatch at the beginning can become amplified over time. Entering Google one or two weeks earlier is probably not worth the future cost to your mental health. Meet more than one team when you can, even when immigration pressure makes speed feel like safety. Okay—let me move on before I scare you guys."]
    ],
  },
  {
    id: "offer", date: "2024-11-05", title: "Offer accepted",
    lede: "The team said yes back, and I signed one day after matching. That speed tells you about my urgency—not the timeline you should expect or copy.",
    notes: [
      ["Read before signing", "Understand compensation, location, start date, contingencies, and any deadline. Write down open questions and ask the recruiter; urgency is not a reason to leave important terms unclear."],
      ["My honest hindsight", "I am grateful for the outcome, but I would give myself permission to meet more teams. A deliberate decision compounds through mentorship, learning, and everyday happiness."]
    ],
  },
  {
    id: "start", date: "2024-12-02", title: "Joined Google",
    lede: "I started on December 2. I had a little flexibility—roughly the last week of November or the first week of December—and chose the date that worked for the transition.",
    notes: [
      ["Use the flexibility", "Coordinate graduation, relocation, travel, and recovery. Confirm the date with recruiting and immigration counsel where relevant; do not make assumptions about work authorization timing."],
      ["Arrive ready to learn", "The offer ends one uncertain chapter and begins a new one. Give yourself time to understand the codebase, relationships, expectations, and the rhythm of the team you chose."]
    ],
  }
];

const months = [7, 8, 9, 10, 11];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const track = document.querySelector("#calendar-track");
let activeEvent = 0;
let activeMonth = 0;

function daysBetween(firstDate, secondDate) {
  const [firstYear, firstMonth, firstDay] = firstDate.split("-").map(Number);
  const [secondYear, secondMonth, secondDay] = secondDate.split("-").map(Number);
  return Math.round((Date.UTC(secondYear, secondMonth - 1, secondDay) - Date.UTC(firstYear, firstMonth - 1, firstDay)) / 86400000);
}

function shortTitle(title) {
  return title.replace("Resume, final pass", "RESUME").replace("Referral & application", "APPLICATION").replace("Candidate survey", "SURVEY").replace("Online assessment", "ASSESSMENT").replace("On-site invitation", "INVITATION").replace("Interview day", "INTERVIEW").replace("I passed the loop", "RESULT").replace("Team match", "TEAM MATCH").replace("Offer accepted", "OFFER").replace("Joined Google", "START DATE");
}

function buildCalendars() {
  months.forEach((monthNumber, monthIndex) => {
    const month = document.createElement("section");
    month.className = `month${monthIndex === 0 ? " is-mobile-active" : ""}`;
    month.dataset.monthIndex = monthIndex;
    const firstDay = new Date(2024, monthNumber, 1).getDay();
    const dayCount = new Date(2024, monthNumber + 1, 0).getDate();
    month.innerHTML = `<div class="month-head"><span class="month-name">${monthNames[monthNumber]}</span><span class="month-index">${String(monthIndex + 8).padStart(2, "0")} / 2024</span></div><div class="weekdays">${["S","M","T","W","T","F","S"].map(d => `<span>${d}</span>`).join("")}</div><div class="days"></div>`;
    const days = month.querySelector(".days");
    for (let blank = 0; blank < firstDay; blank++) days.insertAdjacentHTML("beforeend", `<span class="day-spacer"></span>`);
    for (let day = 1; day <= dayCount; day++) {
      const date = `2024-${String(monthNumber + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const eventIndex = milestones.findIndex(event => event.date === date);
      const el = document.createElement(eventIndex >= 0 ? "button" : "span");
      el.className = `day${eventIndex >= 0 ? " has-event" : ""}`;
      el.textContent = day;
      if (eventIndex >= 0) {
        el.dataset.eventIndex = eventIndex;
        el.dataset.analyticsEvent = "select_milestone";
        el.dataset.analyticsLabel = milestones[eventIndex].id;
        el.setAttribute("aria-label", `${monthNames[monthNumber]} ${day}: ${milestones[eventIndex].title}`);
        el.addEventListener("click", () => selectEvent(eventIndex, true));
      }
      days.appendChild(el);
    }
    track.appendChild(month);
  });
}

function selectEvent(index, scroll = false) {
  activeEvent = (index + milestones.length) % milestones.length;
  const event = milestones[activeEvent];
  const date = new Date(`${event.date}T12:00:00`);
  document.querySelectorAll(".day.has-event").forEach(day => day.classList.toggle("is-active", Number(day.dataset.eventIndex) === activeEvent));
  document.querySelector("#detail-number").textContent = String(activeEvent + 1).padStart(2, "0");
  const detailDate = document.querySelector("#detail-date");
  detailDate.textContent = `${monthNames[date.getMonth()].toUpperCase()} ${String(date.getDate()).padStart(2,"0")}, 2024`;
  detailDate.dateTime = event.date;
  const previous = milestones[activeEvent - 1];
  const next = milestones[activeEvent + 1];
  document.querySelector("#detail-prev-gap").textContent = previous ? `← ${daysBetween(previous.date, event.date)} DAYS FROM ${shortTitle(previous.title)}` : "START OF TIMELINE";
  document.querySelector("#detail-next-gap").textContent = next ? `${daysBetween(event.date, next.date)} DAYS TO ${shortTitle(next.title)} →` : "END OF TIMELINE";
  document.querySelector("#detail-title").textContent = event.title;
  const detailLede = document.querySelector("#detail-lede");
  detailLede.textContent = event.lede;
  detailLede.hidden = !event.lede;
  document.querySelector("#detail-notes").innerHTML = event.notes.map(([title, copy]) => `<div class="note"><b>${title}</b><div class="note-copy">${copy}</div></div>`).join("");
  document.querySelector("#event-count").textContent = `${String(activeEvent + 1).padStart(2,"0")} / ${String(milestones.length).padStart(2,"0")}`;
  const newMonthIndex = months.indexOf(date.getMonth());
  if (window.innerWidth <= 760 && newMonthIndex !== activeMonth) setMobileMonth(newMonthIndex);
  if (scroll) document.querySelector("#event-detail").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setMobileMonth(index) {
  activeMonth = Math.max(0, Math.min(months.length - 1, index));
  document.querySelectorAll(".month").forEach((month, i) => month.classList.toggle("is-mobile-active", i === activeMonth));
  document.querySelector("#mobile-month-label").textContent = `${monthNames[months[activeMonth]]} 2024`;
  document.querySelector("#track-progress-fill").style.width = `${(activeMonth + 1) * 20}%`;
}

buildCalendars();
selectEvent(0);

document.querySelector("#prev-event").addEventListener("click", () => selectEvent(activeEvent - 1));
document.querySelector("#next-event").addEventListener("click", () => selectEvent(activeEvent + 1));
document.querySelector("#prev-month").addEventListener("click", () => setMobileMonth(activeMonth - 1));
document.querySelector("#next-month").addEventListener("click", () => setMobileMonth(activeMonth + 1));
document.querySelector("#track-left").addEventListener("click", () => track.scrollBy({ left: -track.clientWidth * .72, behavior: "smooth" }));
document.querySelector("#track-right").addEventListener("click", () => track.scrollBy({ left: track.clientWidth * .72, behavior: "smooth" }));
document.querySelector("[data-scroll-to='timeline']").addEventListener("click", () => document.querySelector("#timeline").scrollIntoView({ behavior: "smooth" }));

track.addEventListener("scroll", () => {
  if (window.innerWidth > 760) {
    const max = track.scrollWidth - track.clientWidth;
    const visible = Math.max(20, ((track.scrollLeft / max) * 80) + 20);
    document.querySelector("#track-progress-fill").style.width = `${visible}%`;
  }
});
