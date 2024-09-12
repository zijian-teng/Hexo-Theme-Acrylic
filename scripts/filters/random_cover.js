/**
 * Acrylic
 * ramdom cover
 */

'use strict'

hexo.extend.filter.register('before_post_render', function (data) {
  const { config } = this
  if (config.post_asset_folder) {
    const imgTestReg = /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/
    const topImg = data.top_img
    const cover = data.cover
    if (topImg && topImg.indexOf('/') === -1 && imgTestReg.test(topImg)) data.top_img = data.path + topImg
    if (cover && cover.indexOf('/') === -1) data.cover = data.path + cover
  }

  if (data.cover === false) {
    data.randomcover = randomCover()
    return data
  }

  data.cover = data.cover || randomCover()
  return data
})

function randomCover () {
  const theme = hexo.theme.config
  let cover
  let num

  if (theme.cover && theme.default_img) {
    if (!Array.isArray(theme.default_img)) {
      cover = theme.default_img
      return cover
    } else {
      num = Math.floor(Math.random() * theme.default_img.length)
      cover = theme.default_img[num]
      return cover
    }
  } else {
    cover = theme.default_img || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    return cover
  }
}
