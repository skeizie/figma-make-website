import svgPaths from "./svg-3iv1omquld";
import imgContainer from "figma:asset/d2494487d14014e87a15dfb1e0e01432ac97553a.png";
import imgImageACityOfWood from "figma:asset/9b42e16853c5cc093c0f8822dac1eae8306e703e.png";
import imgImageASparkBecomesAnInferno from "figma:asset/669aa8693a8aaacab8c7d2933d3a36e02eb4aeb7.png";
import imgImageRisingFromTheAshes from "figma:asset/3cd05968eb07959faab9caf0d78270bfca1498a9.png";
import imgImageTodayCityOfSteelGlass from "figma:asset/7247d1329e6508d0433d8d8da5e5a027da065702.png";
import imgImageTheLegacyLivesOn from "figma:asset/048804b5705b46deeb6fa7f78e885599b81e9a05.png";

function HeroSection() {
  return <div className="absolute h-[646.4px] left-0 opacity-40 top-0 w-[1152px]" data-name="HeroSection" />;
}

function Container() {
  return (
    <div className="absolute h-[384px] left-0 top-[31px] w-[1152px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function HeroSection1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#000000] h-[646.4px] left-0 to-[#000000] top-0 via-50% via-[rgba(0,0,0,0.5)] w-[1152px]" data-name="HeroSection">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[646.4px] left-0 top-0 w-[1152px]" data-name="Container">
      <HeroSection />
      <HeroSection1 />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-b from-[#000000] h-[128px] left-0 to-[rgba(0,0,0,0)] top-[518.4px] w-[1152px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[46px] relative shrink-0 w-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 46">
        <g id="Icon">
          <path d={svgPaths.p24cb8400} id="Vector" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function HeroSection2() {
  return (
    <div className="relative shrink-0" data-name="HeroSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center justify-center relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#ff4254] text-[16px] text-center text-nowrap tracking-[4.8px] whitespace-pre">OCTOBER 8-10, 1871</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center justify-center left-[24px] top-0 w-[768px]" data-name="Container">
      <Icon />
      <HeroSection2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[72px] w-[768px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[383.89px] not-italic text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">The Great Chicago Fire</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[120px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[384.02px] not-italic text-[16px] text-center text-zinc-300 top-[-2.2px] translate-x-[-50%] w-[741px]">A story of destruction and rebirth. How one devastating fire transformed Chicago from a wooden frontier town into the modern steel metropolis we know today.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 11">
            <path d={svgPaths.p1cc96380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[24px] top-[216px] w-[768px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[243px] left-[168px] top-[418px] w-[816px]" data-name="Container">
      <Container3 />
      <Heading1 />
      <Paragraph />
      <Container4 />
    </div>
  );
}

function HeroSection3() {
  return (
    <div className="absolute bg-black h-[689px] left-0 overflow-clip top-0 w-[1152px]" data-name="HeroSection">
      <Container1 />
      <Container2 />
      <Container5 />
    </div>
  );
}

function TimelineSection() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#ff4254] text-[16px] text-nowrap top-[-2.2px] tracking-[1.6px] whitespace-pre">PRE-1871</p>
    </div>
  );
}

function TimelineSection1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2.4px] whitespace-pre">A City of Wood</p>
    </div>
  );
}

function TimelineSection2() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#9f9fa9] text-[16px] top-[-2.4px] w-[521px]">{`Chicago in 1871 was a rapidly growing frontier city built almost entirely of wood. From sidewalks to buildings, from bridges to rooftops - timber dominated the cityscape. The city's population had exploded from 30,000 in 1850 to over 300,000, with wooden structures hastily constructed to accommodate the boom. The drought that summer had left everything tinder-dry, setting the stage for catastrophe.`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[274px] items-start left-[24px] top-[186.2px] w-[528px]" data-name="Container">
      <TimelineSection />
      <TimelineSection1 />
      <TimelineSection2 />
    </div>
  );
}

function ImageACityOfWood() {
  return (
    <div className="absolute h-[396px] left-0 top-0 w-[528px]" data-name="Image (A City of Wood)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageACityOfWood} />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[396px] left-0 to-[rgba(0,0,0,0)] top-0 w-[528px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[396px] left-[600px] overflow-clip rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[125.2px] w-[528px]" data-name="Container">
      <ImageACityOfWood />
      <Container7 />
    </div>
  );
}

