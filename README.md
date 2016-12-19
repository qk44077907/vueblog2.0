# MintloG
使用Vuejs+Webpack+VueRouter+VueResource搭建的博客SPA
//每页至多显示四篇文章

/preview/:page
{
  totalNum:number//文章总数
  tags:{
         [tagName]:number       //{标签1:对应数量,标签2:对应数量}
       }
   cates:{
           [tagName]:number   //{种类1:对应数量,种类2:对应数量}
    }
  articles:object[]//所有文章中，第page页的文章
  pages:number //所有文章总共多少页
}


/cates/:cateName/:page
{
  totalNum:number//文章总数
  tags:{
         [tagName]:number   //{标签1:对应数量,标签2:对应数量}
   }
  cates:{
         [tagName]:number   //{种类1:对应数量,种类2:对应数量}
  }
  articles:object[]//文章中属性cate==catename，第page页的文章
  pages:number //文章中属性cate==cateName，总共多少页
}


/tags/:tagName/:page
{
  totalNum:number//文章总数
  tags:{
         [tagName]:number                //{标签1:对应数量,标签2:对应数量}
   }
  cates:{
         [cateName]:number  //{种类1:对应数量,种类2:对应数量}
  }
  articles:object[]//文章中属性tag==tagName，第page页的文章
  pages:number //文章中属性tag==tagName，总共多少页
}