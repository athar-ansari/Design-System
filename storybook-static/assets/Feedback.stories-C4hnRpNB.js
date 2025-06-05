import{j as e}from"./jsx-runtime-C_X6vF6o.js";import{r as i}from"./iframe-BEXLQD2C.js";const g={success:"bg-green-100 text-green-800 border-green-400",error:"bg-red-100 text-red-800 border-red-400",info:"bg-blue-100 text-blue-800 border-blue-400",warning:"bg-yellow-100 text-yellow-800 border-yellow-400"},f=({type:s="info",message:t="",duration:l=3e3,onClose:r})=>(i.useEffect(()=>{const n=setTimeout(()=>{r==null||r()},l);return()=>clearTimeout(n)},[l,r]),e.jsx("div",{role:"alert",className:`fixed bottom-4 right-4 z-50 px-4 py-3 border rounded shadow-lg w-auto max-w-xs ${g[s]}`,children:e.jsx("p",{children:t})}));f.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{type:{defaultValue:{value:"'info'",computed:!1},required:!1},message:{defaultValue:{value:"''",computed:!1},required:!1},duration:{defaultValue:{value:"3000",computed:!1},required:!1}}};const b=({isOpen:s,title:t,message:l,onConfirm:r,onCancel:n})=>s?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6",children:[e.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-white mb-2",children:t}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-gray-300 mb-4",children:l}),e.jsxs("div",{className:"flex justify-end space-x-2",children:[e.jsx("button",{onClick:n,className:"px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800",children:"Cancel"}),e.jsx("button",{onClick:r,className:"px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700",children:"Confirm"})]})]})}):null;b.__docgenInfo={description:"",methods:[],displayName:"Modal"};const w={title:"Feedback"},a=()=>{const[s,t]=i.useState(!0);return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-blue-600 text-white rounded",onClick:()=>t(!0),children:"Show Toast"}),s&&e.jsx(f,{type:"success",message:"Action completed successfully!",onClose:()=>t(!1)})]})},o=()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{className:"px-4 py-2 bg-purple-600 text-white rounded",onClick:()=>t(!0),children:"Open Modal"}),e.jsx(b,{isOpen:s,title:"Delete Confirmation",message:"Are you sure you want to delete this item?",onConfirm:()=>{t(!1),alert("Confirmed!")},onCancel:()=>t(!1)})]})};a.__docgenInfo={description:"",methods:[],displayName:"ToastExamples"};o.__docgenInfo={description:"",methods:[],displayName:"ModalExample"};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(true);
  return <div>\r
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setVisible(true)}>\r
                Show Toast\r
            </button>\r
            {visible && <Toast type="success" message="Action completed successfully!" onClose={() => setVisible(false)} />}\r
        </div>;
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div>\r
            <button className="px-4 py-2 bg-purple-600 text-white rounded" onClick={() => setOpen(true)}>\r
                Open Modal\r
            </button>\r
\r
            <Modal isOpen={open} title="Delete Confirmation" message="Are you sure you want to delete this item?" onConfirm={() => {
      setOpen(false);
      alert('Confirmed!');
    }} onCancel={() => setOpen(false)} />\r
        </div>;
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const j=["ToastExamples","ModalExample"];export{o as ModalExample,a as ToastExamples,j as __namedExportsOrder,w as default};
