/**
 * @file
 * Perform redirect functionality
 */
'use strict';

/**
 * Preprocess url before attach to template.
 * @param data
 */
function dingSPTStatisticsUrlPreprocess(data) {
  if (data.includes('spt')) {
    return data;
  }
  var url = new URL(data);

  return url.href = '/spt/redirect?path=' + url.href + '&hostname=' + url.hostname;
}
