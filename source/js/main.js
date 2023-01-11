import initLazy from './modules/init-lazy.js';
import initVideo from './modules/video.js';

initLazy(() => {
  document.querySelectorAll('.video').forEach(initVideo);
});
// привязывайте js не на классы, а на дата-атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.