function TimelineSection3() {
  return (
    <div className="absolute bg-black h-[604px] left-0 top-[689px] w-[1152px]" data-name="TimelineSection">
      <Container6 />
      <Container8 />
    </div>
  );
}

function TimelineSection4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#ff4254] text-[16px] text-nowrap top-[-2.2px] tracking-[1.6px] whitespace-pre">OCTOBER 8, 1871</p>
    </div>
  );
}

function TimelineSection5() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2.4px] whitespace-pre">A Spark Becomes an Inferno</p>
    </div>
  );
}

function TimelineSection6() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#9f9fa9] text-[16px] top-[-2.4px] w-[514px]">{`Legend says it started in Mrs. O'Leary's barn when a cow kicked over a lantern. Regardless of its origin, the fire spread rapidly through the wooden city. Strong southwestern winds created a firestorm that jumped the Chicago River. Flames soared hundreds of feet into the air, creating their own weather system. For two days, Chicago burned. The fire consumed everything in its path, leaving behind only ash and charred ruins.`}</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[300px] items-start left-[576px] top-[48px] w-[528px]" data-name="Container">
      <TimelineSection4 />
      <TimelineSection5 />
      <TimelineSection6 />
    </div>
  );
}

function ImageASparkBecomesAnInferno() {
  return (
    <div className="absolute h-[396px] left-0 top-0 w-[528px]" data-name="Image (A Spark Becomes an Inferno)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageASparkBecomesAnInferno} />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[396px] left-0 to-[rgba(0,0,0,0)] top-0 w-[528px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[396px] left-0 overflow-clip rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[528px]" data-name="Container">
      <ImageASparkBecomesAnInferno />
      <Container10 />
    </div>
  );
}

function TimelineSection7() {
  return (
    <div className="absolute bg-zinc-900 h-[396px] left-[24px] top-[1418px] w-[1104px]" data-name="TimelineSection">
      <Container9 />
      <Container11 />
    </div>
  );
}

function ImpactStats() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-[551.8px] not-italic text-[20px] text-center text-nowrap text-white top-[-2.4px] translate-x-[-50%] whitespace-pre">The Devastation</p>
    </div>
  );
}

function ImpactStats1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[552.52px] not-italic text-[#9f9fa9] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">{`The fire's impact on Chicago in numbers`}</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[70px] items-start relative shrink-0 w-full" data-name="Container">
      <ImpactStats />
      <ImpactStats1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[14px] size-[28px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p41ed200} id="Vector" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2c5ba380} id="Vector_2" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ImpactStats2() {
  return (
    <div className="absolute bg-[rgba(255,66,84,0.1)] left-[98px] rounded-[2.68435e+07px] size-[56px] top-[24.8px]" data-name="ImpactStats">
      <Icon2 />
    </div>
  );
}

function ImpactStats3() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[96.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.34px] not-italic text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">3.3</p>
    </div>
  );
}

function ImpactStats4() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[124.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[102.05px] not-italic text-[#71717b] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">sq miles</p>
    </div>
  );
}

function ImpactStats5() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[156.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.67px] not-italic text-[#9f9fa9] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Area Destroyed</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(24,24,27,0.5)] h-[205.6px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px]" />
      <ImpactStats2 />
      <ImpactStats3 />
      <ImpactStats4 />
      <ImpactStats5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[14px] size-[28px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p11690d80} id="Vector" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3b441e00} id="Vector_2" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ImpactStats6() {
  return (
    <div className="absolute bg-[rgba(255,66,84,0.1)] left-[98px] rounded-[2.68435e+07px] size-[56px] top-[24.8px]" data-name="ImpactStats">
      <Icon3 />
    </div>
  );
}

function ImpactStats7() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[96.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.4px] not-italic text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">17,500</p>
    </div>
  );
}

function ImpactStats8() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[124.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[100.81px] not-italic text-[#71717b] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">buildings</p>
    </div>
  );
}

function ImpactStats9() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[156.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.14px] not-italic text-[#9f9fa9] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Structures Lost</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(24,24,27,0.5)] h-[205.6px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px]" />
      <ImpactStats6 />
      <ImpactStats7 />
      <ImpactStats8 />
      <ImpactStats9 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[14px] size-[28px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pcd80870} id="Vector_2" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p36197298} id="Vector_3" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_4" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ImpactStats10() {
  return (
    <div className="absolute bg-[rgba(255,66,84,0.1)] left-[98px] rounded-[2.68435e+07px] size-[56px] top-[24.8px]" data-name="ImpactStats">
      <Icon4 />
    </div>
  );
}

