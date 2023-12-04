import Flex from "../Flex"
import Images from "../Images"
import Slash from "../../assets/slash.png"
import Heading from "../Heading"
import Container from "../Container"
import Step1 from "../../assets/step1.png"
import Paragraph from '../Paragraph'
import Creativecard from "../../assets/creativecard.png"
import Step2 from "../../assets/step2.png"
import Step3 from "../../assets/step3.png"



const Who = () => {
  return (
    <section className="mt-12 pb-10">
        <Container className="max-w-6xl">
            <Images src={Slash} className="mx-auto"/>
            <Heading text="Our creative process." as="h3" className="text-5xl text-primaryColor font-open font-bold text-center"/>
            <Paragraph text="We provide digital experience services to startups." className="font-sans text-center text-[#6C7D93] text-lg font-normal "/>
            <Paragraph text="and small businesses." className="font-sans text-center text-[#6C7D93]
           text-lg font-normal "/>
           <Flex className="mt-8">
             <div className="w-1/3 drop-shadow-xl bg-slate-200 rounded-2xl py-5 px-4 mt-8 mb-14">
                <Images src={Step1} className="mx-auto"/>
                <Heading text="Global SEO Research" className="text-center text-3xl font-semibold font-open mt-3" as="h4"/>
                <Paragraph text="Practical tools and features make it easier to build and manage your site." className="font-paprika text-center text-[#6C7D93] text-lg font-normal py-6 leading-8"/>
              </div>
              <Images src={Creativecard} className="mx-auto me-[-40px]"/>
           </Flex>

           <Flex className="mt-8">
            <Images src={Creativecard} className="mx-auto ms-[-40px]"/>
             <div className="w-1/3 drop-shadow-xl bg-slate-200 rounded-2xl py-5 px-4 mt-8 mb-14">
                <Images src={Step2} className="mx-auto"/>
                <Heading text="Social media integration" className="text-center text-3xl font-semibold font-open mt-3" as="h4"/>
                <Paragraph text="Practical tools and features make it easier to build and manage your site." className="font-paprika text-center text-[#6C7D93] text-lg font-normal py-6 leading-8"/>
              </div>
           </Flex>

           <Flex className="mt-8">
             <div className="w-1/3 drop-shadow-xl bg-slate-200 rounded-2xl py-5 px-4 mt-8 mb-14">
                <Images src={Step3} className="mx-auto"/>
                <Heading text="Global SEO Research" className="text-center text-3xl font-semibold font-open mt-3" as="h4"/>
                <Paragraph text="Practical tools and features make it easier to build and manage your site." className="font-paprika text-center text-[#6C7D93] text-lg font-normal py-6 leading-8"/>
              </div>
              <Images src={Creativecard} className="mx-auto me-[-40px]"/>
           </Flex>

        </Container>
    </section>
    
  )
}

export default Who