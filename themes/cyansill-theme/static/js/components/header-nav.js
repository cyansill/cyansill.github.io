(function () {
  let page_type = $('meta[name="page-type"]') ? $('meta[name="page-type"]').attr('content') : null
  if (!page_type) return
  let layui_this = 0
  switch (page_type) {
    case 'index':
      layui_this = 0
      break
    case 'categories':
      layui_this = 1
      break
    case 'tags':
      layui_this = 2
      break
    case 'about':
      layui_this = 3
      break
    default:
      layui_this = -1
      break
  }
  var header_html = `
<ul class="layui-nav">
  <li class="layui-nav-item ${ layui_this === 0 ? 'layui-this' : '' }">
    <a href="/">主页</a>
  </li>
  <li class="layui-nav-item ${ layui_this === 1 ? 'layui-this' : '' }">
    <a href="/categories">分类</a>
  </li>
  <li class="layui-nav-item ${ layui_this === 2 ? 'layui-this' : '' }">
    <a href="/tags">标签</a>
  </li>
  <li class="layui-nav-item ${ layui_this === 3 ? 'layui-this' : '' }">
    <a href="/info/about">关于</a>
  </li>
</ul>
  `

  $('#header-nav') ? $('#header-nav').html(header_html) : null
})()