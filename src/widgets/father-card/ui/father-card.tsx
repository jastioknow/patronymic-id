"use client";

import { ParsingResult } from "@/shared/lib/parse-patronymic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { ShieldCheck, ShieldAlert, Download, RefreshCw } from "lucide-react";

interface FatherCardProps {
  result: ParsingResult & { original: string };
  onReset: () => void;
}

export function FatherCard({ result, onReset }: FatherCardProps) {
  const isUnknown = result.gender === "unknown" || result.confidence < 0.3;

  const handleDownloadReport = () => {
    alert(
      "[SYSTEM INFO]: Генерация PDF-отчета заблокирована. Требуется подписка Enterprise B2B Multi-Father Pack.",
    );
  };

  return (
    <Card className="w-full max-w-xl border-slate-800 bg-slate-950 text-slate-100 shadow-2xl p-4 animate-in fade-in zoom-in-95 duration-300">
      <CardHeader className="border-b border-slate-900 pb-5 space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-extrabold tracking-tight text-slate-100">
            {isUnknown ? "АНАЛИЗ ЗАБЛОКИРОВАН" : "ОБЪЕКТ ИДЕНТИФИЦИРОВАН"}
          </CardTitle>
          <Badge
            variant={isUnknown ? "destructive" : "default"}
            className={`text-xs px-3 py-1 font-mono ${isUnknown ? "bg-red-950 text-red-400 border-red-900" : "bg-emerald-950 text-emerald-400 border-emerald-900"}`}
          >
            {isUnknown ? "ERROR_404" : `CONFIDENCE: ${(result.confidence * 100).toFixed(0)}%`}
          </Badge>
        </div>
        <CardDescription className="text-base text-slate-400">
          Официальный протокол деструктуризации сущности:{" "}
          <span className="font-mono text-slate-200 font-bold">{result.original}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        {isUnknown ? (
          <div className="rounded-lg bg-red-950/20 border border-red-900/50 p-5 space-y-3">
            <div className="flex items-center gap-2 text-red-400 font-bold text-base">
              <ShieldAlert className="h-5 w-5" />
              <span>Критический сбой детекции</span>
            </div>
            <p className="text-xs text-red-300/80 leading-relaxed font-mono">
              [SECURITY_ALERT]: Биологический объект не найден в текущей симуляции. Обнаружена
              попытка рекурсивного самопорождения или многопоточного отцовства. Система поддерживает
              только линейные одноуровневые цепочки родительских связей.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="rounded-lg bg-slate-900 border border-slate-800 p-8 text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest font-semibold text-slate-500">
                Имя биологического отца
              </span>
              <div className="text-5xl font-black tracking-tight text-white">
                {result.fatherName}
              </div>
            </div>

            <div className="rounded-lg bg-emerald-950/10 border border-emerald-900/30 p-4 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
              <p className="text-xs text-emerald-400/80 leading-relaxed font-mono">
                [SUCCESS]: Паттерны суффиксального кодирования успешно дешифрованы. Данные занесены
                в распределенный реестр до того, как вы открыли эту страницу.
              </p>
            </div>
          </div>
        )}

        <div className="flex gap-4 pt-2">
          <Button
            variant="outline"
            className="flex-1 h-14 text-base font-semibold border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300"
            onClick={onReset}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Сбросить протокол
          </Button>
          {!isUnknown && (
            <Button
              className="flex-1 h-14 text-base font-bold bg-slate-100 text-slate-900 hover:bg-slate-200"
              onClick={handleDownloadReport}
            >
              <Download className="mr-2 h-4 w-4" />
              Экспорт в ФНС
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
