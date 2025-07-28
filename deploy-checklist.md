# Деплой Чек-лист - SEO Файлы

## ✅ Важные SEO файлы для деплоя

### 1. Основные SEO файлы
- [x] `index.html` - главная страница с SEO мета-тегами
- [x] `public/sitemap.xml` - карта сайта
- [x] `public/robots.txt` - инструкции для поисковых роботов
- [x] `public/favicon.ico` - иконка сайта
- [x] `public/site.webmanifest` - PWA манифест
- [x] `public/sw.js` - Service Worker

### 2. Cloudflare конфигурация
- [x] `_headers` - HTTP заголовки
- [x] `_redirects` - редиректы
- [x] `wrangler.toml` - конфигурация Cloudflare

### 3. Реклама и аналитика
- [x] `public/ads.txt` - рекламные файлы
- [x] `public/app-ads.txt` - мобильная реклама
- [x] `public/CNAME` - доменное имя

### 4. Безопасность
- [x] `public/security-policy.html` - политика безопасности
- [x] `public/.htaccess` - Apache конфигурация

### 5. Изображения и ресурсы
- [x] `public/images/` - все изображения
- [x] `public/logo.svg` - логотип
- [x] `public/srcfavicon.ico` - дополнительная иконка

### 6. Документация
- [x] `SEO-OPTIMIZATION.md` - SEO оптимизация
- [x] `DEPLOYMENT_GUIDE.md` - руководство по деплою
- [x] `CLOUDFLARE_DEPLOYMENT.md` - деплой на Cloudflare
- [x] `GITHUB_UPLOAD.md` - загрузка на GitHub
- [x] `SECURITY.md` - безопасность

### 7. Исходный код
- [x] `src/` - весь исходный код React
- [x] `package.json` - зависимости
- [x] `vite.config.js` - конфигурация Vite
- [x] `eslint.config.js` - конфигурация ESLint

## ❌ Файлы, которые НЕ должны быть в деплое

### 1. Зависимости и кэш
- [x] `node_modules/` - игнорируется
- [x] `.wrangler/` - локальный кэш Cloudflare
- [x] `.cloudflare/` - локальный кэш
- [x] `.github/` - GitHub Actions (если не нужны)

### 2. Тестовые файлы
- [x] `scripts/seo-checker.js` - тестовый скрипт
- [x] `test-seo.js` - временный тест
- [x] `*.test.js` - все тестовые файлы
- [x] `*.spec.js` - спецификации

### 3. Локальные файлы
- [x] `.env*` - переменные окружения
- [x] `*.local` - локальные файлы
- [x] `package-lock.json` - локальный кэш npm

## 🔧 Обновления в .gitignore

### Добавлены исключения для SEO файлов:
```gitignore
# SEO and Deployment - IMPORTANT: DO NOT IGNORE THESE FILES
!public/sitemap.xml
!public/robots.txt
!public/favicon.ico
!public/site.webmanifest
!public/sw.js
!public/CNAME
!public/ads.txt
!public/app-ads.txt
!public/security-policy.html
!public/.htaccess
!public/logo.svg
!public/srcfavicon.ico

# Keep SEO documentation
!SEO-OPTIMIZATION.md
!DEPLOYMENT_GUIDE.md
!CLOUDFLARE_DEPLOYMENT.md
!GITHUB_UPLOAD.md
!SECURITY.md

# Keep Cloudflare configuration files
!_headers
!_redirects
!wrangler.toml

# Keep build output for deployment
!dist/
!dist-ssr/
!build/

# Keep public directory structure
!public/
!public/images/
!public/.well-known/
```

### Добавлены игнорируемые файлы:
```gitignore
# Development files to ignore
.wrangler/
.cloudflare/
.github/
scripts/seo-checker.js
test-seo.js
*.test.js
*.spec.js

# Node modules and dependencies
node_modules/
package-lock.json
yarn.lock
pnpm-lock.yaml

# Environment and local files
.env*
!.env.example
*.local
```

## ✅ Результат

Теперь все важные SEO файлы будут корректно включены в деплой:

1. **Sitemap и Robots** - для индексации
2. **Структурированные данные** - для поисковых систем
3. **PWA файлы** - для мобильных устройств
4. **Cloudflare конфигурация** - для хостинга
5. **Безопасность** - для защиты сайта
6. **Документация** - для разработчиков

Все временные и тестовые файлы будут исключены из деплоя. 