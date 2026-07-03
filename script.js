const portfolio = window.PORTFOLIO_CONTENT;

if (!portfolio) {
  throw new Error("Missing PORTFOLIO_CONTENT. Check that content.js loads before script.js.");
}

const $ = (selector) => document.querySelector(selector);

const grids = {
  post: $("#post-projects"),
  camera: $("#camera-projects"),
  lighting: $("#lighting-projects"),
  art: $("#art-projects"),
};

const dialog = $("#project-dialog");
const dialogClose = $("#dialog-close");
const dialogMedia = $("#dialog-media");
const dialogCategory = $("#dialog-category");
const dialogTitle = $("#dialog-title");
const dialogDescription = $("#dialog-description");
const dialogRoleLabel = $("#dialog-role-label");
const dialogFocusLabel = $("#dialog-focus-label");
const dialogOutputLabel = $("#dialog-output-label");
const dialogRole = $("#dialog-role");
const dialogFocus = $("#dialog-focus");
const dialogOutput = $("#dialog-output");
const dialogLink = $("#dialog-link");

function setText(selector, value = "") {
  const element = $(selector);
  if (element) {
    element.textContent = value;
  }
}

function setMeta(selector, value) {
  const element = $(selector);
  if (element && value) {
    element.setAttribute("content", value);
  }
}

function getAbsoluteUrl(path) {
  if (!path) return "";
  if (/^(https?:|mailto:|tel:|file:)/.test(path)) return path;

  try {
    return new URL(path, portfolio.site.siteUrl).href;
  } catch {
    return path;
  }
}

function createLink(item, className) {
  const link = document.createElement("a");
  link.href = item.href;
  link.textContent = item.label;
  if (className) link.className = className;
  return link;
}

function renderSeo() {
  const { site } = portfolio;
  document.documentElement.lang = site.language || "zh-CN";
  document.title = site.browserTitle || site.title;

  setMeta('meta[name="description"]', site.description);
  setMeta('meta[name="author"]', site.author);
  setMeta('meta[name="keywords"]', site.keywords?.join(", "));
  setMeta('meta[property="og:title"]', site.title);
  setMeta('meta[property="og:description"]', site.description);
  setMeta('meta[property="og:image"]', getAbsoluteUrl(site.heroImage.src));

  const canonical = $('link[rel="canonical"]');
  if (canonical && site.siteUrl) {
    canonical.href = site.siteUrl;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.author,
    url: site.siteUrl,
    image: getAbsoluteUrl(site.heroImage.src),
    jobTitle: "Video Creator",
    description: site.description,
    knowsAbout: site.keywords,
    hasPart: portfolio.projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      genre: project.category,
      image: getAbsoluteUrl(project.image),
      url: getAbsoluteUrl(project.link || site.siteUrl),
    })),
  };

  $("#structured-data").textContent = JSON.stringify(schema);
}

