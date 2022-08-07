import { Serializer as СписокУсловийSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-s-s24-список-условий';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СписокУсловийSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
