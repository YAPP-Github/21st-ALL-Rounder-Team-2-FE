"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[450],{"./components/pages/ArtworkCard/ArtworkCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ArtworkCard_ArtworkCard});var react=__webpack_require__("./node_modules/react/index.js"),next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),IconButton=__webpack_require__("./components/ui/Button/IconButton/IconButton.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typographies=__webpack_require__("./components/ui/Typographies.tsx"),colors=__webpack_require__("./styles/colors.ts");const Wrapper=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,ImageWrapper=styled_components_browser_esm.ZP.div`
  position: relative;
  aspect-ratio: 175 / 200;
`,IconWrapper=styled_components_browser_esm.ZP.div`
  position: absolute;
  top: 14px;
  right: 8px;
`,Title=styled_components_browser_esm.ZP.span`
  ${Typographies.de}
  color: white;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Artist=styled_components_browser_esm.ZP.span`
  ${Typographies.SZ}
  color: ${colors.O.gray500};
`,InfoWrapper=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ArtworkCard/ArtworkCard.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/pages/ArtworkCard/ArtworkCard.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{ImageWrapper.displayName="ImageWrapper",ImageWrapper.__docgenInfo={description:"",displayName:"ImageWrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ArtworkCard/ArtworkCard.styles.tsx#ImageWrapper"]={docgenInfo:ImageWrapper.__docgenInfo,name:"ImageWrapper",path:"components/pages/ArtworkCard/ArtworkCard.styles.tsx#ImageWrapper"})}catch(__react_docgen_typescript_loader_error){}try{IconWrapper.displayName="IconWrapper",IconWrapper.__docgenInfo={description:"",displayName:"IconWrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ArtworkCard/ArtworkCard.styles.tsx#IconWrapper"]={docgenInfo:IconWrapper.__docgenInfo,name:"IconWrapper",path:"components/pages/ArtworkCard/ArtworkCard.styles.tsx#IconWrapper"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ArtworkCard/ArtworkCard.styles.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"components/pages/ArtworkCard/ArtworkCard.styles.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}try{Artist.displayName="Artist",Artist.__docgenInfo={description:"",displayName:"Artist",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ArtworkCard/ArtworkCard.styles.tsx#Artist"]={docgenInfo:Artist.__docgenInfo,name:"Artist",path:"components/pages/ArtworkCard/ArtworkCard.styles.tsx#Artist"})}catch(__react_docgen_typescript_loader_error){}try{InfoWrapper.displayName="InfoWrapper",InfoWrapper.__docgenInfo={description:"",displayName:"InfoWrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ArtworkCard/ArtworkCard.styles.tsx#InfoWrapper"]={docgenInfo:InfoWrapper.__docgenInfo,name:"InfoWrapper",path:"components/pages/ArtworkCard/ArtworkCard.styles.tsx#InfoWrapper"})}catch(__react_docgen_typescript_loader_error){}var __jsx=react.createElement;const ArtworkCard=_ref=>{let{imageURL,name,artist,onMoreBtnClick}=_ref;return __jsx(Wrapper,null,__jsx(ImageWrapper,null,__jsx(image_default(),{alt:"",src:imageURL,fill:!0,style:{objectFit:"cover",borderRadius:"12px"}}),__jsx(IconWrapper,null,__jsx(IconButton.h,{iconProps:{name:"MoreVerticalIcon"},onClick:onMoreBtnClick,ariaLabel:"더보기"}))),__jsx(InfoWrapper,null,__jsx(Title,null,name),__jsx(Artist,null,artist," 작가")))};ArtworkCard.displayName="ArtworkCard",ArtworkCard.__docgenInfo={description:"",methods:[],displayName:"ArtworkCard",props:{onMoreBtnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""}},composes:["ArtworkThumbnailDto"]};const ArtworkCard_ArtworkCard=ArtworkCard;try{ArtworkCard.displayName="ArtworkCard",ArtworkCard.__docgenInfo={description:"",displayName:"ArtworkCard",props:{onMoreBtnClick:{defaultValue:null,description:"",name:"onMoreBtnClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},id:{defaultValue:null,description:"작품 ID\n@memberof ArtworkThumbnailDto",name:"id",required:!0,type:{name:"{number}"}},imageURL:{defaultValue:null,description:"작품 이미지\n@memberof ArtworkThumbnailDto",name:"imageURL",required:!0,type:{name:"{string}"}},name:{defaultValue:null,description:"작품명\n@memberof ArtworkThumbnailDto",name:"name",required:!0,type:{name:"{string}"}},artist:{defaultValue:null,description:"관람 날짜\n@memberof ArtworkThumbnailDto",name:"artist",required:!0,type:{name:"{string}"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/ArtworkCard/ArtworkCard.tsx#ArtworkCard"]={docgenInfo:ArtworkCard.__docgenInfo,name:"ArtworkCard",path:"components/pages/ArtworkCard/ArtworkCard.tsx#ArtworkCard"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Button/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js");const Wrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
  display: flex;
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Button/IconButton/IconButton.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/ui/Button/IconButton/IconButton.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./components/ui/Icon/Icon/Icon.tsx"),__jsx=react.createElement;const IconButton=props=>{const{className,iconProps,onClick,ariaLabel}=props;return __jsx(Wrapper,{className,onClick,"aria-label":ariaLabel},__jsx(Icon.Z,iconProps))};IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{className:{required:!1,tsType:{name:"string"},description:""},iconProps:{required:!0,tsType:{name:"IconProps"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},iconProps:{defaultValue:null,description:"",name:"iconProps",required:!0,type:{name:"Props"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Button/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"components/ui/Button/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Typographies.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FP:()=>Normal12CSS,Fn:()=>Normal16CSS,SZ:()=>Normal14CSS,YJ:()=>Bold18CSS,Zy:()=>ExtraBold24CSS,dJ:()=>Bold24CSS,de:()=>Bold16CSS,ed:()=>Normal18CSS,gf:()=>Bold20CSS,hj:()=>Medium16CSS,ke:()=>Medium14CSS,t0:()=>Bold14CSS,v_:()=>Medium15CSS,x7:()=>SemiBold24CSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Bold14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`,Bold16CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`,Bold18CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
`,Bold20CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
`,Bold24CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`,SemiBold24CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`,Medium14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`,Medium15CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`,Medium16CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`,Normal12CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
`,Normal14CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
`,Normal16CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`,Normal18CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`,ExtraBold24CSS=styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}},"./components/pages/ArtworkCard/ArtworkCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ArtworkCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/pages/ArtworkCard/ArtworkCard.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"pages/ArtworkCard",component:_ArtworkCard__WEBPACK_IMPORTED_MODULE_1__.Z},Template=args=>__jsx(_ArtworkCard__WEBPACK_IMPORTED_MODULE_1__.Z,args);Template.displayName="Template";const Primary=Template.bind({});Primary.args={imageURL:"https://picsum.photos/300",name:"나의 그대여",artist:"김호연"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => __jsx(ArtworkCard, args)",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-pages-ArtworkCard-ArtworkCard-stories.e5531a01.iframe.bundle.js.map