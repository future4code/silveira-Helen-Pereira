    import { BrowserRouter, Route, Routes} from "react-router-dom"
    import Megasena from "../pages/Megasena/index"
    import DiaDeSorte from "../pages/DiaDeSorte/index"
    import Lotofacil from "../pages/Lotofacil/index"
    import Lotomania from "../pages/Lotomania/index"
    import Quina from "../pages/Quina/index"
    import Timemania from "../pages/Timemania/index"
    import Menu from "../components/Menu"
   




    const Router = () =>{

        return (
            
            
                            <BrowserRouter>
            
                                                <Routes> 

                                                    
                                                    
                                                        <Route element={<Menu/>}/>
                                                        
                                                        <Route index element={<Megasena />}/>
                                                        
                                                        

                                                        
                                        
                                                        <Route element={<DiaDeSorte/>}/>
                                                        
                                                        
                                        
                                                        <Route element={<Lotofacil/>}/>
                                                            
                                                    
                                        
                                                        <Route element= {<Lotomania />}/>
                                                            
                                                
                                        
                                                        <Route element= {<Quina />}/>
                                                            
                                                        
                                        
                                                        <Route element= {<Timemania />}/>
                                                            

                                                </Routes>
                    
                        
            
                
                
                            </BrowserRouter>
            

        )




    }

    export default Router