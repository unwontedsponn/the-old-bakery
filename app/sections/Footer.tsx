export default function Footer() {
  return (
    <div className="font-montserrat grid grid-cols-3 items-start w-[80vw] py-10 text-pastel-turquoise">
      <div className="flex justify-center hover:cursor-pointer">
        <p>Copyright Herts Breathwork</p>
      </div>
      <div className="flex flex-col items-center">
        <p>Newsletter</p>
        <p>Breathe with me</p>
        <p>FAQs & T&Cs</p>
      </div>
      <div className="flex justify-center space-x-4 font-semibold">
        <p className='hover:cursor-pointer hover:underline'>icon 1</p>
        <p className='hover:cursor-pointer hover:underline'>icon 2</p>
        <p className='hover:cursor-pointer hover:underline'>icon 3</p>        
      </div>
    </div>
  );
}