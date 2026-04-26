export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-7xl font-bold mb-6">Welcome to Innovation Studio</h1>
          <p className="text-2xl opacity-90 mb-8">Strategic Design & Digital Innovation</p>
          <div className="flex gap-4 justify-center">
            <a href="/projects" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              View Our Work
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-16 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-8">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          We are Innovation Studio, a strategic design and innovation studio building immersive digital experiences. Our team creates exceptional UI/UX design with stellar functionality.
        </p>
        <a href="/about" className="text-blue-600 font-bold hover:text-blue-700">
          Learn More →
        </a>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Digital Strategy</h3>
              <p className="text-gray-600">Modern, responsive, and performance-driven solutions for growth.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600">Building scalable applications with cutting-edge technology.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">3D Integration</h3>
              <p className="text-gray-600">Immersive digital elements that elevate user engagement.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="text-blue-600 font-bold hover:text-blue-700">
              Explore All Services →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
