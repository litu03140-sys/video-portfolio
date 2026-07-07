const portfolio = window.PORTFOLIO_CONTENT;

if (!portfolio) {
  throw new Error("Missing PORTFOLIO_CONTENT. Check that content.js loads before script.js.");
}

const $ = (selector) => document.querySelector(selector);

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
const dialogGallery = $("#dialog-gallery");
const dialogActions = $("#dialog-actions");

function setText(selector, value = "") {
  const element = $(selector);
  if (element) element.textContent = value;
}

function setMeta(selector, value) {
  const element = $(selector);
  if (element && value) element.setAttribute("content", value);
}

function getAbsoluteUrl(path) {
  if (!path) return "";
  if (/^(https?:|mailto:|tel:|file:)/.test(path)) return path;
  return new URL(path, portfolio.site.siteUrl).href;
}

function getProject(id) {
  return portfolio.projects.find((project) => project.id === id);
}

function createLink(item, className) {
  const link = document.createElement("a");
  link.href = item.href;
  link.textContent = item.label;
  if (className) link.className = className;
  if (item.target) link.target = item.target;
  if (item.rel) link.rel = item.rel;
  return link;
}

function renderSeo() {
  const { site } = portfolio;
  document.title = site.browserTitle || site.title;
  document.documentElement.lang = site.language || "zh-CN";

  setMeta('meta[name="description"]', site.description);
  setMeta('meta[name="author"]', site.author);
  setMeta('meta[name="keywords"]', site.keywords.join(", "));
  setMeta('meta[property="og:title"]', site.title);
  setMeta('meta[property="og:description"]', site.description);
  setMeta('meta[property="og:image"]', getAbsoluteUrl(site.heroImage.src));

  const canonical = $('link[rel="canonical"]');
  if (canonical) canonical.href = site.siteUrl;

  $("#structured-data").textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.author,
    url: site.siteUrl,
    jobTitle: "Video Creator",
    description: site.description,
    image: getAbsoluteUrl(site.heroImage.src),
    knowsAbout: site.keywords,
    hasPart: portfolio.projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      genre: project.group,
      image: getAbsoluteUrl(project.image),
      url: getAbsoluteUrl(project.media?.highQualityUrl || project.media?.src || site.siteUrl),
    })),
  });
}

function renderStaticText() {
  const { site, hero, showcase, works, about, labels } = portfolio;

  setText("#site-brand", site.brand);
  const heroImage = $("#hero-image");
  if (heroImage) {
    heroImage.src = site.heroImage.src;
    heroImage.alt = site.heroImage.alt;
  }

  const nav = $("#site-nav");
  nav.innerHTML = "";
  portfolio.navigation.forEach((item) => nav.appendChild(createLink(item)));

  setText("#hero-eyebrow", hero.eyebrow);
  setText("#hero-title", hero.title);
  setText("#hero-role", hero.role);
  setText("#hero-copy", hero.copy);

  const photo = $("#profile-photo");
  if (photo && hero.photo) {
    photo.src = hero.photo.src;
    photo.alt = hero.photo.alt || hero.title;
  }

  const facts = $("#profile-facts");
  facts.innerHTML = "";
  hero.facts.forEach((item) => {
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
    facts.appendChild(wrapper);
  });

  const tags = $("#profile-tags");
  tags.innerHTML = "";
  hero.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    tags.appendChild(item);
  });

  const heroActions = $("#hero-actions");
  heroActions.innerHTML = "";
  hero.actions.forEach((action) => {
    heroActions.appendChild(createLink(action, `button ${action.style || "secondary"}`));
  });

  setText("#showcase-eyebrow", showcase.eyebrow);
  setText("#showcase-title", showcase.title);
  setText("#showcase-note", showcase.note);
  setText("#works-eyebrow", works.eyebrow);
  setText("#works-title", works.title);
  setText("#works-note", works.note);
  setText("#about-eyebrow", about.eyebrow);
  setText("#about-title", about.title);

  const aboutCopy = $("#about-copy");
  aboutCopy.innerHTML = "";
  about.paragraphs.forEach((paragraph) => {
    const element = document.createElement("p");
    element.textContent = paragraph;
    aboutCopy.appendChild(element);
  });

  dialogClose.setAttribute("aria-label", labels.closeDialog);
  dialogRoleLabel.textContent = labels.role;
  dialogFocusLabel.textContent = labels.focus;
  dialogOutputLabel.textContent = labels.output;
}

