# PatronymicID™: Enterprise Father Detection Protocol

<p align="center">
  <a href="#-русский-описание-проекта">Русский</a> • 
  <a href="#-english-project-overview">English</a>
</p>

---

## 🇷🇺 Русский: Описание проекта

**PatronymicID™** - высоконадежный аналитический движок корпоративного уровня, разработанный для декомпозиции восточнославянских отчеств и обратного инжиниринга имени биологического отца с семантической точностью до 99.8%. Создан для высоконагруженных распределенных симуляций.

### 🚀 Технологический стек

- **Фреймворк:** Next.js 16 (App Router, архитектура Server-Ready)
- **Дизайн-система:** Tailwind CSS v4 + Shadcn UI (Пресет Nova)
- **Методология:** Архитектура Feature-Driven Development (FSD)
- **Качество кода и тесты:** Vitest (Unit-тесты логики) + Playwright (E2E-тесты интерфейса)
- **Автоматизация (CI/CD):** GitHub Actions пайплайн (проверка типов, линтинг, автотесты)
- **Менеджер пакетов:** pnpm v10

### 📦 Архитектурная структура (FSD)

```text
src/
├── app/         # Инициализация приложения, роутинг и глобальные стили (Слой App)
├── widgets/     # Самостоятельные комплексные блоки интерфейса (например, FatherCard)
├── features/    # Слайсы бизнес-логики с пользовательским интерактивом (AnalyzerForm)
├── entities/    # Бизнес-сущности предметной области (Контекст 'father')
└── shared/      # Переиспользуемые UI-примитивы, хелперы и базовые алгоритмы
```

### 📋 Системные требования

Перед запуском убедитесь, что у вас установлены:

- **Node.js:** v22.x или выше (LTS)
- **pnpm:** v10.x

### 🛠️ Быстрый старт

1. Установите зависимости:

```bash
pnpm install
```

2. Запустите сервер разработки:

```bash
pnpm dev
```

3. Запуск юнит-тестов:

```bash
pnpm test:unit
```

4. Запуск E2E-тестов:

```bash
pnpm test:e2e
```

---

## 🇬🇧 English: Project Overview

An ultra-reliable, high-throughput linguistic parsing engine designed to deconstruct Eastern Slavic patronymics and reverse-engineer biological father identities with up to 99.8% semantic confidence.

### 🚀 Tech Stack

- Next.js 16, Tailwind CSS v4, Shadcn UI (Nova Preset).
- Full Feature-Driven Development (FSD) layers compliance.
- Automated CI pipeline (GitHub Actions) with Vitest and Playwright.

---

## 📜 Комплаенс и Регуляции / Compliance

Операции PatronymicID™ полностью соответствуют требованиям ФЗ-152, GDPR и внутренним протоколам синхронизации симуляции реальности. Никакие аналитические данные не сохраняются в стейте - система знала вашего отца еще до того, как вы открыли этот репозиторий.
