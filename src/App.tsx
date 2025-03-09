import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Shield, Zap, Globe, ArrowRight, Gamepad, Coins, Lock, Sparkles } from 'lucide-react';
import CryptoTicker from './components/CryptoTicker';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900">
      <CryptoTicker />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">
            Exodus Web3 Wallet: Your Gateway to Digital Freedom
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the Future of Decentralized Finance
          </p>
          <div className="flex justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#features" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition duration-300"
            >
              Explore Features
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.exodus.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-full transition duration-300"
            >
              Visit Official Site
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold mb-12 text-center gradient-text"
          >
            Revolutionary Features of Exodus Web3 Wallet
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Shield className="w-12 h-12 text-indigo-400" />,
                title: "Military-Grade Security",
                description: "Advanced encryption protecting your digital assets 24/7"
              },
              {
                icon: <Gamepad className="w-12 h-12 text-indigo-400" />,
                title: "GameFi Integration",
                description: "Seamless connection to Web3 gaming platforms"
              },
              {
                icon: <Coins className="w-12 h-12 text-indigo-400" />,
                title: "Multi-Chain Support",
                description: "Access to 180+ cryptocurrencies across multiple blockchains"
              },
              {
                icon: <Sparkles className="w-12 h-12 text-indigo-400" />,
                title: "NFT Gallery",
                description: "Showcase and manage your digital collectibles"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="glass-card p-6 hover:transform hover:scale-105 transition-transform duration-300"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gaming Integration */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
              Revolutionary Gaming Experience with Exodus Web3 Wallet
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Seamless Gaming Integration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Gamepad className="w-6 h-6 text-indigo-400 mt-1" />
                    <span>Direct connection to popular blockchain games</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Lock className="w-6 h-6 text-indigo-400 mt-1" />
                    <span>Secure in-game asset management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Coins className="w-6 h-6 text-indigo-400 mt-1" />
                    <span>Instant gaming token swaps</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Web3 Gaming Experience"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300">
              Your assets are protected by industry-leading security measures
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Biometric Authentication",
                description: "Access your wallet securely using fingerprint or face recognition"
              },
              {
                title: "Multi-Signature Support",
                description: "Additional security layer requiring multiple approvals"
              },
              {
                title: "Hardware Wallet Integration",
                description: "Connect with popular hardware wallets for cold storage"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Exodus Web3 Wallet</h3>
              <p className="text-gray-400">
                Your trusted partner in the cryptocurrency journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="https://www.exodus.com/security" className="text-gray-400 hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="https://twitter.com/exodus_io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  Twitter
                </a>
                <a href="https://discord.gg/exodus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;