"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push(from);
      router.refresh();
    } else {
      setError("Invalid username or password");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium text-lumi-navy dark:text-lumi-offwhite">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
          className="w-full rounded-lg border border-stroke-stroke bg-lumi-offwhite px-4 py-3 text-base text-lumi-navy outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:text-lumi-offwhite dark:focus:border-primary"
        />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-lumi-navy dark:text-lumi-offwhite">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-lg border border-stroke-stroke bg-lumi-offwhite px-4 py-3 text-base text-lumi-navy outline-hidden focus:border-primary dark:border-lumi-mutednav dark:bg-lumi-navy dark:text-lumi-offwhite dark:focus:border-primary"
        />
      </div>

      {error && (
        <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-primary py-3 text-base font-medium text-lumi-offwhite transition hover:bg-primary/90 disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lumi-offwhite dark:bg-lumi-navy">
      <div className="w-full max-w-[400px] px-6">
        <div className="rounded-xl bg-white p-10 shadow-card dark:bg-dark">
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="/assets/imgs/Lumicade-Solutions-Logo-4096.svg"
              alt="Lumicade"
              width={64}
              height={64}
              className="mb-4 h-16 w-16"
            />
            <h1 className="text-xl font-bold text-lumi-navy dark:text-lumi-offwhite">
              Admin Login
            </h1>
            <p className="mt-1 text-sm text-body-color dark:text-body-color-dark">
              Sign in to manage your blog
            </p>
          </div>

          <Suspense fallback={<div className="py-8 text-center text-body-color dark:text-body-color-dark">Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
