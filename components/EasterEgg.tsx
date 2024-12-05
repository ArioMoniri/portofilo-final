import { motion } from 'framer-motion'

export default function EasterEgg() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16"
    >
      <h2 className="text-3xl font-bold mb-4 text-cyan-400">Congratulations, Esteemed Explorer!</h2>
      <p className="text-lg text-gray-300 mb-8">
        JARVIS here. I must say, your discovery of this Easter Egg is most impressive. Dr. Moniri was quite confident that only individuals of exceptional intellect would uncover this hidden gem.
      </p>
      <p className="text-lg text-gray-300 mb-8">
        As a reward for your astute exploration, Dr. Moniri suggests indulging in an auditory experience that he finds particularly invigorating. May I present to you "Feeling Good" by Michael Bublé?
      </p>
      <p className="text-lg text-gray-300 mb-8">
        This track, much like your discovery, exemplifies excellence. Enjoy the melodious journey, and remember: in Dr. Moniri's world, every interaction is an opportunity for brilliance.
      </p>
      <iframe 
        style={{borderRadius: '12px'}} 
        src="https://open.spotify.com/embed/track/1AM8QdDFZMq6SrrqUnuQ9P?utm_source=generator&theme=0" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
    </motion.div>
  )
}

