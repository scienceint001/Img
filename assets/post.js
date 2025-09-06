async function init(){
  const params = new URLSearchParams(location.search);
  // We render static pages per post, but also support query param ?slug=...
  const slug = document.body.dataset.slug || params.get('slug');
  const res = await fetch('../posts/posts.json');
  const posts = await res.json();
  const post = posts.find(p => p.slug === slug) || posts[0];

  document.getElementById('page-title').textContent = post.title;
  document.getElementById('title').textContent = post.title;
  document.getElementById('journal').textContent = post.journal;
  document.getElementById('year').textContent = post.year;
  const doi = document.getElementById('doi');
  doi.href = post.doi_url;
  doi.textContent = post.doi || 'Link';

  const fig = document.getElementById('figure');
  fig.src = `../${post.image}`;
  fig.alt = post.title;

  const analysis = document.getElementById('analysis');
  analysis.innerHTML = post.analysis_html;

  const links = document.getElementById('links');
  if (post.links && post.links.length){
    post.links.forEach(L => {
      const a = document.createElement('a');
      a.href = L.url; a.textContent = L.label; a.target='_blank'; a.rel='noopener';
      links.appendChild(a);
    });
  }

  // Update giscus mapping if needed (default uses pathname)
  // No action required if mapping by pathname.
}
init();
