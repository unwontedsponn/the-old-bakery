export default function Footer() {
  return (
    <div className="font-montserrat grid grid-cols-3 items-start w-[80vw] py-10 text-pastel-turquoise">

      <div className="flex justify-center hover:cursor-pointer">
        <p>Copyright Herts Breathwork</p>
      </div>

      <div className="flex flex-col items-center">
        <p>
          <a 
            href="https://www.moonbird.life/?ref=QN0JextDUoiFVP&utm_medium=affiliate&utm_source=goaffpro"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >Moonbird</a> discount code 'HAYLEYJADE'
        </p>
        <p className="underline">          
          <a 
            href="https://www.paypal.com/paypalme/hellohayleyjade"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >PayPal.Me/hellohayleyjade</a>
        </p>        
      </div>

      <div className="flex justify-center space-x-4 font-semibold">
        <p className='hover:cursor-pointer hover:underline'>TikTok icon</p>
        <p className='hover:cursor-pointer hover:underline'>Instagram icon</p>         
      </div>

    </div>
  );
}