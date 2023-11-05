hexo.extend.helper.register('catalog_list', function (type) {
  let html = ``
  hexo.locals.get(type).map(function (item) {
    var patched_id = item.name.replace(/[+]/g,'').replace(/ /g,'-')
    html += `
    <div class="category-bar-item" id="${patched_id}">
      <a href="/${item.path}">${item.name}</a>
    </div>
    `
  })
  return html
})