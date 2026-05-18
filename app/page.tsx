import Image from "next/image";
import Script from "next/script";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Star
} from "lucide-react";
import { AdmissionForm } from "@/components/AdmissionForm";
import { Header } from "@/components/Header";
import {
  AdmissionPopup,
  DynamicCounters
} from "@/components/PremiumInteractions";
import { SectionReveal } from "@/components/SectionReveal";
import {
  academics,
  contactHighlights,
  facilities,
  reasons,
  school,
  seoKeywords,
  testimonials
} from "@/data/school";

const encodedMapQuery = encodeURIComponent(school.mapQuery);
const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedMapQuery}`;
const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.287372399105!2d77.30000357449843!3d28.740835779156114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf958e4d4d391%3A0xa922705e89c5041f!2sTRIVENI%20TRIRATAN%20PUBLIC%20JR.%20HIGH%20SCHOOL!5e0!3m2!1sen!2sin!4v1778479154375!5m2!1sen!2sin";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: school.name,
  description:
    "Triveni Triratan Public Jr. High School is a public junior high school in Loni, Ghaziabad offering quality education, discipline, safety, value-based learning, and admission support for session 2026-27.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prakash Vihar, Main 25 Feet Road, Loni",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201102",
    addressCountry: "IN"
  },
  telephone: [`+91${school.phone}`, `+91${school.secondaryPhone}`],
  areaServed: ["Loni", "Ghaziabad", "Prakash Vihar", "Uttar Pradesh"],
  keywords: seoKeywords.join(", "),
  priceRange: "Affordable",
  openingHours: "Mo-Sa 08:00-14:30",
  makesOffer: {
    "@type": "Offer",
    name: "Admission Open for Session 2026-27",
    availability: "https://schema.org/InStock"
  }
};

function PrimaryCtas({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href="#admissions"
        className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-extrabold shadow-soft transition hover:-translate-y-0.5 ${
          light
            ? "bg-white text-navy hover:bg-skysoft"
            : "bg-navy text-white hover:bg-[#072f49]"
        }`}
      >
        Apply for Admission
        <ArrowRight size={18} aria-hidden="true" />
      </a>
      <a
        href={`tel:+91${school.phone}`}
        className={`inline-flex h-12 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-extrabold transition hover:-translate-y-0.5 ${
          light
            ? "border-white/40 bg-white/12 text-white hover:bg-white/18"
            : "border-navy/20 bg-white text-navy hover:bg-skysoft"
        }`}
      >
        <Phone size={18} aria-hidden="true" />
        Call Now
      </a>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <SectionReveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-black uppercase text-cyan">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base font-semibold leading-8 text-slate-600">
          {text}
        </p>
      ) : null}
    </SectionReveal>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Script
        id="school-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="top">
        <section className="relative min-h-[96svh] overflow-hidden bg-navy pt-16 text-white">
          <Image
            src="/images/triveni-hero.png"
            alt="Teacher walking with students at Triveni Triratan Public Jr. High School in Loni"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute bottom-24 right-6 z-10 hidden rounded-lg border border-white/25 bg-white/14 px-4 py-3 shadow-soft backdrop-blur-xl lg:block">
            <p className="text-xs font-black uppercase text-white/70">Admission Open</p>
            <p className="text-xl font-black">Session 2026-27</p>
          </div>
          <div className="container-x relative z-10 flex min-h-[calc(96svh-4rem)] items-center py-14">
            <SectionReveal className="max-w-4xl">
              <div className="mb-6 inline-flex animate-float items-center gap-2 rounded-full border border-white/25 bg-white/14 px-3 py-2 text-xs font-extrabold uppercase text-white backdrop-blur-md">
                <ShieldCheck size={15} aria-hidden="true" />
                Public Junior High School in Loni
              </div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
                {school.shortName}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-6xl">
                Best School in Loni for Quality Education & Bright Future
              </h1>
              <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-white/88 sm:text-xl">
                Triveni Triratan Public Jr. High School provides disciplined,
                value-based and modern education for every child.
              </p>
              <div className="mt-8">
                <PrimaryCtas light />
              </div>
              <div className="mt-8 max-w-3xl">
                <DynamicCounters />
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-white py-6">
          <div className="container-x grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase text-cyan">
                Trusted education in Loni, Ghaziabad
              </p>
              <h2 className="mt-2 text-2xl font-black text-ink sm:text-3xl">
                Admissions open for parents looking for the best school nearby.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {seoKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-skysoft px-3 py-2 text-xs font-extrabold text-navy"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-padding bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionReveal>
              <div className="relative overflow-hidden rounded-lg shadow-lift">
                <Image
                  src="/images/triveni-classroom.png"
                  alt="Clean classroom and teacher guidance at Triveni Triratan Public Jr. High School"
                  width={1536}
                  height={864}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <p className="text-sm font-black uppercase text-cyan">About School</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                A parent-friendly school focused on discipline, safety, and strong foundations.
              </h2>
              <p className="mt-5 text-base font-semibold leading-8 text-slate-600">
                {school.name} serves families in Prakash Vihar, Loni, and
                Ghaziabad with quality junior high school education, regular
                academic attention, moral values, clean classrooms, and a
                disciplined environment where every child is encouraged to grow.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Public Junior High School",
                  "Principal: Sh. Ravinder Kumar",
                  "Prakash Vihar, Loni",
                  "Admission Open 2026-27"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 font-extrabold text-navy">
                    <CheckCircle2 size={18} aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <section id="admissions" className="section-padding bg-navy text-white">
          <div className="container-x grid gap-8 lg:grid-cols-[1fr_430px] lg:items-center">
            <SectionReveal>
              <p className="text-sm font-black uppercase text-teal">Admission Open for Session 2026-27</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                Give your child the right start with quality education, discipline, and personal attention.
              </h2>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/82">
                Triveni Triratan Public Jr. High School is now welcoming
                admission inquiries for session 2026-27. Call now:
                <strong className="text-white"> {school.displayPhone}</strong>.
              </p>
              <div className="mt-8">
                <PrimaryCtas light />
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Fast response", "Campus guidance", "Parent support"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-4">
                    <CheckCircle2 className="h-5 w-5 text-teal" aria-hidden="true" />
                    <span className="mt-2 block text-sm font-black">{item}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08} className="rounded-lg bg-white p-5 text-ink shadow-lift">
              <h3 className="text-2xl font-black text-navy">Admission Inquiry</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Fill the form and send parent details directly on WhatsApp.
              </p>
              <div className="mt-5">
                <AdmissionForm />
              </div>
            </SectionReveal>
          </div>
        </section>

        <section id="facilities" className="section-padding bg-[#F8FAFC]">
          <div className="container-x">
            <SectionHeading
              eyebrow="Facilities"
              title="Clean, safe, and supportive facilities for everyday student growth."
              text="The school environment is designed for learning, discipline, regular practice, parent communication, and strong student development."
              centered
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {facilities.map((facility, index) => (
                <SectionReveal
                  key={facility.title}
                  delay={index * 0.025}
                  className="group rounded-lg border border-slate-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white transition group-hover:bg-teal">
                    <facility.icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-black text-ink">{facility.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                    {facility.text}
                  </p>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="academics" className="section-padding bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <SectionReveal>
              <p className="text-sm font-black uppercase text-cyan">Academics</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                A balanced academic program for strong basics and confident learning.
              </h2>
              <p className="mt-5 text-base font-semibold leading-8 text-slate-600">
                Students receive clear classroom teaching, regular practice,
                unit tests, parent updates, and value-based guidance so they
                grow academically and personally.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {academics.map((item, index) => (
                  <SectionReveal key={item.title} delay={index * 0.04} className="rounded-lg bg-skysoft p-5">
                    <item.icon className="h-6 w-6 text-cyan" aria-hidden="true" />
                    <h3 className="mt-3 font-black text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </SectionReveal>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <div className="relative overflow-hidden rounded-lg shadow-lift">
                <Image
                  src="/images/triveni-lab.png"
                  alt="Activity based learning and student development in Loni school"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="section-padding bg-[#F8FAFC]">
          <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionReveal>
              <p className="text-sm font-black uppercase text-cyan">Student Achievement</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                Our Toppers, Our Pride.
              </h2>
              <p className="mt-5 text-base font-semibold leading-8 text-slate-600">
                Triveni Triratan Public Jr. High School celebrates hard work,
                discipline, and consistent academic progress. These achievements
                inspire every child to focus, work hard, and move confidently
                toward a brighter future.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["Focus on your goal", "Work hard in silence", "Success will make the noise"].map((item) => (
                  <div key={item} className="rounded-lg bg-white p-4 text-sm font-black text-navy shadow-soft">
                    {item}
                  </div>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <div className="overflow-hidden rounded-lg bg-white p-3 shadow-lift">
                <Image
                  src="/images/triveni-toppers.jpeg"
                  alt="Triveni Public School toppers board exam achievement poster"
                  width={1054}
                  height={1504}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="max-h-[760px] w-full rounded-md object-contain"
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        <section id="why-us" className="section-padding bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why families choose Triveni Triratan Public Jr. High School."
              text="A complete school experience built around academic excellence, discipline, values, parent trust, and affordability."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, index) => (
                <SectionReveal
                  key={reason.title}
                  delay={index * 0.04}
                  className="rounded-lg border border-slate-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                    <reason.icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-ink">{reason.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">
                    {reason.text}
                  </p>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-mist">
          <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionReveal>
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-lg bg-white p-3 shadow-lift lg:mx-0">
                <Image
                  src="/images/founder-h-lal-advocate.jpeg"
                  alt="Founder Lt. Sh. H. Lal Advocate"
                  width={1200}
                  height={1600}
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="aspect-[3/4] w-full rounded-md object-cover object-top"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <p className="text-sm font-black uppercase text-cyan">Founder</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                Lt. Sh. H. Lal Advocate
              </h2>
              <p className="mt-5 text-base font-semibold leading-8 text-slate-600">
                The foundation of Triveni Triratan Public Jr. High School is
                inspired by a vision of knowledge, discipline, and service to
                society. His ideals continue to guide the school&apos;s commitment
                to value-based education and a strong future for every child.
              </p>
              <div className="mt-7 rounded-lg border border-navy/10 bg-white p-5 shadow-soft">
                <BookOpenCheck className="h-7 w-7 text-cyan" aria-hidden="true" />
                <p className="mt-3 text-lg font-black text-navy">Knowledge is Power</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  A legacy of learning, character, and opportunity for children
                  in Loni and Ghaziabad.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="section-padding bg-navy text-white">
          <div className="container-x grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionReveal>
              <p className="text-sm font-black uppercase text-teal">Principal Message</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                “Education must build knowledge, discipline, values, and confidence.”
              </h2>
              <p className="mt-5 text-base font-semibold leading-8 text-white/80">
                At Triveni Triratan Public Jr. High School, our mission is to
                give every child personal attention, regular guidance, and a
                respectful learning environment. We work with parents to build
                strong foundations for a bright future.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.08} className="overflow-hidden rounded-lg border border-white/15 bg-white/10 shadow-soft">
              <div className="relative flex min-h-[32rem] items-center justify-center bg-white p-3 sm:min-h-[38rem] lg:min-h-[42rem]">
                <Image
                  src="/images/principal-ravinder-kumar-office.jpeg"
                  alt="Principal Sh. Ravinder Kumar"
                  width={970}
                  height={1292}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="max-h-[42rem] w-full rounded-md object-contain"
                />
              </div>
              <div className="p-6">
              <h3 className="text-2xl font-black">Sh. Ravinder Kumar</h3>
              <p className="mt-2 text-sm font-bold uppercase text-white/65">Principal</p>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/76">
                We welcome parents to visit the school, meet the team, and
                understand how our academic and value-based approach can support
                their child's development.
              </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="section-padding bg-mist">
          <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <SectionReveal>
              <p className="text-sm font-black uppercase text-cyan">School In-Charge</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Mr. Jitender Vishwakarma
              </h2>
              <p className="mt-2 text-sm font-black uppercase text-navy/70">
                Office of the In-Charge
              </p>
              <p className="mt-5 text-sm font-semibold leading-7 text-slate-600 sm:text-base sm:leading-8">
                The school in-charge supports daily administration, parent
                communication, discipline, office coordination, and smooth
                guidance for admission-related inquiries.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Office Hours: 8:00 AM to 1:00 PM", "Parent Support & Coordination"].map((item) => (
                  <div key={item} className="rounded-lg bg-white p-4 text-sm font-black text-navy shadow-soft">
                    {item}
                  </div>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.08} className="min-w-0">
              <div className="overflow-hidden rounded-lg bg-white p-3 shadow-lift">
                <Image
                  src="/images/school-incharge-jitender-vishwakarma.jpeg"
                  alt="School In-Charge Mr. Jitender Vishwakarma"
                  width={960}
                  height={1024}
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="max-h-[38rem] w-full rounded-md object-contain"
                />
              </div>
            </SectionReveal>
          </div>
        </section>

        <section id="reviews" className="section-padding bg-white">
          <div className="container-x">
            <SectionHeading
              eyebrow="Reviews"
              title="Trusted by parents looking for a reliable school in Loni."
              centered
            />
            <div className="mt-8 flex justify-center">
              <div className="rounded-lg border border-slate-100 bg-white px-5 py-4 shadow-soft">
                <div className="flex items-center gap-2 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={20} className="fill-gold" aria-hidden="true" />
                  ))}
                  <span className="ml-2 text-lg font-black text-navy">Parent recommended</span>
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <SectionReveal key={testimonial.name} delay={index * 0.08} className="rounded-lg bg-skysoft p-6 shadow-soft">
                  <Quote className="h-7 w-7 text-cyan" aria-hidden="true" />
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-700">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-5 border-t border-white pt-4">
                    <strong className="block font-black text-ink">{testimonial.name}</strong>
                    <span className="text-sm font-bold text-slate-500">{testimonial.role}</span>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding bg-[#F8FAFC]">
          <div className="container-x">
            <SectionHeading
              eyebrow="Contact Us"
              title="Call, visit, or send an admission inquiry today."
              text="Parents can call the school, submit the inquiry form, or open the Google Map for directions to Prakash Vihar, Main 25 Feet Road, Loni."
              centered
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {contactHighlights.map((item, index) => (
                <SectionReveal key={item.label} delay={index * 0.06} className="rounded-lg bg-white p-5 shadow-soft">
                  <item.icon className="h-6 w-6 text-cyan" aria-hidden="true" />
                  <p className="mt-3 text-sm font-black uppercase text-navy">{item.label}</p>
                  <p className="mt-2 text-base font-bold leading-7 text-ink">{item.value}</p>
                </SectionReveal>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionReveal className="rounded-lg border border-slate-100 bg-white p-5 shadow-lift">
                <h3 className="text-2xl font-black text-navy">{school.name}</h3>
                <div className="mt-5 space-y-4 text-sm font-bold leading-7 text-slate-700">
                  <p className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
                    <span>{school.address}</span>
                  </p>
                  <p className="flex gap-3">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
                    <span>{school.displayPhone}</span>
                  </p>
                  <p className="flex gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
                    <span>{school.type}</span>
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={mapSearchUrl} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg bg-navy px-5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5">
                    Open Google Maps
                  </a>
                  <a href={school.whatsapp} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-teal px-5 text-sm font-extrabold text-white shadow-soft transition hover:-translate-y-0.5">
                    <MessageCircle size={18} aria-hidden="true" />
                    WhatsApp Inquiry
                  </a>
                </div>
                <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
                  <iframe
                    title="Google Map location for Triveni Triratan Public Jr. High School Loni"
                    src={mapEmbedUrl}
                    className="h-[420px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={mapSearchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-black text-navy underline decoration-cyan/50 underline-offset-4"
                >
                  View school location on Google Maps
                </a>
              </SectionReveal>
              <SectionReveal delay={0.08} className="rounded-lg border border-slate-100 bg-white p-5 shadow-lift">
                <h3 className="text-2xl font-black text-navy">Contact Form</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  Parent Name, Student Name, Class, Phone Number, and Message.
                </p>
                <div className="mt-5">
                  <AdmissionForm />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container-x grid gap-4 rounded-lg bg-navy p-6 text-white shadow-lift md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-black">Admission Open for Session 2026-27</h2>
              <p className="mt-2 text-sm font-semibold text-white/72">
                Call now to speak with the school team: {school.displayPhone}
              </p>
            </div>
            <a href={`tel:+91${school.phone}`} className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-black text-navy">
              Call Admission Office
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#061F32] pb-24 pt-12 text-white md:pb-12">
        <div className="container-x grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-black">{school.name}</h2>
            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-white/72">
              Triveni Triratan Public Jr. High School is one of the best
              schools in Loni, Ghaziabad, offering quality education,
              discipline, and a strong foundation for students.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-teal">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-sm font-extrabold text-white/78">
              <a href="#about" className="transition hover:text-white">About School</a>
              <a href="#admissions" className="transition hover:text-white">Admissions</a>
              <a href="#facilities" className="transition hover:text-white">Facilities</a>
              <a href="#contact" className="transition hover:text-white">Contact Us</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase text-teal">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm font-bold leading-6 text-white/78">
              <a href={`tel:+91${school.phone}`} className="hover:text-white">
                {school.displayPhone}
              </a>
              <span>{school.address}</span>
              <span>{school.openingHours}</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={`tel:+91${school.phone}`}
        className="fixed bottom-5 left-4 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-lift transition hover:scale-105 md:flex"
        aria-label="Call school admission office"
      >
        <Phone size={23} aria-hidden="true" />
      </a>

      <a
        href={school.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp school admission office"
      >
        💬
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/20 bg-white/96 p-3 shadow-lift backdrop-blur md:hidden">
        <a href={`tel:+91${school.phone}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-navy text-sm font-extrabold text-white">
          <Phone size={18} aria-hidden="true" />
          Call Now
        </a>
        <a href={school.whatsapp} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#128C7E] text-sm font-extrabold text-white">
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <AdmissionPopup />
    </>
  );
}
