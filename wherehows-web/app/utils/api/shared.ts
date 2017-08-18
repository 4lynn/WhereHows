/**
 * Defines the root path for wherehows front-end api requests
 * @type {string}
 */
export const apiRoot = '/api/v1';

/**
 * Defines the literal possible string enum values for the an api response status
 * @type {string}
 */
export enum ApiStatus {
  OK = 'ok',
  FAILED = 'failed'
}
