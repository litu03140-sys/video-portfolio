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

  const image = document.createElement("img");
  image.src = media.poster || project.image;
  image.alt = `${project.title} 封面`;
  wrapper.appendChild(image);

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
  copy.textContent = project.description;

  const meta = document.createElement("dl");
  meta.className = "lossless-meta";
  [
    ["原片文件", media.originalFileName || "待填写"],
    ["原片大小", media.originalSize || "待填写"],
    ["打开方式", media.highQualityUrl ? "B 站原片页面" : "作品详情页"],
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

  if (media.highQualityUrl) {
    actions.appendChild(
      createAnchor("查看原片", media.highQualityUrl, "button primary", {
        target: "_blank",
        rel: "noopener",
      }),
    );
  }

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

  const list = document.querySelector("#lossless-list");
  list.innerHTML = "";
  videoProjects.forEach((project) => list.appendChild(renderProject(project)));
}

renderLosslessPage();
