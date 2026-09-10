// JS有効の印(スクロールリビールはこのクラスがある時だけ効く)
document.documentElement.classList.add('js')

// FAQ アコーディオン — aria-expanded の切り替えのみ。開閉アニメーションは CSS (grid-template-rows) 側
document.querySelectorAll('.faq-item__q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true'
    btn.setAttribute('aria-expanded', String(!open))
  })
})

// スクロールリビール — 1回だけ、控えめに
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in')
        io.unobserve(e.target)
      }
    })
  },
  { threshold: 0.12 },
)
document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
