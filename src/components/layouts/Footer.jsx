
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Logo from '../../assets/Logo.png'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import List from '../List'

const Footer = () => {
  return (
    <section className='bg-[#FEFFFF] pt-[140px]'>
        <Container className="max-w-6xl">
            <Flex>
            <div className="w-[449px] me-[93px]">
            <Images src={Logo} />
            <Paragraph text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page." className="text-[#6C7D93] font-nunito text-[18px] font-regular leading-[32.4px] capitalize pt-[44px]"/>
            </div>
            <div className="w-[177px]">
            <Heading text="Features" className="text-[#413F45] font-opensans text-[24px] font-semibold leading-[33.6px] pb-[48px]" as="h5"/>
            <ul>
            <List href="#" text="Home" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="About" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Benifit" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Pricing" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Blog" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            </ul>
            </div>

            <div className="w-[250px] ">
            <Heading text="Products" className="text-[#413F45] font-opensans text-[24px] font-semibold leading-[33.6px] pb-[48px]" as="h5"/>
            <ul>
            <List href="#" text="Task Management" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Company growth" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Time tracking" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
           
            </ul>
            </div>

            <div className="w-[200px]">
            <Heading text="Support" className="text-[#413F45] font-opensans text-[24px] font-semibold leading-[33.6px] pb-[48px]" as="h5"/>
            <ul>
            <List href="#" text="Customer service" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Accessibility" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Contact us" className="text-[#6C7D93] font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
           
            </ul>
            </div>
            </Flex>


            <div className='py-[57px]'>
            <ul>
           <Flex>
            <List href="#" text="@20201 Innovate.All rights reserved." className="text-[#6C7D93] font-nunito text-[18px] font-regular leading-[32.4px] capitalize pr-[200px]" />   
            <List href="#" text="Privacy policy" className="text-[#6C7D93] font-nunito text-[18px] font-regular leading-[32.4px] capitalize pr-[50px]" />   
            <List href="#" text="Terms & condition" className="text-[#6C7D93] font-nunito text-[18px] font-regular leading-[32.4px] capitalize" />   
           </Flex>
            </ul>
            </div>
        </Container>
    </section>
  )
}

export default Footer