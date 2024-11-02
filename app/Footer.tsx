export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-10 bg-white text-pastel-turquoise">
      <div className="w-[80vw] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left space-y-8 lg:space-y-0">
        
        {/* Copyright Section */}
        <div className="flex justify-center text-base lg:text-lg">
          <p>&copy; 2024 Herts Breathwork</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center space-y-2">
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
          <p className="underline">
            <a 
              href="https://www.paypal.com/paypalme/hellohayleyjade"
              className="underline hover:text-coral-blush transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayPal.Me/hellohayleyjade
            </a>
          </p>        
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          {/* TikTok Icon */}
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral-blush transition-colors duration-300 border-b-2 border-transparent hover:border-coral-blush">
            <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6 lg:w-8 lg:h-8" />
          </a>

          {/* Instagram Icon */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-coral-blush transition-colors duration-300 border-b-2 border-transparent hover:border-coral-blush">
            <img src="/icons/tik-tok.png" alt="TikTok" className="w-6 h-6 lg:w-8 lg:h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
