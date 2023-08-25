export interface Course {
  title: string;
  institute: string;
  display?: string;
  subject: string;
  number: string;
  description: string;
  relevancy: {
    date: Date;
    display: string;
  };
}

export interface CourseSort {
  compareTo(a: Course, b: Course): number;
  display: string;
}

export interface Link {
  title: string;
  src: string;
  href: string;
}

export interface Project {
  title: string;
  subtitle: string;
  href: string;
  media: "img" | "vid";
  src: string;
  shouldInvert?: boolean;
  desc: string;
}

export interface ProjectConfig {
  getAnchorTag: (text: string, href: string) => string;
}
