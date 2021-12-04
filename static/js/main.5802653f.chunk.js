(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],[,,,,function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__22sR3",SearchForm:"Searchbar_SearchForm__36byA",SearchFormButton:"Searchbar_SearchFormButton__20uS0",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3PjGl",SearchFormInput:"Searchbar_SearchFormInput__26ak7"}},,,,function(e,t,a){e.exports={error:"App_error__1USBH",Warning:"App_Warning__3MWaG",App:"App_App__31P3o"}},,function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__318tf",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2k3R1"}},function(e,t,a){e.exports={Overlay:"Modal_Overlay__1y15L",Modal:"Modal_Modal__3FvU5"}},,,function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery___amz4"}},function(e,t,a){e.exports={Button:"Button_Button__2YquO"}},,,,,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),o=a.n(c),i=a(12),u=a(2),s=a(7),l=(a(13),a(4)),m=a.n(l),h=a(1);function b(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(u.a)(a,2),c=n[0],o=n[1];return Object(h.jsx)("header",{className:m.a.Searchbar,children:Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===c.trim())return s.b.error("Enter your request.");t(c),o("")},className:m.a.SearchForm,children:[Object(h.jsx)("button",{type:"submit",className:m.a.SearchFormButton,children:Object(h.jsx)("span",{className:m.a.SearchFormButtonLabel,children:"Search"})}),Object(h.jsx)("input",{className:m.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,name:"search",onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var j=a(10),d=a.n(j),f=function(e){var t=e.image,a=e.openModal,r=t.webformatURL,n=t.tags;return Object(h.jsx)("li",{id:t.id,onClick:a,className:d.a.ImageGalleryItem,children:Object(h.jsx)("img",{src:r,alt:n,className:d.a.ImageGalleryItemImage})})},p=a(14),g=a.n(p),O=function(e){var t=e.images,a=e.openModal;return Object(h.jsx)("ul",{className:g.a.ImageGallery,children:t.map((function(e){return Object(h.jsx)(f,{openModal:a,image:e},e.id)}))})},_=a(15),S=a.n(_),x=function(e){var t=e.fetchImages;return Object(h.jsx)("button",{type:"button",className:S.a.Button,onClick:t,children:"Load more..."})},y=function(){return Object(h.jsx)("div",{children:"Loading..."})},I=a(11),v=a.n(I),w=document.querySelector("#modal-root");function N(e){var t=e.onClose,a=e.children,n=function(e){"Escape"===e.code&&t()};return Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}})),Object(c.createPortal)(Object(h.jsx)("div",{className:v.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},role:"presentation",children:Object(h.jsx)("div",{className:v.a.Modal,children:a})}),w)}var F=a(8),G=a.n(F);function k(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(1),o=Object(u.a)(c,2),l=o[0],m=o[1],j=Object(r.useState)(""),d=Object(u.a)(j,2),f=d[0],p=d[1],g=Object(r.useState)(null),_=Object(u.a)(g,2),S=_[0],I=_[1],v=Object(r.useState)(!1),w=Object(u.a)(v,2),F=w[0],k=w[1],B=Object(r.useState)(!1),L=Object(u.a)(B,2),M=L[0],C=L[1],E=Object(r.useState)(null),A=Object(u.a)(E,2),q=A[0],R=A[1],T=Object(r.useState)([]),U=Object(u.a)(T,2);U[0],U[1];Object(r.useEffect)((function(){f&&W(!1)}),[f]);var W=function(e){k(!0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=22516391-185885990a61958acb3a57b33&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){if(0===t.hits.length)throw new Error('No photo on search query "'.concat(e,'"'));return t.hits}))}(f,l).then((function(e){return n((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}),m((function(e){return e+1}))),e[0]})).catch((function(e){I(e)})).finally((function(){k(!1)})).then((function(t){if(e){t.id;window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}}))},P=function(){return a.find((function(e){return e.id===q}))};return Object(h.jsxs)("div",{className:G.a.App,children:[S&&Object(h.jsx)("h2",{className:G.a.error,children:"No pictures were found for your query"}),Object(h.jsx)(b,{onSubmit:function(e){p(e),n([]),m(1)}}),Object(h.jsx)(O,{openModal:function(e){C(!0),R(Number(e.currentTarget.id))},images:a}),F&&Object(h.jsx)(y,{}),a.length>0?Object(h.jsx)(x,{fetchImages:function(){W(!0)}}):Object(h.jsx)("div",{className:G.a.Warning,children:"You have to write down right word for search"}),M&&Object(h.jsx)(N,{largeImageId:q,onClose:function(){return C(!1)},children:Object(h.jsx)("img",{src:P().largeImageURL,alt:P().tags})}),Object(h.jsx)(s.a,{position:"top-center",autoClose:2e3})]})}o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.5802653f.chunk.js.map