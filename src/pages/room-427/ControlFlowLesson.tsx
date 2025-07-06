// src/pages/ControlFlowLesson.tsx

import QuestionScene from '@/components/room-427/control-flow/QuestionScene';
import LearningBox from '@/components/shared/LearningBox';
import NarratorBox from '@/components/shared/NarratorBox';
import Sidebar from '@/components/shared/SideBar';
import { useState } from 'react';

export default function ControlFlowLesson() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <main className="flex w-full min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Sidebar: nav, glossary, restart */}
      <aside className="w-[clamp(12rem, 18vw, 16rem)] border-r border-[var(--color-line)] p-[clamp(1rem,2vw,2rem)]">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <section className="flex-1 flex flex-col justify-between">
        <div className="flex-grow px-[clamp(1rem,3vw,3rem)] py-[clamp(2rem,4vw,4rem)]">
          <QuestionScene step={currentStep} onNext={() => setCurrentStep((prev) => prev + 1)} />
        </div>

        {/* Narrator subtitles */}
        <NarratorBox step={currentStep} />
      </section>

      {/* Learning box */}
      <aside className="w-[clamp(14rem, 22vw, 20rem)] border-l border-[var(--color-line)] p-[clamp(1rem,2vw,2rem)]">
        <LearningBox step={currentStep} />
      </aside>
    </main>
  );
}
