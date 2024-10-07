
import Header from '../components/Layout/Common/Header.jsx';
import TextToImagePanel from '../components/AIImageGeneration/TextToImagePanel.jsx';

function AiImageGenerationPage() {
    return (
      <section className="bg-gray-900 min-w-[1120px]">
        <Header />
        <main>
          <TextToImagePanel />
        </main>
      </section>
    );
  }
  
  export default AiImageGenerationPage;

