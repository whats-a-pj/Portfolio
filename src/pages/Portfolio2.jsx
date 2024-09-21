// className="resume-container"
import {useState, useEffect} from 'react';

export default function Portfolioo() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  window.addEventListener("resize", checkScreenWidth);

  useEffect(() => {
    checkScreenWidth();
  }, []);

    return (
        <div className={`flex flex-col h-screen overflow-y-auto bg-purple-100 ${!isSmallScreen ? "ml-[25%]" : "mt-10"} items-center`}>
  <style>
    {`
      /* Hide the scrollbar for WebKit browsers */
      ::-webkit-scrollbar {
        display: none;
      }
      /* Hide scrollbar for Firefox */
      scrollbar-width: none;
      /* Hide scrollbar for IE/Edge */
      -ms-overflow-style: none;
    `}
  </style>
  <div className="p-8">
        <div className="bg-gradient-to-tr text-white from-orange-400 via-pink-400 to-purple-400 shadow-md rounded px-8 pt-6 pb-4 mb-4">
          <h1 className="text-2xl font-bold">Kaelyn Patsy-Jean Rasmussen</h1>
          <p className="text-xl">Original poetry by me || Additional literary works can be found on my Medium</p>
        </div>
        <div className="mb-6 font-light text-base">
          <h2 className="text-xl font-bold underline">Deeper</h2>
          <div className="m-4">

            <p className="font-medium text-base">I watch the scene unfold like origami—delicate, like her.</p>

            <p className="font-medium text-base">She draws a bath, fully clothed; she sinks to the lowest point of her porcelain tub.</p>

            <p className="font-medium text-base">She travels to her favorite daydream—sitting in a hammock, watching the tree branches sway in the wind, her laundry dancing on the clothesline—a place where the sun reaches down from the sky to kiss her deepest scars. And when night begins to fall, the moon climbs down its silver-flaked stairs to reopen them.</p>

            <p className="font-medium text-base">She sinks deeper.</p>

            <p className="font-medium text-base">I see her through the windows of her glass house, just as fragile.</p>

            <p className="font-medium text-base">She sinks deeper.</p>

            <p className="font-medium text-base">She travels to her favorite nightmare—sitting at the lowest point of her porcelain tub, her glass house shattered around her, watching the water overflow onto the tile floor, her lungs slowly becoming reservoirs of her own bathwater—a place where she is the moon climbing up the silver-flaked stairs, creating her own scars out of the broken glass that once sheltered her.</p>

            <p className="font-medium text-base">When day breaks:</p>

            <p className="font-medium text-base">She is an unfinished puzzle, a glass half-empty, a second thought.</p>

            <p className="font-medium text-base">As soon as she feels like she is becoming whole, she is fragmented.</p>
          </div>
          <div className="mb-6 font-light text-base">
          <h2 className="text-xl font-bold underline">Heartstrings Woven</h2>
          <div className="m-4">
          <p className="font-medium text-base">I was going to write a poem about jobs that are bad for clumsy people,</p>
<p className="font-medium text-base">but I got stuck on heart surgeons.</p>
<p className="font-medium text-base">Clinically speaking, I’d be terrible at it.</p>
<p className="font-medium text-base">You see, I’d try to crochet your heartstrings into a quilt,</p>
<p className="font-medium text-base">so I could live inside it.</p>
<p className="font-medium text-base">But your pulse monitor would flatline,</p>
<p className="font-medium text-base">because I’d be too busy thinking about how your eyes are the cosmos,</p>
<p className="font-medium text-base">and your tender love reminds me of my wavelength—</p>
<p className="font-medium text-base">not quite long enough to grasp the whole of you,</p>
<p className="font-medium text-base">but enough to keep you in my orbit.</p>
<p className="font-medium text-base">The human body is like an art gallery.</p>
<p className="font-medium text-base"><i>I</i> am an art gallery.</p>
<p className="font-medium text-base">You can look, but you can’t touch.</p>
<p className="font-medium text-base">The paintings have grown tired of fingertips grazing plastered canvas;</p>
<p className="font-medium text-base">they didn’t ask for this.</p>
<p className="font-medium text-base">It’s not that I don’t want you to feel me.</p>
<p className="font-medium text-base">I love every bit of you,</p>
<p className="font-medium text-base">but I can’t love you more than these walls love to hang me.</p>
<p className="font-medium text-base">He loves me like I’m the only person on earth</p>
<p className="font-medium text-base">who can shake hands with his heart,</p>
<p className="font-medium text-base">who can light a campfire in his stomach—</p>
<p className="font-medium text-base">the only person who gives someone butterflies in their fingertips.</p>
<p className="font-medium text-base">So he built a cabin in the deep forests of my chest cavity,</p>
<p className="font-medium text-base">and at first, it felt like trespassing.</p>
<p className="font-medium text-base">That is to say, I never felt love "before you can say knife."</p>
<p className="font-medium text-base">Convinced that no one will ever love me like he does,</p>
<p className="font-medium text-base">I began crocheting a quilt without an end—</p>
<p className="font-medium text-base">one that could keep the mountains warm in winter.</p>
<p className="font-medium text-base">Because being a heart surgeon is risky business,</p>
<p className="font-medium text-base">but I’ve realized that every stitch is a promise.</p>
<p className="font-medium text-base">I’m weaving together the warmest parts of ourselves,</p>
<p className="font-medium text-base">leaving space for the unknown,</p>
<p className="font-medium text-base">where love grows and mends what we cannot see.</p>
            </div>
            </div>
          <div className="mb-6 font-light text-base">
          <h2 className="text-xl font-bold underline">Babygirl</h2>
          <div className="m-4">
          <p className="font-medium text-base">She is unapologetically herself, and her smile could radiate energy for miles.</p>
<p className="font-medium text-base">If she ever lost her way, I’d tear a path across the circumference of the Earth;</p>
<p className="font-medium text-base">Because her happiness is like the northern lights, and the trail she leaves—</p>
<p className="font-medium text-base">It’s like the sky kissing my scars,</p>
<p className="font-medium text-base">Like the first snowfall under streetlights,</p>
<p className="font-medium text-base">Like flowers blooming in the springtime, and allergies were never a problem for me.</p>
<p className="font-medium text-base">You’re older than you used to be, and your innocence is fragile. I wrapped it in bubble wrap and rose petals.</p>
<p className="font-medium text-base">This world wasn’t tailored to your desires, and not all that glitters is gold.</p>
<p className="font-medium text-base">When I got sad, you couldn’t understand,</p>
<p className="font-medium text-base">I was vicious, like a rabid dog—</p>
<p className="font-medium text-base">Leave me to die, tied to cinder blocks too heavy for you to hold.</p>
<p className="font-medium text-base">The northern lights no longer shredded across the stars, and your path was blocked by fallen evergreens and blood from my aching bones.</p>
<p className="font-medium text-base">Dad always said, "Monkey see, monkey do," but don’t be like me—just be like you.</p>
<p className="font-medium text-base">Monkey see, monkey don’t.</p>
<p className="font-medium text-base">If you need someone to confide in, I am your rock.</p>
<p className="font-medium text-base">If you need someone to look up to, I’m not.</p>
<p className="font-medium text-base">You’re delicate like glass, and I should tread more lightly;</p>
<p className="font-medium text-base">You’re tough as nails, and I won’t be your hammer.</p>
<p className="font-medium text-base">Baby girl, the sky begs for a rainbow at night, and these cinder blocks are easy to carry when your smile is the sunrise, lighting up my day.</p>
<p className="font-medium text-base">When your love plays music for the moon,</p>
<p className="font-medium text-base">When your eyes twinkle like light reflecting off ocean tides,</p>
<p className="font-medium text-base">When the world is all you deserve, I’ll give you mine.</p>

          </div>
          </div>
          <div className="mb-6 font-light text-base">
          <h2 className="text-xl font-bold underline">My Inner Fat Kid Loves You</h2>
          <div className="m-4">
          <p className="font-medium text-base">Sugar on your lips—</p>
<p className="font-medium text-base">the sweetest silence.</p>
<p className="font-medium text-base">I have always been bitter—</p>
<p className="font-medium text-base">but you remind me of citrus, my little lemonhead.</p>
<p className="font-medium text-base">I will never know a love more true.</p>
<p className="font-medium text-base">With cinnamon rolls for eyes, I hope you never blink.</p>
<p className="font-medium text-base">You'd miss a second of my unrequited love, mustered up only for you.</p>
<p className="font-medium text-base">When your home is in another person's heart, you'll never want to leave.</p>
<p className="font-medium text-base">With gumdrops for freckles, my lips will want to meet them.</p>
<p className="font-medium text-base">Sugar on your lips—</p>
<p className="font-medium text-base">the sweetest silence.</p>
<p className="font-medium text-base">I'm talking about your Hershey kisses.</p>
<p className="font-medium text-base">With Twizzlers for hair, I'll let my hands get sticky trying to unravel the softest part of you, aside from your candy corn smile.</p>
<p className="font-medium text-base">I have always been bitter; never have I finished my Halloween candy before it came around again.</p>
<p className="font-medium text-base">But you make my inner fat kid the happiest she has ever been.</p>
<p className="font-medium text-base">Be my lemonade baby.</p>
<p className="font-medium text-base">Be the sugar in my black coffee.</p>
<p className="font-medium text-base">You make me want to bleed sweetness.</p>
<p className="font-medium text-base">People joke that medication is sugar water, but you really do heal me; let me be your hummingbird.</p>
<p className="font-medium text-base">You are the cherry on my sundae and the sundae.</p>
<p className="font-medium text-base">Ice cream has never been so warm.</p>
<p className="font-medium text-base">I want to live for your love—</p>
<p className="font-medium text-base">and die for your sugar high.</p>
<p className="font-medium text-base">You are my bliss.</p>
<p className="font-medium text-base">The sweetest silence.</p>


            </div>
            </div>
          <div className="mb-6 font-light text-base">
          <h2 className="text-xl font-bold underline">Potholes</h2>
          <div className="m-4">
          <p className="font-medium test-base">You are the kid your parents warned you about.</p>
          <p className="font-medium test-base">Breaking the law was always more fun with friends; there is no wrong crowd, just wrongdoings.</p>
          <p className="font-medium test-base">Crooked spines and soda pop stomachs.</p>
          <p className="font-medium test-base">Compared to water, we were tar—our lungs the same.</p>
          <p className="font-medium test-base">Driving at 130 miles per hour on a dirt road,</p>
          <p className="font-medium test-base">Potholes in the dark, like potholes in our hearts.</p>
          <p className="font-medium test-base">We were supposed to die. I clenched my seatbelt like it was my lifeline, because, really, it was.</p>
          <p className="font-medium test-base">Our muffler scraped the asphalt and threw sparks in the dark—the only light we would see for the rest of the night.</p>
          <p className="font-medium test-base">Breaking bottles on the pavement, shattered just like us. But we never thought about the pavement's feelings.</p>
          <p className="font-medium test-base">We never thought pain was a cycle, kinda like karma. What goes around comes around—push me, and I'll push you back.</p>
          <p className="font-medium test-base">The pavement was sad, like us. Potholes in the worst places.</p>
          <p className="font-medium test-base">We were rain boots without rain,</p>
          <p className="font-medium test-base">Wore them more like storm drains to catch our salty tears and later let them go.</p>
          <p className="font-medium test-base">I would apologize for the things I've done,</p>
          <p className="font-medium test-base">But I'm not entirely sorry for what pain has made me.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }