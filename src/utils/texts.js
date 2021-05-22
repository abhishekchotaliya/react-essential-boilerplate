import pupa from 'pupa';

/* eslint-disable no-template-curly-in-string */
const texts = {
  ROOT_PAGE: {
    CREDIT: 'credit',
    COUNTER: 'counter',
    DYNAMIC: 'This string is in {english} - {age}',
  },
};

export const fillString = (str, payload) => pupa(str, payload);
export const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1);
export const toUpperCase = (str) => str.toUpperCase();
export const toLowerCase = (str) => str.toLowerCase();

export default texts;
