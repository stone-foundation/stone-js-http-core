import { isString } from '@stone-js/common'
import { OutgoingHttpResponse } from './OutgoingHttpResponse.mjs'

/**
 * Class representing a JsonResponse.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class JsonResponse extends OutgoingHttpResponse {
  /**
   * Prepare response.
   *
   * @param   {IncomingHttpEvent} request
   * @param   {Config} [config=null]
   * @returns {this}
   */
  prepare (request, config = null) {
    return this
      .setConfigResolver(() => config)
      .setIncomingEventResolver(() => request)
      .setContentType('json')
      ._prepareCookies()
      ._makeJson()
  }

  /**
   * Make Json response.
   *
   * @returns {this}
   */
  _makeJson () {
    if (!isString(this.content)) {
      this._content = this._morphToJson(this.content, this.config.get('app.http.json', {}))
    }

    return this
  }
}
