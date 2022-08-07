import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s24-список-форм', 'Unit | Model | i-i-s-i-s-s24-список-форм', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-i-s-s24-вид-поддержки',
    'model:i-i-s-i-s-s24-список-условий',
    'model:i-i-s-i-s-s24-список-форм',
    'model:i-i-s-i-s-s24-условие',
    'model:i-i-s-i-s-s24-форма',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
