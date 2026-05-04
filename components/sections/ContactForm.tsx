"use client";

import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Magnetic } from "@/components/ui/Magnetic";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const subject = `Capstone Strategies — Contact ${data.get("nom") ?? ""}`;
    const body = [
      `Prénom : ${data.get("prenom")}`,
      `Nom : ${data.get("nom")}`,
      `Email : ${data.get("email")}`,
      `Société : ${data.get("societe") ?? "—"}`,
      "",
      "Message :",
      String(data.get("message") ?? ""),
    ].join("\n");
    const url = `mailto:contact@capstonestrategies.fr?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setTimeout(() => setSubmitting(false), 600);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-2 gap-x-6 gap-y-7 max-md:grid-cols-1 max-md:gap-y-6"
    >
      <Field label="Prénom" name="prenom" required />
      <Field label="Nom" name="nom" required />
      <Field
        label="Email professionnel"
        name="email"
        type="email"
        required
        colSpan={2}
      />
      <Field label="Société" name="societe" colSpan={2} />
      <Field
        label="Sujet"
        name="message"
        type="textarea"
        rows={5}
        required
        colSpan={2}
      />

      <div className="col-span-2 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line-dark)] pt-6 max-md:col-span-1">
        <p className="serif max-w-[42ch] text-[13px] italic text-[var(--on-dark-sec)]">
          Premier échange confidentiel, sans engagement.
        </p>
        <Magnetic strength={8}>
          <button
            type="submit"
            disabled={submitting}
            className="group/send inline-flex items-center gap-2.5 bg-[var(--on-dark)] px-6 py-[14px] text-[13.5px] font-medium text-[var(--text)] transition-colors duration-200 hover:bg-[var(--accent-light)] hover:text-[var(--on-dark)] disabled:opacity-50"
          >
            {submitting ? "Envoi…" : "Envoyer"}
            <ArrowRight
              size={14}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover/send:translate-x-1"
            />
          </button>
        </Magnetic>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  rows?: number;
  required?: boolean;
  colSpan?: 1 | 2;
};

function Field({
  label,
  name,
  type = "text",
  rows,
  required,
  colSpan = 1,
}: FieldProps) {
  const span =
    colSpan === 2 ? "col-span-2 max-md:col-span-1" : "max-md:col-span-1";

  const baseClass =
    "w-full appearance-none border-0 border-b border-[var(--line-dark)] bg-transparent px-0 pb-2 pt-1.5 text-[15px] text-[var(--on-dark)] transition-colors duration-200 focus:border-[var(--accent-light)] focus:outline-none";

  return (
    <div className={span}>
      <label
        htmlFor={name}
        className="mb-1.5 block text-[10.5px] font-medium uppercase tracking-[0.16em] text-[var(--on-dark-muted)]"
      >
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-[var(--accent-light)]">
            *
          </span>
        )}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={rows}
          className={`${baseClass} resize-y`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
}
