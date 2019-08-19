import SNIPS from './snippet-data.js';
import { renderSnips, highlightSnips } from './lib/snippets.js';
import search from './lib/search.js';

// map over the SNIPS
// transform that snip into the HTML
renderSnips(SNIPS);

// put that HTML right into #snippets
const searchForm = document.getElementById('search-bar');
searchForm.addEventListener('submit', e => {
  const searchText = e.target['search-text'].value;
  e.preventDefault();
  search(searchText);
});
