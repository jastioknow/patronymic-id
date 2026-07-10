"use client";

import { useState } from "react";
import { ParsingResult } from "@/shared/lib/parse-patronymic";
import { AnalyzerForm } from "@/features/analyze-father/ui/analyzer-form";
import { FatherCard } from "@/widgets/father-card/ui/father-card";

type ActiveResult = ParsingResult & { original: string };

export default function HomePage() {
  const [result, setResult] = useState<ActiveResult | null>(null);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 py-24 selection:bg-slate-800 selection:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 w-full max-w-xl flex flex-col items-center space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
            PatronymicID™
          </h1>
          <p className="text-base text-slate-400 max-w-md mx-auto">
            ИИ-аналитика генеалогического древа на основе паттернов суффиксального кодирования.
            Соответствует стандартам GDPR.
          </p>
        </div>

        {!result ? (
          <AnalyzerForm onResult={setResult} />
        ) : (
          <FatherCard result={result} onReset={() => setResult(null)} />
        )}

        <footer className="text-center text-xs font-mono text-slate-600">
          © 2026 PatronymicID Global Technologies Inc. Все отцы занесены в реестр.
        </footer>
      </div>
    </main>
  );
}
