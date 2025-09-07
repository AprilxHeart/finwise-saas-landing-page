import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Section
          id="features"
          title="คุณสมบัติเด่น"
          description="ความพิเศษขอเรา ที่ทำให้เราแตกต่าง"
        >
          <Benefits />
        </Section>

        <Section
          id="pricing"
          title="คอลเลกชั่นนาฬิกา"
          description="เลือกนาฬิกาที่เหมาะกับสไตล์และงบประมาณของคุณ"
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="รีวิวจากลูกค้า"
          description="ความประทับใจจากเหล่าลูกค้าที่เลือกใช้ WISE Watch"
        >
          <Testimonials />
        </Section>

        <Stats />

        <Section
          id="faq"
          title="คำถามที่พบบ่อย"
          description="คำตอบสำหรับคำถามที่ลูกค้าสนใจ"
        >
          <FAQ />
        </Section>
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
