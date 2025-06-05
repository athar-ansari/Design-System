import{j as e}from"./jsx-runtime-C_X6vF6o.js";import{r as g}from"./iframe-BEXLQD2C.js";const o=({label:s,id:a,placeholder:t="",value:n,onChange:c,error:l="",disabled:u=!1,className:v=""})=>e.jsxs("div",{className:`mb-4 ${v}`,children:[s&&e.jsx("label",{htmlFor:a,className:"block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1",children:s}),e.jsx("input",{type:"text",id:a,value:n,onChange:c,placeholder:t,disabled:u,"aria-invalid":!!l,"aria-describedby":l?`${a}-error`:void 0,className:`
          w-full px-3 py-2 border rounded-md 
          text-gray-900 dark:text-white 
          bg-white dark:bg-gray-800 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${u?"opacity-50 cursor-not-allowed":""}
          ${l?"border-red-500":"border-gray-300"}
        `}),l&&e.jsx("p",{id:`${a}-error`,className:"mt-1 text-sm text-red-600",children:l})]});o.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{placeholder:{defaultValue:{value:"''",computed:!1},required:!1},error:{defaultValue:{value:"''",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const i=({label:s,id:a,checked:t,onChange:n,disabled:c=!1,className:l=""})=>e.jsxs("div",{className:`flex items-center space-x-2 ${l}`,children:[e.jsx("input",{id:a,type:"checkbox",checked:t,onChange:n,disabled:c,className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded","aria-checked":t}),s&&e.jsx("label",{htmlFor:a,className:`text-sm ${c?"text-gray-400":"text-gray-800 dark:text-gray-200"}`,children:s})]});i.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const C={title:"Data Entry"},r=()=>{const[s,a]=g.useState("");return e.jsxs("div",{className:"space-y-6",children:[e.jsx(o,{id:"name",label:"Name",value:s,placeholder:"Enter your name",onChange:t=>a(t.target.value)}),e.jsx(o,{id:"email",label:"Email",placeholder:"email@example.com",value:s,onChange:t=>a(t.target.value),error:"Invalid email"}),e.jsx(o,{id:"disabled",label:"Disabled Field",value:"",onChange:()=>{},disabled:!0,placeholder:"Can't type here"})]})},d=()=>{const[s,a]=g.useState(!0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{id:"check1",label:"Accept Terms & Conditions",checked:s,onChange:()=>a(!s)}),e.jsx(i,{id:"check2",label:"Disabled Checkbox",checked:!1,onChange:()=>{},disabled:!0})]})};r.__docgenInfo={description:"",methods:[],displayName:"TextInputs"};d.__docgenInfo={description:"",methods:[],displayName:"Checkboxes"};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  return <div className="space-y-6">\r
            <TextInput id="name" label="Name" value={value} placeholder="Enter your name" onChange={e => setValue(e.target.value)} />\r
\r
            <TextInput id="email" label="Email" placeholder="email@example.com" value={value} onChange={e => setValue(e.target.value)} error="Invalid email" />\r
\r
            <TextInput id="disabled" label="Disabled Field" value="" onChange={() => {}} disabled placeholder="Can't type here" />\r
        </div>;
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,b,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(true);
  return <div className="space-y-4">\r
            <Checkbox id="check1" label="Accept Terms & Conditions" checked={checked} onChange={() => setChecked(!checked)} />\r
\r
            <Checkbox id="check2" label="Disabled Checkbox" checked={false} onChange={() => {}} disabled />\r
        </div>;
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const N=["TextInputs","Checkboxes"];export{d as Checkboxes,r as TextInputs,N as __namedExportsOrder,C as default};
