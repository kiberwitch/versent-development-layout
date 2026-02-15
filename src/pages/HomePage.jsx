import { Link } from 'react-router-dom'

export default function HomePage() {
  const tags = [
    'Фон-видео',
    'Zero-каталог',
    'Якоря',
    'Курсор-дым',
    'Обводка',
    'Адаптивные отступы',
    'Ценовой диапазон',
    'Поиск по каталогу',
    'Blur-слайды',
    'Zoom-слайд',
    'Параллакс',
    'Зум-ховер',
    'и т.д.',
  ]

  return (
    <div
      className="relative min-h-dvh overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50 text-slate-900"
      style={{
        backgroundImage: "url('/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20(11).png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="pointer-events-none absolute -left-28 top-28 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-36 bottom-24 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-8 h-96 w-96 rounded-full bg-blue-300/25 blur-3xl" />

      <header className="relative">
        <div className="mx-auto max-w-5xl px-4 pt-4">
          <div className="relative flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-2.5 shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur">
            <div className="flex items-center gap-3">
              <img
                src="/icon.png"
                alt="Логотип"
                className="h-7 w-7 shrink-0"
                loading="eager"
              />
              <Link to="/" className="text-base font-semibold tracking-tight">
                Versent
              </Link>
            </div>

            <nav
              aria-label="Основная навигация"
              className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-8 text-sm text-slate-500 sm:flex"
            >
              <a href="#lessons" className="hover:text-slate-900">
                Уроки
              </a>
              <a href="#mods" className="hover:text-slate-900">
                Код
              </a>
              <a href="#effects" className="hover:text-slate-900">
                Эффекты
              </a>
              <a href="#demo" className="hover:text-slate-900">
                Демо
              </a>
            </nav>

            <div className="hidden items-center gap-4 sm:flex">
              <div className="relative flex items-center">
                <input
                  aria-label="Поиск"
                  placeholder="Поиск..."
                  className="h-7 w-60 border-y border-slate-300 bg-transparent px-2 pr-8 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <span aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500">
                  ⌕
                </span>
              </div>

              <button type="button" aria-label="Открыть меню" className="grid h-9 w-10 place-items-center">
                <span className="grid gap-1">
                  <span className="h-0.5 w-6 rounded bg-slate-700" />
                  <span className="h-0.5 w-6 rounded bg-slate-700" />
                  <span className="h-0.5 w-6 rounded bg-slate-700" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 pb-12 pt-6">
        <section
          aria-labelledby="hero-title"
          className="relative mt-5 overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-b from-sky-50 via-white to-sky-50 shadow-[0_25px_70px_rgba(15,23,42,0.14)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.22),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.10),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/30" />

          <div className="pointer-events-none absolute -left-2 top-12 h-16 w-24 -rotate-12 rounded-2xl bg-white/25" />

          <img
            src="/searching%20for%20a%20file%20in%20a%20folder%20(1).png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-4 top-6 w-36 -rotate-0 opacity-80 sm:left-0 sm:top-0 sm:w-52"
            loading="lazy"
          />
          <img
            src="/Stock%20trading%20online%20on%20stock%20market.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 -right-6 w-40 rotate-0 opacity-80 sm:bottom-0 sm:right-0 sm:w-60"
            loading="lazy"
          />

          <div className="relative flex min-h-[420px] flex-col items-center justify-center px-5 py-12 sm:px-10 sm:py-16">
            <h1 id="hero-title" className="text-center text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Продвинутые техники в{' '}
              <span className="relative inline-block">
                <span className="tilda-bg" aria-hidden="true" />
                <span className="font-extrabold">Tilda</span>
              </span>
            </h1>

            <a
              href="#mods"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-400/70 bg-white/55 px-10 py-2.5 text-sm font-medium text-slate-800 shadow-sm backdrop-blur hover:bg-white"
            >
              Смотреть решения →
            </a>

            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2" aria-label="Теги">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-400/60 bg-white/25 px-3 py-1 text-[12px] font-medium leading-none text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="mods" className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">
            <span className="relative italic">
              <span className="pointer-events-none absolute -left-1 -top-3 -z-10" aria-hidden="true">
                <svg
                  width="226"
                  height="34"
                  viewBox="0 0 226 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.14881 28.5849C65.5033 36.2215 168.984 30.9103 195.887 23.9743C218.454 18.1563 215.77 1.26096 109.597 1.26099C-17.7742 1.26102 -30.2705 26.2728 58.6372 28.5849C147.545 30.8969 208.288 29.846 224.262 10.7193"
                    stroke="url(#paint0_linear_1_1707)"
                    strokeWidth="2.5222"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_1707"
                      x1="1.26172"
                      y1="16.7958"
                      x2="224.262"
                      y2="16.7958"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#00FFC4" />
                      <stop offset="1" stopColor="#00BBFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              Полезные
            </span>{' '}
            <span className="font-normal">модификации для тильды:</span>
          </h2>

          <div className="mt-4 grid gap-4">
            <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
              <div className="grid gap-4 p-6 sm:grid-cols-[1fr_260px] sm:items-stretch">
                <div className="relative flex flex-col pb-16">
                  <h3 className="text-base font-semibold text-slate-900">Кастомные блоки с контентом</h3>
                  <p className="mt-3 max-w-md text-sm leading-snug text-slate-600">
                    Полный контроль над стилем, фильтрами и пагинацией. Синхронизация с Tilda Store.
                  </p>
                  <a
                    href="#demo"
                    className="absolute -bottom-px -left-px z-10 inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_22px_rgba(6,182,212,0.35)]"
                    style={{
                      background: 'linear-gradient(90deg, #00ffc3 0%, #0bf 100%)',
                      borderTopRightRadius: '14px',
                      borderBottomRightRadius: '14px',
                      borderBottomLeftRadius: '16px',
                    }}
                  >
                    Смотреть демо →
                  </a>
                </div>

                <div className="relative">
                  <img
                    src="https://placehold.co/520x360/png"
                    alt="Заглушка изображения для карточки"
                    className="h-full w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
                <div className="grid gap-4 p-6 sm:grid-cols-[1fr_220px] sm:items-stretch">
                  <div className="relative flex flex-col pb-16">
                    <h3 className="text-base font-semibold text-slate-900">Загрузка видео больше 10 МБ</h3>
                    <p className="mt-3 text-sm leading-snug text-slate-600">
                      Загружай 4K-ролики без хостинга. Работает даже в бесплатном тарифе.
                    </p>
                    <a
                      href="#"
                      className="absolute -bottom-px -left-px z-10 inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_22px_rgba(6,182,212,0.35)]"
                      style={{
                        background: 'linear-gradient(90deg, #00ffc3 0%, #0bf 100%)',
                        borderTopRightRadius: '14px',
                        borderBottomRightRadius: '14px',
                        borderBottomLeftRadius: '16px',
                      }}
                    >
                      Читать гайд →
                    </a>
                  </div>

                  <img
                    src="https://placehold.co/440x340/png"
                    alt="Заглушка изображения для карточки"
                    className="h-full w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
              </article>

              <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
                <div className="grid gap-4 p-6 sm:grid-cols-[1fr_220px] sm:items-stretch">
                  <div className="relative flex flex-col pb-16">
                    <h3 className="text-base font-semibold text-slate-900">Интерактивный элементы и анимации</h3>
                    <p className="mt-3 text-sm leading-snug text-slate-600">Анимации, которые цепляют и не ломают Tilda.</p>
                    <Link
                      to="/interactive"
                      className="absolute -bottom-px -left-px z-10 inline-flex items-center justify-center px-10 py-3 text-sm font-semibold text-white shadow-[0_12px_22px_rgba(6,182,212,0.35)]"
                      style={{
                        background: 'linear-gradient(90deg, #00ffc3 0%, #0bf 100%)',
                        borderTopRightRadius: '14px',
                        borderBottomRightRadius: '14px',
                        borderBottomLeftRadius: '16px',
                      }}
                    >
                      Попробовать →
                    </Link>
                  </div>

                  <img
                    src="https://placehold.co/440x340/png"
                    alt="Заглушка изображения для карточки"
                    className="h-full w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="demo" className="mt-8">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
            <div className="grid gap-0 md:grid-cols-[1fr_420px] md:items-stretch">
              <div className="flex flex-col justify-between p-6">
                <div>
                  <h2 className="text-base font-semibold text-slate-900">Прокачаем выхлоп за 1 день</h2>
                  <p className="mt-3 text-sm leading-snug text-slate-600">Скидка -15%. Гарантия 2 года. Расчет 1 мин</p>
                </div>
                <a
                  href="#"
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-xl bg-sky-100 px-6 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-200"
                >
                  Подробнее →
                </a>
              </div>

              <div className="relative">
                <img
                  src="https://placehold.co/840x440/png"
                  alt="Заглушка изображения для баннера"
                  className="h-full w-full object-cover md:min-h-[180px]"
                  loading="lazy"
                />
                <span className="absolute bottom-3 right-3 rounded-md bg-black/45 px-2 py-1 text-[10px] font-medium text-white">
                  Реклама
                </span>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-8" aria-labelledby="support-title">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
            <div className="grid gap-6 md:grid-cols-[1fr_320px] md:items-center">
              <div>
                <h2 id="support-title" className="text-xl font-semibold text-slate-900">
                  Поддержать проект
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-snug text-slate-600">
                  Если статья помогла — вы можете поблагодарить любой суммой. Это мотивирует писать больше таких гайдов!
                </p>

                <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Сумма">
                  <button type="button" className="rounded-xl bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                    100 ₽
                  </button>
                  <button
                    type="button"
                    aria-pressed="true"
                    className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_20px_rgba(6,182,212,0.30)]"
                  >
                    300 ₽
                  </button>
                  <button type="button" className="rounded-xl bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                    500 ₽
                  </button>
                  <button type="button" className="rounded-xl bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                    Своя сумма
                  </button>
                </div>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] hover:bg-slate-900"
                >
                  Поблагодарить
                </button>
              </div>

              <img
                src="https://placehold.co/640x420/png"
                alt="Заглушка изображения для блока поддержки"
                className="mx-auto h-auto w-full max-w-[320px] rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200">
            <div className="lg:pr-8">
              <div className="flex items-center gap-3">
                <img src="/icon.png" alt="" aria-hidden="true" className="h-7 w-7" loading="lazy" />
                <p className="text-sm font-semibold">Versent</p>
              </div>
              <p className="mt-3 text-xs text-slate-600">© {new Date().getFullYear()} Versent.</p>
              <p className="mt-1 text-xs text-slate-600">Все права защищены.</p>
              <p className="mt-4 text-xs text-slate-500">Icons by icons8</p>
            </div>

            <div className="lg:px-8">
              <p className="text-sm font-semibold text-slate-900">Навигация</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#lessons" className="hover:text-slate-900">
                    Статьи
                  </a>
                </li>
                <li>
                  <a href="#mods" className="hover:text-slate-900">
                    Проекты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Модификации
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-slate-900">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:px-8">
              <p className="text-sm font-semibold text-slate-900">Кастомные блоки</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Кастомный каталог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Кастомные карточки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-900">
                    Изменения корзины
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:pl-8">
              <p className="text-sm font-semibold text-slate-900">Контакты</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-500">
                <li>
                  <a href="mailto:hello@gmail.com" className="hover:text-slate-900">
                    hello@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

