import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s24-условие', 'Unit | Serializer | i-i-s-i-s-s24-условие', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-i-s-s24-условие',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
