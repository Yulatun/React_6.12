export const notEmptyValidator = (value) =>
  value ? '' : 'Поле пустое. Заполните пожалуйста';

export const notEmptyDateValidator = (value) =>
  value ? '' : 'Пожалуйста, выберете дату';

export const firstCapitalLetterValidator = (value) =>
  value[0].toUpperCase() === value[0]
    ? ''
    : 'Первая буква должна быть заглавной';
export const letterOfAlphabetValidator = (value) =>
  value.match(/^[а-яА-ЯёЁa-zA-Z ]+$/) ? '' : 'Используйте буквы';

export const webSiteValidator = (value) =>
  value.startsWith('https://')
    ? ''
    : 'поле «Сайт» должно начинаться с https:// ';

export const charactersCounter = (value) =>
  value.length >= 600 ? '«Превышен лимит символов в поле»' : '';

export const telephoneValidator = (value) =>
  value.match(/^[0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)
    ? ''
    : 'Телефон должен быть в формате: 7-7777-77-77';


