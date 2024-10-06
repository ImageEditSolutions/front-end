import Header from "../Header"
import AiImageGeneration from "./AiImageGeneration"
import AiImageGenerationPrompt from './AiImageGenerationPrompt'

export default function AiImageGenerationMain () {
    const handleGanerateImage = (promptText) => {
        console.log("이미지 생성 요청: ", promptText )
    }

    return (
        <div>
             <Header />
             <AiImageGenerationPrompt onGenerateClick={handleGanerateImage}/>
             <AiImageGeneration />
        </div>
    )
}