function ImpactStats11() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[96.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.59px] not-italic text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">100,000</p>
    </div>
  );
}

function ImpactStats12() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[124.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.3px] not-italic text-[#71717b] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">people</p>
    </div>
  );
}

function ImpactStats13() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[156.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.99px] not-italic text-[#9f9fa9] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Left Homeless</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(24,24,27,0.5)] h-[205.6px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px]" />
      <ImpactStats10 />
      <ImpactStats11 />
      <ImpactStats12 />
      <ImpactStats13 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[14px] size-[28px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 2.33333V25.6667" id="Vector" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2a38c0} id="Vector_2" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ImpactStats14() {
  return (
    <div className="absolute bg-[rgba(255,66,84,0.1)] left-[98px] rounded-[2.68435e+07px] size-[56px] top-[24.8px]" data-name="ImpactStats">
      <Icon5 />
    </div>
  );
}

function ImpactStats15() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[96.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.58px] not-italic text-[16px] text-center text-nowrap text-white top-[-2.2px] translate-x-[-50%] whitespace-pre">200M</p>
    </div>
  );
}

function ImpactStats16() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[124.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.79px] not-italic text-[#71717b] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">in 1871</p>
    </div>
  );
}

function ImpactStats17() {
  return (
    <div className="absolute h-[24px] left-[24.8px] top-[156.8px] w-[202.4px]" data-name="ImpactStats">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[101.26px] not-italic text-[#9f9fa9] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Property Damage</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_4] bg-[rgba(24,24,27,0.5)] h-[205.6px] relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px]" />
      <ImpactStats14 />
      <ImpactStats15 />
      <ImpactStats16 />
      <ImpactStats17 />
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[205.6px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[339.6px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container17 />
    </div>
  );
}

function ImpactStats18() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#18181b] h-[499.6px] items-start left-0 pb-0 pt-[80px] px-[24px] to-[#000000] top-[1939.2px] w-[1152px]" data-name="ImpactStats">
      <Container18 />
    </div>
  );
}

function TimelineSection8() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[528px]" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#ff4254] text-[16px] text-nowrap top-[-2.2px] tracking-[1.6px] whitespace-pre">1871-1890s</p>
    </div>
  );
}

function TimelineSection9() {
  return (
    <div className="absolute h-[30px] left-0 top-[40px] w-[528px]" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2.4px] whitespace-pre">Rising from the Ashes</p>
    </div>
  );
}

function TimelineSection10() {
  return (
    <div className="absolute h-[182px] left-0 top-[94px] w-[528px]" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#9f9fa9] text-[16px] top-[-2.4px] w-[511px]">Chicago refused to surrender to disaster. Within weeks, reconstruction began. But this time, the city would be built differently. New fire codes mandated fireproof materials. Steel-frame construction emerged, pioneered by architects like William Le Baron Jenney. This innovation led to the birth of the skyscraper. Chicago became a laboratory for architectural experimentation, attracting visionaries who would define modern urban design.</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">Steel Frame Construction</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.5)] box-border content-stretch flex gap-[8px] h-[40px] items-center left-0 px-[16px] py-0 rounded-[10px] top-0 w-[236.738px]" data-name="Container">
      <Icon6 />
      <Text />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M8.33333 10H11.6667" id="Vector" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 6.66667H11.6667" id="Vector_2" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p16bb4600} id="Vector_3" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b103700} id="Vector_4" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24196980} id="Vector_5" stroke="var(--stroke-0, #FF4254)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">Birth of the Skyscraper</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(39,39,42,0.5)] box-border content-stretch flex gap-[8px] h-[40px] items-center left-[252.74px] px-[16px] py-0 rounded-[10px] top-0 w-[218.875px]" data-name="Container">
      <Icon7 />
      <Text1 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute h-[40px] left-0 top-[300px] w-[528px]" data-name="App">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[340px] left-[24px] top-[153.2px] w-[528px]" data-name="Container">
      <TimelineSection8 />
      <TimelineSection9 />
      <TimelineSection10 />
      <App />
    </div>
  );
}

