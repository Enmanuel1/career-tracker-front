type CreateApplicationStepperProps = {
  currentStep: number;
  steps: ReadonlyArray<{ title: string }>;
};

export function CreateApplicationStepper({ currentStep, steps }: CreateApplicationStepperProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={step.title} className="flex min-w-0 flex-1 items-center gap-2">
              <div
                className={`flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                  isCompleted
                    ? "border-[#4F46E5] bg-[#4F46E5] text-white"
                    : isActive
                      ? "border-[#4F46E5] bg-[#EEF2FF] text-[#3730A3]"
                      : "border-[#CBD5E1] bg-white text-[#64748B]"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`truncate text-xs font-medium ${
                  isActive || isCompleted ? "text-[#0F172A]" : "text-[#64748B]"
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-[#E2E8F0]">
        <div
          className="h-full rounded-full bg-[#4F46E5] transition-all duration-200"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
