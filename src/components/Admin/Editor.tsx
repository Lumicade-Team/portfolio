"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";

const MenuBar = ({ editor }: { editor: ReturnType<typeof useEditor> }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addImage = useCallback(async (file: File) => {
    if (!editor) return;
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage
      .from("blog-images")
      .upload(fileName, file);

    if (error) {
      alert("Failed to upload image: " + error.message);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("blog-images")
      .getPublicUrl(data.path);

    editor.chain().focus().setImage({ src: urlData.publicUrl }).run();
  }, [editor]);

  const addImageUrl = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addYoutube = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter YouTube URL:");
    if (url) {
      editor.commands.setYoutubeVideo({ src: url, width: 640, height: 360 });
    }
  }, [editor]);

  if (!editor) return null;

  const btnClass = (active?: boolean) =>
    `px-2.5 py-1.5 rounded-md text-sm font-medium transition ${
      active
        ? "bg-primary text-lumi-offwhite"
        : "bg-lumi-lightblue text-lumi-navy hover:bg-primary/10 dark:bg-lumi-mutednav dark:text-lumi-offwhite dark:hover:bg-lumi-mutednav/80"
    }`;

  return (
    <div className="flex flex-wrap gap-1.5 rounded-t-xl border border-b-0 border-stroke-stroke bg-lumi-offwhite p-3 dark:border-lumi-mutednav dark:bg-lumi-navy">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={btnClass(editor.isActive("bold"))}
      >
        B
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={btnClass(editor.isActive("italic"))}
      >
        I
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={btnClass(editor.isActive("strike"))}
      >
        S
      </button>

      <div className="mx-1 w-px bg-stroke-stroke dark:bg-lumi-mutednav" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={btnClass(editor.isActive("heading", { level: 2 }))}
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={btnClass(editor.isActive("heading", { level: 3 }))}
      >
        H3
      </button>

      <div className="mx-1 w-px bg-stroke-stroke dark:bg-lumi-mutednav" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={btnClass(editor.isActive("bulletList"))}
      >
        List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={btnClass(editor.isActive("orderedList"))}
      >
        1.
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={btnClass(editor.isActive("blockquote"))}
      >
        Quote
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={btnClass(editor.isActive("codeBlock"))}
      >
        Code
      </button>

      <div className="mx-1 w-px bg-stroke-stroke dark:bg-lumi-mutednav" />

      <button type="button" onClick={addImageUrl} className={btnClass()}>
        Image URL
      </button>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className={btnClass()}
      >
        Upload Image
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) addImage(file);
          e.target.value = "";
        }}
      />
      <button type="button" onClick={addYoutube} className={btnClass()}>
        YouTube
      </button>

      <div className="mx-1 w-px bg-stroke-stroke dark:bg-lumi-mutednav" />

      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={btnClass()}
      >
        HR
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className={btnClass() + " disabled:opacity-40"}
      >
        Undo
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className={btnClass() + " disabled:opacity-40"}
      >
        Redo
      </button>
    </div>
  );
};

export default function TipTapEditor({
  content,
  onChange,
}: {
  content: string;
  onChange: (html: string) => void;
}) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
      }),
      Image.configure({ inline: false, allowBase64: true }),
      Youtube.configure({ controls: true, nocookie: true }),
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Start writing your blog post..." }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-lg max-w-none dark:prose-invert prose-headings:text-lumi-navy dark:prose-headings:text-lumi-offwhite prose-a:text-primary focus:outline-none min-h-[400px] p-6",
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <div className="rounded-b-xl border border-stroke-stroke bg-white dark:border-lumi-mutednav dark:bg-dark">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