function ImageRisingFromTheAshes() {
  return (
    <div className="absolute h-[396px] left-0 top-0 w-[528px]" data-name="Image (Rising from the Ashes)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageRisingFromTheAshes} />
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[396px] left-0 to-[rgba(0,0,0,0)] top-0 w-[528px]" data-name="Container" />;
}

function Container23() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[396px] left-[600px] overflow-clip rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[125.2px] w-[528px]" data-name="Container">
      <ImageRisingFromTheAshes />
      <Container22 />
    </div>
  );
}

function TimelineSection11() {
  return (
    <div className="absolute bg-black h-[646.4px] left-0 top-[2438.8px] w-[1152px]" data-name="TimelineSection">
      <Container21 />
      <Container23 />
    </div>
  );
}

function SkylineComparison() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="SkylineComparison">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-[551.6px] not-italic text-[20px] text-center text-nowrap text-white top-[-2.4px] translate-x-[-50%] whitespace-pre">The Transformation</p>
    </div>
  );
}

function SkylineComparison1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="SkylineComparison">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[552.08px] not-italic text-[#9f9fa9] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">{`Drag the slider to compare Chicago's skyline before and after`}</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[70px] items-start relative shrink-0 w-full" data-name="Container">
      <SkylineComparison />
      <SkylineComparison1 />
    </div>
  );
}

function ImageTodayCityOfSteelGlass() {
  return (
    <div className="absolute h-[621px] left-0 top-0 w-[1104px]" data-name="Image (Today: City of Steel & Glass)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageTodayCityOfSteelGlass} />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[40px] left-[856.39px] rounded-[10px] top-[24px] w-[223.613px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-nowrap text-white top-[5.8px] whitespace-pre">{`Today: City of Steel & Glass`}</p>
    </div>
  );
}

function SkylineComparison2() {
  return (
    <div className="absolute h-[621px] left-0 top-0 w-[1104px]" data-name="SkylineComparison">
      <ImageTodayCityOfSteelGlass />
      <Container25 />
    </div>
  );
}

function ImagePre1871CityOfWood() {
  return (
    <div className="absolute h-[621px] left-0 top-0 w-[1104px]" data-name="Image (Pre-1871: City of Wood)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageACityOfWood} />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] h-[40px] left-[24px] rounded-[10px] top-[24px] w-[196.238px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-nowrap text-white top-[5.8px] whitespace-pre">Pre-1871: City of Wood</p>
    </div>
  );
}

function SkylineComparison3() {
  return (
    <div className="absolute h-[621px] left-0 top-0 w-[1104px]" data-name="SkylineComparison">
      <ImagePre1871CityOfWood />
      <Container26 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[36px] size-[16px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white h-[56px] relative rounded-[2.68435e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Icon8 />
      <Icon9 />
    </div>
  );
}

function SkylineComparison4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[621px] items-start left-[552px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[4px]" data-name="SkylineComparison">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[621px] overflow-clip relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <SkylineComparison2 />
      <SkylineComparison3 />
      <SkylineComparison4 />
    </div>
  );
}

function SkylineComparison5() {
  return (
    <div className="absolute bg-zinc-950 content-stretch flex flex-col gap-[48px] h-[739px] items-start left-[24px] top-[3165.2px] w-[1104px]" data-name="SkylineComparison">
      <Container24 />
      <Container28 />
    </div>
  );
}

function TimelineSection12() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[528px]" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#ff4254] text-[16px] text-nowrap top-[-2.2px] tracking-[1.6px] whitespace-pre">TODAY</p>
    </div>
  );
}

function TimelineSection13() {
  return (
    <div className="absolute h-[24px] left-0 top-[40px] w-[528px]" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">The Legacy Lives On</p>
    </div>
  );
}

function TimelineSection14() {
  return (
    <div className="absolute h-[156px] left-0 top-[88px] w-[528px]" data-name="TimelineSection">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#9f9fa9] text-[16px] top-[-2.4px] w-[526px]">{`Modern Chicago stands as a testament to resilience and innovation. The skyline that emerged from the ashes pioneered vertical architecture. Icons like the Willis Tower, John Hancock Center, and countless others define the city's profile. The Great Fire didn't just destroy Chicago - it created the conditions for architectural revolution. Chicago became the birthplace of the modern American city, influencing urban design worldwide.`}</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3ac0b600} id="Vector" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3c797180} id="Vector_2" stroke="var(--stroke-0, #05DF72)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[285.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[285.375px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#05df72] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">From disaster to architectural innovation</p>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-[268px] w-[528px]" data-name="App">
      <Icon10 />
      <Text2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[292px] left-[576px] top-[52px] w-[528px]" data-name="Container">
      <TimelineSection12 />
      <TimelineSection13 />
      <TimelineSection14 />
      <App1 />
    </div>
  );
}

