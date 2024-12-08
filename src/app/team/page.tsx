import Footer from "@/components/Footer";
import * as React from "react";

interface TeamMemberProps {
  imageSrc: string;
  username: string;
  profession: string;
  socialIcons: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, username, profession, socialIcons }) => (
  <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
    <div className="flex overflow-hidden flex-col max-w-full bg-white w-full sm:w-[316px]">
      <div className="flex overflow-hidden flex-col w-full">
        <img loading="lazy" src={imageSrc} alt={`${username} - ${profession}`} className="object-contain w-full aspect-[1.37]" />
      </div>
      <div className="flex overflow-hidden flex-col items-center self-center p-8 w-full max-w-full sm:max-w-[316px] max-md:px-5">
        <div className="text-base font-bold tracking-normal text-center text-slate-800">{username}</div>
        <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">{profession}</div>
        <div className="flex overflow-hidden gap-5 justify-center items-center mt-2.5">
          {socialIcons.map((icon, index) => (
            <img key={index} loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface TeamRowProps {
  members: TeamMemberProps[];
}

const TeamRow: React.FC<TeamRowProps> = ({ members }) => (
  <div className="flex overflow-hidden flex-wrap gap-8 items-center justify-center mt-28 w-full max-md:mt-10">
    {members.map((member, index) => (
      <TeamMember key={index} {...member} />
    ))}
  </div>
);

const TeamPage: React.FC = () => {
  const teamData = [
    [
      { imageSrc: "/team/1.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] },
      { imageSrc: "/team/2.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] },
      { imageSrc: "/team/3.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] }
    ],
    [
      { imageSrc: "/team/4.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] },
      { imageSrc: "/team/10.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] },
      { imageSrc: "/team/5.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] }
    ],
    [
      { imageSrc: "/team/5.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] },
      { imageSrc: "/team/6.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] },
      { imageSrc: "/team/7.jpg", username: "Username", profession: "Profession", socialIcons: ["/icons/facebook.png", "/icons/instagram.png", "icons/twitter.png"] }
    ]
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-col pb-8 w-full font-bold bg-white max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center px-20 pt-5 w-full bg-white bg-opacity-50 max-md:px-5">
          <div className="flex z-10 flex-col -mb-8 w-full max-w-[1043px] max-md:mb-2.5">
            <div className="flex overflow-hidden flex-col justify-center items-center self-center py-12 mt-8 max-w-full tracking-wide text-center w-[870px]">
              <div className="flex overflow-hidden items-center w-full">
                <div className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] w-full">
                  <div className="text-base tracking-normal text-neutral-500">WHAT WE DO</div>
                  <h1 className="mt-4 text-6xl leading-none text-slate-800 max-md:text-4xl">Innovation tailored for you</h1>
                  <nav className="flex overflow-hidden gap-4 items-center py-2.5 mt-4 text-sm leading-6 whitespace-nowrap" aria-label="Breadcrumb">
                    <a href="/" className="self-stretch my-auto text-slate-800">Home</a>
                    <img loading="lazy" src="/icons/grayarrow.svg" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]" />
                    <span className="self-stretch my-auto text-neutral-500">Team</span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden justify-center w-full bg-white">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-6/12">
            <img loading="lazy" src="/icons/redbgwoman.png" alt="" className="object-contain w-full aspect-[1.32]" />
          </div>
          <div className="w-full md:w-6/12 grid grid-cols-2 gap-5">
            <img loading="lazy" src="/icons/blackbagwoman.png" alt="" className="object-contain w-full aspect-[1.39]" />
            <img loading="lazy" src="/icons/jacketwoman.png" alt="" className="object-contain w-full aspect-[1.39]" />
            <img loading="lazy" src="/icons/blackhoodiewoman.png" alt="" className="object-contain w-full aspect-[1.39]" />
            <img loading="lazy" src="/icons/bluejacketwoman.png" alt="" className="object-contain w-full aspect-[1.39]" />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-5 md:px-20 w-full bg-white">
        <div className="flex overflow-hidden flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24">
          <div className="flex overflow-hidden flex-col items-center max-w-full text-4xl font-bold tracking-wide leading-none text-slate-800 w-full md:w-[607px]">
            <h2 className="overflow-hidden w-full text-center">Meet Our Team</h2>
          </div>
          {teamData.map((row, index) => (
            <TeamRow key={index} members={row} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TeamPage;