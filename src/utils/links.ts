import { getUILanguage } from "./locales";
import { isEdge, isMobile } from "./platform";

export const HOMEPAGE_URL = "about:blank";
export const BLOG_URL = "about:blank";
export const NEWS_URL = "about:blank";
export const DEVTOOLS_DOCS_URL =
  "https://github.com/darkreader/darkreader/blob/main/CONTRIBUTING.md";
export const DONATE_URL = "about:blank";
export const GITHUB_URL = "https://github.com/darkreader/darkreader";
export const MOBILE_URL = "about:blank";
export const PRIVACY_URL = "about:blank";
export const TWITTER_URL = "about:blank";
export const UNINSTALL_URL = "about:blank";
export const HELP_URL = "about:blank";
export const CONFIG_URL_BASE =
  "https://raw.githubusercontent.com/darkreader/darkreader/main/src/config";

const helpLocales = [
  "be",
  "cs",
  "de",
  "en",
  "es",
  "fr",
  "it",
  "ja",
  "nl",
  "pt",
  "ru",
  "sr",
  "tr",
  "zh-CN",
  "zh-TW",
];

export function getHelpURL(): string {
  if (isEdge && isMobile) {
    return `${HELP_URL}/mobile/`;
  }
  const locale = getUILanguage();
  const matchLocale =
    helpLocales.find((hl) => hl === locale) ||
    helpLocales.find((hl) => locale.startsWith(hl)) ||
    "en";
  return `${HELP_URL}/${matchLocale}/`;
}

export function getBlogPostURL(postId: string): string {
  return `${BLOG_URL}${postId}/`;
}
