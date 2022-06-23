const PHOTOS_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const DESCRIPTIONS = ['Море', 'Горы', 'Солнце', 'Луна', 'Пляж'];
const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const AVATARS_COUNT = 6;
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

const createMessage = () => {
  const a = getRandomPositiveInteger(0, MESSAGES.length - 1);
  const b = getRandomPositiveInteger(0, MESSAGES.length - 1);
  const result = [];

  result.push(MESSAGES[a]);
  if (a !== b && getRandomPositiveInteger(0, 1)) {
    result.push(MESSAGES[b]);
  }

  return result;
};

let photoID = 0;

const createPhotoDescription = () => {
  photoID++;
  return {
    id: photoID,
    url: `photos/${  photoID  }.jpg`,
    description: DESCRIPTIONS[getRandomPositiveInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
    comments: {
      id: getRandomPositiveInteger(1, 1000),
      avatar: `img/avatar-${  getRandomPositiveInteger(1, AVATARS_COUNT)  }.svg`,
      message: createMessage(),
      name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)]
    }
  }
};

const photosDescriptions = Array.from({length: PHOTOS_COUNT}, createPhotoDescription);
// eslint-disable-next-line no-console
console.log(photosDescriptions);
