import { IBlueprint } from '@stone-js/core'
import { IncomingHttpEvent } from './IncomingHttpEvent'
import { OutgoingHttpResponse } from './OutgoingHttpResponse'

/**
 * Class representing a JsonResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class JsonResponse extends OutgoingHttpResponse {
  /**
   * Prepare the response before sending.
   *
   * @param event - The incoming HTTP event.
   * @param blueprint - Optional blueprint settings for the response.
   * @returns The current instance of the response for chaining.
   */
  prepare (event: IncomingHttpEvent, blueprint?: IBlueprint): this {
    return this
      .setBlueprintResolver(() => blueprint)
      .setIncomingEventResolver(() => event)
      .setContentType('json')
      .prepareCookies()
      .makeJson()
  }

  /**
   * Make JSON response.
   *
   * @returns The current instance for method chaining.
   */
  protected makeJson (): this {
    if (typeof this.content !== 'string') {
      this.setContent(this.content)
    }

    return this
  }
}
