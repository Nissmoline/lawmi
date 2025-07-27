# GitHub Upload Instructions

## 🚀 Загрузка проекта в GitHub

### Вариант 1: Через GitHub Desktop (Рекомендуется)

1. **Установите GitHub Desktop**
   - Скачайте с: https://desktop.github.com/
   - Установите и войдите в аккаунт

2. **Создайте новый репозиторий**
   - В GitHub Desktop: File → New Repository
   - Имя: `lawmi`
   - Описание: `Marina Ilyushina Law Office Website`
   - Локальный путь: выберите папку `React MiLawyer`
   - Нажмите "Create Repository"

3. **Загрузите файлы**
   - GitHub Desktop автоматически добавит все файлы
   - Напишите commit message: "Initial commit - MiLawyer website"
   - Нажмите "Commit to main"
   - Нажмите "Push origin"

### Вариант 2: Через командную строку

Если у вас установлен Git:

```bash
# Перейдите в папку проекта
cd "React MiLawyer"

# Инициализируйте Git репозиторий
git init

# Добавьте все файлы
git add .

# Создайте первый commit
git commit -m "Initial commit - MiLawyer website"

# Добавьте удаленный репозиторий
git remote add origin https://github.com/Nissmoline/lawmi.git

# Загрузите в GitHub
git branch -M main
git push -u origin main
```

### Вариант 3: Через веб-интерфейс GitHub

1. **Создайте репозиторий на GitHub**
   - Перейдите на: https://github.com/Nissmoline
   - Нажмите "New repository"
   - Имя: `lawmi`
   - Описание: `Marina Ilyushina Law Office Website`
   - Сделайте репозиторий Private
   - НЕ инициализируйте с README

2. **Загрузите файлы**
   - Нажмите "uploading an existing file"
   - Перетащите все файлы из папки `React MiLawyer`
   - Напишите commit message: "Initial commit - MiLawyer website"
   - Нажмите "Commit changes"

## 📁 Файлы для загрузки

### Обязательные файлы:
- ✅ `package.json` - Зависимости проекта
- ✅ `package-lock.json` - Версии зависимостей
- ✅ `vite.config.js` - Конфигурация Vite
- ✅ `index.html` - Главный HTML файл
- ✅ `README.md` - Документация проекта
- ✅ `.gitignore` - Исключения Git
- ✅ `eslint.config.js` - Конфигурация ESLint

### Папки:
- ✅ `src/` - Исходный код React
- ✅ `public/` - Статические файлы
- ✅ `scripts/` - Скрипты сборки
- ✅ `SECURITY.md` - Документация безопасности
- ✅ `SEO-OPTIMIZATION.md` - SEO документация

### Исключаемые файлы (.gitignore):
- ❌ `node_modules/` - Зависимости (устанавливаются автоматически)
- ❌ `dist/` - Собранные файлы (генерируются автоматически)
- ❌ `.env` - Переменные окружения
- ❌ `*.log` - Логи
- ❌ `.DS_Store` - Системные файлы

## 🔧 После загрузки

### 1. Настройте GitHub Pages (опционально)
```bash
# В настройках репозитория
Settings → Pages → Source → Deploy from a branch
Branch: main
Folder: / (root)
```

### 2. Настройте Actions для автоматической сборки
Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 3. Настройте секреты (если нужно)
- Перейдите в Settings → Secrets and variables → Actions
- Добавьте переменные окружения если необходимо

## 📋 Checklist после загрузки

- [ ] Репозиторий создан на GitHub
- [ ] Все файлы загружены
- [ ] README.md отображается правильно
- [ ] .gitignore работает корректно
- [ ] Нет чувствительных данных в репозитории
- [ ] Документация актуальна
- [ ] Настроены branch protection rules (опционально)

## 🔒 Безопасность

### Проверьте, что НЕ загружены:
- ❌ `.env` файлы
- ❌ `node_modules/` папка
- ❌ `dist/` папка
- ❌ Логи и временные файлы
- ❌ Ключи и сертификаты
- ❌ Личные данные

### Рекомендуемые настройки:
- Сделайте репозиторий Private
- Настройте branch protection rules
- Ограничьте доступ к репозиторию
- Регулярно обновляйте зависимости

## 📞 Поддержка

Если возникли проблемы с загрузкой:
- Проверьте права доступа к репозиторию
- Убедитесь, что все файлы добавлены в .gitignore
- Проверьте размер файлов (GitHub ограничивает 100MB на файл)
- Используйте Git LFS для больших файлов если нужно

---

**Успешной загрузки! 🚀** 