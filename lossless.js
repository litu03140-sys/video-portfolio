const portfolio = window.PORTFOLIO_CONTENT;

if (!portfolio) {
  throw new Error("Missing PORTFOLIO_CONTENT. Check that content.js loads before lossless.js.");
}

const lossless = portfolio.lossless;
const videoProjects = portfolio.projects.filter((project) => project.media?.type === "video");

function text(selector, value = "") {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function createAnchor(label, href, className, options = {}) {
  const link = document.createElement("a");
  link.textContent = label;
  link.href = href;
  link.className = className;
  if (options.target) link.target = options.target;
  if (options.rel) link.rel = options.rel;
  if (options.download) link.download = "";
  return link;
}

function renderPlayer(project) {
  const media = project.media;
  const wrapper = document.createElement("div");
  wrapper.className = "lossless-player";

  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.poster = media.poster || project.image;

  const source = document.createElement("source");
  source.src = media.losslessUrl || media.src;
  source.type = media.losslessUrl ? "video/quicktime" : media.mimeType || "video/mp4";
  video.appendChild(source);

  wrapper.appendChild(video);

  if (!media.losslessUrl) {
    const badge = document.createElement("p");
    badge.className = "lossless-empty";
    badge.textContent = lossless.emptyTitle;
    wrapper.appendChild(badge);
  }

  return wrapper;
}

function renderProject(project) {
  const media = project.media;
  const card = document.createElement("article");
  card.className = "lossless-card";
  card.id = project.id;
  card.style.setProperty("--accent", project.accent || "#3fb6a8");

  const player = renderPlayer(project);
  const body = document.createElement("div");
  body.className = "lossless-card-body";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = project.group;

  const title = document.createElement("h2");
  title.textContent = project.title;

  const copy = document.createElement("p");
  copy.textContent = media.losslessUrl ? project.description : lossless.emptyCopy;

  const meta = document.createElement("dl");
  meta.className = "lossless-meta";
  [
    ["原片文件", media.originalFileName || "待填写"],
    ["原片大小", media.originalSize || "待填写"],
    ["当前播放", media.losslessUrl ? "无损原片直链" : "网页预览版"],
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    item.append(dt, dd);
    meta.appendChild(item);
  });

  const actions = document.createElement("div");
  actions.className = "dialog-actions";

  if (media.losslessUrl) {
    actions.appendChild(
      createAnchor(lossless.directLink, media.losslessUrl, "button primary", {
        target: "_blank",
        rel: "noopener",
      }),
    );
    actions.appendChild(createAnchor(lossless.downloadLink, media.losslessUrl, "button secondary", { download: true }));
  } else {
    actions.appendChild(createAnchor("填写无损直链", "admin.html#lossless-url", "button primary"));
  }

  const label = document.createElement("label");
  label.className = "button secondary local-file-button";
  label.textContent = lossless.localPreview;

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "video/*,.mov,.mp4,.m4v";
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const video = player.querySelector("video");
    video.src = url;
    video.load();
    video.play().catch(() => {});
    const empty = player.querySelector(".lossless-empty");
    if (empty) empty.textContent = `正在本机预览：${file.name}`;
  });
  label.appendChild(input);
  actions.appendChild(label);

  body.append(eyebrow, title, copy, meta, actions);
  card.append(player, body);
  return card;
}

function renderLosslessPage() {
  text("#site-brand", portfolio.site.brand);
  text("#lossless-eyebrow", lossless.eyebrow);
  text("#lossless-title", lossless.title);
  text("#lossless-copy", lossless.copy);
  text("#lossless-back", lossless.backLink);
  text("#lossless-admin", lossless.adminLink);

  const list = document.querySelector("#lossless-list");
  list.innerHTML = "";
  videoProjects.forEach((project) => list.appendChild(renderProject(project)));
}

renderLosslessPage();
