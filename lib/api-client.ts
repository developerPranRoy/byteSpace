import { ofetch } from "ofetch";

/**
 * Shared HTTP client for all REST calls.
 * Centralizing this makes it trivial to swap the base URL,
 * add auth headers, or point at a real backend later.
 */
export const apiClient = ofetch.create({
  baseURL: "/api",
  retry: 1,
  retryDelay: 300,
});
