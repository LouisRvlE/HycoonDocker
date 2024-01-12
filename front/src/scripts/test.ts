// import React, { createContext, useState } from "react";
// type uD = {
//   dynamicDict: Record<string, string>,
//   staticDict: Record<string, string>,
//   dynamicArr: string[],
//   staticArr: string[],
// }

// const userData: uD = {
//   dynamicDict: {},
//   staticDict: {},
//   dynamicArr: [],
//   staticArr: [],
// };

// export const DynamicDictContext = createContext(userData.dynamicDict);
// export const StaticDictContext = createContext(userData.staticDict);
// export const DynamicArrContext = createContext(userData.dynamicArr);
// export const StaticArrContext = createContext(userData.staticArr);
// // eslint-disable-next-line @typescript-eslint/no-empty-function
// export const SetterContext = createContext<React.Dispatch<React.SetStateAction<uD>>>(() => {});

// const Providers = ({children}:{children:React.ReactNode}) => {
//     const fullObject = {
//         dynamicDict: {},
//         staticDict: {},
//         dynamicArr: [],
//         staticArr: [],
//     }
//     const [fullState, setFullState] = useState<uD>(fullObject);
//   return (
//     <>
//     <SetterContext.Provider value={setFullState}>

//       <DynamicDictContext.Provider value={fullState.dynamicDict}>
//         <StaticDictContext.Provider value={fullState.staticDict}>
//           <DynamicArrContext.Provider value={fullState.dynamicArr}>
//             <StaticArrContext.Provider
//               value={fullState.staticArr}
//             > {children} </StaticArrContext.Provider>
//           </DynamicArrContext.Provider>
//         </StaticDictContext.Provider>
//       </DynamicDictContext.Provider>
//     </SetterContext.Provider>
//     </>
//   );
// };

// export default Providers;
