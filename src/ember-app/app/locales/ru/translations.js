import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISISS24ВидПоддержкиLForm from './forms/i-i-s-i-s-s24-вид-поддержки-l';
import IISISS24УсловиеLForm from './forms/i-i-s-i-s-s24-условие-l';
import IISISS24ФормаLForm from './forms/i-i-s-i-s-s24-форма-l';
import IISISS24ВидПоддержкиEForm from './forms/i-i-s-i-s-s24-вид-поддержки-e';
import IISISS24УсловиеEForm from './forms/i-i-s-i-s-s24-условие-e';
import IISISS24ФормаEForm from './forms/i-i-s-i-s-s24-форма-e';
import IISISS24ВидПоддержкиModel from './models/i-i-s-i-s-s24-вид-поддержки';
import IISISS24СписокУсловийModel from './models/i-i-s-i-s-s24-список-условий';
import IISISS24СписокФормModel from './models/i-i-s-i-s-s24-список-форм';
import IISISS24УсловиеModel from './models/i-i-s-i-s-s24-условие';
import IISISS24ФормаModel from './models/i-i-s-i-s-s24-форма';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s24-вид-поддержки': IISISS24ВидПоддержкиModel,
    'i-i-s-i-s-s24-список-условий': IISISS24СписокУсловийModel,
    'i-i-s-i-s-s24-список-форм': IISISS24СписокФормModel,
    'i-i-s-i-s-s24-условие': IISISS24УсловиеModel,
    'i-i-s-i-s-s24-форма': IISISS24ФормаModel
  },

  'application-name': 'I s s24',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s24',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s24',
          title: 'I s s24'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'i-s-s24': {
          caption: 'ISS24',
          title: 'ISS24',
          'i-i-s-i-s-s24-условие-l': {
            caption: 'Условие',
            title: ''
          },
          'i-i-s-i-s-s24-вид-поддержки-l': {
            caption: 'Вид поддержки',
            title: ''
          },
          'i-i-s-i-s-s24-форма-l': {
            caption: 'Форма',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s24-вид-поддержки-l': IISISS24ВидПоддержкиLForm,
    'i-i-s-i-s-s24-условие-l': IISISS24УсловиеLForm,
    'i-i-s-i-s-s24-форма-l': IISISS24ФормаLForm,
    'i-i-s-i-s-s24-вид-поддержки-e': IISISS24ВидПоддержкиEForm,
    'i-i-s-i-s-s24-условие-e': IISISS24УсловиеEForm,
    'i-i-s-i-s-s24-форма-e': IISISS24ФормаEForm
  },

});

export default translations;
