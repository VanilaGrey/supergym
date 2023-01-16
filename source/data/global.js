export default () => ({
  getImages(filename, additions = {}, useTablet = true, useMobile = true) {
    const image = Object.assign(additions, {
      default: `img/${filename}.jpg`,
      default2x: `img/${filename}@2x.jpg`,
      webp: `img/${filename}.webp`,
      webp2x: `img/${filename}@2x.webp`,
    });

    if (useTablet) {
      image.webpTablet = `img/${filename}-tablet.webp`;
      image.webpTablet2x = `img/${filename}-tablet@2x.webp`;
    }

    if (useMobile) {
      image.webpMobile = `img/${filename}-mobile.webp`;
      image.webpMobile2x = `img/${filename}-mobile@2x.webp`;
    }

    return image;
  },
  projectName: 'SUPERGYM',
  navLinks: [
    {
      url: '#!',
      title: 'Услуги',
    },
    {
      url: '#!',
      title: 'Абонементы',
    },
    {
      url: '#!',
      title: 'Акции',
    },
    {
      url: '#!',
      title: 'Тренеры',
    },
    {
      url: '#!',
      title: 'Расписание',
    },
  ],
  socials: [
    {
      id: 'vk',
      title: 'Мы в Контакте',
      url: '#!',
    },
    {
      id: 'ok',
      title: 'Мы в Одноклассниках.',
      url: '#!',
    },
    {
      id: 'reddit',
      title: 'Мы в Reddit',
      url: '#!',
    },
  ],
  tel: {
    title: '8-800-555-55-55',
    url: 'tel:+78005555555',
  },
});
