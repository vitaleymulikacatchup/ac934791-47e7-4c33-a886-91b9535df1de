"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Award, Heart, HelpCircle, Instagram, Facebook, Twitter, Youtube, MapPin, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="smallSizeLargeTitles"
      background="animatedAurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered 
          navItems={[
            {name: "Home", id: "hero"},
            {name: "Destinations", id: "destinations"},
            {name: "Experiences", id: "experiences"},
            {name: "About", id: "about"},
            {name: "FAQ", id: "faq"}
          ]}
          button={{text: "Book Adventure", href: "contact"}}
          brandName="FAFO"
          logoAlt="F*ck Around and Find Out Travel Agency"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard 
          logoText="F*ck Around and Find Out"
          description="Escape the ordinary, embrace the unexpected, and discover Hawaii's hidden magic through unplanned exploration."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071500610-bci3nm5b.jpg"
          imageAlt="Tropical Hawaiian sunset over crystal blue ocean"
          frameStyle="card"
          ariaLabel="Hero section featuring F*ck Around and Find Out travel agency"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout 
          tag="Our Mission"
          description="We believe the best travel stories come from saying yes to the unexpected. FAFO connects adventurous souls with authentic Hawaiian experiences, guiding you through island culture, pristine beaches, and unforgettable moments that money can't plan."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="destinations" data-section="destinations">
        <FeatureCardOne 
          title="Hawaiian Islands"
          description="Explore each island's unique personality and hidden gems"
          tag="Destinations"
          tagIcon={MapPin}
          features={[
            {
              title: "Oahu",
              description: "Urban energy meets pristine beaches. Discover Honolulu's vibrant culture, world-class surfing, and Diamond Head views.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071501605-ddkkjjb7.jpg",
              imageAlt: "Oahu's stunning coastal landscape",
              button: {text: "Explore Oahu", href: "#contact"}
            },
            {
              title: "Maui",
              description: "Romance and adventure intertwine. From Haleakala's volcanic majesty to Napali Coast's dramatic cliffs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071502834-fhtd1uhl.jpg",
              imageAlt: "Maui's scenic mountain and coastal views",
              button: {text: "Explore Maui", href: "#contact"}
            },
            {
              title: "Big Island",
              description: "Where creation and power collide. Active volcanoes, lush valleys, and where lava meets the ocean.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071504018-9i5cf1ap.jpg",
              imageAlt: "Big Island's volcanic landscape",
              button: {text: "Explore Big Island", href: "#contact"}
            },
            {
              title: "Kauai",
              description: "The garden island untamed. Jungle hikes, hidden waterfalls, and dramatic Na Pali cliffs await discovery.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071505009-zthr1xes.jpg",
              imageAlt: "Kauai's lush tropical landscape",
              button: {text: "Explore Kauai", href: "#contact"}
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="experiences" data-section="experiences">
        <FeatureCardOne 
          title="Adventure Experiences"
          description="Curated activities that define spontaneous Hawaiian travel"
          tag="Activities"
          tagIcon={Zap}
          features={[
            {
              title: "Surfing & Water Sports",
              description: "Catch waves at legendary breaks or learn on gentle shores. From beginner-friendly beaches to pro-level barrels.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071506136-zmiwpzos.jpg",
              imageAlt: "Surfer riding waves in Hawaii",
              button: {text: "Book Surf Trip", href: "#contact"}
            },
            {
              title: "Coral Reef Snorkeling",
              description: "Swim among tropical fish, sea turtles, and vibrant coral gardens. Underwater paradise at your fingertips.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071507072-kta3tek7.jpg",
              imageAlt: "Colorful coral reef with tropical fish",
              button: {text: "Book Snorkeling", href: "#contact"}
            },
            {
              title: "Mountain Hiking",
              description: "Trek through rainforests to waterfalls and summit volcanic peaks. Breathtaking views reward your adventure.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071507982-jznnxa0j.jpg",
              imageAlt: "Hiker on Hawaii mountain trail",
              button: {text: "Book Hiking Tour", href: "#contact"}
            },
            {
              title: "Traditional Luau",
              description: "Immerse in Hawaiian culture with traditional food, music, and storytelling under the stars.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071508837-50cj9joa.jpg",
              imageAlt: "Traditional Hawaiian luau celebration",
              button: {text: "Book Luau", href: "#contact"}
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne 
          title="Trusted by Hawaii's Premier Partners"
          description="Leading tourism boards and travel companies choose FAFO for authentic island experiences"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070241577-4i5hzozz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071512988-suxfk6e1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070238891-b3ytgegy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070239867-m32ce6ny.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070240727-ey1b08wl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070243441-wd6y50dq.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070242588-fyrilgig.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766070244334-zqa7vorp.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne 
          title="Stories from Our Adventurers"
          description="Real travelers share their unforgettable FAFO moments"
          tag="Testimonials"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Marketing Director",
              company: "San Francisco",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071509725-y5omq8ep.jpg",
              imageAlt: "Sarah Chen's portrait"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Software Engineer",
              company: "New York",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071510409-u63ylofl.jpg",
              imageAlt: "Marcus Johnson's portrait"
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Travel Blogger",
              company: "Miami",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071511063-rhue9j4s.jpg",
              imageAlt: "Elena Rodriguez's portrait"
            },
            {
              id: "4",
              name: "James Williams",
              role: "Photographer",
              company: "Los Angeles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766071511909-t1cizi7c.jpg",
              imageAlt: "James Williams's portrait"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase 
          title="Common Questions"
          description="Everything you need to know about booking your FAFO adventure"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What does FAFO stand for?",
              content: "FAFO stands for F*ck Around and Find Out - our philosophy of spontaneous, authentic travel exploration. We believe the best travel experiences come from saying yes to the unexpected and embracing island adventure without rigid itineraries."
            },
            {
              id: "2",
              title: "How do I book an adventure?",
              content: "Simply reach out to our team through the contact form or call us directly. We'll discuss your interests, budget, and available dates to curate the perfect spontaneous Hawaiian experience for you. No planning paralysis required."
            },
            {
              id: "3",
              title: "What's included in the packages?",
              content: "Our packages include accommodations, guided activities, local cuisine experiences, and insider access to hidden gems. The exact inclusions depend on which adventure you choose and your preferences."
            },
            {
              id: "4",
              title: "Is it safe to travel spontaneously in Hawaii?",
              content: "Absolutely! Hawaii is one of the safest travel destinations. Our experienced guides know the islands intimately and ensure all activities are conducted safely. We provide all necessary briefings and equipment."
            },
            {
              id: "5",
              title: "What's the best time to visit Hawaii?",
              content: "Hawaii is beautiful year-round. Summer (May-September) is warm and busy, while winter (November-March) brings cooler temps and great waves. We can help you choose based on your preferred activities."
            },
            {
              id: "6",
              title: "Can I customize my adventure?",
              content: "Customization is our specialty! Tell us your interests - whether surfing, hiking, cultural experiences, or relaxation - and we'll build your perfect spontaneous itinerary."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText 
          text="Ready to F*ck Around and Find Out? Let's start planning your spontaneous Hawaiian adventure today. Your island escape is just one click away."
          animationType="background-highlight"
          buttons={[
            {text: "Book Your Adventure", href: "contact"},
            {text: "Learn More", href: "about"}
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial 
          logoText="FAFO"
          description="Spontaneous Hawaiian adventures for the bold and adventurous. F*ck Around and Find Out - where every moment becomes a story."
          columns={[
            {
              title: "Explore",
              items: [
                {label: "Destinations", href: "destinations"},
                {label: "Experiences", href: "experiences"},
                {label: "About Us", href: "about"},
                {label: "FAQ", href: "faq"}
              ]
            },
            {
              title: "Company",
              items: [
                {label: "Blog", href: "#blog"},
                {label: "Contact", href: "contact"},
                {label: "Careers", href: "#careers"},
                {label: "Press", href: "#press"}
              ]
            },
            {
              title: "Legal",
              items: [
                {label: "Privacy Policy", href: "#privacy"},
                {label: "Terms of Service", href: "#terms"},
                {label: "Travel Insurance", href: "#insurance"},
                {label: "Safety Guidelines", href: "#safety"}
              ]
            }
          ]}
          socialLinks={[
            {icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram"},
            {icon: Facebook, href: "https://facebook.com", ariaLabel: "Follow us on Facebook"},
            {icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter"},
            {icon: Youtube, href: "https://youtube.com", ariaLabel: "Subscribe to our YouTube channel"}
          ]}
          copyrightText="© 2025 FAFO Travel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}