import Container from '../Container'
import Flex from '../Flex'
import Heading from "../Heading"
import Paragraph from '../Paragraph'
import Images from '../Images'
import Superman from "../../assets/superman.png"
import Button from "../Button"
import Twitter from "../../assets/Twitter.png"
import Slash from "../../assets/slash.png"
import Shadow from "../../assets/shadow.png"
import Facebook from "../../assets/facebook.png"
import Whatsapp from "../../assets/whatsapp.png"
import Instragram from "../../assets/instraram.png"


const Banner = () => {
  return (
    <section className='mt-20'>
        <Container className="max-w-[1240px]">
            <Flex>
                <div className="absolute">
                    <Images src={Superman} className="relative right-16  bottom-12"/>
                </div>
                <div className="relative ms-40">
                <Images src={Slash} className="absolute top-[-70px] left-0"/>
                  <Heading text="We Are Digital #Marketing# Agency" as="h1" className="font-openSans text-7xl font-extrabold leading-normal"/>
                  <div className="flex mt-5">
                  </div>
                  <Paragraph text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing." className="text-xl font-paprika font-normal leading-9 text-[#6C7D93] me-80 mt-10"/>
                  <Button className=" py-4 border rounded-full text-white font-open font-semibold text-[18px] px-7 delay-150 bg-hoverColor mt-5" text="Get Free Quoto"/>
                  <Images src={Twitter} className="absolute left-[-9.75rem]"/>
                </div>
                <div className="relative w-3/4">
                  <Images src={Shadow}/>
                  <Images src={Shadow} className="absolute top-[208px] left-[-140px]"/>
                  <Images src={Facebook} className="absolute top-0 left-[-103px]"/>
                  <Images src={Whatsapp} className="absolute bottom-[40px] right-0"/>
                  <Images src={Instragram} className="absolute bottom-[100px] left-[-216px]"/>
                  
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner