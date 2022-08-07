import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  условие: DS.belongsTo('i-i-s-i-s-s24-условие', { inverse: null, async: false }),
  видПоддержки: DS.belongsTo('i-i-s-i-s-s24-вид-поддержки', { inverse: 'списокУсловий', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s24-список-условий.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  условие: {
    descriptionKey: 'models.i-i-s-i-s-s24-список-условий.validations.условие.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  видПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s24-список-условий.validations.видПоддержки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокУсловийE', 'i-i-s-i-s-s24-список-условий', {
    наименование: attr('Наименование', { index: 0 }),
    условие: belongsTo('i-i-s-i-s-s24-условие', 'Условие', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
