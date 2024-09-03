export default function Welcome() {
    return (
      <div className="flex flex-row items-center justify-center w-full bg-white z-0">
        <div className="w-[85vw] max-w-4xl aspect-w-16 aspect-h-9 p-4">
          <img src="/images/welcome-image.jpg" alt="Welcome Image" />
        </div>
        <div className="w-[85vw] max-w-4xl p-4 text-center text-black">
          <h1 className="text-xl font-bold">WELCOME TO ARISE</h1>
          <h2>inspiring, Down to earth & playful breathwork sessions THAT BENEFIT YOUR ENTIRE WELLBEING (BODY, MIND & SOUL)</h2>
          <p>Did you know we take over 20,000 breaths a day? Yet most of us have restricted breathing patterns. When we're not breathing to our full potential, we're also not living to our full potential... since breath is quite literally life.</p>
          <p>Lets get back to that perfect open breath you were born with, so you can ease any tension or stress, release emotional baggage, increase your clarity and focus, connect more deeply, tune into your intuition and ultimately feel lighter, brighter and fully alive! </p> 
          <p>Change the way you breathe, change the way you live!</p>

          <button>TELL ME MORE</button>
        </div>
      </div>
    );
  }
  