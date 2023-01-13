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
        utl: '#!',
      },
      image: getImages('promo', {alt: 'Каким Вы можете стать благодаря нам.'}, false, false),
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
        file: 'https://www.youtube.com/watch?v=9TZXsZItgdw',
        poster: getImages('about-video', {}, false, true),
      },
    },
    subscriptions: {
      decor: getImages('wheels', {}, false, true),
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
  };
};
