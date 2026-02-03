import { motion } from 'framer-motion';
import { Instagram, Send } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page - Biz haqimizda
 * INSON QADRI MEDIA PRODUCTION company information
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="Biz haqimizda"
        description={`${photographerInfo.name} ${photographerInfo.tagline}. ${photographerInfo.about.split('\n\n')[0]}`}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Biz haqimizda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Ijodiy va strategik media platforma
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Video/Visual Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-video relative overflow-hidden rounded-lg bg-muted">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  >
                    <source src="https://videos.pexels.com/video-files/3888252/3888252-sd_426_226_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {photographerInfo.socialLinks.instagram && (
                    <a
                      href={photographerInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.youtube && (
                    <a
                      href={photographerInfo.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                      aria-label="YouTube"
                    >
                      <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                  {photographerInfo.socialLinks.telegram && (
                    <a
                      href={photographerInfo.socialLinks.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-accent transition-colors"
                      aria-label="Telegram"
                    >
                      <Send className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Company Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {photographerInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
                    {photographerInfo.tagline}
                  </p>
                </div>

                <Separator />

                {/* About */}
                <div className="space-y-4">
                  {photographerInfo.about.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${photographerInfo.email}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {photographerInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Joylashuv: </span>
                    <span className="text-foreground">{photographerInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}