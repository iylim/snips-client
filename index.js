import SNIPS from './snippet-data.js';

const renderSnips = snippets => {
  const snippetHTML = snippets
    .map(
      snippet => `<div class="snip">
        <div class="text">
          <h2>${snippet.title}</h2>
          <p>${snippet.description}</p>
        </div>
        <pre><code class="${snippet.language}">${he.encode(snippet.code)}</code></pre>
      </div>`
    )
    .join('');

  console.log(snippetHTML);
  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTML;
};

// map over the SNIPS
// transform that snip into the HTML

// put that HTML right into #snippets

renderSnips(SNIPS);

hljs.initHighlightingOnLoad();