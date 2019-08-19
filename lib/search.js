import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

const search = e => {
  const searchText = e.target['search-text'].value;
  e.preventDefault();
  /* look thru SNIPS {
    title:
    description:
    language:
    code:
  }
  */

  const matchStr = (str, toMatch) => str.toLowerCase().includes(toMatch.toLowerCase());

  // filter out the snips by properties
  const filtered = SNIPS.filter(snippet => matchStr(snippet.title, searchText) || matchStr(snippet.description, searchText) || matchStr(snippet.language, searchText) || matchStr(snippet.code, searchText));
  renderSnips(filtered);
  // rerender the snippets after filtering
};

export default search;