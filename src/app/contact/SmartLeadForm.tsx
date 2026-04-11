"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, CheckCircle2 } from "lucide-react";

const PRACTICE_TYPES = [
  "ABA Therapy",
  "Occupational Therapy",
  "Speech-Language Pathology",
  "Physical Therapy",
  "Sensory Gym",
  "Multi-Disciplinary",
  "Other",
];

const NEED_OPTIONS = [
  { label: "I need a new website", value: "new_website", branch: "website", tag: "website" },
  { label: "I need more clients", value: "more_clients", branch: "growth", tag: "growth" },
  { label: "I want to automate intake", value: "automate_intake", branch: "automation", tag: "automation" },
  { label: "I need help with SEO", value: "seo_help", branch: "seo", tag: "seo" },
  { label: "I want an AI chatbot or phone agent", value: "ai_tools", branch: "ai", tag: "ai" },
  { label: "I need a CRM or dashboard", value: "crm", branch: "crm", tag: "crm" },
  { label: "I need help with ads or marketing", value: "marketing", branch: "marketing", tag: "marketing" },
  { label: "I'm not sure yet", value: "not_sure", branch: "explore", tag: "explore" },
] as const;

const BRANCH_QUESTIONS: Record<string, string> = {
  website: "What's frustrating about your current site? Or tell us what you're looking for.",
  growth: "Where are families finding you today? (Google, referrals, social, etc.)",
  automation: "What's your intake process like right now? What's the most time-consuming part?",
  seo: "Are you showing up on Google when parents search for your services? What have you tried so far?",
  ai: "What questions do parents ask most? What happens when your team can't answer the phone?",
  crm: "How are you tracking leads and managing your pipeline today?",
  marketing: "What are you currently spending on ads? What's working and what isn't?",
  explore: "What would make the biggest difference for your practice right now?",
};

const TOTAL_STEPS = 6;

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -40 : 40, opacity: 0 }),
};

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 text-charcoal-600 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-300 transition-all";

export default function SmartLeadForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState({
    name: "",
    practice: "",
    type: "",
    need: "",
    branch: "",
    message: "",
    email: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 350);
    return () => clearTimeout(timer);
  }, [step]);

  function advance() {
    setDirection(1);
    setStep((s) => s + 1);
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => s - 1);
  }

  function set(field: string, value: string) {
    setAnswers((a) => ({ ...a, [field]: value }));
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (canAdvance()) advance();
    }
  }

  function canAdvance() {
    if (step === 1) return answers.message.trim().length > 0;
    if (step === 2) return answers.name.trim().length > 0;
    if (step === 3) return answers.practice.trim().length > 0;
    if (step === 5) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.email.trim());
    return true;
  }

  async function handleSubmit() {
    if (!canAdvance() || submitting) return;
    setSubmitting(true);
    setError("");

    const needOption = NEED_OPTIONS.find((o) => o.value === answers.need);
    const tag = needOption?.tag ?? "explore";
    const needLabel = needOption?.label ?? answers.need;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name.trim(),
          email: answers.email.trim(),
          practice: answers.practice.trim(),
          type: answers.type,
          website: answers.website.trim(),
          message: `Need: ${needLabel}\n\n${answers.message.trim()}`,
          tags: [tag],
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-cream-200 p-12 text-center shadow-sm">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-teal-500" />
        </div>
        <h3 className="font-display text-2xl text-charcoal-700 mb-3">
          You&apos;re all set, {answers.name.split(" ")[0]}.
        </h3>
        <p className="text-charcoal-400 mb-8">
          We&apos;ll review {answers.practice} and get back to you within 24 hours.
        </p>
        <a
          href="https://calendly.com/admin-driftlss/15-minute-discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-500/20"
        >
          Skip the wait — book a call now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    );
  }

  // Step order: 0=need, 1=branch follow-up, 2=name, 3=practice, 4=practice type, 5=email+website
  function renderStep() {
    switch (step) {
      case 0:
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal-700 mb-6">
              What&apos;s the biggest thing you need help with?
            </h2>
            <div className="flex flex-col gap-2.5">
              {NEED_OPTIONS.map((o, i) => (
                <motion.button
                  key={o.value}
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  onClick={() => {
                    setAnswers((a) => ({ ...a, need: o.value, branch: o.branch }));
                    advance();
                  }}
                  className="w-full text-left px-5 py-4 rounded-xl border border-cream-200 text-charcoal-600 hover:border-teal-400 hover:bg-teal-50 transition-all cursor-pointer"
                >
                  {o.label}
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 1:
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal-700 mb-6">
              {BRANCH_QUESTIONS[answers.branch] ?? BRANCH_QUESTIONS.explore}
            </h2>
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              value={answers.message}
              onChange={(e) => set("message", e.target.value)}
              onKeyDown={handleKey}
              rows={4}
              className={`${inputClass} resize-none`}
              placeholder="Tell us more..."
            />
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal-700 mb-6">
              What&apos;s your name?
            </h2>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={answers.name}
              onChange={(e) => set("name", e.target.value)}
              onKeyDown={handleKey}
              className={inputClass}
              placeholder="Jane Smith"
            />
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal-700 mb-6">
              Hey {answers.name.split(" ")[0]}, what&apos;s your practice called?
            </h2>
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type="text"
              value={answers.practice}
              onChange={(e) => set("practice", e.target.value)}
              onKeyDown={handleKey}
              className={inputClass}
              placeholder="Bright Futures Therapy"
            />
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal-700 mb-6">
              What kind of practice is {answers.practice}?
            </h2>
            <div className="flex flex-col gap-2.5">
              {PRACTICE_TYPES.map((t, i) => (
                <motion.button
                  key={t}
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  onClick={() => {
                    set("type", t);
                    advance();
                  }}
                  className="w-full text-left px-5 py-4 rounded-xl border border-cream-200 text-charcoal-600 hover:border-teal-400 hover:bg-teal-50 transition-all cursor-pointer"
                >
                  {t}
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal-700 mb-6">
              Almost done — where should we send your free audit?
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                  Email address
                </label>
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="email"
                  value={answers.email}
                  onChange={(e) => set("email", e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                  className={inputClass}
                  placeholder="jane@brightfutures.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-charcoal-600 mb-2">
                  Current website URL{" "}
                  <span className="font-normal text-charcoal-300">(optional)</span>
                </label>
                <input
                  type="url"
                  value={answers.website}
                  onChange={(e) => set("website", e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit();
                    }
                  }}
                  className={inputClass}
                  placeholder="https://yourpractice.com"
                />
              </div>
            </div>
          </div>
        );
    }
  }

  const isOptionStep = step === 0 || step === 4;
  const isLastStep = step === 5;

  return (
    <div className="bg-white rounded-2xl border border-cream-200 p-8 md:p-10 shadow-sm">
      {/* Header: back + step counter */}
      <div className="flex items-center justify-between mb-8">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="text-charcoal-300 hover:text-charcoal-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        ) : (
          <div />
        )}
        <span className="text-sm text-charcoal-300">
          {step + 1} of {TOTAL_STEPS}
        </span>
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Continue / Submit button */}
      {!isOptionStep && (
        <div className="mt-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-4">
              {error}
            </div>
          )}
          <button
            type="button"
            onClick={isLastStep ? handleSubmit : advance}
            disabled={!canAdvance() || submitting}
            className={`group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-teal-500/25 text-lg ${
              isLastStep ? "w-full" : "ml-auto"
            }`}
          >
            {submitting ? "Sending..." : isLastStep ? "Get My Free Audit" : "Continue"}
            {!submitting && (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
