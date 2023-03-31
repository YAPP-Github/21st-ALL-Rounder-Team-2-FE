"use strict";(globalThis.webpackChunk_21st_all_rounder_team_2_web=globalThis.webpackChunk_21st_all_rounder_team_2_web||[]).push([[8559],{"./components/pages/Home/MainExhibitionCard/MainExhibitionCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>MainExhibitionCard});var next_image=__webpack_require__("./node_modules/next/image.js"),image_default=__webpack_require__.n(next_image),react=__webpack_require__("./node_modules/react/index.js"),IconButton=__webpack_require__("./components/ui/Button/IconButton/IconButton.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),colors=__webpack_require__("./styles/colors.ts"),Typographies=__webpack_require__("./components/ui/Typographies.tsx");const Wrapper=styled_components_browser_esm.ZP.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: auto;
  aspect-ratio: 390/372;
`,InfoContainer=styled_components_browser_esm.ZP.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,TitleTextSpan=styled_components_browser_esm.ZP.span`
  ${Typographies.gf}
  color: ${colors.O.white};
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 4px;
`,DateTextSpan=styled_components_browser_esm.ZP.span`
  ${Typographies.SZ}
  color: ${colors.O.gray400};
  opacity: 0.8;
`,PinButton=styled_components_browser_esm.ZP.div`
  position: absolute;
  right: 15px;
  top: 20px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{InfoContainer.displayName="InfoContainer",InfoContainer.__docgenInfo={description:"",displayName:"InfoContainer",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#InfoContainer"]={docgenInfo:InfoContainer.__docgenInfo,name:"InfoContainer",path:"components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#InfoContainer"})}catch(__react_docgen_typescript_loader_error){}try{TitleTextSpan.displayName="TitleTextSpan",TitleTextSpan.__docgenInfo={description:"",displayName:"TitleTextSpan",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#TitleTextSpan"]={docgenInfo:TitleTextSpan.__docgenInfo,name:"TitleTextSpan",path:"components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#TitleTextSpan"})}catch(__react_docgen_typescript_loader_error){}try{DateTextSpan.displayName="DateTextSpan",DateTextSpan.__docgenInfo={description:"",displayName:"DateTextSpan",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#DateTextSpan"]={docgenInfo:DateTextSpan.__docgenInfo,name:"DateTextSpan",path:"components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#DateTextSpan"})}catch(__react_docgen_typescript_loader_error){}try{PinButton.displayName="PinButton",PinButton.__docgenInfo={description:"",displayName:"PinButton",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#PinButton"]={docgenInfo:PinButton.__docgenInfo,name:"PinButton",path:"components/pages/Home/MainExhibitionCard/MainExhibitionCard.styles.tsx#PinButton"})}catch(__react_docgen_typescript_loader_error){}var utils_image=__webpack_require__("./utils/image.ts"),__jsx=react.createElement;const MainExhibitionCard=props=>{const{isPin,onTogglePin,mainImage,name,postDate,onClickItem}=props;return __jsx(Wrapper,{onClick:onClickItem},__jsx(image_default(),{alt:"thumbnail",src:mainImage??utils_image.U,fill:!0,style:{objectFit:"cover",borderRadius:"0 240px 0 0"}}),__jsx(InfoContainer,null,__jsx(TitleTextSpan,null,name),__jsx(DateTextSpan,null,postDate)),__jsx(PinButton,null,__jsx(IconButton.h,{iconProps:{name:isPin?"PinIcon":"InActivePinIcon",size:32},onClick:onTogglePin,ariaLabel:"전시 고정 해제하기"})))};MainExhibitionCard.displayName="MainExhibitionCard",MainExhibitionCard.__docgenInfo={description:"",methods:[],displayName:"MainExhibitionCard",props:{isPin:{required:!1,tsType:{name:"boolean"},description:""},onTogglePin:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""},onClickItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{name:"e",type:{name:"ReactMouseEvent",raw:"React.MouseEvent"}}],return:{name:"void"}}},description:""}},composes:["PostDetailInfo"]};try{MainExhibitionCard.displayName="MainExhibitionCard",MainExhibitionCard.__docgenInfo={description:"",displayName:"MainExhibitionCard",props:{isPin:{defaultValue:null,description:"",name:"isPin",required:!1,type:{name:"boolean"}},onTogglePin:{defaultValue:null,description:"",name:"onTogglePin",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>) => void)"}},onClickItem:{defaultValue:null,description:"",name:"onClickItem",required:!0,type:{name:"(e: MouseEvent<Element, MouseEvent>) => void"}},id:{defaultValue:null,description:"전시 아이디\n@memberof PostDetailInfo",name:"id",required:!0,type:{name:"{number}"}},name:{defaultValue:null,description:"전시명\n@memberof PostDetailInfo",name:"name",required:!0,type:{name:"{string}"}},postDate:{defaultValue:null,description:"관람 날짜\n@memberof PostDetailInfo",name:"postDate",required:!0,type:{name:"{string}"}},categoryId:{defaultValue:null,description:"카테고리 아이디\n@memberof PostDetailInfo",name:"categoryId",required:!0,type:{name:"{number}"}},categoryName:{defaultValue:null,description:"카테고리 명\n@memberof PostDetailInfo",name:"categoryName",required:!0,type:{name:"{string}"}},mainImage:{defaultValue:null,description:"대표 이미지\n@memberof PostDetailInfo",name:"mainImage",required:!1,type:{name:"{string}"}},attachedLink:{defaultValue:null,description:"전시 링크\n@memberof PostDetailInfo",name:"attachedLink",required:!1,type:{name:"{string}"}},published:{defaultValue:null,description:"@memberof PostDetailInfo",name:"published",required:!1,type:{name:"{boolean}"}},pinned:{defaultValue:null,description:"@memberof PostDetailInfo",name:"pinned",required:!1,type:{name:"{boolean}"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/pages/Home/MainExhibitionCard/MainExhibitionCard.tsx#MainExhibitionCard"]={docgenInfo:MainExhibitionCard.__docgenInfo,name:"MainExhibitionCard",path:"components/pages/Home/MainExhibitionCard/MainExhibitionCard.tsx#MainExhibitionCard"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Button/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js");const Wrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button`
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
`},"./styles/colors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>colors});const colors={black:"#000",black2:"#161616",green900:"#E1FCAD",blue:"#BCD4FE",gray300:"#EAEAEA",gray400:"#D9D9D9",gray500:"#B4B4B4",gray600:"#979797",gray700:"#727272",gray800:"#555555",gray900:"#3F3F3F",white:"#fff",bgColor:"#161616",overlay:"#1F1F1F"}},"./utils/image.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>DEFAULT_IMAGE});const DEFAULT_IMAGE="https://picsum.photos/358"},"./components/pages/Home/MainExhibitionCard/MainExhibitionCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_MainExhibitionCard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/pages/Home/MainExhibitionCard/MainExhibitionCard.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Pages/Home/MainExhibitionCard",component:_MainExhibitionCard__WEBPACK_IMPORTED_MODULE_1__.i},Template=args=>__jsx(_MainExhibitionCard__WEBPACK_IMPORTED_MODULE_1__.i,args);Template.displayName="Template";const Primary=Template.bind({});Primary.args={mainImage:"https://picsum.photos/358",name:"목조형가구학과 졸전",postDate:"2022. 11. 08",isPin:!1},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => __jsx(MainExhibitionCard, args)",...Primary.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-pages-Home-MainExhibitionCard-MainExhibitionCard-stories.8bfe3cb2.iframe.bundle.js.map