function createProjectButton(project, variant = "standard", index = 0) {
  const button = document.createElement("button");
  button.className = `project-window ${variant}`;
  button.type = "button";
  button.dataset.project = project.id;
  button.style.setProperty("--accent", project.accent || "#3fb6a8");

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = `${project.title} 封面`;
  image.loading = variant === "spotlight" ? "eager" : "lazy";

  const overlay = document.createElement("span");
  overlay.className = "window-overlay";

  const play = document.createElement("span");
  play.className = project.media?.type === "video" ? "play-indicator" : "detail-indicator";
  play.setAttribute("aria-hidden", "true");

  const number = document.createElement("span");
  number.className = "window-number";
  number.textContent = String(index + 1).padStart(2, "0");

  const text = document.createElement("span");
  text.className = "window-text";

  const group = document.createElement("span");
  group.className = "window-group";
  group.textContent = project.group;

  const title = document.createElement("strong");
  title.textContent = project.title;

  const short = document.createElement("span");
  short.textContent = project.short;

  text.append(group, title, short);
  button.append(image, overlay, number, play, text);
  return button;
}

function renderProjects() {
  const spotlight = $("#spotlight-grid");
  if (spotlight) {
    spotlight.innerHTML = "";
    portfolio.showcase.primaryProjectIds
      .map(getProject)
      .filter(Boolean)
      .forEach((project, index) => spotlight.appendChild(createProjectButton(project, "spotlight", index)));
  }

  const categoryStrip = $("#category-strip");
  if (categoryStrip) {
    categoryStrip.innerHTML = "";
    portfolio.categoryTiles.forEach((tile) => {
      const button = document.createElement("button");
      button.className = "category-tile";
      button.type = "button";
      button.dataset.project = tile.projectId;
      const number = document.createElement("small");
      const label = document.createElement("strong");
      const note = document.createElement("span");
      const project = getProject(tile.projectId);
      if (project?.accent) button.style.setProperty("--accent", project.accent);
      number.textContent = tile.number || "";
      label.textContent = tile.label;
      note.textContent = tile.note;
      button.append(number, label, note);
      categoryStrip.appendChild(button);
    });
  }

  const grid = $("#project-grid");
  grid.innerHTML = "";
  portfolio.projects.forEach((project, index) => {
    grid.appendChild(createProjectButton(project, "standard", index));
  });
}

function renderDialogMedia(project) {
  dialogMedia.innerHTML = "";

  if (project.media?.embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = project.media.embedUrl;
    iframe.title = project.title;
    iframe.allow = "fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;
    dialogMedia.appendChild(iframe);
    return;
  }

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
  image.alt = `${project.title} 封面`;
  dialogMedia.appendChild(image);
}

function renderDialogActions(project) {
  dialogActions.innerHTML = "";
  const highQualityUrl = project.media?.highQualityUrl;
  const fallbackUrl = project.link || project.media?.src;

  if (highQualityUrl) {
    dialogActions.appendChild(
      createLink(
        { label: portfolio.labels.openVideoLink, href: highQualityUrl, target: "_blank", rel: "noreferrer" },
        "button primary",
      ),
    );
  }

  if (!highQualityUrl && fallbackUrl) {
    dialogActions.appendChild(
      createLink(
        { label: portfolio.labels.openProjectLink, href: fallbackUrl, target: "_blank", rel: "noreferrer" },
        "button secondary",
      ),
    );
  }
}

function renderDialogGallery(project) {
  dialogGallery.innerHTML = "";
  const gallery = project.gallery || [];
  if (!gallery.length) return;

  const title = document.createElement("h3");
  title.textContent = project.galleryTitle || "相关图片 / 制作资料";

  const grid = document.createElement("div");
  grid.className = "gallery-grid";

  gallery.forEach((item) => {
    const link = document.createElement("a");
    link.className = "gallery-item";
    link.href = item.src;
    link.target = "_blank";
    link.rel = "noreferrer";

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt || item.caption || project.title;
    image.loading = "lazy";

    const caption = document.createElement("span");
    caption.textContent = item.caption || "";

    link.append(image, caption);
    grid.appendChild(link);
  });

  dialogGallery.append(title, grid);
}

function openProject(projectId) {
  const project = getProject(projectId);
  if (!project) return;

  renderDialogMedia(project);
  renderDialogGallery(project);
  renderDialogActions(project);
  dialogCategory.textContent = project.group;
  dialogTitle.textContent = project.title;
  dialogDescription.textContent = project.description;
  dialogRole.textContent = project.role;
  dialogFocus.textContent = project.focus;
  dialogOutput.textContent = project.output;

  if (typeof dialog.showModal === "function") dialog.showModal();
}

renderSeo();
renderStaticText();
renderProjects();

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project]");
  if (trigger) openProject(trigger.dataset.project);
});

dialogClose.addEventListener("click", () => {
  dialog.close();
  dialogMedia.innerHTML = "";
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
    dialogMedia.innerHTML = "";
  }
});
