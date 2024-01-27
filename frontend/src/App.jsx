import {useState, useEffect} from 'react'
import { ThemeProvider } from './components/ui/theme-provider';
import { Button } from './components/ui/button';
import wcclogo from "./assets/wcclogo.png"

function App() {
    const [data,setData] = useState([])

    useEffect(() => {
    async function fetchData() {
        console.log(import.meta.env.VITE_API_URL)
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const result = await response.json()
                console.log(result)
                setData(result)
            }catch (error){
                console.error('Error fetching data:',error)
            }
        }
        fetchData();
}, []);
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <body className='min-h-screen'>
            <div id="hero" className='h-screen w-screen relative flex z-999'>
                <div id="canvas" className='absolute top-0 bottom-0 right-0 left-0 h-screen w-screen flex items-center justify-center'>
                    <div id='header' className=' items-center self-center relative flex  flex-col leading-normal items-center justify-center center text-center w-fit h-auto ml-auto mr-auto z-999'>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-rem mr-4rem">
                            West Campus Coder's NonProfit Lookup Tool.
                        </h1>
                        <img src={wcclogo} alt='wcclogo'/>
                        <Button onclick="">Start</Button>
                    </div>
                </div>
            </div>
            <div id='main'></div>
        </body>
    </ThemeProvider>
            
        
    )
}

export default App
