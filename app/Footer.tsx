export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-10 bg-white text-pastel-turquoise">
      <div className="w-[80vw] text-center lg:text-left space-y-8 lg:space-y-0">
        
        {/* Disclaimer Section */}
        <div className="w-full flex justify-center">
          <p className="text-center mb-6 lg:mb-8">
            Disclaimer: Herts Breathwork does not diagnose, treat or cure any condition. Consult a qualified healthcare provider for medical advice.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-8">
          
          {/* Copyright Section */}
          <div className="flex justify-center lg:justify-start text-base lg:text-lg">
            <p>&copy; 2024 Herts Breathwork</p>            
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <p>
              <a 
                href="https://www.moonbird.life/?ref=QN0JextDUoiFVP&utm_medium=affiliate&utm_source=goaffpro"
                className="underline hover:text-coral-blush transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moonbird discount code &apos;HAYLEYJADE&apos;
              </a>
            </p>                
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start space-x-6">
            {/* Instagram Icon */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral-blush transition-colors duration-300 border-b-2 border-transparent hover:border-coral-blush">
              <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6 lg:w-8 lg:h-8" />
            </a>

            {/* TikTok Icon */}
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral-blush transition-colors duration-300 border-b-2 border-transparent hover:border-coral-blush">
              <img src="/icons/tik-tok.png" alt="TikTok" className="w-6 h-6 lg:w-8 lg:h-8" />
            </a>
          </div>

        </div>
        
      </div>
    </footer>
  );
}
