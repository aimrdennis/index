const baseUrl = import.meta.env.SITE;

export const SITE = {
  name: "AI Mr Dennis",

  title: "AI Mr Dennis | AI Mr Ferdy — Ekosistem Teknologi AI",

  description:
    "AI Mr Dennis adalah ekosistem teknologi AI independen yang dibangun oleh pengembang AI Mr Ferdy. Kami membuat berbagai tools AI, software, produk digital, dan eksperimen teknologi yang berfokus pada masalah nyata, dengan pengalaman yang sederhana dan mudah digunakan.",

  author: "AI Mr Dennis",

  locale: "id-ID",

  themeColor: "#0b0f19",

  image: "/images/og-cover.jpg",

  baseUrl,

  url(path = "") {
    return `${baseUrl}/${path}`.replace(/([^:]\/)\/+/g, "$1");
  },

  product(slug = "") {
    return this.url(`product/${slug}`);
  },

  tools(slug = "") {
    return this.url(`tools/${slug}`);
  },

  blog(slug = "") {
    return this.url(`blog/${slug}`);
  },

  blogAmp(slug = "") {
    return this.url(`blog/${slug}/amp`);
  },

  imageUrl(path = "") {
    return this.url(path);
  },

  social: {
    twitter: "@ai_mr_ferdy",
    github: "https://github.com/aimrferdy",
  },
};