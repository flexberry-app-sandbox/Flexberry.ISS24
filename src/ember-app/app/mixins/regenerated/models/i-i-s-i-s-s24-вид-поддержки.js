import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  описание: DS.attr('string'),
  списокФорм: DS.hasMany('i-i-s-i-s-s24-список-форм', { inverse: 'видПоддержки', async: false }),
  списокУсловий: DS.hasMany('i-i-s-i-s-s24-список-условий', { inverse: 'видПоддержки', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s24-вид-поддержки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-i-s-s24-вид-поддержки.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  списокФорм: {
    descriptionKey: 'models.i-i-s-i-s-s24-вид-поддержки.validations.списокФорм.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  списокУсловий: {
    descriptionKey: 'models.i-i-s-i-s-s24-вид-поддержки.validations.списокУсловий.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидПоддержкиE', 'i-i-s-i-s-s24-вид-поддержки', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    списокФорм: hasMany('i-i-s-i-s-s24-список-форм', 'Список форм', {
      наименование: attr('Наименование', { index: 0 }),
      форма: belongsTo('i-i-s-i-s-s24-форма', 'Форма', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    }),
    списокУсловий: hasMany('i-i-s-i-s-s24-список-условий', 'Список условий', {
      наименование: attr('Наименование', { index: 0 }),
      условие: belongsTo('i-i-s-i-s-s24-условие', 'Условие', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ВидПоддержкиL', 'i-i-s-i-s-s24-вид-поддержки', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 })
  });
};
