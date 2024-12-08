import React from 'react'
import { NewsletterForm } from './NewsLetter'
import { FooterLinkGroup } from './FooterLinks'
import { Prefooter } from '@/components/Prefooter';

const Footer = () => {
    const footerGroups = [
        {
          title: "Company Info",
          links: ["About Us", "Carrier", "We are hiring", "Blog"]
        },
        {
          title: "Legal",
          links: ["About Us", "Carrier", "We are hiring", "Blog"]
        },
        {
          title: "Features",
          links: ["Business Marketing", "User Analytics", "Live chat", "Unlimited Fun"]
        },
        {
          title: "Resources",
          links: ["Business Marketing", "User Analytics", "Live chat", "Unlimited Fun"]
        }
      ];
  return (
    <>
    <Prefooter/>
    <footer className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        <div className="flex flex-wrap gap-8 justify-between px-8 py-12">
          {footerGroups.map((group, index) => (
            <FooterLinkGroup key={index} {...group} />
          ))}
          <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
            <div className="text-base font-bold tracking-normal text-slate-800">
              Get In Touch
            </div>
            <NewsletterForm />
          </div>
        </div>
        <div className='py-8 px-20 text-[#737373] font-semibold text-sm '>
        Made With Love By Finland All Right Reserved 
        </div>
      </footer></>
  )
}

export default Footer