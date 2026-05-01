"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AtSign, MessageSquare, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const DEFAULT_MESSAGE =
  "Hi Lumicade team, I would like an AI pipeline demo for my use case.";

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

interface EnquiryDialogProps {
  trigger: React.ReactNode;
}

const EnquiryDialog = ({ trigger }: EnquiryDialogProps) => {
  const router = useRouter();
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const rawWhatsappNumber = "601124104917";
  const whatsappNumber = (rawWhatsappNumber || "").replace(/\D/g, "");

  const finalMessage = useMemo(() => {
    const trimmed = message.trim();
    return trimmed.length > 0 ? trimmed : DEFAULT_MESSAGE;
  }, [message]);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(
      `Name: ${name.trim() || "Anonymous"}\nEmail: ${email.trim() || "Not provided"}\n\n${finalMessage}`,
    );
    if (whatsappNumber && whatsappNumber.trim().length > 0) {
      return `https://wa.me/${whatsappNumber}?text=${text}`;
    }
    return `https://api.whatsapp.com/send?text=${text}`;
  }, [email, finalMessage, name, whatsappNumber]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: finalMessage,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error || "Failed to send your enquiry.");
      }

      router.push("/thank-you");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send your enquiry.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleWhatsApp() {
    window.open(whatsappHref, "_blank", "noreferrer");
    router.push("/thank-you");
  }

  const fieldClass =
    "w-full rounded-xl border border-outline-variant/50 bg-surface-container/60 px-4 py-3 text-sm text-on-surface outline-none placeholder:text-on-surface-variant/50 focus:border-primary/50 backdrop-blur-sm";

  return (
    <Dialog open={formOpen} onOpenChange={setFormOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl font-light tracking-normal">
            Start a Project
          </DialogTitle>
          <DialogDescription className="text-on-surface-variant">
            Tell us about your vision and we&apos;ll get back to you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label
              htmlFor="dialog-name"
              className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-on-surface-variant"
            >
              <User size={12} />
              Name
            </label>
            <input
              id="dialog-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor="dialog-email"
              className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-on-surface-variant"
            >
              <AtSign size={12} />
              Email
            </label>
            <input
              id="dialog-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor="dialog-message"
              className="mb-1.5 flex items-center gap-1.5 text-xs font-medium text-on-surface-variant"
            >
              <MessageSquare size={12} />
              Message
            </label>
            <textarea
              id="dialog-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={DEFAULT_MESSAGE}
              rows={4}
              className={cn(fieldClass, "resize-none ring-0")}
            />
          </div>

          <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="bg-primary font-headline font-light uppercase tracking-widest text-on-primary shadow-stripe-md hover:shadow-stripe-lg hover:scale-[1.02] active:scale-95 transition-all duration-md ease-out-stripe disabled:opacity-60"
            >
              <Send size={14} />
              {submitting ? "Sending..." : "Send Enquiry"}
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="border-outline-variant/50 text-on-surface hover:border-tertiary/50 hover:bg-tertiary/10 transition-all uppercase"
            >
              <WhatsAppIcon />
              WhatsApp
            </Button>
          </div>

          {status === "error" && (
            <p className="text-center text-sm text-red-400">{errorMessage}</p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryDialog;
