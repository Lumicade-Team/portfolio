/**
 * Sanity Blog Post Schema
 *
 * Use this schema when setting up your Sanity Studio project.
 * Run `npm create sanity@latest` in a separate directory,
 * then add this schema to your studio's schemas folder.
 *
 * Schema definition (for Sanity Studio):
 *
 * - title: string (required)
 * - slug: slug (source: title)
 * - excerpt: text
 * - coverImage: image (hotspot enabled)
 * - tags: array of strings
 * - publishedAt: datetime
 * - body: array of blocks, images, and code blocks
 *   - block styles: normal, h2, h3, h4, blockquote
 *   - marks: bold, italic, code, strike-through, link
 *   - image: with alt and caption fields
 *   - code: code block
 */

export const postSchemaReference = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", type: "text" },
    { name: "coverImage", type: "image", options: { hotspot: true } },
    { name: "tags", type: "array", of: [{ type: "string" }] },
    { name: "publishedAt", type: "datetime" },
    { name: "body", type: "array", of: ["block", "image", "code"] },
  ],
};
