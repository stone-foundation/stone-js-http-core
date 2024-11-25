import { KernelMiddlewareConfig } from "@stone-js/core";


export interface HttpCorsConfig {
  /**
   * The allowed origins for CORS requests.
   */
  origin: string | string[];
  /**
   * The allowed methods for CORS requests.
   */
  methods: string | string[];
  /**
   * The maximum age for preflight requests.
   */
  maxAge: number | null;
  /**
   * Whether credentials are allowed in CORS requests.
   */
  credentials: boolean;
  /**
   * The headers that are exposed to the client in CORS responses.
   */
  exposedHeaders: string | string[];
  /**
   * The headers that are allowed in CORS requests.
   */
  allowedHeaders: string | string[];
  /**
   * The HTTP status code to use for successful preflight requests.
   */
  successStatus: number;
  /**
   * Whether to stop processing preflight requests.
   */
  preflightStop: boolean;
};

/**
 * Represents the core HTTP config options for the application.
 */
export interface HttpConfig {
  /**
   * The application configuration namespace.
   */
  app: {
    /**
     * HTTP configuration options that are commonly used across adapters.
     */
    http: {
      /**
       * Host-related configuration options.
       */
      hosts: {
        /**
         * A list of trusted hostnames.
         */
        trusted: string[];
        /**
         * A list of trusted host patterns.
         */
        trustedPattern: string[];
        /**
         * Whether only subdomains are allowed.
         */
        onlySubdomain: boolean;
      };
      /**
       * Proxy-related configuration options.
       */
      proxies: {
        /**
         * A list of trusted proxies.
         */
        trusted: string[];
        /**
         * A list of untrusted proxies.
         */
        untrusted: string[];
      };
      /**
       * Configuration for request body parsing.
       */
      body: {
        /**
         * The maximum size of the request body.
         */
        limit: string;
        /**
         * The content type of the request body.
         */
        type: string;
        /**
         * The default character set for the request body.
         */
        defaultCharset: string;
      };
      /**
       * Cache configuration options.
       */
      cache: Record<string, any>;
      /**
       * Cookie-related configuration options.
       */
      cookie: {
        /**
         * The secret used for signing cookies.
         */
        secret: string;
        /**
         * Additional cookie options.
         */
        options: Record<string, any>;
      };
      /**
       * JSON-related configuration options.
       */
      json: {
        /**
         * The number of spaces to use for formatting JSON output.
         */
        spaces: string;
        /**
         * Whether to escape HTML characters in JSON output.
         */
        escape: string;
        /**
         * A custom replacer function for JSON serialization.
         */
        replacer: Function ;
      };
      /**
       * File upload and response configuration options.
       */
      files: {
        /**
         * Configuration for file uploads.
         */
        upload: Record<string, any>;
        /**
         * Configuration for file responses.
         */
        response: Record<string, any>;
      };
      /**
       * JSONP-related configuration options.
       */
      jsonp: {
        /**
         * Configuration for the JSONP callback function.
         */
        callback: {
          /**
           * The name of the JSONP callback parameter.
           */
          name: string;
        };
      };
      /**
       * Subdomain-related configuration options.
       */
      subdomain: {
        /**
         * The offset to use when determining subdomains.
         */
        offset: number;
      };
      /**
       * ETag-related configuration options.
       */
      etag: {
        /**
         * A custom function for generating ETags.
         */
        function: (() => string) | null;
      };
      /**
       * Cross-Origin Resource Sharing (CORS) configuration options.
       */
      cors: HttpCorsConfig;
    };

    /**
     * This interface defines the configuration for kernel-level options.
     */
    kernel: {
      /**
       * Middleware configuration options for different stages of the kernel's lifecycle.
       */
      middleware: Partial<KernelMiddlewareConfig>
    }
  };
}

/**
 * Default HTTP configuration options for the application.
 */
export const http: HttpConfig = {
  app: {
    http: {
      hosts: {
        trusted: [],
        trustedPattern: [],
        onlySubdomain: true,
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
      cache: {},
      cookie: {
        secret: '',
        options: {},
      },
      json: {
        spaces: '',
        escape: '',
        replacer: () => {},
      },
      files: {
        upload: {},
        response: {},
      },
      jsonp: {
        callback: {
          name: 'callback',
        },
      },
      subdomain: {
        offset: 1,
      },
      etag: {
        function: null,
      },
      cors: {
        origin: [],
        methods: [],
        maxAge: null,
        credentials: false,
        exposedHeaders: [],
        allowedHeaders: [],
        successStatus: 204,
        preflightStop: false,
      },
    },
    kernel: {
      middleware: {
        event: [],
      }
    }
  },
};
