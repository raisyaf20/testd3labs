import code from "../assets/code.svg";
import issue from "../assets/alert-circle.svg";
import request from "../assets/brand-stackshare.svg";
import action from "../assets/pokeball.svg";
import project from "../assets/vocabulary.svg";
import wiki from "../assets/book.svg";
import security from "../assets/shield-lock.svg";
import insight from "../assets/chart-histogram.svg";
import setting from "../assets/settings.svg";

export type userActivity = {
  name: string;
  action: string;
  title: string;
  image: string;
  image_repo: string;
  desc_repo: string;
  date_time: string;
  starts: number;
  programing_language: string[];
};

type actionProjects = {
  name: string;
  icon: string;
};

type repos = {
  name_dir: string;
  folder: boolean;
  message_commit: string;
  date_commit: string;
};

export type projectRepo = {
  image: string;
  nama_user: string;
  action_git: string;
  repository: repos[];
};

export type usersSearch = {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};

export type repository = {
  name: string;
  image: string;
  repo: string;
  url: string;
};

export const activity: userActivity[] = [
  {
    name: "sandhikagalih",
    action: "starred Zeddnyx/ZTools ",
    title: "ZTools",
    image: "https://avatars.githubusercontent.com/u/2681894?s=64&v=4",
    image_repo: "https://avatars.githubusercontent.com/u/96564938?s=40&v=4",
    desc_repo: "A collection of useful tools for your daily needs",
    date_time: "2 days ago",
    starts: 8,
    programing_language: ["typescript"],
  },
  {
    name: "priambudiLB",
    action: "forked a repository",
    title: "jest-mongodb",
    image: "https://avatars.githubusercontent.com/u/36256082?s=64&v=4",
    image_repo: "https://avatars.githubusercontent.com/u/36256082?s=64&v=4",
    desc_repo:
      "An example of a simple API, that uses MongoDB as a database and Jest for testing.JavaScriptTrending repositories·",
    date_time: "3 days ago",
    starts: 8,
    programing_language: ["typescript"],
  },
  {
    name: "OpenBMB",
    action: "Trending repositories",
    title: "ChatDev",
    image: "trending",
    image_repo: "https://avatars.githubusercontent.com/u/89920203?s=40&v=4",
    desc_repo:
      "Create Customized Software using Natural Language Idea (through Multi-Agent Collaboration)",
    date_time: "3 days ago",
    starts: 1007,
    programing_language: ["typescript"],
  },
];

export const dummy: repository[] = [
  {
    name: "raisyaf20",
    image: "https://avatars.githubusercontent.com/u/88915735?s=16&v=4",
    repo: "project",
    url: "/project",
  },
  {
    name: "raisyaf20",
    image: "https://avatars.githubusercontent.com/u/88915735?s=16&v=4",
    repo: "movie-api",
    url: "https://github.com/raisyaf20/movie-api",
  },
  {
    name: "raisyaf20",
    image: "https://avatars.githubusercontent.com/u/88915735?s=16&v=4",
    repo: "Berita-php",
    url: "https://github.com/raisyaf20/berita",
  },
  {
    name: "raisyaf20",
    image: "https://avatars.githubusercontent.com/u/88915735?s=16&v=4",
    repo: "Todo-simple-vue",
    url: "https://github.com/raisyaf20/todo-simple",
  },
];

export const repoUser: projectRepo[] = [
  {
    image: "https://avatars.githubusercontent.com/u/88915735?s=48&v=4",
    nama_user: "raisyaf20",
    action_git: "Merge pull request from raisyaf20/detailFood",
    repository: [
      {
        name_dir: "public",
        folder: true,
        message_commit: "Create _redirects",
        date_commit: "8 months ago",
      },
      {
        name_dir: "src",
        folder: true,
        message_commit: "commit",
        date_commit: "8 months ago",
      },
      {
        name_dir: ".gitignore",
        folder: false,
        message_commit: "initial commit",
        date_commit: "8 months ago",
      },
      {
        name_dir: "README.md",
        folder: false,
        message_commit: "Updated READM. md",
        date_commit: "8 months ago",
      },
      {
        name_dir: "package-lock.json",
        folder: false,
        message_commit: "initial commit",
        date_commit: "8 months ago",
      },
    ],
  },
];

export const actionProject: actionProjects[] = [
  {
    name: "code",
    icon: code,
  },
  {
    name: "issues",
    icon: issue,
  },
  {
    name: "Pull Request",
    icon: request,
  },
  {
    name: "Actions",
    icon: action,
  },
  {
    name: "Projects",
    icon: project,
  },
  {
    name: "Wiki",
    icon: wiki,
  },
  {
    name: "Security",
    icon: security,
  },
  {
    name: "Insight",
    icon: insight,
  },
  {
    name: "Setting",
    icon: setting,
  },
];
