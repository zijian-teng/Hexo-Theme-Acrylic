hexo.extend.helper.register('catalog_list', function (type) {
  let html = ``
  hexo.locals.get(type).map(function (item) {
    var pathed_id = item.name.replace(/[+]/g,'').replace(/ /g,'-')
    html += `
    <div class="category-bar-item" id="${pathed_id}">
      <a href="/${item.path}" data-pjax-state>${item.name}</a>
    </div>
    `
  })
  return html
})