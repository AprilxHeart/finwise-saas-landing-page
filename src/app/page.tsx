import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Team from "@/components/Team";
import TrustSection from "@/components/TrustSection";
import WorkingEnvironment from "@/components/WorkingEnvironment";
import Logos from "@/components/Logos";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section - จุดเริ่มต้น */}
      <Hero />
      
      {/* Client Logos - สร้างความน่าเชื่อถือ */}
      <Logos />
      
      <Container>
        {/* Features Section - แสดงจุดเด่น */}
        <Section
          id="features"
          title="คุณสมบัติเด่น"
          description="ความพิเศษของเรา ที่ทำให้เราแตกต่าง"
        >
          <Benefits />
        </Section>

        {/* Stats Section - สถิติเพื่อสร้างความน่าเชื่อถือ */}
        <Stats />

        {/* Products Section - ผลิตภัณฑ์หลัก */}
        <Section
          id="pricing"
          title="ซีรีส์ปั๊มน้ำ Eifel"
          description="เลือกปั๊มน้ำที่เหมาะกับความต้องการและโครงการของคุณ"
        >
          <Pricing />
        </Section>

        {/* Trust Section - อยู่นี่เพื่อสร้างความมั่นใจหลังดูผลิตภัณฑ์ */}
      </Container>
      
      <TrustSection />
      
      <Container>
        {/* Testimonials - ความคิดเห็นลูกค้า */}
        <Section
          id="testimonials"
          title="รีวิวจากลูกค้า"
          description="ความไว้วางใจจากลูกค้าที่เลือกใช้ปั๊มน้ำ Eifel"
        >
          <Testimonials />
        </Section>

        {/* FAQ Section - ตอบข้อสงสัย */}
        <Section
          id="faq"
          title="คำถามที่พบบ่อย"
          description="คำตอบสำหรับคำถามที่ลูกค้าสนใจ"
        >
          <FAQ />
        </Section>
      </Container>

      {/* Team Section - แสดงทีมงาน */}
      <div id="team">
        <Team />
      </div>

      {/* Working Environment - สภาพแวดล้อมการทำงาน */}
      <WorkingEnvironment />

      <Container>
        {/* CTA Section - เรียกร้องให้ติดต่อ */}
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
