"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { parsePatronymic, ParsingResult } from "@/shared/lib/parse-patronymic";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Loader2, Terminal } from "lucide-react";

const formSchema = z.object({
  patronymic: z
    .string()
    .min(3, "Минимальная длина отчества — 3 символа")
    .regex(/^[А-Яа-яЁё\- ]+$/, "Разрешен только кириллический алфавит корпоративного уровня"),
});

type FormValues = z.infer<typeof formSchema>;

interface AnalyzerFormProps {
  onResult: (result: ParsingResult & { original: string }) => void;
}

export function AnalyzerForm({ onResult }: AnalyzerFormProps) {
  const [loadingStep, setLoadingStep] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const addLog = (msg: string) =>
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);

  const onSubmit = async (data: FormValues) => {
    setLogs([]);
    setLoadingStep("init");

    addLog("Инициализация Enterprise Father Detection Protocol v1.0.0...");
    await new Promise((r) => setTimeout(r, 600));

    addLog("Подключение к распределенному реестру Big Data...");
    await new Promise((r) => setTimeout(r, 800));

    addLog("Запуск квантового суффиксального анализа и стриппинга морфем...");
    const engineResult = parsePatronymic(data.patronymic);
    await new Promise((r) => setTimeout(r, 700));

    addLog(
      `Обнаружен вектор пола: ${engineResult.gender.toUpperCase()}. Точность: ${(engineResult.confidence * 100).toFixed(1)}%`,
    );
    await new Promise((r) => setTimeout(r, 500));

    addLog("Деструктуризация успешно завершена. Формирование отчета...");
    await new Promise((r) => setTimeout(r, 400));

    setLoadingStep(null);
    onResult({ ...engineResult, original: data.patronymic });
  };

  return (
    <Card className="w-full max-w-md border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight">
          PatronymicID™ Analyzer
        </CardTitle>
        <CardDescription className="text-slate-400">
          Введите отчество для декомпозиции родительской сущности.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Input
              {...register("patronymic")}
              placeholder="Пример: Александровна / Петрович"
              className="border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus-visible:ring-slate-700"
              disabled={loadingStep !== null}
            />
            {errors.patronymic && (
              <p className="text-xs font-medium text-destructive">{errors.patronymic.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200"
            disabled={loadingStep !== null}
          >
            {loadingStep ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Вычисление генеалогии...
              </>
            ) : (
              "Инициировать анализ"
            )}
          </Button>
        </form>

        {logs.length > 0 && (
          <div className="mt-6 rounded-lg bg-black p-3 font-mono text-[11px] text-emerald-400 border border-slate-900 max-h-40 overflow-y-auto">
            <div className="flex items-center gap-1.5 mb-2 text-slate-500 border-b border-slate-900 pb-1">
              <Terminal className="h-3 w-3" />
              <span>SYSTEM LOGS</span>
            </div>
            {logs.map((log, i) => (
              <div key={i} className="leading-relaxed">
                {log}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
