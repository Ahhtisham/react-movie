import{u as i,a as l,r as c,j as a,L as n}from"./index-ZP9XoCEk.js";import{N as h}from"./Navigate-CG_fGM-R.js";function d(){const{getSearchMovie:t,SearchMovie:r}=i(),{routerQuery:e}=l();return c.useEffect(()=>{t(`https://api.themoviedb.org/3/search/movie?query=${e}&api_key=4e44d9029b1270a757cddc766a1bcb63`)},[e]),a.jsxs(a.Fragment,{children:[a.jsx(h,{}),a.jsxs("div",{className:"searchContainer",children:[r.length>=1?a.jsxs("h1",{className:"Search_name",children:[a.jsx("i",{className:"fa-solid fa-window-minimize fa-rotate-90"}),e]}):a.jsxs("h1",{className:"Search_name",children:[a.jsx("i",{className:"fa-solid fa-window-minimize fa-rotate-90"}),"Not available..."]}),a.jsxs("span",{className:"searchTitle",children:["Your search results: ",e]}),a.jsx("div",{className:"search_flex",children:r.length<=0?a.jsxs("h1",{className:"errorShow",children:[" No results Found ! ",a.jsx("i",{className:"fa-solid fa-triangle-exclamation"})]}):r.map(s=>a.jsx(n,{to:`/movie/${s.id}`,style:{margin:"0 0 1rem 1.2rem"},children:a.jsx("div",{className:"search_thumbnail",children:s.poster_path?a.jsxs(a.Fragment,{children:[a.jsx("img",{src:`https://image.tmdb.org/t/p/original${s.poster_path}`,alt:s.title,loading:"lazy",width:"248px",height:"384px"}),a.jsx("p",{children:s.title})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"no-poster"})," "]})})},s.id))})]})]})}export{d as default};
