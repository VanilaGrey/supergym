
const addTariffLink = (tariff) =>
  Object.assign(tariff, {
    link: {
      title: 'Купить абонемент',
      url: '#!',
    },
  });

export default ({getImages}) => {
  const trainersList = [
    {
      content: `<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Анна Павлова',
    },
    {
      content: `<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Алексей Лавров',
    },
    {
      content: `<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Александр Пашков',
    },
    {
      content: `<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Мария Кетова',
    },
  ].map((trainer, i) =>
    Object.assign(trainer, {
      image: getImages(`trainer-${i + 1}`, {alt: `Тренер ${trainer.heading}.`}, false, false),
    })
  );
  trainersList.push(trainersList[2], trainersList[0], trainersList[3], trainersList[1]);

  return {
    trainers: {
      heading: 'Тренеры',
      list: trainersList,
    },
    promo: {
      features: ['Тренажёрный зал', 'Групповые занятия', 'Кардио-зона'],
      label: 'Омск',
      link: {
        title: 'Купить абонемент',
        url: '#price-section__inner',
      },
      image: getImages('promo', {alt: 'Каким Вы можете стать благодаря нам.'}, true, false),
      title: 'Фитнес центр',
    },
    about: {
      content: `<h2>Тренажерный зал</h2>
      <p>Просторный зал площадью 900 кв/м</p>
      <p>
      Supergym – самый большой фитнес центр за Уралом и идеальное место для укрепления тела и здоровья.
      Тренажерный зал оснащен всем необходимым современным оборудованием для всех спортсменов.
      </p>
      <p>
      В зале расположены отдельная зона для Crossfit и кардио-зона с 40 тренажерами.
      Также в фитнес центре есть несколько оборудованных залов для различных видов групповых занятий.
      </p>`,
      image: getImages('about', {alt: 'Каким выглядит один из наших залов.'}),
      video: {
        poster: getImages('about-video', {}, true, true),
        youtube: '9TZXsZItgdw',
      },
    },
    subscriptions: {
      decor: getImages('wheels', {}, true, true),
      heading: 'Абонементы',
      groups: [
        {
          list: [
            {
              heading: 'С тренером',
              description: '12 занятий',
              price: 5000,
            },
            {
              heading: 'Дневной',
              description: 'с 8:00 до 17:00 ',
              price: 1700,
            },
            {
              heading: 'Полный день',
              description: 'с 8:00 до 22:00 ',
              price: 2700,
            },
          ].map(addTariffLink),
          title: '1 месяц',
        },
        {
          list: [
            {
              heading: 'С тренером',
              description: '12 занятий',
              price: 25000,
            },
            {
              heading: 'Дневной',
              description: 'с 8:00 до 17:00 ',
              price: 10000,
            },
            {
              heading: 'Полный день',
              description: 'с 8:00 до 22:00 ',
              price: 16000,
            },
          ].map(addTariffLink),
          title: '6 месяцев',
        },
        {
          list: [
            {
              heading: 'С тренером',
              description: '12 занятий',
              price: 50000,
            },
            {
              heading: 'Дневной',
              description: 'с 8:00 до 17:00 ',
              price: 17000,
            },
            {
              heading: 'Полный день',
              description: 'с 8:00 до 22:00 ',
              price: 27000,
            },
          ].map(addTariffLink),
          title: '12 месяцев',
        },
      ],
    },
    event: {
      heading: 'Super Games',
      description: '<p>Ежегодные соревнования по CrossFit</p>',
      datetime: {
        day: 7,
        month: 'Марта',
        year: 2019,
        date: '2019-03-07',
        time: '12:00',
      },
      image: getImages('background-event', {alt: 'Спортсмен.'}, false, false),
      link: {
        title: 'Заполнить заявку',
        url: '#!',
      },
    },
    advantages: {
      heading: 'Наши преимущества',
      list: [
        {
          content: '<p>Современные тренажеры на все группы мышц</p>',
          key: 'Тренажеров',
          center: true,
          value: '100',
        },
        {
          content: `<h3>Площадь</h3>
            <p>Занимайтесь без очередей и толпучки</p>`,
          key: 'кв/м',
          value: '900',
        },
        {
          content: `<h3>Собственная парковка</h3>
            <p>Вы всегда найдете место для своей машины на нашей парковке</p>`,
          key: 'машин',
          value: '70',
        },
        {
          content: `<h3>Комфорт</h3>
            <p>Просторные раздевалки, душевые, фен, Wi-Fi, кулеры</p>`,
          key: 'мест',
          value: '350',
        },
        {
          content: `<h3>Тренерский опыт</h3>
            <p>Добивайтесь своих целей быстрее с профессиональным тренером</p>`,
          key: 'лет',
          value: '5+',
        },
      ],
    },
    ad: {
      heading: 'Акции',
      list: [
        {
          content: `<h3>Год <strong>4999</strong></h3>
            <p>Безлимитный абонемент в тренажерный зал</p>`,
          image: getImages('ad', {alt: 'Спортсменка на фоне голубого неба.'}),
        },
        {
          content: `<h3>Месяц бесплатно</h3>
            <p>Приведи друга, получи абонемент в подарок</p>`,
        },
        {
          content: `<h3>Скидка 20%</h3>
            <p>Корпоративный фитнес с командой</p>`,
        },
      ].map((item) =>
        Object.assign(item, {
          link: {
            title: 'Подробнее',
            url: '#!',
          },
        })
      ),
    },
    reviews: {
      heading: 'Отзывы',
      list: Array.from({length: 3}, () => ({
        author: 'Анна Орлова',
        content: `<p>
          «Хожу в SuperClub уже больше года. Нравится, что в клубе всегда чисто, тренажеры обновляют, персонал
          дружелюбный. Зал просторный, даже в вечернее время нет очередей»
        </p>`,
        image: getImages('avatar', {alt: 'Фото пользователя.'}, false, false),
      })),
    },
    ticket: {
      action: 'https://echo.htmlacademy.ru',
      heading: 'Бесплатное занятие',
      fields: [
        `<input
          id="ticket-name"
          name="name"
          type="text"
          placeholder="Имя"
          pattern="^[A-Za-zА-Яа-яЁё\\- ]+$"
          required
        />
        <strong>Пожалуйста, введите имя</strong>
        <label for="ticket-name">Имя.</label>`,
        `<input
          id="ticket-phone"
          name="phone"
          type="tel"
          placeholder="Телефон"
          pattern="^\\+?[\\d ()-]+$"
          required
        />
        <strong>Введите от 7 до 13 цифр</strong>
        <label for="ticket-phone">Телефон.</label>`,
      ],
      method: 'post',
      submitText: 'Отправить',
    },
    contacts: {
      heading: 'Контакты',
      lists: [
        [
          ['Адрес:', 'г. Омск, ул. 60 лет Октября, 7'],
          ['График работы:', 'Пн-Вс: с 8:00 до 22:00'],
        ],
        [
          ['Телефон:', '<a href="tel:+78005555555">8-800-555-55-55</a>'],
          ['Email:', '<a href="mailto:omsk@supergym.ru">omsk@supergym.ru</a>'],
        ],
      ].map((list) => list.map(([key, value]) => ({key, value}))),
    },
  };
};
