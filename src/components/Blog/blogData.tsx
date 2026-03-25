import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Why We Built Lumicade Solutions",
    paragraph:
      "The story behind our decision to build a software house that also ships its own SaaS products — and how that dual focus benefits our clients.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Lumicade Team",
      image: "/images/blog/author-03.png",
      designation: "Founding Team",
    },
    tags: ["company"],
    publishDate: "2026",
  },
  {
    id: 2,
    title: "How We Approach AI Automation",
    paragraph:
      "Our AI-first methodology explained: from identifying repetitive workflows to deploying intelligent pipelines that save real hours every week.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Lumicade Team",
      image: "/images/blog/author-02.png",
      designation: "Engineering",
    },
    tags: ["engineering"],
    publishDate: "2026",
  },
  {
    id: 3,
    title: "Building Cross-Platform Mobile Apps That Scale",
    paragraph:
      "Lessons learned from shipping mobile applications across industries — from food delivery to enterprise fleet management.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lumicade Team",
      image: "/images/blog/author-03.png",
      designation: "Engineering",
    },
    tags: ["mobile"],
    publishDate: "2026",
  },
];
export default blogData;
