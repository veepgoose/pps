import Image from 'next/image';

const Services = () => {
  return (
    <section className="py-12 text-center bg-gradient-to-r from-[#FB6FC6] to-[#FCFF6C] opacity-90 text-[#192A51] px-4 lg:px-16">
      <h2 className="text-2xl lg:text-4xl font-bold mb-8">Our Services</h2>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 text-lg">
        
        {/* Service 1: Web Design & Development */}
        <div className="flex flex-col items-center min-h-[300px]">
          <div className="mb-4">
            <Image src="/WebdesignIcon.svg" alt="Web Design & Development Icon" width={80} height={80} />
          </div>
          <h3 className="font-bold text-lg mb-2">Web Design & Development</h3>
          <p>Create a stunning, custom-coded website tailored to your unique vision. From simple, scrollable sites to complex interactive experiences, you have full creative control.</p>
        </div>
        
        {/* Service 2: E-Commerce Solutions */}
        <div className="flex flex-col items-center min-h-[300px]">
          <div className="mb-4">
            <Image src="/ECommerceIcon.svg" alt="E-Commerce Solutions Icon" width={80} height={80} />
          </div>
          <h3 className="font-bold text-lg mb-2">E-Commerce Solutions</h3>
          <p>Build a feature-rich online store with Shopify integration and a custom Next.js frontend, designed to drive sales and elevate your brand.</p>
        </div>
        
        {/* Service 3: Digital Strategy & UX Planning */}
        <div className="flex flex-col items-center min-h-[300px]">
          <div className="mb-4">
            <Image src="/ChartIcon.svg" alt="Digital Strategy & UX Planning Icon" width={60} height={60} />
          </div>
          <h3 className="font-bold text-lg mb-2">Digital Strategy & UX Planning</h3>
          <p>Lay solid foundations with expert digital strategy and user experience planning, ensuring your website serves your business goals effectively.</p>
        </div>
        
        {/* Service 4: Brand Identity & Marketing */}
        <div className="flex flex-col items-center min-h-[300px]">
          <div className="mb-4">
            <Image src="/LightbulbIcon.svg" alt="Brand Identity & Marketing Icon" width={40} height={40} />
          </div>
          <h3 className="font-bold text-lg mb-2">Brand Identity & Marketing</h3>
          <p>Leverage 20+ years of business experience to build a strong brand identity and marketing strategy that resonates with your target audience.</p>
        </div>
        
        {/* Service 5: Business Growth Consulting */}
        <div className="flex flex-col items-center min-h-[300px]">
          <div className="mb-4">
            <Image src="/RocketIcon.svg" alt="Business Growth Consulting Icon" width={40} height={40} />
          </div>
          <h3 className="font-bold text-lg mb-2">Business Growth Consulting</h3>
          <p>Gain insights from a seasoned entrepreneur on running a successful business, combining online and offline strategies to help you grow.</p>
        </div>
        
      </div>
    </section>
  );
}

export default Services;



