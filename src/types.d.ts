type project = {
    id: number;
    title: string;
    logo: string;
    link: string;
    desc: string;
    blurHash: string;
    technologies: string[];
  };

type article = {
  title: string;
  desc?: string;
  link: string;
  views: string;
  published: string;
  tags: string[];
  external: boolean;
  readTime: string;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}