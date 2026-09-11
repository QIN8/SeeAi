export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const prefix = base.endsWith("/") ? base.slice(0, -1) : base;
  const isFile = /\.[a-z0-9]+$/i.test(normalized);

  if (normalized === "/") {
    return base.endsWith("/") ? base : `${base}/`;
  }

  if (isFile) {
    return `${prefix}${normalized}`;
  }

  const suffix = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${prefix}${suffix}`;
}

export const SITE = {
  title: "SeeAi",
  titleZh: "见AI",
  tagline: "看见路径，而不是口号",
  description:
    "SeeAi 是一份关于人工智能历史与发展路径的个人阅读笔记：从达特茅斯会议、专家系统、深度学习到 Transformer 与当代大语言模型。",
  author: "QIN8",
  locale: "zh-Hans",
};