function renderStaticText() {
  const { site, hero, intro, sections, process, contact, labels } = portfolio;

  setText("#site-brand", site.brand);
  $("#hero-image").src = site.heroImage.src;
  $("#hero-image").alt = site.heroImage.alt;

  const nav = $("#site-nav");
  nav.innerHTML = "";
  portfolio.navigation.forEach((item) => {
    nav.appendChild(createLink(item));
  });

  setText("#hero-eyebrow", hero.eyebrow);
  setText("#hero-title", hero.title);
  setText("#hero-copy", hero.copy);

  const heroActions = $("#hero-actions");
  heroActions.innerHTML = "";
  hero.actions.forEach((action) => {
    heroActions.appendChild(createLink(action, `button ${action.style || "secondary"}`));
  });

  const heroMeta = $("#hero-meta");
  heroMeta.innerHTML = "";
  hero.meta.forEach((item) => {
    const wrapper = document.createElement("div");
    const title = document.createElement("strong");
    const copy = document.createElement("span");
    title.textContent = item.title;
    copy.textContent = item.copy;
    wrapper.append(title, copy);
    heroMeta.appendChild(wrapper);
  });

  setText("#intro-eyebrow", intro.eyebrow);
  setText("#intro-title", intro.title);
  setText("#intro-copy", intro.copy);

  Object.entries(sections).forEach(([key, section]) => {
    setText(`#${key}-eyebrow`, section.eyebrow);
    setText(`#${key}-title`, section.title);
    setText(`#${key}-note`, section.note);
  });

  const filters = $("#post-filters");
  filters.innerHTML = "";
  sections.post.filters.forEach((filter, index) => {
    const button = document.createElement("button");
    button.className = `filter-pill${index === 0 ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.filter = filter.value;
    button.role = "tab";
    button.setAttribute("aria-selected", String(index === 0));
    button.textContent = filter.label;
    filters.appendChild(button);
  });

  setText("#process-eyebrow", process.eyebrow);
  setText("#process-title", process.title);

  const processGrid = $("#process-grid");
  processGrid.innerHTML = "";
  process.steps.forEach((step) => {
    const article = document.createElement("article");
    const number = document.createElement("span");
    const title = document.createElement("h3");
    const copy = document.createElement("p");
    number.textContent = step.number;
    title.textContent = step.title;
    copy.textContent = step.copy;
    article.append(number, title, copy);
    processGrid.appendChild(article);
  });

  setText("#contact-eyebrow", contact.eyebrow);
  setText("#contact-title", contact.title);

  const contactList = $("#contact-list");
  contactList.innerHTML = "";
  contact.items.forEach((item) => {
    const wrapper = document.createElement("div");
    const label = document.createElement("dt");
    const value = document.createElement("dd");
    label.textContent = item.label;
    if (item.href) {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.value;
      value.appendChild(link);
    } else {
      value.textContent = item.value;
    }
    wrapper.append(label, value);
    contactList.appendChild(wrapper);
  });

  const contactButton = $("#contact-button");
  contactButton.textContent = contact.buttonLabel;
  contactButton.href = `mailto:${contact.email}`;

  dialogClose.setAttribute("aria-label", labels.closeDialog);
  dialogRoleLabel.textContent = labels.role;
  dialogFocusLabel.textContent = labels.focus;
  dialogOutputLabel.textContent = labels.output;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.subcategory = project.subcategory || "";
  card.style.setProperty("--accent", project.accent || "#41b7a6");

  const thumb = document.createElement("div");
  thumb.className = "thumb";

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.imageAlt || `${project.title} 封面`;
  image.loading = "lazy";
  image.style.objectPosition = project.objectPosition || "center";
  thumb.appendChild(image);

  if (project.media?.type === "video") {
    const play = document.createElement("span");
    play.className = "play-indicator";
    play.setAttribute("aria-hidden", "true");
    thumb.appendChild(play);
  }

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = project.category;
  thumb.appendChild(tag);

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const meta = document.createElement("ul");
  meta.className = "meta-list";
  meta.setAttribute("aria-label", `${project.title} ${portfolio.labels.projectInfoSuffix}`);

  [
    [portfolio.labels.role, project.role],
    [portfolio.labels.focus, project.focus],
  ].forEach(([label, value]) => {
    const item = document.createElement("li");
    const term = document.createElement("span");
    const detail = document.createElement("span");
    term.textContent = label;
    detail.textContent = value;
    item.append(term, detail);
    meta.appendChild(item);
  });

  const button = document.createElement("button");
  button.className = "card-trigger";
  button.type = "button";
  button.dataset.project = project.id;
  button.textContent = portfolio.labels.detailsButton;

  body.append(title, description, meta, button);
  card.append(thumb, body);

  return card;
}

function renderProjects() {
  Object.values(grids).forEach((grid) => {
    grid.innerHTML = "";
  });

  portfolio.projects.forEach((project) => {
    grids[project.section]?.appendChild(createProjectCard(project));
  });
}

function renderDialogMedia(project) {
  dialogMedia.innerHTML = "";

  if (project.media?.type === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.poster = project.media.poster || project.image;

    const source = document.createElement("source");
    source.src = project.media.src;
    source.type = project.media.mimeType || "video/mp4";

    const fallback = document.createElement("a");
    fallback.href = project.media.src;
    fallback.textContent = portfolio.labels.videoFallback;

    video.append(source, fallback);
    dialogMedia.appendChild(video);
    return;
  }

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.imageAlt || `${project.title} 封面`;
  image.style.objectPosition = project.objectPosition || "center";
  dialogMedia.appendChild(image);
}

function openProject(projectId) {
  const project = portfolio.projects.find((item) => item.id === projectId);
  if (!project) return;

  renderDialogMedia(project);
  dialogCategory.textContent = project.category;
  dialogTitle.textContent = project.title;
  dialogDescription.textContent = project.description;
  dialogRole.textContent = project.role;
  dialogFocus.textContent = project.focus;
  dialogOutput.textContent = project.output;

  const link = project.link || project.media?.src || "#";
  dialogLink.href = link;
  dialogLink.textContent =
    project.media?.type === "video" ? portfolio.labels.openVideoLink : portfolio.labels.openProjectLink;
  dialogLink.toggleAttribute("hidden", !link || link === "#");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  }
}

function setPostFilter(filter) {
  document.querySelectorAll(".filter-pill").forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll("#post-projects .project-card").forEach((card) => {
    const isVisible = filter === "all" || card.dataset.subcategory === filter;
    card.hidden = !isVisible;
  });
}

renderSeo();
renderStaticText();
renderProjects();
setPostFilter(portfolio.sections.post.filters[0]?.value || "all");

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project]");
  if (trigger) {
    openProject(trigger.dataset.project);
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    setPostFilter(filter.dataset.filter);
  }
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
