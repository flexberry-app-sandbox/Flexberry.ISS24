import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s24',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s24',
          title: 'I s s24'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
