"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronRight, Check, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company is required"),
  useCase: z.string().min(1, "Please select a use case"),
  timeline: z.string().min(1, "Please select a timeline"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const useCaseOptions = [
  { value: "text-code", label: "Text & Code" },
  { value: "vision-video", label: "Vision & Video" },
  { value: "robotics", label: "Robotics & World" },
  { value: "multimodal", label: "Multi-modal" },
  { value: "other", label: "Other" },
];

const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "exploring", label: "Just exploring" },
];

const steps = [
  { id: "name", label: "What should we call you?", field: "name" },
  { id: "email", label: "Where can we reach you?", field: "email" },
  { id: "company", label: "What's your organization?", field: "company" },
  { id: "useCase", label: "What are you building?", field: "useCase" },
  { id: "timeline", label: "What's your timeline?", field: "timeline" },
  { id: "message", label: "Anything else we should know?", field: "message" },
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const currentValue = watch(steps[currentStep]?.field as keyof FormData);

  const handleNext = async () => {
    const currentField = steps[currentStep].field as keyof FormData;
    const isValid = await trigger(currentField);

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (currentStep < steps.length - 1) {
        handleNext();
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="w-16 h-16 mx-auto mb-6 bg-[var(--accent-primary)] flex items-center justify-center"
        >
          <Check className="w-8 h-8 text-[var(--bg-primary)]" />
        </motion.div>

        <pre className="font-mono text-sm text-[var(--accent-primary)] mb-6">
          {`> Signal received.
> Processing request...
> Connection initialized.`}
        </pre>

        <p className="text-[var(--text-secondary)]">
          We&apos;ll be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center gap-2 mb-8">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 transition-all duration-300 ${
              index <= currentStep
                ? "bg-[var(--accent-primary)]"
                : "bg-[var(--border-subtle)]"
            }`}
          />
        ))}
      </div>

      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-6 font-mono text-sm text-[var(--text-tertiary)]">
        <span className="text-[var(--accent-primary)]">claru</span>
        <span>@</span>
        <span>contact</span>
        <span className="text-[var(--text-muted)]">
          [{currentStep + 1}/{steps.length}]
        </span>
      </div>

      {/* Form steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <label className="block text-lg md:text-xl font-semibold mb-4">
            {steps[currentStep].label}
          </label>

          {/* Different input types based on step */}
          {currentStep === 3 ? (
            // Use Case Select
            <div className="grid grid-cols-2 gap-3">
              {useCaseOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-4 border cursor-pointer transition-all ${
                    currentValue === option.value
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/5"
                      : "border-[var(--border-subtle)] hover:border-[var(--border-medium)]"
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register("useCase")}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 border flex items-center justify-center ${
                      currentValue === option.value
                        ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]"
                        : "border-[var(--border-medium)]"
                    }`}
                  >
                    {currentValue === option.value && (
                      <Check className="w-3 h-3 text-[var(--bg-primary)]" />
                    )}
                  </span>
                  <span className="font-mono text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          ) : currentStep === 4 ? (
            // Timeline Select
            <div className="grid grid-cols-2 gap-3">
              {timelineOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-4 border cursor-pointer transition-all ${
                    currentValue === option.value
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/5"
                      : "border-[var(--border-subtle)] hover:border-[var(--border-medium)]"
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register("timeline")}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 border flex items-center justify-center ${
                      currentValue === option.value
                        ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]"
                        : "border-[var(--border-medium)]"
                    }`}
                  >
                    {currentValue === option.value && (
                      <Check className="w-3 h-3 text-[var(--bg-primary)]" />
                    )}
                  </span>
                  <span className="font-mono text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          ) : currentStep === 5 ? (
            // Message Textarea
            <textarea
              {...register("message")}
              placeholder="Optional: Tell us more about your project..."
              className="input-terminal min-h-[120px] resize-none"
              onKeyDown={handleKeyDown}
            />
          ) : (
            // Text inputs
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent-primary)] font-mono">
                &gt;
              </span>
              <input
                type={currentStep === 1 ? "email" : "text"}
                {...register(steps[currentStep].field as keyof FormData)}
                placeholder={
                  currentStep === 0
                    ? "Enter your name"
                    : currentStep === 1
                      ? "Enter your email"
                      : "Enter your company"
                }
                className="input-terminal pl-10"
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
          )}

          {/* Error message */}
          {errors[steps[currentStep].field as keyof FormData] && (
            <p className="mt-2 text-sm text-red-400 font-mono">
              {errors[steps[currentStep].field as keyof FormData]?.message}
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep - 1)}
            className="font-mono text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          >
            &lt; Back
          </button>
        ) : (
          <div />
        )}

        {currentStep < steps.length - 1 ? (
          <motion.button
            type="button"
            onClick={handleNext}
            className="btn-primary"
            whileHover={{ x: 4 }}
          >
            Continue
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              "[ Initialize Connection ]"
            )}
          </motion.button>
        )}
      </div>

      {/* Keyboard hint */}
      <p className="mt-6 text-center text-xs text-[var(--text-muted)] font-mono">
        Press Enter to continue
      </p>
    </form>
  );
}
