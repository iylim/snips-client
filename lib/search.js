import SNIPS from '../snippet-data.js';
import { renderSnips } from './snippets.js';

const search = text => {
  /* look thru SNIPS {
    title:
    description:
    language:
    code:
  }
  */

  // filter out the snips by properties
  const filtered = SNIPS.filter(snippet => snippet.title.includes(text));
  renderSnips(filtered);
  // rerender the snippets after filtering
};

export default search;