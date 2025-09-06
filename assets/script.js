async function loadPosts(url){
  const res = await fetch(url);
  return await res.json();
}
function postCard(p){
  const a = document.createElement('a');
  a.href = `posts/${encodeURIComponent(p.slug)}.html`;
  a.className='card';
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.title;
  const c = document.createElement('div');
  c.className='content';
  const h3 = document.createElement('h3'); h3.textContent = p.title;
  const pmeta = document.createElement('p'); pmeta.className='meta'; pmeta.textContent = `${p.journal} • ${p.year}`;
  const pdesc = document.createElement('p'); pdesc.textContent = p.teaser || '';
  c.appendChild(h3); c.appendChild(pmeta); c.appendChild(pdesc);
  a.appendChild(img); a.appendChild(c);
  return a;
}
