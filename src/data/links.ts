import { Link } from "./types";

const getSrc = (path: string) =>
  new URL(`/src/assets/links/${path}`, import.meta.url).href;

const links: Link[] = [
  {
    title: "Google Scholar",
    src: getSrc("google-scholar.svg"),
    href: "https://scholar.google.com/citations?hl=en&user=E5qtoQEAAAAJ",
  },
  {
    title: "Github",
    src: getSrc("github.svg"),
    href: "https://github.com/spencrr",
  },
  {
    title: "LinkedIn",
    src: getSrc("linkedin.png"),
    href: "https://linkedin.com/in/spencer-schoenberg",
  },
  {
    title: "Handshake",
    src: getSrc("handshake.png"),
    href: "https://wisc.joinhandshake.com/users/18724712",
  },
  {
    title: "Contact Me",
    src: getSrc("mail.png"),
    href: "mailto:me@spencrr.dev",
  },
];

export default links;
