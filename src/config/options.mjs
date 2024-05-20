/**
 * Event foundation options.
 * Options are merge to adapter namespace
 * so user can change options per adapter.
 *
 * @returns {Object}
*/
export const eventFoundationOptions = {
  // App namespace.
  app: {
    // Here you can defined common adapter's options.
    adapter: {
      url: '',
      secret: '',
      hosts: {
        trusted: [],
        trustedPattern: [],
        onlySubdomain: true
      },
      proxies: {
        trusted: [],
        untrusted: []
      },
      body: {
        limit: '100kb',
        type: 'text/plain',
        defaultCharset: 'utf-8'
      },
      cache: {},
      cookie: {
        secret: '',
        options: {}
      },
      json: {
        spaces: '',
        escape: '',
        replacer: ''
      },
      files: {
        response: {}
      },
      jsonp: {
        callback: {
          name: 'callback'
        }
      },
      subdomain: {
        offset: 1
      },
      etag: {
        function: null
      },
      middleware: [],
      bootstrappers: [],
      skip_middleware: false,
      cors: {
        origin: [],
        methods: [],
        maxAge: null,
        credentials: false,
        exposedHeaders: [],
        allowedHeaders: [],
        successStatus: 204,
        preflightStop: false
      }
    }
  }
}
