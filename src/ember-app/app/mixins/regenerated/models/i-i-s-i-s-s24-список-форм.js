import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  форма: DS.belongsTo('i-i-s-i-s-s24-форма', { inverse: null, async: false }),
  видПоддержки: DS.belongsTo('i-i-s-i-s-s24-вид-поддержки', { inverse: 'списокФорм', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s24-список-форм.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  форма: {
    descriptionKey: 'models.i-i-s-i-s-s24-список-форм.validations.форма.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  видПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s24-список-форм.validations.видПоддержки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокФормE', 'i-i-s-i-s-s24-список-форм', {
    наименование: attr('Наименование', { index: 0 }),
    форма: belongsTo('i-i-s-i-s-s24-форма', 'Форма', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
