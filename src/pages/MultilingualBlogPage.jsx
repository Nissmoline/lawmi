import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/SEOHead';

const BLOG_CANONICAL = 'https://milawyer.gr/blog';

const contentMap = {
  ru: {
    heroTitle: "Юридический блог",
    heroSubtitle: "Практические рекомендации для тех, кто ищет δικηγόρος Αθήνα и συνεργάζεται с δικηγορικό γραφείο Αθήνα.",
    heroBadge: "Практика в Греции",
    articleTitle: "Как выбрать адвоката в Афинах (δικηγόρος Αθήνα)",
    intro: [
      "Выбор δικηγόρος Αθήνα — это больше, чем проверка лицензии. Важно понять, как специалист общается с клиентом, объясняет риски и поддерживает в стрессовых ситуациях. Когда вы привыкли к российской системе, греческое δικηγορικό γραφείο Αθήνα становится вашим проводником: юрист помогает разобраться с терминами, объясняет последовательность процедур и показывает, чего ждать от судов и ведомств.",
      "Русскоязычные клиенты часто сталкиваются с языковыми барьерами. Опытный δικηγόρος Αθήνα, говорящий по-русски, избавляет от случайных ошибок и недопониманий. Вместо того чтобы тратить часы на перевод документов, вы сразу получаете понятный план действий. Это особенно полезно, когда важно успеть подать иск, обжаловать решение или собрать доказательства.",
      "Комплексные проекты требуют участия специалистов разных профилей. Мы работаем с ποινικολόγος, εργατολόγος, консультантами по миграции и недвижимости, чтобы каждое направление контролировал тот, кто разбирается в нюансах. Такое δικηγορικό γραφείο Αθήνα выстраивает работу как проект: есть календарь, ответственные и понятные точки контроля.",
      "В этой статье собрали ключевые направления, где чаще всего нужен δικηγόρος Αθήνα: семейные конфликты, уголовная защита, трудовые споры, сделки с недвижимостью, наследство и миграция. В каждом разделе — практические советы, чек-листы документов и последовательность шагов, чтобы подготовиться к сотрудничеству и использовать возможности закона без лишних стрессов.",
    ],
    sections: [
      {
        heading: "οικογενειακό δίκαιο: как пройти διαζύγιο с поддержкой δικηγόρος διαζυγίου Αθήνα",
        paragraphs: [
          "Семейные дела — эмоционально сложная зона, поэтому нужна выверенная стратегия. Мы объясняем, как применение οικογενειακό δίκαιο влияет на раздел имущества, алименты и порядок общения с детьми. δικηγόρος διαζυγίου Αθήνα помогает зафиксировать договоренности заранее, чтобы суд принял во внимание реальные потребности семьи.",
          "Если ситуация зашла в тупик, мы подключаем медиатора и готовим клиента к слушаниям в Αθήνα или Πειραιάς. Важно собрать доказательства: переписку, чеки, заключения специалистов. Чем тщательнее подготовка, тем быстрее суд рассмотрит διαζύγιο и вынесет решение.",
          "Когда требуется дополнительная информация, мы подсказываем, как получить выписки из σχολείου, заключения психологов или банковские справки. Подробнее о возможностях семейной практики можно прочитать в разделе [[Семейное право]].",
        ],
      },
      {
        heading: "ποινικολόγος Αθήνα: план действий с δικηγόρος ποινικής υπεράσπισης",
        paragraphs: [
          "Уголовное производство требует мгновенной реакции. Ποινικολόγος Αθήνα подключается с первых часов, чтобы контролировать допросы и оценивать доказательства. Мы напоминаем о праве молчать, пока позиция не согласована с δικηγόρος ποινικής υπεράσπισης, и составляем список вопросов, которые можно задать следователю.",
          "Каждая деталь важна: где были получены улики, как оформлены протоколы, присутствовали ли свидетели. Мы подаем ходатайства, заявляем экспертизы и отслеживаем процессуальные сроки. Если дело связано с бизнесом, подключаем бухгалтеров и аудиторов, чтобы построить комплексную защиту.",
          "Даже когда клиент находится в Νίκαια или Κέντρο, мы организуем встречи онлайн и готовим его к выступлению в суде. Наша задача — чтобы каждый шаг соответствовал стратегии и не создавал лишних рисков.",
        ],
      },
      {
        heading: "εργατολόγος Αθήνα: как помогает δικηγόρος εργατικού δικαίου",
        paragraphs: [
          "Трудовые конфликты — это сроки, документы и переговоры. Εργατολόγος Αθήνα проверяет трудовой договор, внутренние регламенты и переписку, чтобы увидеть нарушения. Мы подсказываем, когда достаточно претензии, а когда необходимо обращаться в суд.",
          "Доказательства собираются заранее: расчетные листки, табели учета рабочего времени, медицинские справки. δικηγόρος εργατικού δικαίου объясняет, какие компенсации возможны, и что предпринять, если работодатель затягивает переговоры.",
          "Когда вопрос можно решить мирно, мы выступаем посредниками и фиксируем соглашение письменно. Инструкции и шаблоны документов доступны в разделе [[Трудовые споры]], чтобы вы могли подготовиться к консультации.",
        ],
      },
      {
        heading: "δικηγόρος ακινήτων Αθήνα: сделки и Κτηματολόγιο без сюрпризов",
        paragraphs: [
          "Покупка или продажа недвижимости требует внимательности. δικηγόρος ακινήτων Αθήνα проверяет Κτηματολόγιο, историю объекта и наличие обременений. Мы оценим налоги, коммунальные расходы и статус арендаторов, чтобы исключить скрытые риски.",
          "При инвестициях в Βόρεια Προάστια или Νότια Προάστια мы подключаем инженеров и оценщиков. Это помогает рассчитать бюджет, согласовать ипотеку и подготовить документы для банка.",
          "Подробные инструкции по подготовке сделок, регистрации прав и управлению объектами собраны в разделе [[Недвижимость]].",
        ],
      },
      {
        heading: "κληρονομικά Αθήνα: как работает δικηγόρος για κληρονομικά",
        paragraphs: [
          "Наследственные дела в Греции ограничены сроками. Мы подсказываем, какие заявления нужно подать нотариусу, какие налоги оплатить и как подтвердить родство. δικηγόρος για κληρονομικά помогает оценить активы, собрать выписки и организовать перевод документов.",
          "Когда наследники живут в разных странах, мы координируем работу с консульствами и банками. Это особенно важно, если нужно оформить доверенность или получить доступ к счетам.",
          "Чтобы заранее понять процедуру и подготовить документы, изучите раздел [[Наследство]] — там собраны памятки и ответы на частые вопросы.",
        ],
      },
      {
        heading: "δικηγόρος μετανάστευσης Αθήνα: άδεια διαμονής и ιθαγένεια",
        paragraphs: [
          "Миграционное право постоянно меняется. δικηγόρος μετανάστευσης Αθήνα проверяет основания, помогает собрать пакет для άδεια διαμονής и отслеживает сроки подачи. Мы объясняем, какие переводы требуются и как их удостоверить.",
          "Если цель — ιθαγένεια, мы составляем план: подтверждаем проживание, готовим к языковому тесту и отслеживаем ответы служб. Важно, чтобы документы не противоречили заявлениям, иначе рассмотрение затянется.",
          "Больше примеров и обновлений мы публикуем в разделе [[Миграция]], где можно заранее оценить требования и подготовиться к собеседованию.",
        ],
      },
    ],
    stepsHeading: "Как проходит работа с адвокатом",
    steps: [
      "Шаг 1. Первичная консультация: обсуждаем задачу, фиксируем цели и определяем срочность.",
      "Шаг 2. Анализ документов: проверяем договоры, решения, переписку и формируем доказательственную базу.",
      "Шаг 3. Разработка стратегии: согласовываем сценарии действий, сроки и бюджет.",
      "Шаг 4. Реализация: представляем интересы клиента, ведем переговоры и подаем процессуальные документы.",
      "Шаг 5. Завершение: получаем решения, объясняем дальнейшие шаги и сопровождаем исполнение.",
    ],
    checklistsHeading: "Чек-лист документов по типам дел",
    checklists: [
      {
        title: "Семейные дела",
        items: [
          "Свидетельства о браке и рождении детей.",
          "Финансовые справки, налоговые декларации, банковские выписки.",
          "Брачные соглашения, договоренности об алиментах, переписка между супругами.",
          "Документы о расходах на детей и совместные активы.",
        ],
      },
      {
        title: "Уголовные дела",
        items: [
          "Протоколы задержания, обвинительные заключения, повестки.",
          "Контакты свидетелей, аудио- и видеоматериалы, экспертные заключения.",
          "Медицинские документы, характеризующие данные.",
          "Доверенности на δικηγόρος ποινικής υπεράσπισης.",
        ],
      },
      {
        title: "Трудовые вопросы",
        items: [
          "Трудовой договор, должностные инструкции, коллективные соглашения.",
          "Расчетные листы, таблицы учета времени, переписка с работодателем.",
          "Документы о дисциплинарных взысканиях, премиях, бонусах.",
          "Медицинские справки, подтверждение командировок и переработок.",
        ],
      },
      {
        title: "Недвижимость",
        items: [
          "Выписки из Κτηματολόγιο и кадастровые планы.",
          "Предварительный договор, квитанции об оплате, письма банка.",
          "Технические паспорта, энергетические сертификаты, справки об отсутствии задолженностей.",
          "Нотариальные доверенности, переводы и апостили.",
        ],
      },
      {
        title: "Наследство",
        items: [
          "Свидетельство о смерти, документы о родстве, завещание.",
          "Оценка имущества, банковские выписки, список активов.",
          "Налоговые декларации наследодателя, квитанции об уплате сборов.",
          "Доверенности для представителя в Αθήνα или Πειραιάς.",
        ],
      },
      {
        title: "Миграция",
        items: [
          "Загранпаспорт, действующая άδεια διαμονής, визовая история.",
          "Справка о несудимости, нотариально заверенные переводы.",
          "Подтверждение доходов, договор аренды, медицинская страховка.",
          "Документы, подтверждающие право на ιθαγένεια или продление статуса.",
        ],
      },
    ],
    locationsHeading: "Где мы работаем",
    locations: [
      "Наш офис расположен в Αθήνα, но команда регулярно выезжает в Πειραιάς, Νίκαια и другие районы Аттики. Каждый δικηγόρος Αθήνα из нашей команды готов к очным встречам и онлайн-сессиям в удобное время.",
      "Мы ведем дела в Κέντρο и следим за спецификой судов Βόρεια Προάστια и Νότια Προάστια. Такой охват помогает учитывать местную практику, будь то коммерческий спор или семейное слушание.",
    ],
    reasonsHeading: "Почему удобно работать с нами",
    reasons: [
      "Консультации на русском языке и сопровождение на греческом — никаких недопониманий.",
      "Профильные специалисты: οικογενειακό δίκαιο, ποινικολόγος, εργατολόγος, недвижимость, миграция.",
      "Реалистичные стратегии без завышенных ожиданий и прозрачное ценообразование.",
      "Сеть партнеров: нотариусы, переводчики, бухгалтеры в Αθήνα, Πειραιάς и Νίκαια.",
      "Контроль сроков, регулярные отчеты и безопасное хранение документов.",
      "Поддержка после завершения процесса: помощь в исполнении решений и профилактические консультации.",
    ],
    cta: {
      heading: "Запишитесь на консультацию",
      paragraph: "Расскажите о ситуации, и δικηγόρος Αθήνα предложит путь решения. Напишите через [[Контакты]], оставьте заявку или позвоните — мы согласуем удобный формат.",
      primary: "Записаться на консультацию",
      secondary: "Позвонить +30 698 336 3775",
    },
    disclaimer: "Материал носит информационный характер и не заменяет индивидуальную юридическую консультацию.",
    meta: {
      title: "δικηγόρος Αθήνα — как выбрать подходящего юриста",
      description: "δικηγόρος Αθήνα, δικηγορικό γραφείο Αθήνα, οικογενειακό δίκαιο: практические шаги и чек-листы.",
      slug: "/dikigoros-athina-kak-vybrat",
    },
    structuredData: {
      headline: "Как выбрать адвоката в Афинах (δικηγόρος Αθήνα)",
      description: "Руководство для русскоязычных клиентов: οικογενειακό δίκαιο, ποινικολόγος, εργατολόγος, недвижимость, миграция и наследство.",
      articleBody: "Подробное объяснение, как выбрать δικηγόρος Αθήνα и сотрудничать с δικηγορικό γραφείο Αθήνα по семейным, уголовным, трудовым, миграционным и наследственным делам.",
    },
    faq: [
      {
        question: "Как проходит развод и διαζύγιο в Греции?",
        answer: "Процедура начинается с консультации δικηγόρος διαζυγίου, анализа соглашений и подготовки документов. Затем подается заявление, проводятся переговоры или слушание, где учитываются интересы детей и имущественные вопросы.",
      },
      {
        question: "Когда нужен εργατολόγος для трудового спора?",
        answer: "εργατολόγος Αθήνα подключается, если работодатель нарушает договор, задерживает выплаты или пытается уволить без оснований. Юрист собирает доказательства и определяет стратегию переговоров или суда.",
      },
      {
        question: "Что проверить перед покупкой недвижимости в Αθήνα?",
        answer: "δικηγόρος ακινήτων Αθήνα анализирует Κτηματολόγιο, историю объекта и наличие долгов. Дополнительно согласуются налоги, коммунальные платежи и график платежей по сделке.",
      },
      {
        question: "Как оформить наследство κληρονομικά?",
        answer: "Нужно подтвердить родство, собрать налоговые документы и обратиться к δικηγόρος για κληρονομικά. Юрист поможет подать заявление нотариусу и рассчитать налоги.",
      },
      {
        question: "Какие документы нужны для άδεια διαμονής?",
        answer: "Требуются паспорт, подтверждение доходов, медицинская страховка, справка о несудимости и переводы. δικηγόρος μετανάστευσης проверит комплект и подскажет, как подать заявление вовремя.",
      },
      {
        question: "Поможет ли ποινικολόγος на ранней стадии дела?",
        answer: "Да, ποινικολόγος Αθήνα оценивает материалы до предъявления обвинения, сопровождает на допросах и следит за процессуальными сроками.",
      },
      {
        question: "Можно ли получить консультацию дистанционно?",
        answer: "Да, консультации доступны онлайн. Это удобно для клиентов из Αθήνα, Πειραιάς, Νίκαια и других районов Аттики.",
      },
    ],
  },
  el: {
    heroTitle: "Νομικό Blog",
    heroSubtitle: "Οδηγός για  δικηγόρος Αθήνα και συνεργασία με δικηγορικό γραφείο Αθήνα σε βασικούς τομείς δικαίου.",
    heroBadge: "Συμβουλές στα ελληνικά και ρωσικά",
    articleTitle: "Πώς να επιλέξετε δικηγόρος Αθήνα για την υπόθεσή σας",
    intro: [
      "Η επιλογή δικηγόρος Αθήνα δεν είναι απλή υπόθεση. Πρέπει να συνδυάζει εμπειρία, καλή επικοινωνία και σαφή διαχείριση του άγχους του πελάτη. Όταν προέρχεστε από διαφορετικό νομικό σύστημα, ένα δικηγορικό γραφείο Αθήνα λειτουργεί ως γέφυρα, εξηγώντας διαδικασίες και χρονοδιαγράμματα σε γλώσσα που καταλαβαίνετε.",
      "Οι ρωσόφωνοι κάτοικοι της Αττικής χρειάζονται επαγγελματία που να μιλά ελληνικά και ρωσικά. Έτσι αποφεύγονται λάθη στις καταθέσεις, στις αιτήσεις και στις επαφές με τις αρχές. Ένας έμπειρος δικηγόρος Αθήνα μεταφράζει όχι μόνο τις λέξεις αλλά και τη νομική κουλτούρα.",
      "Σε σύνθετες υποθέσεις συντονίζουμε ομάδα ειδικών: ποινικολόγος, εργατολόγος, σύμβουλος μετανάστευσης, δικηγόρος ακινήτων. Το δικηγορικό γραφείο Αθήνα λειτουργεί με λογική έργου, με συγκεκριμένο χρονοδιάγραμμα, στόχους και υπεύθυνους.",
      "Στις ενότητες που ακολουθούν παρουσιάζουμε τα συχνότερα σενάρια: οικογενειακό δίκαιο, ποινική υπεράσπιση, εργατικές διαφορές, συναλλαγές ακινήτων, κληρονομικά και μετανάστευση. Παρέχουμε λίστες εγγράφων και πρακτικά βήματα ώστε να γνωρίζετε τι απαιτείται πριν συναντήσετε δικηγόρος Αθήνα.",
    ],
    sections: [
      {
        heading: "οικογενειακό δίκαιο: διαχείριση διαζύγιο με δικηγόρος διαζυγίου Αθήνα",
        paragraphs: [
          "Το οικογενειακό δίκαιο απαιτεί ευαισθησία και σχέδιο. Αναλύουμε πώς επηρεάζει ο νόμος τη διανομή περιουσίας, τη διατροφή και την επιμέλεια. Ένας δικηγόρος διαζυγίου Αθήνα διασφαλίζει ότι οι συμφωνίες αντικατοπτρίζουν τις πραγματικές ανάγκες των μερών.",
          "Σε δύσκολες υποθέσεις προτείνουμε διαμεσολάβηση και προετοιμάζουμε τον πελάτη για ακροάσεις σε Αθήνα ή Πειραιά. Τα αποδεικτικά στοιχεία μαζεύονται εγκαίρως: επικοινωνία, οικονομικά στοιχεία, εκθέσεις ειδικών.",
          "Για να οργανώσετε καλύτερα τα επόμενα βήματα συμβουλευτείτε την ενότητα [[Οικογενειακό Δίκαιο]], όπου υπάρχουν οδηγίες για γονική μέριμνα και οικογενειακές συμφωνίες.",
        ],
      },
      {
        heading: "ποινικολόγος Αθήνα: στήριξη από δικηγόρος ποινικής υπεράσπισης",
        paragraphs: [
          "Η ποινική διαδικασία ξεκινά αιφνιδιαστικά. Ο ποινικολόγος Αθήνα αναλαμβάνει από την πρώτη στιγμή, παρών σε ανακρίσεις και δίνει οδηγίες για τα δικαιώματα του κατηγορουμένου.",
          "Εξετάζουμε τα πρακτικά, τις συνθήκες συλλογής των αποδείξεων και προτείνουμε ειδικούς όταν χρειάζεται. Ο δικηγόρος ποινικής υπεράσπισης διαχειρίζεται αιτήσεις, ενστάσεις και παρακολουθεί κάθε προθεσμία.",
          "Για κατοίκους σε Νίκαια ή Βόρεια Προάστια οργανώνουμε ψηφιακές συναντήσεις ώστε η προετοιμασία να είναι συνεχής και χωρίς καθυστερήσεις.",
        ],
      },
      {
        heading: "δικηγόρος ακινήτων Αθήνα: ασφάλεια σε Κτηματολόγιο και συμβόλαια",
        paragraphs: [
          "Οι αγοραπωλησίες απαιτούν ελέγχους στο Κτηματολόγιο, στα βάρη και στα φορολογικά δεδομένα. Ο δικηγόρος ακινήτων Αθήνα αναλύει την ιστορία του ακινήτου και οργανώνει τον φάκελο.",
          "Σε επενδύσεις στα Βόρεια ή Νότια Προάστια συνεργαζόμαστε με μηχανικούς και εκτιμητές. Έτσι εξασφαλίζεται ότι ο προϋπολογισμός είναι ρεαλιστικός και τα δικαιολογητικά πλήρη.",
          "Επιπλέον πληροφορίες για δάνεια, μισθώσεις και εμπορικά ακίνητα θα βρείτε στην ενότητα [[Ακίνητα]].",
        ],
      },
      {
        heading: "κληρονομικά Αθήνα: πώς βοηθά δικηγόρος για κληρονομικά",
        paragraphs: [
          "Τα κληρονομικά Αθήνα έχουν συγκεκριμένα χρονικά όρια. Ο δικηγόρος για κληρονομικά βοηθά στη συγκέντρωση πιστοποιητικών, στην πληρωμή φόρων και στην κατάθεση δηλώσεων.",
          "Όταν οι κληρονόμοι ζουν σε διαφορετικές χώρες συντονίζουμε μεταφράσεις, apostille και επικοινωνία με τράπεζες.",
          "Χρήσιμες οδηγίες και λίστες θα βρείτε στην ενότητα [[Κληρονομικά]], ώστε να γνωρίζετε ακριβώς τι χρειάζεται.",
        ],
      },
      {
        heading: "δικηγόρος μετανάστευσης Αθήνα: άδεια διαμονής και ιθαγένεια",
        paragraphs: [
          "Οι νομοθετικές αλλαγές είναι συνεχείς. Ο δικηγόρος μετανάστευσης Αθήνα αξιολογεί τα δικαιολογητικά για άδεια διαμονής, οργανώνει μεταφράσεις και παρακολουθεί ημερομηνίες.",
          "Για στόχο την ιθαγένεια χαράζουμε πλάνο: αποδείξεις διαμονής, δηλώσεις εισοδήματος, προετοιμασία για το τεστ πολιτογράφησης.",
          "Στην ενότητα [[Μετανάστευση]] θα βρείτε ενημερώσεις για παρατάσεις, αλλαγές καθεστώτος και πρακτικά tips.",
        ],
      },
    ],
    stepsHeading: "Πώς εξελίσσεται η συνεργασία",
    steps: [
      "Βήμα 1. Πρώτη συζήτηση: καθορίζουμε στόχο, προθεσμίες και βαθμό επείγοντος.",
      "Βήμα 2. Έλεγχος εγγράφων: συμβάσεις, αποφάσεις, αλληλογραφία, αποδεικτικά στοιχεία.",
      "Βήμα 3. Στρατηγική: πιθανά σενάρια, κόστος και υπεύθυνοι.",
      "Βήμα 4. Υλοποίηση: παραστάσεις σε αρχές και δικαστήρια, διαπραγμάτευση, υποβολή αιτήσεων.",
      "Βήμα 5. Ολοκλήρωση: εξήγηση αποφάσεων, παρακολούθηση εκτέλεσης, συμβουλές πρόληψης.",
    ],
    checklistsHeading: "Λίστες εγγράφων ανά υπόθεση",
    checklists: [
      {
        title: "Οικογενειακά",
        items: [
          "Πιστοποιητικά γάμου και γέννησης.",
          "Οικονομικά στοιχεία, δηλώσεις φόρου, τραπεζικές κινήσεις.",
          "Συμφωνίες διατροφής ή επιμέλειας, σχετική αλληλογραφία.",
          "Έγγραφα για έξοδα παιδιών και κοινά περιουσιακά στοιχεία.",
        ],
      },
      {
        title: "Ποινικά",
        items: [
          "Πρακτικά προανάκρισης, κλήσεις, κατηγορητήριο.",
          "Στοιχεία μαρτύρων, ηχητικά και οπτικά τεκμήρια.",
          "Ιατρικές γνωματεύσεις και πιστοποιητικά καλής διαγωγής.",
          "Εξουσιοδότηση σε δικηγόρος ποινικής υπεράσπισης.",
        ],
      },
      {
        title: "Εργατικά",
        items: [
          "Σύμβαση εργασίας, κανονισμοί, συλλογικές συμφωνίες.",
          "Μισθολογικές καταστάσεις, στοιχεία ωραρίου, email.",
          "Έγγραφα για πειθαρχικές ποινές ή bonus.",
          "Ιατρικά έγγραφα και δικαιολογητικά αδειών.",
        ],
      },
      {
        title: "Ακίνητα",
        items: [
          "Αποσπάσματα από Κτηματολόγιο, τοπογραφικά.",
          "Προσύμφωνο, αποδείξεις πληρωμής, επιστολές τραπεζών.",
          "Ενεργειακά πιστοποιητικά, βεβαιώσεις μη οφειλής.",
          "Μεταφράσεις και πληρεξούσια.",
        ],
      },
      {
        title: "Κληρονομικά",
        items: [
          "Ληξιαρχική πράξη θανάτου, πιστοποιητικά συγγένειας, διαθήκη.",
          "Κατάσταση περιουσίας, τραπεζικοί λογαριασμοί.",
          "Φορολογικές δηλώσεις θανόντος, αποδείξεις φόρων.",
          "Πληρεξούσια για Αθήνα ή Πειραιά.",
        ],
      },
      {
        title: "Μετανάστευση",
        items: [
          "Διαβατήριο, ισχύουσα άδεια διαμονής, ιστορικό visa.",
          "Πιστοποιητικό ποινικού μητρώου, επικυρωμένες μεταφράσεις.",
          "Αποδεικτικά εισοδήματος, συμβόλαιο ενοικίασης, ασφάλιση.",
          "Δικαιολογητικά για ιθαγένεια ή ανανέωση status.",
        ],
      },
    ],
    locationsHeading: "Περιοχές εξυπηρέτησης",
    locations: [
      "Η έδρα μας βρίσκεται στην Αθήνα, αλλά επισκεπτόμαστε Πειραιά, Νίκαια και όλη την Αττική. Κάθε δικηγόρος Αθήνα της ομάδας μας προσφέρει δια ζώσης και διαδικτυακές συνεδρίες.",
      "Παρακολουθούμε τη νομολογία σε Κέντρο, Βόρεια και Νότια Προάστια, ώστε η στρατηγική να προσαρμόζεται στις τοπικές ιδιαιτερότητες.",
    ],
    reasonsHeading: "Γιατί να συνεργαστείτε μαζί μας",
    reasons: [
      "Επικοινωνούμε στα ελληνικά και ρωσικά, αποφεύγοντας παρερμηνείες.",
      "Διαθέτουμε εξειδικευμένους συνεργάτες σε οικογενειακό δίκαιο, ποινική υπεράσπιση, εργατικά και ακίνητα.",
      "Παρέχουμε ρεαλιστική εκτίμηση και διαφανές κόστος.",
      "Συνεργαζόμαστε με συμβολαιογράφους, μεταφραστές και λογιστές σε Αθήνα, Πειραιά, Νίκαια.",
      "Παρακολουθούμε προθεσμίες με ασφαλή διαχείριση εγγράφων.",
      "Προσφέρουμε υποστήριξη μετά την ολοκλήρωση για εκτέλεση αποφάσεων και πρόληψη νέων διαφορών.",
    ],
    cta: {
      heading: "Κλείστε συμβουλευτική",
      paragraph: "Περιγράψτε μας την υπόθεση και δικηγόρος Αθήνα θα προτείνει τα βήματα. Χρησιμοποιήστε τα [[Επικοινωνία]], στείλτε μήνυμα ή καλέστε μας για να ορίσουμε ραντεβού.",
      primary: "Κλείστε ραντεβού",
      secondary: "Καλέστε +30 698 336 3775",
    },
    disclaimer: "Το παρόν κείμενο παρέχει γενική πληροφόρηση και δεν υποκαθιστά εξατομικευμένη νομική συμβουλή.",
    meta: {
      title: "δικηγόρος Αθήνα — πώς να επιλέξετε τον κατάλληλο συνεργάτη",
      description: "δικηγόρος Αθήνα, δικηγορικό γραφείο Αθήνα, οικογενειακό δίκαιο: πρακτικός οδηγός επιλογής.",
      slug: "/dikigoros-athina-kak-vybrat",
    },
    structuredData: {
      headline: "Πώς να επιλέξετε δικηγόρος Αθήνα για την υπόθεσή σας",
      description: "Οδηγός για συνεργασία με δικηγορικό γραφείο Αθήνα σε οικογενειακό δίκαιο, ποινικές, εργατικές, κληρονομικές και μεταναστευτικές υποθέσεις.",
      articleBody: "Αναλυτικά βήματα για να επιλέξετε δικηγόρος Αθήνα, με λίστες εγγράφων και συμβουλές για οικογενειακά, ποινικά, εργατικά, ακίνητα, κληρονομικά και μετανάστευση.",
    },
    faq: [
      {
        question: "Πώς εξελίσσεται ένα διαζύγιο στην Ελλάδα;",
        answer: "Ο δικηγόρος διαζυγίου Αθήνα εξετάζει τις συμφωνίες, ετοιμάζει την αίτηση και κατευθύνει τον πελάτη σε διαμεσολάβηση ή ακρόαση, λαμβάνοντας υπόψη τα παιδιά και την περιουσία.",
      },
      {
        question: "Πότε χρειάζεται εργατολόγος για διαφορά εργασίας;",
        answer: "Όταν ο εργοδότης παραβιάζει τη σύμβαση, καθυστερεί μισθούς ή απειλεί με απόλυση. Ο εργατολόγος Αθήνα οργανώνει τα στοιχεία και προτείνει διαπραγμάτευση ή αγωγή.",
      },
      {
        question: "Τι ελέγχει ο δικηγόρος ακινήτων πριν την αγορά;",
        answer: "Εξετάζει το Κτηματολόγιο, τις οφειλές, τις φορολογικές βεβαιώσεις και συντονίζει τους τεχνικούς ελέγχους, ώστε το συμβόλαιο να είναι ασφαλές.",
      },
      {
        question: "Πώς χειρίζομαι κληρονομικά στην Αθήνα;",
        answer: "Συλλέγετε πιστοποιητικά, καταθέτετε δήλωση στην εφορία και απευθύνεστε σε δικηγόρο για κληρονομικά για καθοδήγηση στις προθεσμίες και τη φορολογία.",
      },
      {
        question: "Τι δικαιολογητικά χρειάζομαι για άδεια διαμονής;",
        answer: "Διαβατήριο, εισοδήματα, ασφάλιση, ποινικό μητρώο και μεταφράσεις. Ο δικηγόρος μετανάστευσης Αθήνα ελέγχει τον φάκελο πριν την υποβολή.",
      },
      {
        question: "Μπορεί ο ποινικολόγος να βοηθήσει από την αρχή;",
        answer: "Ναι, παρευρίσκεται σε ανακρίσεις, καθοδηγεί τον κατηγορούμενο και διασφαλίζει ότι τηρούνται τα δικαιώματα και οι προθεσμίες.",
      },
      {
        question: "Προσφέρετε διαδικτυακές συναντήσεις;",
        answer: "Ναι, εξυπηρετούμε εξ αποστάσεως πελάτες από Αθήνα, Πειραιά, Νίκαια και όλη την Αττική.",
      },
    ],
  },
  en: {
    heroTitle: "Legal Blog",
    heroSubtitle: "Guidance for choosing δικηγόρος Αθήνα and collaborating with a δικηγορικό γραφείο Αθήνα across key practice areas.",
    heroBadge: "Insights for expats",
    articleTitle: "How to choose a δικηγόρος Αθήνα for your case",
    intro: [
      "Selecting a δικηγόρος Αθήνα is about more than a licence. You need a professional who can interpret expectations, risks and timelines in a familiar language. When you navigate a new legal system, a δικηγορικό γραφείο Αθήνα becomes your bridge, translating not only documents but also local procedures.",
      "Russian-speaking residents of Attica often struggle with terminology and administration. Working with a bilingual δικηγόρος Αθήνα prevents miscommunication, keeps filings accurate and saves time on translators.",
      "Complex matters require a coordinated team. We involve ποινικολόγος, εργατολόγος, real-estate counsel and migration experts so that every aspect is handled by the right specialist. The δικηγορικό γραφείο Αθήνα manages your matter like a project with clear milestones.",
      "This guide summarises six frequent scenarios: family disputes, criminal defence, labour conflicts, property deals, inheritance and migration. Each section lists documents, steps and practical tips so you can collaborate with a δικηγόρος Αθήνα confidently.",
    ],
    sections: [
      {
        heading: "οικογενειακό δίκαιο: navigating διαζύγιο with a δικηγόρος διαζυγίου Αθήνα",
        paragraphs: [
          "Family law requires empathy and structure. We explain how οικογενειακό δίκαιο affects property division, child support and parenting plans. A δικηγόρος διαζυγίου Αθήνα ensures the court sees realistic arrangements.",
          "We prepare clients for mediation or hearings in Αθήνα and Πειραιάς, gathering evidence such as financial records and expert reports. Proper preparation keeps the διαζύγιο timeline under control.",
          "You can explore additional checklists in [[Family Law]] to get ready before meeting your counsel.",
        ],
      },
      {
        heading: "ποινικολόγος Αθήνα: working with a δικηγόρος ποινικής υπεράσπισης",
        paragraphs: [
          "Criminal matters unfold quickly. A ποινικολόγος Αθήνα attends interviews, protects your right to silence and reviews how evidence was collected.",
          "We file motions, request expert opinions and monitor deadlines so that no procedural opportunity is missed. When business interests are involved, the defence coordinates with accountants and auditors.",
          "Remote briefings keep clients in Νίκαια, Βόρεια or Νότια Προάστια aligned with the defence strategy.",
        ],
      },
      {
        heading: "εργατολόγος Αθήνα: protecting yourself with a δικηγόρος εργατικού δικαίου",
        paragraphs: [
          "Labour disputes revolve around facts and timing. An εργατολόγος Αθήνα reviews contracts, policies and communication to identify breaches.",
          "We assemble payroll records, overtime logs and medical certificates. A δικηγόρος εργατικού δικαίου advises whether to negotiate or litigate, and outlines realistic compensation.",
          "Templates and reminders in [[Labour Disputes]] help you collect documents before the consultation.",
        ],
      },
      {
        heading: "δικηγόρος ακινήτων Αθήνα: safe transactions and Κτηματολόγιο checks",
        paragraphs: [
          "Real-estate deals require due diligence. A δικηγόρος ακινήτων Αθήνα verifies the Κτηματολόγιο, checks liens and reviews tax history.",
          "For projects in Βόρεια ή Νότια Προάστια we work with engineers and valuers to confirm budgets and timelines.",
          "More resources about lending, leasing and commercial assets are available in [[Property]].",
        ],
      },
      {
        heading: "κληρονομικά Αθήνα: partnering with a δικηγόρος για κληρονομικά",
        paragraphs: [
          "Inheritance procedures have strict deadlines. A δικηγόρος για κληρονομικά guides you through filings, tax payments and proof of kinship.",
          "When heirs live abroad we coordinate translations, apostille and communication with Greek banks.",
          "See [[Inheritance]] for step-by-step instructions before starting the process.",
        ],
      },
      {
        heading: "δικηγόρος μετανάστευσης Αθήνα: άδεια διαμονής and ιθαγένεια",
        paragraphs: [
          "Migration rules change frequently. A δικηγόρος μετανάστευσης Αθήνα reviews eligibility, prepares your άδεια διαμονής file and tracks deadlines.",
          "If citizenship is the goal, we draft a plan covering residency evidence, income declarations and exam preparation for ιθαγένεια.",
          "Visit [[Migration]] for updates on renewals, status changes and interview tips.",
        ],
      },
    ],
    stepsHeading: "How collaboration unfolds",
    steps: [
      "Step 1. Initial briefing: define objectives, urgency and expected outcome.",
      "Step 2. Document review: contracts, rulings, correspondence, supporting evidence.",
      "Step 3. Strategy design: scenarios, deadlines, workload and budget.",
      "Step 4. Execution: representation before authorities, negotiations, filings.",
      "Step 5. Wrap-up: deliver decisions, explain next steps and monitor enforcement.",
    ],
    checklistsHeading: "Document checklists by matter",
    checklists: [
      {
        title: "Family matters",
        items: [
          "Marriage and birth certificates.",
          "Financial statements, tax returns, bank records.",
          "Spousal or parenting agreements, communication history.",
          "Evidence of child-related expenses and shared assets.",
        ],
      },
      {
        title: "Criminal defence",
        items: [
          "Police reports, indictments, court summons.",
          "Witness details, audio or video records.",
          "Medical documents and character references.",
          "Power of attorney for a δικηγόρος ποινικής υπεράσπισης.",
        ],
      },
      {
        title: "Employment disputes",
        items: [
          "Employment contracts, policies, collective agreements.",
          "Payroll slips, timesheets, email correspondence.",
          "Documents on disciplinary measures or bonuses.",
          "Medical notes and travel authorisations.",
        ],
      },
      {
        title: "Real estate",
        items: [
          "Κτηματολόγιο extracts, cadastral plans.",
          "Preliminary agreements, payment receipts, bank letters.",
          "Energy certificates, debt-free confirmations.",
          "Notarial powers and certified translations.",
        ],
      },
      {
        title: "Inheritance",
        items: [
          "Death certificate, proof of kinship, will.",
          "Asset inventories, bank statements.",
          "Tax filings of the deceased, proof of tax payments.",
          "Notarial powers for representation in Αθήνα or Πειραιάς.",
        ],
      },
      {
        title: "Migration",
        items: [
          "Passport, current άδεια διαμονής, visa history.",
          "Criminal record certificate, certified translations.",
          "Proof of income, lease contract, health insurance.",
          "Evidence supporting ιθαγένεια or status renewal.",
        ],
      },
    ],
    locationsHeading: "Where we operate",
    locations: [
      "Our base is in Αθήνα, yet we travel to Πειραιάς, Νίκαια and the wider Attica region. Each δικηγόρος Αθήνα on the team offers in-person and online sessions.",
      "We monitor jurisprudence in Κέντρο, Βόρεια and Νότια Προάστια to tailor strategies to local expectations.",
    ],
    reasonsHeading: "Why clients trust us",
    reasons: [
      "Bilingual assistance in Greek and Russian, avoiding misinterpretations.",
      "Dedicated specialists for οικογενειακό δίκαιο, ποινικολόγος, εργατολόγος, property and migration.",
      "Realistic expectations and transparent pricing.",
      "Network of notaries, translators and accountants in Αθήνα, Πειραιάς, Νίκαια.",
      "Strict deadline tracking with secure document handling.",
      "Post-resolution support to execute decisions and prevent future disputes.",
    ],
    cta: {
      heading: "Book a consultation",
      paragraph: "Describe your case and a δικηγόρος Αθήνα will outline the roadmap. Reach out via [[Contact]], send a message or call us to schedule.",
      primary: "Book now",
      secondary: "Call +30 698 336 3775",
    },
    disclaimer: "This article is for information only and does not replace tailored legal advice.",
    meta: {
      title: "How to choose a δικηγόρος Αθήνα for your case",
      description: "δικηγόρος Αθήνα, δικηγορικό γραφείο Αθήνα, οικογενειακό δίκαιο: practical checklist for expats.",
      slug: "/dikigoros-athina-kak-vybrat",
    },
    structuredData: {
      headline: "How to choose a δικηγόρος Αθήνα for your case",
      description: "A practical guide from a δικηγορικό γραφείο Αθήνα covering family, criminal, labour, property, inheritance and migration matters.",
      articleBody: "Step-by-step instructions to work with a δικηγόρος Αθήνα, including document checklists and timelines for major legal tasks in Greece.",
    },
    faq: [
      {
        question: "How does the διαζύγιο process unfold in Greece?",
        answer: "A δικηγόρος διαζυγίου Αθήνα reviews agreements, prepares the petition and guides you through mediation or hearings, addressing children and asset distribution.",
      },
      {
        question: "When should I hire an εργατολόγος?",
        answer: "If your employer breaches the contract, delays salary or threatens dismissal, an εργατολόγος Αθήνα collects evidence and advises on negotiation or litigation.",
      },
      {
        question: "What should a δικηγόρος ακινήτων check before purchase?",
        answer: "They review the Κτηματολόγιο, debts, tax status and coordinate technical inspections so the agreement is secure.",
      },
      {
        question: "How do κληρονομικά work in Αθήνα?",
        answer: "Gather proof of kinship, pay taxes and let a δικηγόρος για κληρονομικά manage filings and deadlines.",
      },
      {
        question: "Which documents are needed for άδεια διαμονής?",
        answer: "Passport, proof of income, insurance, criminal record and certified translations; a δικηγόρος μετανάστευσης Αθήνα checks the file before submission.",
      },
      {
        question: "Can a ποινικολόγος help from the start?",
        answer: "Yes, a ποινικολόγος Αθήνα attends interviews, ensures rights are respected and coordinates defence strategy.",
      },
      {
        question: "Do you offer remote consultations?",
        answer: "Yes, we advise clients online across Αθήνα, Πειραιάς, Νίκαια and the wider Attica region.",
      },
    ],
  },
};
const renderTextWithLinks = (text) => {
  const parts = text.split(/(\[\[.+?\]\])/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[\[(.+)\]\]$/);
    if (match) {
      return (
        <span key={`link-${index}`} className="internal-link">
          {match[1]}
        </span>
      );
    }
    return <React.Fragment key={`text-${index}`}>{part}</React.Fragment>;
  });
};

