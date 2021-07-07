import SNIPS from '../snippet-data.js';
import { renderSnips, fetchSnippets } from './snippets.js';

// helper function
const matchStr = (str, toMatch) => str.toLowerCase().includes(toMatch.toLowerCase());

const search = async e => {
  const searchText = e.target['search-text'].value;
  e.preventDefault();
  /* look thru SNIPS {
    title:
    description:
    language:
    code:
  }
  */

 // TODO: Make an API call.
  const snips = await fetchSnippets();
  // TODO: Get API data

  // TODO: Use API data instead of SNIPS to filter and display
  // filter out the snips by said properties.
  

  // filter out the snips by properties
  const filtered = SNIPS.filter(snippet => matchStr(snippet.title, searchText) || matchStr(snippet.description, searchText) || matchStr(snippet.language, searchText) || matchStr(snippet.code, searchText));
  renderSnips(filtered);
  // rerender the snippets after filtering
};

export default search;