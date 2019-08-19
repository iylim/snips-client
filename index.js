import SNIPS from './snippet-data.js';
import { renderSnips } from './lib/snippets.js';
import search from './lib/search.js';

// map over the SNIPS
// transform that snip into the HTML

// put that HTML right into #snippets

renderSnips(SNIPS);

hljs.initHighlightingOnLoad();