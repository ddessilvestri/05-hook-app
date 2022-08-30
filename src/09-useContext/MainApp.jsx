import { Routes,Route,Navigate } from "react-router-dom"
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";

    
    export const MainApp = () => {
        return (
            <UserProvider>                
                <NavBar />
                <hr/>
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="login" element={<LoginPage />} />

                    <Route path="*" element={<Navigate to="/about"/>}/>
                    {/* <Route path="*" element ={<LoginPage />} /> */}

                </Routes>
            </UserProvider>
        )
    }
    