"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  // Don't show admin nav on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-lumi-offwhite dark:bg-lumi-navy">
      <nav className="border-b border-stroke-stroke bg-white dark:border-lumi-mutednav dark:bg-dark">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="flex items-center gap-3">
              <Image
                src="/assets/imgs/Lumicade-Solutions-Logo-4096.svg"
                alt="Lumicade"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-lg font-bold text-lumi-navy dark:text-lumi-offwhite">
                Admin
              </span>
            </Link>
            <div className="hidden items-center gap-4 sm:flex">
              <Link
                href="/admin"
                className={`text-sm font-medium transition ${
                  pathname === "/admin"
                    ? "text-primary"
                    : "text-body-color dark:text-body-color-dark hover:text-primary"
                }`}
              >
                All Posts
              </Link>
              <Link
                href="/admin/posts/new"
                className={`text-sm font-medium transition ${
                  pathname === "/admin/posts/new"
                    ? "text-primary"
                    : "text-body-color dark:text-body-color-dark hover:text-primary"
                }`}
              >
                New Post
              </Link>
              <Link
                href="/admin/newsletter"
                className={`text-sm font-medium transition ${
                  pathname === "/admin/newsletter"
                    ? "text-primary"
                    : "text-body-color dark:text-body-color-dark hover:text-primary"
                }`}
              >
                Subscribers
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-body-color dark:text-body-color-dark hover:text-primary"
            >
              View Site
            </Link>
            <button
              onClick={handleLogout}
              className="rounded-lg border border-stroke-stroke px-4 py-1.5 text-sm font-medium text-body-color dark:text-body-color-dark transition hover:border-red-500 hover:text-red-500 dark:border-lumi-mutednav"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
