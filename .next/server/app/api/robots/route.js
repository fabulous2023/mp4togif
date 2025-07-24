"use strict";(()=>{var e={};e.id=45,e.ids=[45],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1155:(e,o,t)=>{t.r(o),t.d(o,{originalPathname:()=>d,patchFetch:()=>g,requestAsyncStorage:()=>p,routeModule:()=>i,serverHooks:()=>c,staticGenerationAsyncStorage:()=>u});var r={};t.r(r),t.d(r,{GET:()=>n});var a=t(9303),l=t(8716),s=t(670);async function n(){return new Response(`# robots.txt for MP4 to GIF Converter
# Updated: 2025-07-23

User-agent: *
Allow: /

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

# Block access to API endpoints for indexing
Disallow: /api/

# Block access to private/internal content
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.log$
Disallow: /*.config$

# Prevent indexing of error pages and system files
Disallow: /_error
Disallow: /_next/
Disallow: /next/
Disallow: /static/

# Allow sitemap indexing
Allow: /sitemap.xml
Allow: /robots.txt

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: https://mp4togif.pro/sitemap.xml`,{headers:{"Content-Type":"text/plain","Cache-Control":"public, max-age=3600"}})}let i=new a.AppRouteRouteModule({definition:{kind:l.x.APP_ROUTE,page:"/api/robots/route",pathname:"/api/robots",filename:"route",bundlePath:"app/api/robots/route"},resolvedPagePath:"D:\\program\\mp4togif\\app\\api\\robots\\route.ts",nextConfigOutput:"standalone",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:u,serverHooks:c}=i,d="/api/robots/route";function g(){return(0,s.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:u})}},9303:(e,o,t)=>{e.exports=t(517)}};var o=require("../../../webpack-runtime.js");o.C(e);var t=e=>o(o.s=e),r=o.X(0,[948],()=>t(1155));module.exports=r})();