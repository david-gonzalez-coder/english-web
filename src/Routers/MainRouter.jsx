import {
    BrowserRouter,
    Routes,
    Route,
    Outlet
  } from "react-router-dom"
import { Layout, ScrollToTop } from "../components"
import AdverbsOfFrequency from "../pages/lessons/beginir/AdverbsOfFrequency"

import { HomePage, LessonsPage, VocabularyPage, NotFoundPage, ExternalResources } from "../pages/navigationPages"
import { AdjectivesMainPage, AdjectivesColors } from "../pages/vocabulary/adjectives"


const MainRouter = () => {
    
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="*" element={<NotFoundPage />}/>

                    <Route path="/" element={<HomePage />} />
                    {/* lessons */}
                    <Route path="/lessons" element={<LessonsPage/>} />
                    <Route path="/lessons/test" element={<AdverbsOfFrequency/>} />
                    {/* external resources */}
                    <Route path="/external-resources" element={<ExternalResources />} />
                    {/* Vocabulary */}
                    <Route path="/vocabulary" element={<VocabularyPage />} />
                    <Route path="/vocabulary/adjectives" element={<AdjectivesMainPage />}/>
                    <Route path="/vocabulary/adjectives/colors" element={<AdjectivesColors />}/>

                </Route>
                
            </Routes>
        </BrowserRouter>
        
    )
}
export default MainRouter