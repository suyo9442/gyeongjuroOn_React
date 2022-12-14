import React, { useState, useEffect } from 'react';
import { instance } from "./customAxios";
import { useNavigate } from 'react-router-dom';

// export const useAxiosInterceptor = () => {
//     const navigate = useNavigate();
//     const [tokenExp, setTokenExp] = useState(false); 

//     console.log(props)

//     // π§© response inner
//     const responseHandler = (response) => {
//         console.log(response)

//         // 1οΈβ£ μλ΅ ν λ°μ ν ν° 'λ‘μ»¬μ μ μ₯'
//         localStorage.setItem('accessToken', response.config.headers['membership.smartdatacorp.co.kr']);

//         // βοΈ ν ν° λ§λ£ μ π λ‘κ·ΈμΈμΌλ‘ redirect
//         if(response.headers['tokencode'] === '511') {
//             localStorage.removeItem("accessToken");
//             alert('ν ν°μ΄ λ§λ£ !');
//             navigate('/');
//         } 
//         else if (response.headers['tokencode'] === '200') {
//             localStorage.setItem('accessToken', response.config.headers['membership.smartdatacorp.co.kr']);
//             alert('ν ν°μ΄ κ°±μ  !');
//         }

//         return response;         
//     }
//     // π§© request inner
//     const requestHandler = (config) => {
//         // 2οΈβ£ μμ²­ μ  'λ‘μ»¬μ μ μ₯'λ ν ν°μ ν€λμ λ³΄λ΄μ€
//         config.headers["membership.smartdatacorp.co.kr"] = localStorage.getItem('accessToken');
    
//         return config;
//     }
//     // π§© error inner
//     const errorHandler = (error) => {
//         return Promise.reject(error);
//     }


//     // πΌ response μΈν°μν° 
//     const responseInterceptor = instance.interceptors.response.use(responseHandler);

//     // πΌ request μΈν°μν°
//     const requestInterceptor = instance.interceptors.request.use(requestHandler);
    

//     // β¨ useEffect
//     // β
//     // μλ‘κ³ μΉ¨ μ ν ν°κ°±μ  μλ¨ (ν ν°μ½λ 511λΈ) π λ¬Έμ λ νμ΄λ€
//     // νμμμ μΈν°μν° ν¨μλ₯Ό μ¬μ©νλλ,,
//     // μ§κΈ 'ν ν° λ§λ£' κ° λ¨μ§λ μμ κ±Έ λ³΄λ λ§μ΄νΈ λΌκ³ λμ λ°λ‘ ν¬μ€νΈ μμ²­μ ν΄μΌνλλ° μνλ μν©κ°μ
//     // νμ μ¬μ©νλ©΄ μ΄λΌ
//     // useEffect(()=>{
//     //     responseInterceptor();
//     //     requestInterceptor();
//     // },[responseInterceptor, requestInterceptor])

//     // β­οΈ
//     // useEffect / return / eject / μμ‘΄μ±λ°°μ΄ β
//     // π μΈν°μν° ν¨μκ° μλ°μ΄νΈλλ©΄ (= ν ν°μ κ°μ Έμ κ°±μ μν€λ©΄) μΈν°μν° ν¨μλ₯Ό λ©μΆκ²μ
//     // λ§μ½ μΈν°μν° ν¨μκ° λ°λ³΅μ μΌλ‘ μ€νλλ©΄,,, κ°±μ  + κ°±μ  + κ°±μ  μ¬λ¬λ² λ°λ³΅λκΈ°λλ¬Έ
//     useEffect(() => {
//         return () => {
//             // μΈν°μν° ν¨μκ° μλλλ©΄ μΈν°μν° ν¨μ stop!
//             instance.interceptors.request.eject(requestInterceptor);
//             instance.interceptors.response.eject(responseInterceptor);

//             console.log('μΈν°μν° μ­μ ν©λλ€')
//             setTokenExp(true);
//         };
//       }, [responseInterceptor, requestInterceptor]);


//       // μ€νμ΄νΈλ λΆλͺ¨ => μμμκ²λ§ μ λ¬μ΄λ¨
//       // λΆλͺ¨μμ μ€νμ΄νΈλ₯Ό μμ±νκ³  propsλ‘ μ λ¬ν΄μ£Όκ³ 
//       // μμμμ μ€νμ΄νΈλ₯Ό λ³κ²½νλ κ·Όλ° λ¦¬λμ¨λ¦¬λΌμ λ³κ²½μ¬ν­μ΄ λ°μμ΄,,,μ μλλ€ μΌμΌμλ
//       // μλλ©΄ μ§κΈ μ€νμ΄νΈλ μμμμ μ»¨νΈλ‘€μ΄ λμ΄μΌνλ μ½λμ
//       // κ·Έλμ λ¦¬λμ€λ₯Ό μ¬μ©νλκ΅¬λ?