function ImageTheLegacyLivesOn() {
  return (
    <div className="absolute h-[396px] left-0 top-0 w-[528px]" data-name="Image (The Legacy Lives On)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageTheLegacyLivesOn} />
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[396px] left-0 to-[rgba(0,0,0,0)] top-0 w-[528px]" data-name="Container" />;
}

function Container31() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[396px] left-0 overflow-clip rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[528px]" data-name="Container">
      <ImageTheLegacyLivesOn />
      <Container30 />
    </div>
  );
}

function TimelineSection15() {
  return (
    <div className="absolute bg-zinc-900 h-[396px] left-[24px] top-[4109.4px] w-[1104px]" data-name="TimelineSection">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-[384.21px] not-italic text-[20px] text-center text-nowrap text-white top-[-2.4px] translate-x-[-50%] whitespace-pre">From Ruins to Revolution</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[384.31px] not-italic text-[#9f9fa9] text-[16px] text-center top-[-2.2px] translate-x-[-50%] w-[733px]">The Great Chicago Fire of 1871 was one of the most devastating urban disasters in American history. Yet from its ashes rose not just a city, but a new vision of what cities could be.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[384.36px] not-italic text-[#9f9fa9] text-[16px] text-center top-[-2.2px] translate-x-[-50%] w-[746px]">{`Chicago's transformation from a wooden frontier town to a steel metropolis changed architecture forever, giving birth to the modern skyline and shaping cities around the world.`}</p>
    </div>
  );
}

function App2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[166px] items-start relative shrink-0 w-full" data-name="App">
      <Heading2 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex flex-col from-[#09090b] h-[422px] items-start left-0 pb-0 pt-[128px] px-[192px] to-[#000000] top-[4630.6px] w-[1152px]" data-name="Section">
      <App2 />
    </div>
  );
}

function App3() {
  return (
    <div className="absolute bg-black h-[5052.6px] left-0 top-0 w-[1152px]" data-name="App">
      <HeroSection3 />
      <TimelineSection3 />
      <TimelineSection7 />
      <ImpactStats18 />
      <TimelineSection11 />
      <SkylineComparison5 />
      <TimelineSection15 />
      <Section />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[12.8px] top-[8.8px] w-[76.362px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4254] text-[12px]">1871</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[20px] left-[12.8px] top-[24.79px] w-[76.362px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] whitespace-pre">Introduction</p>
    </div>
  );
}

function ScrollTimeline2() {
  return (
    <div className="absolute bg-zinc-900 h-[53.587px] left-0 rounded-[10px] top-0 w-[101.963px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container32 />
      <Container33 />
    </div>
  );
}

