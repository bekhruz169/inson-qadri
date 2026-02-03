import { motion } from 'framer-motion';
import { 
  photographerInfo, 
  serviceDirections, 
  capabilities, 
  workSteps,
  audienceStats,
  businessBenefits,
  targetBusinesses,
  governmentServices,
  contentBenefits,
  contentResults
} from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Check, Users, Building2, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Homepage - INSON QADRI MEDIA PRODUCTION
 * Showcases company values, services, and featured projects
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead 
        title="INSON QADRI MEDIA PRODUCTION"
        description="Biz jamiyatdagi real muammolarni ko'taradigan, odamlarni o'ylantiradigan, tarbiyalaydigan va harakatga undaydigan ta'sirli video kontentlar yaratamiz."
      />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.opacity = '0';
              }}
            >
              <source src="https://videos.pexels.com/video-files/2675516/2675516-sd_960_540_24fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-8xl font-extralight tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name}
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-3xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-xl font-light leading-relaxed text-white/80 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium tracking-wide rounded-full hover:bg-white/90 transition-colors"
                >
                  <span>Hamkorlik</span>
                  <ArrowRight className="size-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        {/* About Section - Biz kimmiz? */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Biz kimmiz?
                </h2>
                <div className="space-y-4 text-lg md:text-xl font-light leading-relaxed text-muted-foreground">
                  <p>
                    <strong className="text-foreground">{photographerInfo.name} {photographerInfo.tagline}</strong> — bu oddiy media jamoa emas.
                  </p>
                  <p>
                    Biz — inson qadri, ijtimoiy mas'uliyat va ishonch asosida ishlaydigan ijodiy va strategik media platformamiz.
                  </p>
                  <p className="text-2xl md:text-3xl font-medium text-foreground mt-8">
                    Biz reklama qilmaymiz —<br />
                    <span className="text-primary">mazmun orqali ishonch quramiz.</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission Section - Maqsadimiz */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Bizning maqsadimiz
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="space-y-4 p-6 rounded-2xl bg-background border border-border">
                    <div className="text-4xl">👉</div>
                    <p className="text-lg font-medium">Inson qadrini ulug'lash</p>
                  </div>
                  <div className="space-y-4 p-6 rounded-2xl bg-background border border-border">
                    <div className="text-4xl">👉</div>
                    <p className="text-lg font-medium">Jamiyatda ongli fikrlashni kuchaytirish</p>
                  </div>
                  <div className="space-y-4 p-6 rounded-2xl bg-background border border-border">
                    <div className="text-4xl">👉</div>
                    <p className="text-lg font-medium">Ishonchli kontent orqali foyda keltiradigan hamkorliklar</p>
                  </div>
                </div>

                <div className="mt-12 p-8 rounded-2xl bg-background border border-border">
                  <p className="text-lg text-muted-foreground mb-4">Biz ishonamiz:</p>
                  <p className="text-xl md:text-2xl font-light leading-relaxed">
                    Agar kontent <strong className="text-foreground">foydali</strong> bo'lsa — u albatta tomosha qilinadi.<br />
                    Agar kontent <strong className="text-foreground">rost</strong> bo'lsa — u albatta ishonch keltiradi.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Directions Section - Yo'nalishlarimiz */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Bizning yo'nalishlarimiz
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceDirections.map((direction, index) => (
                <ScrollReveal key={direction.id} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-muted/30 border border-border hover:border-foreground/20 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{direction.icon}</span>
                      <h3 className="text-xl md:text-2xl font-medium">{direction.title}</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {direction.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What We Give Section - Xalqimizga nima beryapmiz? */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Biz xalqimizga nima beryapmiz?
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {contentBenefits.map((benefit, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-background border border-border">
                      <p className="text-lg font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <p className="text-lg text-muted-foreground mb-6">Bizning kontentlar:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {contentResults.map((result, index) => (
                      <div key={index} className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background">
                        <Check className="size-5" />
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xl mt-8 text-muted-foreground">
                    Chunki u odamlar hayotiga tegadi.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Audience Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Bizning auditoriyamiz
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border text-center">
                    <Users className="size-10 mx-auto mb-4 text-primary" />
                    <p className="font-medium">{audienceStats.views}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border text-center">
                    <Target className="size-10 mx-auto mb-4 text-primary" />
                    <p className="font-medium">{audienceStats.engagement}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border text-center">
                    <Sparkles className="size-10 mx-auto mb-4 text-primary" />
                    <p className="font-medium">{audienceStats.values}</p>
                  </div>
                </div>

                <p className="text-xl text-muted-foreground mt-8">
                  Bu auditoriya: 👉 majbur bo'lgani uchun emas, <strong className="text-foreground">ishongani uchun</strong> tomosha qiladi.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* For Businesses Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-foreground text-background">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Tadbirkorlar uchun
                  </h2>
                  <p className="text-lg opacity-80">
                    Biz Sizga oddiy reklama taklif qilmaymiz. Biz <strong className="text-white">natija beradigan media hamkorlik</strong> taklif qilamiz.
                  </p>

                  <div className="space-y-3">
                    <p className="text-lg font-medium">Siz olasiz:</p>
                    {businessBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="size-5 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20">
                    <p className="text-lg opacity-80 mb-4">Biz:</p>
                    <ul className="space-y-2 opacity-80">
                      <li>• mahsulotingizni majburlab sotmaymiz</li>
                      <li>• bachkana reklama qilmaymiz</li>
                      <li>• auditoriyani charchatmaymiz</li>
                    </ul>
                    <p className="mt-4 font-medium">
                      Biz brendingizni hayotiy voqea ichiga joylaymiz.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/10 border border-white/20">
                    <p className="text-lg font-medium mb-3">🎯 Bizga mos bizneslar:</p>
                    <ul className="space-y-1 opacity-80">
                      {targetBusinesses.map((business, index) => (
                        <li key={index}>• {business}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* For Government Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8">
                <Building2 className="size-16 mx-auto text-muted-foreground" />
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Davlat tashkilotlari uchun
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Biz davlat tashkilotlari bilan ishlashda ijtimoiy loyihalarni ommaga tushunarli yetkazamiz, targ'ibotni majburiy emas, ta'sirli qilamiz.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                    <p className="text-lg font-medium mb-4">Biz yordam beramiz:</p>
                    <ul className="space-y-2 text-muted-foreground text-left">
                      {governmentServices.map((service, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="size-4 text-primary" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                    <p className="text-lg font-medium mb-4">Natija:</p>
                    <ul className="space-y-2 text-muted-foreground text-left">
                      <li className="flex items-center gap-2">
                        <span className="text-primary">—</span>
                        <span>tomosha qilinadigan kontent</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">—</span>
                        <span>tushuniladigan xabar</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary">—</span>
                        <span>real ta'sir</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Bizning imkoniyatlarimiz
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                  {capabilities.map((capability, index) => (
                    <div key={capability.id} className="p-6 rounded-2xl bg-background border border-border text-left">
                      <p className="font-medium">{capability.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{capability.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Work Process Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Biz qanday ishlaymiz?
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                  {workSteps.map((step, index) => (
                    <div key={step.number} className="flex items-center gap-3 px-6 py-4 rounded-full bg-muted/50 border border-border">
                      <span className="flex items-center justify-center size-8 rounded-full bg-foreground text-background font-bold text-sm">
                        {step.number}
                      </span>
                      <span className="font-medium">{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Principle Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-foreground text-background">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">
                Bizning tamoyilimiz
              </h2>
              <div className="space-y-2 text-2xl md:text-4xl font-light">
                <p>Reklama o'tadi.</p>
                <p>Ishonch qoladi.</p>
                <p className="text-3xl md:text-5xl font-medium mt-4">Qadr esa doimiy.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                Loyihalarimiz
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Eng so'nggi ishlarimizdan namunalar
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>Barcha loyihalarni ko'rish</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
                Hamkorlikka tayyormisiz?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Agar brendingizni ishonchli ko'rsatmoqchi bo'lsangiz, reklama emas, obro' xohlasangiz, 
                odamlar yuragiga kiradigan kontent izlayotgan bo'lsangiz — <strong className="text-foreground">{photographerInfo.name} {photographerInfo.tagline}</strong> Siz uchun.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium tracking-wide rounded-full hover:opacity-90 transition-opacity"
              >
                <span>Bog'lanish</span>
                <ArrowRight className="size-5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}