export const config = {
  url: '',
  secret: '',
  hosts: {
    trusted: [],
    trustedPattern: [],
    onlySubdomain: true
  },
  proxies: {
    trusted: [],
    untrusted: [],
  },
  body: {
    limit: '100kb',
    type: 'text/plain',
    defaultCharset: 'utf-8',
  },
  cookie: {
    secret: '',
    options: {},
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
  server: {
    key: null,
    cert: null,
    port: 8080,
    protocol: 'http',
    hostname: 'localhost',
    requestTimeout: 300000
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
    preflightStop: false,
  }
}