function ScrollTimeline3() {
  return (
    <div className="absolute bg-zinc-900 left-[-5.66px] size-[11.314px] top-[21.13px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px_0.8px] border-solid border-zinc-800 inset-0 pointer-events-none" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[53.587px] left-[48px] top-[-10.79px] w-[101.963px]" data-name="Container">
      <ScrollTimeline2 />
      <ScrollTimeline3 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[#ff4254] h-[32px] left-[15px] top-[32px] w-[2px]" data-name="Container" />;
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
            <path d={svgPaths.pbba7c80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p16ec8400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ff4254] box-border content-stretch flex items-center justify-center left-0 p-[1.6px] rounded-[2.68435e+07px] size-[32px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ff4254] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute left-0 size-[32px] top-0" data-name="Container">
      <Container34 />
      <Container35 />
      <Button />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[12.8px] top-[8.8px] w-[93.888px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4254] text-[12px]">Pre-1871</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[20px] left-[12.8px] top-[24.79px] w-[93.888px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] whitespace-pre">A City of Wood</p>
    </div>
  );
}

function ScrollTimeline4() {
  return (
    <div className="absolute bg-zinc-900 h-[53.587px] left-0 rounded-[10px] top-0 w-[119.488px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container38 />
      <Container39 />
    </div>
  );
}

function ScrollTimeline5() {
  return (
    <div className="absolute bg-zinc-900 left-[-5.66px] size-[11.314px] top-[21.13px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px_0.8px] border-solid border-zinc-800 inset-0 pointer-events-none" />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[53.587px] left-[38px] opacity-0 top-[-10.79px] w-[119.488px]" data-name="Container">
      <ScrollTimeline4 />
      <ScrollTimeline5 />
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[#ff4254] h-0 left-[15px] top-[32px] w-[2px]" data-name="Container" />;
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[41.67%] right-[41.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.666667 0.666667H3.33333" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_41.67%_66.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.666667 0.666667H3.33333" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_41.67%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 5">
            <path d={svgPaths.p3c852040} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.p33dd5a60} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
            <path d={svgPaths.p7f597c0} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-black box-border content-stretch flex items-center justify-center left-0 p-[1.6px] rounded-[2.68435e+07px] size-[32px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute left-0 size-[32px] top-[36px]" data-name="Container">
      <Container40 />
      <Container41 />
      <Button1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4254] text-[12px]">Oct 8</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] whitespace-pre">The Great Fire</p>
    </div>
  );
}

function ScrollTimeline6() {
  return (
    <div className="absolute bg-zinc-900 box-border content-stretch flex flex-col gap-[1.812e_-5px] h-[53.587px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[12.8px] rounded-[10px] top-0 w-[111.925px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container44 />
      <Container45 />
    </div>
  );
}

function ScrollTimeline7() {
  return (
    <div className="absolute bg-zinc-900 left-[-5.66px] size-[11.314px] top-[21.13px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px_0.8px] border-solid border-zinc-800 inset-0 pointer-events-none" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[53.587px] left-[38px] opacity-0 top-[-10.79px] w-[111.925px]" data-name="Container">
      <ScrollTimeline6 />
      <ScrollTimeline7 />
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-[#ff4254] h-0 left-[15px] top-[32px] w-[2px]" data-name="Container" />;
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%_8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5.26%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
            <path d={svgPaths.p12eefa80} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-black box-border content-stretch flex items-center justify-center left-0 p-[1.6px] rounded-[2.68435e+07px] size-[32px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute left-0 size-[32px] top-[72px]" data-name="Container">
      <Container46 />
      <Container47 />
      <Button2 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4254] text-[12px]">1871</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] whitespace-pre">{`Impact & Loss`}</p>
    </div>
  );
}

function ScrollTimeline8() {
  return (
    <div className="absolute bg-zinc-900 box-border content-stretch flex flex-col gap-[1.812e_-5px] h-[53.587px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[12.8px] rounded-[10px] top-0 w-[113.5px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container50 />
      <Container51 />
    </div>
  );
}

function ScrollTimeline9() {
  return (
    <div className="absolute bg-zinc-900 left-[-5.66px] size-[11.314px] top-[21.13px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px_0.8px] border-solid border-zinc-800 inset-0 pointer-events-none" />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[53.587px] left-[38px] opacity-0 top-[-10.79px] w-[113.5px]" data-name="Container">
      <ScrollTimeline8 />
      <ScrollTimeline9 />
    </div>
  );
}

function Container53() {
  return <div className="absolute bg-[#ff4254] h-0 left-[15px] top-[32px] w-[2px]" data-name="Container" />;
}

function Icon14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p311aedc0} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
            <path d="M0.666667 6V0.666667" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_45.83%_29.17%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 10">
            <path d="M0.666667 8.66667V0.666667" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M0.666667 2.66667V0.666667" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-black box-border content-stretch flex items-center justify-center left-0 p-[1.6px] rounded-[2.68435e+07px] size-[32px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute left-0 size-[32px] top-[108px]" data-name="Container">
      <Container52 />
      <Container53 />
      <Button3 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4254] text-[12px]">1871-1890s</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] whitespace-pre">Rising from Ashes</p>
    </div>
  );
}

function ScrollTimeline10() {
  return (
    <div className="absolute bg-zinc-900 box-border content-stretch flex flex-col gap-[1.812e_-5px] h-[53.587px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[12.8px] rounded-[10px] top-0 w-[136.2px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container56 />
      <Container57 />
    </div>
  );
}

