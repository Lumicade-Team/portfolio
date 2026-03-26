"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type NewsletterSubscriber = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

export default function AdminNewsletterPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubscribers = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .select("id, name, email, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      alert("Failed to load subscribers: " + error.message);
      setLoading(false);
      return;
    }

    setSubscribers(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-lumi-navy dark:text-lumi-offwhite">
            Newsletter Subscribers
          </h1>
          <p className="mt-1 text-sm text-body-color dark:text-body-color-dark">
            People subscribed from the contact page newsletter form
          </p>
        </div>
        <Link
          href="/admin"
          className="rounded-lg border border-stroke-stroke px-5 py-2.5 text-sm font-medium text-body-color transition hover:border-primary hover:text-primary dark:border-lumi-mutednav dark:text-body-color-dark"
        >
          Back to Posts
        </Link>
      </div>

      {loading ? (
        <div className="py-20 text-center text-body-color dark:text-body-color-dark">
          Loading subscribers...
        </div>
      ) : subscribers.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stroke-stroke py-20 text-center dark:border-lumi-mutednav">
          <p className="text-body-color dark:text-body-color-dark">No subscribers yet.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-stroke-stroke dark:border-lumi-mutednav">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stroke-stroke bg-lumi-lightblue dark:border-lumi-mutednav dark:bg-lumi-navy">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-body-color dark:text-body-color-dark">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-body-color dark:text-body-color-dark">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-body-color dark:text-body-color-dark">
                  Subscribed At
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stroke-stroke dark:divide-lumi-mutednav">
              {subscribers.map((subscriber) => (
                <tr
                  key={subscriber.id}
                  className="bg-white transition hover:bg-lumi-offwhite dark:bg-dark dark:hover:bg-lumi-navy/50"
                >
                  <td className="px-6 py-4 text-sm font-medium text-lumi-navy dark:text-lumi-offwhite">
                    {subscriber.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-body-color dark:text-body-color-dark">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-body-color dark:text-body-color-dark">
                    {new Date(subscriber.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}