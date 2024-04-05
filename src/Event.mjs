import { AbstractEvent } from '@stone-js/common'

export class Event extends AbstractEvent {
  static REQUEST_HANDLED = 'stonejs@kernel.request_handled'
  static RESPONSE_PREPARED = 'stonejs@kernel.response_prepared'
  static PREPARING_RESPONSE = 'stonejs@kernel.preparing_response'
}
