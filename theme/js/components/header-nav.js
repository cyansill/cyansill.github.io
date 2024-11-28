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
<ul class=" layui-header layui-nav dynamic-nav">
  <li class="layui-nav-item dynamic-nav-item ${ layui_this === 0 ? 'layui-this' : '' }">
    <a href="/">主页</a>
  </li>
  <li class="layui-nav-item dynamic-nav-item ${ layui_this === 1 ? 'layui-this' : '' }">
    <a href="/categories">分类</a>
  </li>
  <li class="layui-nav-item dynamic-nav-item ${ layui_this === 2 ? 'layui-this' : '' }">
    <a href="/tags">标签</a>
  </li>
  <li class="layui-nav-item dynamic-nav-item ${ layui_this === 3 ? 'layui-this' : '' }">
    <a href="/info/about">关于</a>
  </li>
</ul>
  `

  $('#header-nav') ? $('#header-nav').html(header_html) : null
  $('.dynamic-nav').css('position', 'fixed')
  $('.dynamic-nav').css('top', '0')
  $('.dynamic-nav').css('left', '0')
  $('.dynamic-nav').css('right', '0')
  $('.dynamic-nav').css('border-radius', '0')
  $('.dynamic-nav').css('z-index', '999')
  function dynamicStyle() {
    if ($(window).width() < 768) {
      $('.dynamic-nav').css('display', 'flex')
      $('.dynamic-nav-item').css('flex', '1 1 auto')
      $('.dynamic-nav-item').css('text-align', 'center')
    } else {
      $('.dynamic-nav').css('display', 'block')
      $('.dynamic-nav-item').css('flex', 'none')
      $('.dynamic-nav-item').css('text-align', 'center')
    }
  }
  $(window).on('resize', function () {
    dynamicStyle()
  })
  dynamicStyle()
})()