//       // 




    
    
    
    
//       // κ°λ§ν μμ΄λ μλμΌλ‘ λ§λ£ μλ¦Όμ΄ λ¨λλ‘ νκ³ μΆμ΄μ
//       // μΌλ¨, μνμμμμ μ€ννκΈ°μ,,,μ ννκ² ν κ·Ό μ μ§ μκ°μ΄ μνμμμ μκ°κ³Ό λμΌν κΉ?
//       // μλλ©΄, μ μ΄λμ μ μ¦μ΄ννΈ !? λ§μ½ ν¨μλμμ΄ μ¬λΌμ§λ©΄ μλμΌλ‘ μ½μμ΄ μ°νκΉ? μμ°νλ€
//       // μκ² λ€ !! modalμ μκ°ν΄λ³΄μ 
//       // 1. state false μ μμ±  2. stateκ° νΈλ£¨λ©΄ λͺ¨λ¬ λΏ 




// }


export default function ExpModal(props) {
    const useAxiosInterceptor = () => {
        const navigate = useNavigate();
        // const [opneIs, setOpenIs] = useState(false);

        console.log(props.λͺ¨λ¬)
    
        // π§© response inner
        const responseHandler = (response) => {
            console.log(response)
    
            // 1οΈβ£ μλ΅ ν λ°μ ν ν° 'λ‘μ»¬μ μ μ₯'
            localStorage.setItem('accessToken', response.config.headers['membership.smartdatacorp.co.kr']);
    
            // βοΈ ν ν° λ§λ£ μ π λ‘κ·ΈμΈμΌλ‘ redirect
            if(response.headers['tokencode'] === '511') {
                localStorage.removeItem("accessToken");
                alert('ν ν°μ΄ λ§λ£ !');
                navigate('/');
            } 
            else if (response.headers['tokencode'] === '200') {
                localStorage.setItem('accessToken', response.config.headers['membership.smartdatacorp.co.kr']);
                alert('ν ν°μ΄ κ°±μ  !');
            }
    
            return response;         
        }
        // π§© request inner
        const requestHandler = (config) => {
            // 2οΈβ£ μμ²­ μ  'λ‘μ»¬μ μ μ₯'λ ν ν°μ ν€λμ λ³΄λ΄μ€
            config.headers["membership.smartdatacorp.co.kr"] = localStorage.getItem('accessToken');
        
            return config;
        }
        // π§© error inner
        const errorHandler = (error) => {
            return Promise.reject(error);
        }
    
    
        // πΌ response μΈν°μν° 
        const responseInterceptor = instance.interceptors.response.use(responseHandler);
    
        // πΌ request μΈν°μν°
        const requestInterceptor = instance.interceptors.request.use(requestHandler);
        
    
        // β¨ useEffect
        useEffect(() => {
            return () => {
                // μΈν°μν° ν¨μκ° μλλλ©΄ μΈν°μν° ν¨μ stop!
                instance.interceptors.request.eject(requestInterceptor);
                instance.interceptors.response.eject(responseInterceptor);
    
                props.λͺ¨λ¬();
                console.log('μΈν°μν° μ­μ ν©λλ€')
            };
          }, [responseInterceptor, requestInterceptor]);
    }
    useAxiosInterceptor();

    return (
        <div>
            <p>μλ₯νμΈμ</p>
        </div>
    )
}

// 1. νμ μ»΄ν¬λνΈμ²λΌ λ§λ€μ΄? μ΄μ λ,,νλμ€ μ λ¬λ°μμΌνλκΉ
// 2. κ·ΈλΌ λΆλͺ¨μμ κ»λ€ μΌμ‘λ€ νλ μ€νμ΄νΈ ν¨μλ₯Ό μμ±ν΄
// 3. κ·Έ ν¨μλ₯Ό stateμ λ£μ΄μ£Όλ©΄ λ­?


// νμ μ»΄ν¬λνΈλ‘ λ§λ€μ΄μ λΆλͺ¨μμ μ¬μ©νλ€μ νλμ€λ₯Ό μ λ¬ν΄μ€λ€κ³ ν¨
