export const SITE = {
  website: "https://blog.cjgarcia.uno", // replace this with your deployed domain
  author: "Christian Garcia",
  profile: "https://cjgarcia.uno/",
  desc: "Software Engineer sharing insights about software engineering, web development, data engineering, and building scalable technology solutions.",
  title: "cjgarcia.uno",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/cjgarcia12/my-blog/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Christian is in Wilmington, North Carolina
} as const;