const MultilingualBlogPage = () => {
  const { i18n } = useTranslation();
  const languageKey = (i18n.language || 'ru').split('-')[0];
  const content = contentMap[languageKey] || contentMap.ru;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BLOG_CANONICAL}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': BLOG_CANONICAL,
    },
    headline: content.structuredData.headline,
    name: content.structuredData.headline,
    description: content.structuredData.description,
    inLanguage: languageKey,
    author: {
      '@type': 'Person',
      name: 'Marina Ilyushina',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Marina Ilyushina Law Office',
      url: 'https://milawyer.gr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://milawyer.gr/favicon.ico',
      },
    },
    articleSection: content.sections.map((section) => section.heading),
    keywords: content.meta.description,
    wordCount: 1400,
    datePublished: '2025-09-27',
    dateModified: '2025-09-27',
    articleBody: content.structuredData.articleBody,
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title={content.meta.title}
        description={content.meta.description}
        keywords={content.meta.description}
        canonical={BLOG_CANONICAL}
        hreflang={{
          el: BLOG_CANONICAL,
          en: BLOG_CANONICAL,
          ru: BLOG_CANONICAL,
          'x-default': BLOG_CANONICAL,
        }}
        structuredData={structuredData}
      />

      <section className="blog-hero">
        <div className="container">
          {content.heroBadge && (
            <span className="blog-hero__eyebrow">{content.heroBadge}</span>
          )}
          <h1 className="blog-hero__title">{content.articleTitle}</h1>
          <p className="blog-hero__subtitle">{content.heroSubtitle}</p>
        </div>
      </section>

      <article className="blog-article">
        <div className="container">
          <section className="blog-article__intro-block">
            {content.intro.map((paragraph, index) => (
              <p key={`intro-${index}`} className="blog-article__paragraph">
                {renderTextWithLinks(paragraph)}
              </p>
            ))}
          </section>

          {content.sections.map((section, index) => (
            <section key={`section-${index}`} className="blog-article__section">
              <h2 className="blog-article__heading">{section.heading}</h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p key={`section-${index}-paragraph-${idx}`} className="blog-article__paragraph">
                  {renderTextWithLinks(paragraph)}
                </p>
              ))}
            </section>
          ))}

          <section className="blog-article__section">
            <h2 className="blog-article__heading">{content.stepsHeading}</h2>
            <ol className="blog-article__list blog-article__list--ordered">
              {content.steps.map((step, index) => (
                <li key={`step-${index}`}>{renderTextWithLinks(step)}</li>
              ))}
            </ol>
          </section>

          <section className="blog-article__section">
            <h2 className="blog-article__heading">{content.checklistsHeading}</h2>
            <div className="blog-article__grid">
              {content.checklists.map((checklist, index) => (
                <div key={`checklist-${index}`} className="blog-article__card">
                  <h3 className="blog-article__subheading">{checklist.title}</h3>
                  <ul className="blog-article__list blog-article__list--bullets">
                    {checklist.items.map((item, idx) => (
                      <li key={`checklist-${index}-item-${idx}`}>{renderTextWithLinks(item)}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="blog-article__section">
            <h2 className="blog-article__heading">{content.locationsHeading}</h2>
            {content.locations.map((paragraph, index) => (
              <p key={`location-${index}`} className="blog-article__paragraph">
                {renderTextWithLinks(paragraph)}
              </p>
            ))}
          </section>

          <section className="blog-article__section">
            <h2 className="blog-article__heading">{content.reasonsHeading}</h2>
            <ul className="blog-article__list blog-article__list--bullets">
              {content.reasons.map((reason, index) => (
                <li key={`reason-${index}`}>{renderTextWithLinks(reason)}</li>
              ))}
            </ul>
          </section>

          <section className="blog-article__section blog-cta">
            <h2 className="blog-article__heading">{content.cta.heading}</h2>
            <p className="blog-article__paragraph">{renderTextWithLinks(content.cta.paragraph)}</p>
            <div className="blog-cta__actions">
              <Link to={{ pathname: '/', state: { scrollTo: 'contact' } }} className="blog-cta__button">
                {content.cta.primary}
              </Link>
              <a className="blog-cta__button blog-cta__button--secondary" href="tel:+306983363775">
                {content.cta.secondary}
              </a>
            </div>
          </section>

          <section className="blog-meta">
            <h3 className="blog-article__subheading">Meta</h3>
            <p><strong>Meta Title:</strong> {content.meta.title}</p>
            <p><strong>Meta Description:</strong> {content.meta.description}</p>
            <p><strong>URL Slug:</strong> {content.meta.slug}</p>
          </section>

          <p className="blog-article__paragraph blog-article__disclaimer">
            {content.disclaimer}
          </p>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
};

export default MultilingualBlogPage;
