import SNIPS from './snippet-data.js';
import { renderSnips, fetchSnippets } from './lib/snippets.js';
import search from './lib/search.js';

// fetchSnippets().then(snips => renderSnips(snips));
async function init() {
  const snippets = await fetchSnippets();
  renderSnips(snippets);
}

init();
// put that HTML right into #snippets
const searchForm = document.getElementById('search-bar');
searchForm.addEventListener('submit', search);
