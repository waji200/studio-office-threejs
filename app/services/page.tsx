export default function Services() {
  return (
    <div className="bg-white">
      <section className="py-20 px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end gap-16 mb-20">
            <div className="flex-1">
              <h1 className="text-6xl font-bold leading-tight">We create intelligent digital solutions.</h1>
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a full-service Innovation Studio building immersive digital experiences. Our team creates exceptional UI/UX design with stellar functionality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 mb-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-6">Our Services</span>
              <h2 className="text-4xl font-bold leading-tight mb-8">Strategic solutions for modern digital growth.</h2>
              <a href="/contact" className="text-blue-600 font-bold hover:text-blue-700">EXPLORE ALL SERVICES →</a>
            </div>

            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-3">Digital Strategy & Experience Architecture</h3>
                <p className="text-gray-600">Modern, responsive, and performance-driven websites built for growth.</p>
              </div>
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-xl font-bold mb-3">Website Design & Development</h3>
                <p className="text-gray-600">Modern, responsive, and performance-driven websites built for growth.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Interactive & 3D Integration</h3>
                <p className="text-gray-600">We integrate immersive digital elements that elevate user engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Expertise</h3>
              <p className="text-gray-600">With years of experience across diverse industries, we bring deep expertise to every project.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">We stay ahead of industry trends and leverage cutting-edge technologies.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600">We work closely with our clients to ensure every project exceeds expectations.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Results</h3>
              <p className="text-gray-600">Our focus is on delivering measurable results that drive business growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