function ScrollTimeline11() {
  return (
    <div className="absolute bg-zinc-900 left-[-5.66px] size-[11.314px] top-[21.13px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px_0.8px] border-solid border-zinc-800 inset-0 pointer-events-none" />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[53.587px] left-[38px] opacity-0 top-[-10.79px] w-[136.2px]" data-name="Container">
      <ScrollTimeline10 />
      <ScrollTimeline11 />
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-[#ff4254] h-0 left-[15px] top-[32px] w-[2px]" data-name="Container" />;
}

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[41.67%] right-[41.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.666667 0.666667H3.33333" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_41.67%_66.67%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M0.666667 0.666667H3.33333" id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_41.67%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 5">
            <path d={svgPaths.p3c852040} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.p33dd5a60} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
            <path d={svgPaths.p7f597c0} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon15 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-black box-border content-stretch flex items-center justify-center left-0 p-[1.6px] rounded-[2.68435e+07px] size-[32px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute left-0 size-[32px] top-[144px]" data-name="Container">
      <Container58 />
      <Container59 />
      <Button4 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4254] text-[12px]">Compare</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] whitespace-pre">Then vs Now</p>
    </div>
  );
}

function ScrollTimeline12() {
  return (
    <div className="absolute bg-zinc-900 box-border content-stretch flex flex-col gap-[1.812e_-5px] h-[53.587px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[12.8px] rounded-[10px] top-0 w-[105.213px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container62 />
      <Container63 />
    </div>
  );
}

function ScrollTimeline13() {
  return (
    <div className="absolute bg-zinc-900 left-[-5.66px] size-[11.314px] top-[21.13px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px_0.8px] border-solid border-zinc-800 inset-0 pointer-events-none" />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[53.587px] left-[38px] opacity-0 top-[-10.79px] w-[105.213px]" data-name="Container">
      <ScrollTimeline12 />
      <ScrollTimeline13 />
    </div>
  );
}

function Container65() {
  return <div className="absolute bg-[#ff4254] h-0 left-[15px] top-[32px] w-[2px]" data-name="Container" />;
}

function Icon16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p1efb2580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 8">
            <path d={svgPaths.p137d8f80} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-black box-border content-stretch flex items-center justify-center left-0 p-[1.6px] rounded-[2.68435e+07px] size-[32px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute left-0 size-[32px] top-[180px]" data-name="Container">
      <Container64 />
      <Container65 />
      <Button5 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#ff4254] text-[12px]">Today</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] whitespace-pre">Legacy Lives On</p>
    </div>
  );
}

function ScrollTimeline14() {
  return (
    <div className="absolute bg-zinc-900 box-border content-stretch flex flex-col gap-[1.812e_-5px] h-[53.587px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[12.8px] rounded-[10px] top-0 w-[124.225px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[10px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container68 />
      <Container69 />
    </div>
  );
}

function ScrollTimeline15() {
  return (
    <div className="absolute bg-zinc-900 left-[-5.66px] size-[11.314px] top-[21.13px]" data-name="ScrollTimeline2">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px_0.8px] border-solid border-zinc-800 inset-0 pointer-events-none" />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[53.587px] left-[38px] opacity-0 top-[-10.79px] w-[124.225px]" data-name="Container">
      <ScrollTimeline14 />
      <ScrollTimeline15 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p1efb2580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 8">
            <path d={svgPaths.p137d8f80} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[16px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-black box-border content-stretch flex items-center justify-center left-0 p-[1.6px] rounded-[2.68435e+07px] size-[32px] top-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.6px] border-solid border-zinc-800 inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <Container71 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute left-0 size-[32px] top-[216px]" data-name="Container">
      <Container70 />
      <Button6 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute h-[248px] left-0 top-0 w-[32px]" data-name="Container">
      <Container37 />
      <Container43 />
      <Container49 />
      <Container55 />
      <Container61 />
      <Container67 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return <div className="absolute bg-zinc-800 h-[248px] left-[15px] top-0 w-[2px]" data-name="Container" />;
}

function ScrollTimeline16() {
  return (
    <div className="absolute h-[248px] left-[32px] top-[199.2px] w-[32px]" data-name="ScrollTimeline2">
      <Container73 />
      <Container74 />
    </div>
  );
}

export default function ChicagoGreatFireWebsiteDemoCommunity() {
  return (
    <div className="bg-white relative size-full" data-name="Chicago Great Fire Website Demo (Community)">
      <App3 />
      <ScrollTimeline16 />
    </div>
  );
}