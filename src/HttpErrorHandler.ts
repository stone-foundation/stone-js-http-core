import { HttpError } from './errors/HttpError'
import { IncomingHttpEvent } from './IncomingHttpEvent'
import { OutgoingHttpResponse } from './OutgoingHttpResponse'
import { IntegrationError, ILogger, IErrorHandler } from '@stone-js/core'
import { badRequestHttpResponse, createHttpResponse, forbiddenHttpResponse, methodNotAllowedHttpResponse, notFoundHttpResponse, serverErrorHttpResponse, unauthorizedHttpResponse } from './HttpResponse'

/**
 * HttpErrorHandler options.
 */
export interface HttpErrorHandlerOptions {
  logger: ILogger
}

/**
 * Class representing an HttpErrorHandler.
 */
export class HttpErrorHandler implements IErrorHandler<IncomingHttpEvent, OutgoingHttpResponse> {
  private readonly logger: ILogger

  /**
   * Create an HttpErrorHandler.
   *
   * @param options - HttpErrorHandler options.
   */
  constructor ({ logger }: HttpErrorHandlerOptions) {
    if (logger === undefined) {
      throw new IntegrationError('Logger is required to create an HttpErrorHandler instance.')
    }

    this.logger = logger
  }

  /**
   * Handle an error.
   *
   * @param error - The error to handle.
   * @param _event - The incoming http event.
   * @returns The outgoing http response.
   */
  public handle (error: Error, _event: IncomingHttpEvent): OutgoingHttpResponse {
    const httpError = error as HttpError

    this.logger.error(error.message, { error })

    return {
      NotFoundError: notFoundHttpResponse('Not Found'),
      ForbiddenError: forbiddenHttpResponse('Forbidden'),
      BadRequestError: badRequestHttpResponse('Bad Request'),
      UnauthorizedError: unauthorizedHttpResponse('Unauthorized'),
      MethodNotAllowedError: methodNotAllowedHttpResponse('Method Not Allowed'),
      HttpError: createHttpResponse(httpError.statusMessage, httpError.statusCode, httpError.headers)
    }[error.name] ?? serverErrorHttpResponse('Internal Server Error')
  }
}
