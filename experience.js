const portfolio = window.PORTFOLIO_CONTENT;

if (!portfolio) {
  throw new Error("Missing PORTFOLIO_CONTENT. Check that content.js loads before experience.js.");
}

const data = portfolio.experience;

function $(selector) {
  return document.querySelector(selector);
}

function setText(selector, value = "") {
  const element = $(selector);
  if (element) element.textContent = value;
}

function listItems(items) {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

function renderStats() {
  const root = $("#experience-stats");
  root.innerHTML = "";
  data.stats.forEach((item) => {
    const card = document.createElement("div");
    const value = document.createElement("strong");
    const label = document.createElement("span");
    value.textContent = item.value;
    label.textContent = item.label;
    card.append(value, label);
    root.appendChild(card);
  });
}

function renderRoles() {
  const root = $("#role-strip");
  root.innerHTML = "";
  data.targetRoles.forEach((role) => {
    const item = document.createElement("span");
    item.textContent = role;
    root.appendChild(item);
  });
}

function renderStrengths() {
  const root = $("#strength-grid");
  root.innerHTML = "";
  data.strengths.forEach((item, index) => {
    const card = document.createElement("article");
    const number = document.createElement("small");
    const title = document.createElement("h3");
    const text = document.createElement("p");
    number.textContent = String(index + 1).padStart(2, "0");
    title.textContent = item.title;
    text.textContent = item.text;
    card.append(number, title, text);
    root.appendChild(card);
  });
}

function renderSkills() {
  const root = $("#skill-grid");
  root.innerHTML = "";
  data.skillGroups.forEach((group) => {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = group.title;
    card.append(title, listItems(group.items));
    root.appendChild(card);
  });
}

function renderTimeline() {
  const root = $("#timeline-list");
  root.innerHTML = "";
  data.timeline.forEach((item) => {
    const card = document.createElement("article");
    card.className = "timeline-card";

    const meta = document.createElement("div");
    meta.className = "timeline-meta";
    const type = document.createElement("span");
    const period = document.createElement("strong");
    type.textContent = item.type;
    period.textContent = item.period;
    meta.append(type, period);

    const header = document.createElement("div");
    header.className = "timeline-header";
    const titleWrap = document.createElement("div");
    const title = document.createElement("h3");
    const role = document.createElement("p");
    title.textContent = item.title;
    role.textContent = item.role;
    titleWrap.append(title, role);

    const tags = document.createElement("div");
    tags.className = "timeline-tags";
    item.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.textContent = tag;
      tags.appendChild(tagEl);
    });

    header.append(titleWrap, tags);
    card.append(meta, header, listItems(item.points));

    if (item.projects?.length) {
      const projects = document.createElement("div");
      projects.className = "project-roles";
      item.projects.forEach((project) => {
        const chip = document.createElement("span");
        chip.textContent = project;
        projects.appendChild(chip);
      });
      card.appendChild(projects);
    }

    root.appendChild(card);
  });
}

function renderEvidence() {
  setText("#evidence-title", data.evidence.title);
  setText("#evidence-copy", data.evidence.copy);

  const root = $("#evidence-grid");
  root.innerHTML = "";

  if (data.evidence.images.length) {
    data.evidence.images.forEach((image) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const caption = document.createElement("figcaption");
      img.src = image.src;
      img.alt = image.alt || image.title || "经历佐证图片";
      img.loading = "lazy";
      caption.textContent = image.title || image.alt || "";
      figure.append(img, caption);
      root.appendChild(figure);
    });
    return;
  }

  data.evidence.placeholders.forEach((label) => {
    const slot = document.createElement("div");
    slot.className = "evidence-placeholder";
    const mark = document.createElement("span");
    const text = document.createElement("strong");
    mark.textContent = "+";
    text.textContent = label;
    slot.append(mark, text);
    root.appendChild(slot);
  });
}

function renderSimpleList(selector, items) {
  const root = $(selector);
  root.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    root.appendChild(li);
  });
}

function renderPage() {
  document.title = `经历与能力 | ${portfolio.site.author}作品集`;
  setText("#experience-brand", portfolio.site.brand);
  setText("#experience-eyebrow", data.eyebrow);
  setText("#experience-title", data.title);
  setText("#experience-copy", data.copy);
  renderStats();
  renderRoles();
  renderStrengths();
  renderSkills();
  renderTimeline();
  renderEvidence();
  renderSimpleList("#award-list", data.awards);
  renderSimpleList("#course-list", data.courses);
}

renderPage();
