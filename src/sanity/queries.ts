import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    tags,
    publishedAt,
    body
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    tags,
    publishedAt,
    body
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(publishedAt)].slug.current
`;
