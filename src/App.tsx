import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="https://i.ibb.co/XtxQMPJ/Foxie-2x-copy.png"
              alt="Foxie Logo"
              className="h-10"
            />
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-medium hover:text-foxie-pink transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm font-medium hover:text-foxie-pink transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-foxie-pink transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(113,255,174,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(60,108,222,0.15),transparent_50%)]" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                Connect with the world{' '}
                <span className="bg-gradient-to-r from-foxie-green via-foxie-cyan to-foxie-blue bg-clip-text text-transparent">
                  around you
                </span>{' '}
                through activities
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 mb-8 leading-relaxed">
                Discover activities, events, and experiences with people nearby. Join the community and make new friends today.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-black text-zinc-900">500K+</div>
                  <div className="text-sm text-zinc-600">Users</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-zinc-900">4.9</div>
                  <div className="text-sm text-zinc-600">Rating</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black text-zinc-900">1M+</div>
                  <div className="text-sm text-zinc-600">Activities</div>
                </div>
              </div>

              <a
                href="https://apps.apple.com/us/app/foxie/id1369279200"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://uploads-ssl.webflow.com/5bdcd81aa566f460cda90ea7/5bf24ca411bde25a5754c7f7_app%20store.png"
                  alt="Download on the App Store"
                  className="h-14 hover:scale-105 transition-transform"
                />
              </a>

              <p className="mt-4 text-sm text-zinc-500">
                <a
                  href="http://eepurl.com/dDspiH"
                  className="hover:text-foxie-pink transition-colors"
                >
                  Get the download link or sign up for Android updates
                </a>
              </p>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-foxie-pink/20 to-foxie-blue/20 blur-3xl" />
                <img
                  src="https://i.ibb.co/pJ3rH8C/activities.png"
                  alt="Foxie App"
                  className="relative w-full h-auto rounded-[2.5rem] shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-foxie-green via-foxie-cyan to-foxie-blue bg-clip-text text-transparent">
                connect
              </span>
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Foxie makes it simple to discover, create, and join activities with people in your area.
            </p>
          </motion.div>

          {/* Feature 1: Create Activities */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative w-full max-w-xs mx-auto">
                <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-3 shadow-2xl">
                  <div className="rounded-[2.5rem] overflow-hidden bg-white aspect-[9/19.5]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="https://i.ibb.co/2cG5Kd0/Simulator-Screen-Shot-i-Phone-7-2019-05-02-at-22-33-46.png"
                      className="w-full h-full object-contain"
                    >
                      <source src="https://webm.red/qg6y.webm" type="video/webm" />
                    </video>
                  </div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Add what you want to do
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Simply add the thing you want to do with the time and place! It's that easy to get started connecting with people who share your interests.
              </p>
            </motion.div>
          </div>

          {/* Feature 2: Activity Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                See all the details
              </h3>
              <p className="text-lg text-zinc-600 leading-relaxed">
                View who's going, what time and place, and what others are saying! Join any activity and message users directly to coordinate.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative flex gap-4 justify-center">
                <img
                  src="https://i.ibb.co/CwLgmzX/postinfo.png"
                  alt="Activity Details"
                  className="w-1/2 h-auto"
                />
                <img
                  src="https://i.ibb.co/9y5Q2Pd/foxie-sgoing.png"
                  alt="Who's Going"
                  className="w-1/2 h-auto mt-8"
                />
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Discover */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black mb-12"
            >
              Discover new friends, places and things
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-6 justify-center mb-12"
            >
              <img
                src="https://i.ibb.co/ZmbP6WL/discover.png"
                alt="Discover"
                className="w-full max-w-sm h-auto"
              />
              <img
                src="https://i.ibb.co/CVnRRPD/worldchat.png"
                alt="World Chat"
                className="w-full max-w-sm h-auto"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              The whole gist of Foxie is to just get you out into the world, make new friends, and connect with other people. Have fun!
            </motion.p>
            <a
              href="https://apps.apple.com/us/app/foxie/id1369279200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://uploads-ssl.webflow.com/5bdcd81aa566f460cda90ea7/5bf24ca411bde25a5754c7f7_app%20store.png"
                alt="Download on the App Store"
                className="h-14 hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-foxie-green via-foxie-cyan to-foxie-blue bg-clip-text text-transparent">
              Contact us
            </h2>
            <p className="text-lg text-zinc-700 max-w-2xl mx-auto leading-relaxed">
              Questions? Feedback? Want to request a feature? We're building this for you, so we want to know what you think. We're always happy to chat, so drop us a line at{' '}
              <a
                href="mailto:info@foxie.cool"
                className="text-foxie-pink hover:underline font-medium"
              >
                info@foxie.cool
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="https://edisonjoao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Made by Edison
              </a>
              <a
                href="https://apps.apple.com/us/app/foxie/id1369279200"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                App Store
              </a>
              <a
                href="mailto:info@foxie.cool"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-zinc-400">
              &copy; 2019-2026 Foxie. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
