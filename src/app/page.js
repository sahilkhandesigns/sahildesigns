"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  SiGmail,
  SiFiverr,
} from "react-icons/si";


/* ================================================== */
/* ===================== FAQ ITEM =================== */
/* ================================================== */

function FAQItem({ question, answer, isOpen, onToggle }) {

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-orange-500/30 bg-orange-50/40"
          : "border-black/10 bg-[#fafafa] hover:border-black/20"
      }`}
    >

      {/* ================= QUESTION ================= */}

      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8 sm:py-7"
      >

        <span className="text-lg font-medium leading-7 text-black sm:text-xl">
          {question}
        </span>


        {/* Plus / Close */}

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-orange-500 bg-orange-500 text-white"
              : "border-black/20 bg-white text-black/60"
          }`}
        >

          <span className="text-xl font-light leading-none">
            +
          </span>

        </span>

      </button>


      {/* ================= ANSWER ================= */}

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden"
      >

        <div className="px-6 pb-8 pr-16 text-base leading-7 text-black/65 sm:px-8 sm:pb-9 sm:pr-20">
          {answer}
        </div>

      </motion.div>

    </div>
  );
}


/* ================================================== */
/* ===================== HOME ======================= */
/* ================================================== */

export default function Home() {

  /* ================================================== */
  /* ================= FAQ STATE ===================== */
  /* ================================================== */

  const [activeFaq, setActiveFaq] = React.useState(null);
  const [isOrderOpen, setIsOrderOpen] = useState(false);


  /* ================================================== */
  /* ================= THUMBNAILS ==================== */
  /* ================================================== */

  const leftThumbnails = [
    "/images/thumb-1.jpg",
    "/images/thumb-2.jpg",
    "/images/thumb-3.jpg",
  ];

  const rightThumbnails = [
    "/images/thumb-4.jpg",
    "/images/thumb-5.jpg",
    "/images/thumb-6.jpg",
  ];

  const thumbnails = Array.from(
    { length: 65 },
    (_, index) => `/images/thumb-${index + 1}.jpg`
  );


  /* ================================================== */
  /* ===================== FAQ DATA =================== */
  /* ================================================== */

  const faqs = [

    {
      question: "Can I get the PSD/source file?",
      answer:
        "Yes. The editable PSD/source file can be provided when requested. If you need the source file, just mention it before the project starts so it can be included in the delivery.",
    },

    {
      question: "How long does it take to deliver a thumbnail?",
      answer:
        "My standard turnaround time is within 48 hours. The exact delivery time can vary depending on the complexity of the thumbnail and the requirements of the project.",
    },

    {
      question: "How many revisions do I get?",
      answer:
        "Revisions are included as long as they stay within the original project scope. I work with your feedback to refine the concept, composition and details until the thumbnail is ready.",
    },

    {
      question: "Do you guarantee a higher CTR?",
      answer:
        "No one can honestly guarantee a specific CTR because performance also depends on the topic, title, audience and other factors. I focus on strong visual hierarchy, curiosity and click psychology to give every thumbnail the best possible chance to perform.",
    },

    {
      question: "What do I need to provide before you start?",
      answer:
        "Usually, I need your video topic or title along with your script, rough idea or any important references. If you already have brand guidelines, preferred colors or examples you like, you can share those as well.",
    },

    {
      question: "What happens if I don't like the first draft?",
      answer:
        "That's completely fine. Your feedback is part of the process. I'll review what isn't working and refine the design based on your feedback until we reach a direction you're happy with.",
    },

  ];


  return (

    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">


{/* ================================================== */}
{/* ===================== NAVBAR ===================== */}
{/* ================================================== */}

<motion.nav
  initial={{
    opacity: 0,
    y: -25,
    scale: 0.96,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.7,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="fixed left-1/2 top-5 z-50 w-[calc(100%-24px)] max-w-max -translate-x-1/2"
>
  <div className="flex w-full items-center justify-center gap-0.5 rounded-full border border-white/10 bg-[#111111]/90 px-1.5 py-2 text-xs font-medium text-white shadow-2xl backdrop-blur-xl sm:gap-2 sm:px-3 sm:text-sm">

    {/* HOME */}

    <a
      href="#home"
      className="rounded-full px-2.5 py-2 text-white/80 transition-all duration-300 hover:bg-orange-500 hover:text-white"
    >
      Home
    </a>


    {/* WORK */}

    <a
      href="#work"
      className="rounded-full px-2.5 py-2 text-white/80 transition-all duration-300 hover:bg-orange-500 hover:text-white"
    >
      Work
    </a>


    {/* PRICING */}

    <a
      href="#pricing"
      className="rounded-full px-2.5 py-2 text-white/80 transition-all duration-300 hover:bg-orange-500 hover:text-white"
    >
      Pricing
    </a>


    {/* ABOUT */}

    <a
      href="#about"
      className="rounded-full px-2.5 py-2 text-white/80 transition-all duration-300 hover:bg-orange-500 hover:text-white"
    >
      About
    </a>


    {/* CONTACT */}

    <a
      href="#contact"
      className="rounded-full px-2.5 py-2 text-white/80 transition-all duration-300 hover:bg-orange-500 hover:text-white"
    >
      Contact
    </a>

  </div>
</motion.nav>


      {/* ================================================== */}
      {/* ====================== HOME ====================== */}
      {/* ================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >

        {/* Main Orange Background Glow */}

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[150px]" />


        {/* Small Center Glow */}

        <div className="absolute left-1/2 top-[55%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[100px]" />


{/* ================= LEFT ROPE ================= */}

<div className="absolute left-[9%] top-0 hidden h-full w-[220px] lg:block">

  {/* ================= REALISTIC ROPE ================= */}

  <svg
    className="absolute left-1/2 top-0 h-full w-[22px] -translate-x-1/2 overflow-visible"
    viewBox="0 0 22 900"
    preserveAspectRatio="none"
  >

    {/* Rope Shadow */}

    <motion.path
      d="M11 0 C8 140 14 260 10 390 C7 520 14 650 11 900"
      fill="none"
      stroke="rgba(0,0,0,0.45)"
      strokeWidth="11"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    />

    {/* Main Rope */}

    <motion.path
      d="M11 0 C8 140 14 260 10 390 C7 520 14 650 11 900"
      fill="none"
      stroke="#8f430c"
      strokeWidth="8"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    />

    {/* Rope Highlight */}

    <motion.path
      d="M9 0 C7 140 12 260 8 390 C6 520 12 650 9 900"
      fill="none"
      stroke="#d66a16"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.9 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    />

  </svg>


  {/* ================= THUMBNAILS ================= */}

  {leftThumbnails.map((image, index) => {

    const rotations = [-5, 4, -4];

    return (

      <motion.div
        key={image}
        initial={{
          opacity: 0,
          x: -120,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 16,
          mass: 0.7,
          delay: 0.35 + index * 0.14,
        }}
        className={`absolute left-1/2 w-[400px] -translate-x-1/2 ${
          index === 0
            ? "top-[5%]"
            : index === 1
              ? "top-[36%]"
              : "top-[67%]"
        }`}
      >

        {/* ================= THUMBNAIL ================= */}

        <motion.div
          animate={{
            rotate: [
              rotations[index],
              rotations[index] + (index % 2 === 0 ? 2.2 : -2.2),
              rotations[index] - (index % 2 === 0 ? 1.2 : -1.2),
              rotations[index],
            ],
            y: [0, -3, 2, 0],
          }}
          transition={{
            duration: 3.2 + index * 0.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: [0.45, 0, 0.55, 1],
            delay: 1.1 + index * 0.12,
          }}
          whileHover={{
            scale: 1.07,
            rotate: 0,
            y: -8,
            transition: {
              duration: 0.2,
              ease: "easeOut",
            },
          }}
          className="origin-top overflow-hidden rounded-md border border-white/15 bg-[#111111] p-1 shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
        >

          <Image
            src={image}
            alt={`Thumbnail ${index + 1}`}
            width={205}
            height={125}
            className="h-auto w-full object-cover"
          />

        </motion.div>

      </motion.div>

    );

  })}

</div>


{/* ================= RIGHT ROPE ================= */}

<div className="absolute right-[9%] top-0 hidden h-full w-[220px] lg:block">

  {/* ================= REALISTIC ROPE ================= */}

  <svg
    className="absolute left-1/2 top-0 h-full w-[22px] -translate-x-1/2 overflow-visible"
    viewBox="0 0 22 900"
    preserveAspectRatio="none"
  >

    {/* Rope Shadow */}

    <motion.path
      d="M11 0 C14 140 8 260 12 390 C15 520 8 650 11 900"
      fill="none"
      stroke="rgba(0,0,0,0.45)"
      strokeWidth="11"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
      }}
    />

    {/* Main Rope */}

    <motion.path
      d="M11 0 C14 140 8 260 12 390 C15 520 8 650 11 900"
      fill="none"
      stroke="#8f430c"
      strokeWidth="8"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
      }}
    />

    {/* Rope Highlight */}

    <motion.path
      d="M13 0 C15 140 10 260 14 390 C16 520 10 650 13 900"
      fill="none"
      stroke="#d66a16"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.9 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
      }}
    />

  </svg>


  {/* ================= THUMBNAILS ================= */}

  {rightThumbnails.map((image, index) => {

    const rotations = [5, -4, 4];

    return (

      <motion.div
        key={image}
        initial={{
          opacity: 0,
          x: 120,
          scale: 0.75,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 16,
          mass: 0.7,
          delay: 0.45 + index * 0.14,
        }}
        className={`absolute left-1/2 w-[400px] -translate-x-1/2 ${
          index === 0
            ? "top-[5%]"
            : index === 1
              ? "top-[36%]"
              : "top-[67%]"
        }`}
      >

        {/* ================= THUMBNAIL ================= */}

        <motion.div
          animate={{
            rotate: [
              rotations[index],
              rotations[index] - (index % 2 === 0 ? 2.2 : -2.2),
              rotations[index] + (index % 2 === 0 ? 1.2 : -1.2),
              rotations[index],
            ],
            y: [0, -3, 2, 0],
          }}
          transition={{
            duration: 3.2 + index * 0.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: [0.45, 0, 0.55, 1],
            delay: 1.25 + index * 0.12,
          }}
          whileHover={{
            scale: 1.07,
            rotate: 0,
            y: -8,
            transition: {
              duration: 0.2,
              ease: "easeOut",
            },
          }}
          className="origin-top overflow-hidden rounded-md border border-white/15 bg-[#111111] p-1 shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
        >

          <Image
            src={image}
            alt={`Thumbnail ${index + 4}`}
            width={205}
            height={125}
            className="h-auto w-full object-cover"
          />

        </motion.div>

      </motion.div>

    );

  })}

</div>


{/* ================= CENTER CONTENT ================= */}

<div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-24 text-center">

{/* ================= HERO HEADING ================= */}

<motion.h1
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  }}
  className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl"
>

  {/* Thumbnail */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block"
  >
    Thumbnail
  </motion.span>

  {" "}

  {/* Strategy */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block"
  >
    Strategy
  </motion.span>

  <br />

  {/* that */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block text-white"
  >
    that
  </motion.span>

  {" "}

  {/* works */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 bg-clip-text text-transparent"
  >
    works.
  </motion.span>

</motion.h1>


  {/* ================= CTA ================= */}

  <motion.div
    initial={{
      opacity: 0,
      y: 25,
      scale: 0.95,
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 0.6,
      delay: 0.35,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="mt-8 flex items-center gap-4"
  >

    {/* View My Work */}

    <motion.a
      href="#work"
      whileHover={{
        scale: 1.07,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(249,115,22,0.25)] transition-colors duration-300 hover:bg-orange-400"
    >
      View My Work
    </motion.a>


    {/* Let's Work Together */}

    <motion.a
      href="#contact"
      whileHover={{
        scale: 1.07,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-orange-500/50 hover:bg-orange-500/10"
    >
      Let's Work Together
    </motion.a>

  </motion.div>


  {/* ================= CENTER IMAGE ================= */}

  <motion.div
    initial={{
      opacity: 0,
      y: 80,
      scale: 0.82,
    }}
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 1,
      delay: 0.55,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative -mt-2 w-[320px] sm:w-[380px] md:w-[460px] lg:w-[500px]"
  >

    {/* ================= ORANGE GLOW ================= */}

    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.18, 0.28, 0.18],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="absolute inset-0 rounded-full bg-orange-500/20 blur-[80px]"
    />


    {/* ================= MAIN IMAGE ================= */}

    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 1.5,
      }}
      className="relative z-10"
    >

      <Image
        src="/images/main-image.png"
        alt="SahilDesign thumbnail designer"
        width={500}
        height={500}
        priority
        className="h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]"
      />

    </motion.div>

  </motion.div>

</div>


        {/* Bottom Fade */}

        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#080808] to-transparent" />

      </section>


      {/* ================================================== */}
{/* ====================== ABOUT ===================== */}
{/* ================================================== */}

<section
  id="about"
  className="relative min-h-screen overflow-hidden bg-white px-6 py-32 text-black sm:px-10 lg:px-20"
>

  <div className="mx-auto max-w-7xl">

    <div className="grid items-center gap-16 lg:grid-cols-2">


      {/* ================================================== */}
      {/* ================= LEFT PHOTO ===================== */}
      {/* ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -80,
          scale: 0.92,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex justify-center lg:justify-start"
      >

        {/* Orange Glow */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="absolute left-[5%] top-[10%] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl"
        />


        {/* Photo */}

        <motion.div
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className="relative w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#f5f5f5] shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
        >

          <Image
            src="/images/sahil-about.png"
            alt="Sahil - Thumbnail Designer"
            width={600}
            height={750}
            className="relative z-10 h-auto w-full object-cover"
          />

        </motion.div>

      </motion.div>



      {/* ================================================== */}
      {/* ================= RIGHT TEXT ===================== */}
      {/* ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >


        {/* ================= ABOUT HEADING ================= */}

<motion.h2
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.3,
  }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
  className="max-w-2xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
>

  {/* I'm */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block"
  >
    I'm
  </motion.span>

  {" "}

  {/* Sahil */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block"
  >
    Sahil,
  </motion.span>


  <br />


  {/* a */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block text-orange-500"
  >
    a
  </motion.span>

  {" "}


  {/* thumbnail */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block text-orange-500"
  >
    thumbnail
  </motion.span>

  {" "}


  {/* designer */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block text-orange-500"
  >
    designer
  </motion.span>


  <br />


  {/* & */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block"
  >
    &
  </motion.span>

  {" "}


  {/* visual */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block"
  >
    visual
  </motion.span>

  {" "}


  {/* storyteller */}

  <motion.span
    variants={{
      hidden: {
        opacity: 0,
        y: 35,
        filter: "blur(10px)",
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }}
    className="inline-block"
  >
    storyteller.
  </motion.span>

</motion.h2>



        {/* ================= DESCRIPTION ================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 max-w-xl text-lg leading-8 text-black/60"
        >

          I create thumbnails that combine strategy, visual
          storytelling and curiosity - designed to grab attention
          and turn that attention into clicks.

        </motion.p>



        {/* ================================================== */}
        {/* ================= STATS ========================= */}
        {/* ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-14"
        >

          {/* Orange Background */}

          <div className="absolute inset-0 rounded-[1.5rem] bg-[#E85D04] shadow-[0_15px_40px_rgba(232,93,4,0.18)]" />


          {/* Stats Content */}

          <div className="relative z-10 grid grid-cols-3">


            {/* ================= STAT 1 ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.75,
              }}
              className="flex flex-col items-center justify-center px-3 py-7 text-center"
            >

              <p className="text-3xl font-semibold text-white sm:text-4xl">
                4+
              </p>

              <p className="mt-2 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-white/90">
                Years
              </p>

            </motion.div>



            {/* ================= STAT 2 ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="flex flex-col items-center justify-center border-l border-white/25 px-3 py-7 text-center"
            >

              <p className="text-3xl font-semibold text-white sm:text-4xl">
                500+
              </p>

              <p className="mt-2 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-white/90">
                Thumbnails
              </p>

            </motion.div>



            {/* ================= STAT 3 ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 1.05,
              }}
              className="flex flex-col items-center justify-center border-l border-white/25 px-3 py-7 text-center"
            >

              <p className="text-3xl font-semibold text-white sm:text-4xl">
                30+
              </p>

              <p className="mt-2 whitespace-nowrap text-sm font-medium uppercase tracking-[0.12em] text-white/90">
                Creator Clients
              </p>

            </motion.div>


          </div>

        </motion.div>


      </motion.div>

    </div>

  </div>

</section>

      {/* ================================================== */}
      {/* ======================= WORK ===================== */}
      {/* ================================================== */}

      <section
        id="work"
        className="relative min-h-screen overflow-hidden bg-[#080808] py-24"
      >

        <div className="relative mt-12 overflow-hidden">

          {/* Left Fade */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#080808] to-transparent" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#080808] to-transparent" />


          {/* ================= ROW 1 ================= */}

          <div className="marquee mb-3">

            <div className="marquee-track flex gap-2">

              {[
                ...thumbnails.slice(0, 22),
                ...thumbnails.slice(0, 22),
              ].map((image, index) => (

                <div
                  key={`row1-${index}`}
                  className="w-[280px] shrink-0 sm:w-[360px] lg:w-[420px]"
                >

                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={840}
                      height={473}
                      className="h-auto w-full object-cover"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* ================= ROW 2 ================= */}

          <div className="marquee mb-3">

            <div className="marquee-track flex gap-2 marquee-reverse">

              {[
                ...thumbnails.slice(22, 44),
                ...thumbnails.slice(22, 44),
              ].map((image, index) => (

                <div
                  key={`row2-${index}`}
                  className="w-[280px] shrink-0 sm:w-[360px] lg:w-[420px]"
                >

                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 23}`}
                      width={840}
                      height={473}
                      className="h-auto w-full object-cover"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* ================= ROW 3 ================= */}

          <div className="marquee">

            <div className="marquee-track flex gap-2">

              {[
                ...thumbnails.slice(44, 65),
                ...thumbnails.slice(44, 65),
              ].map((image, index) => (

                <div
                  key={`row3-${index}`}
                  className="w-[280px] shrink-0 sm:w-[360px] lg:w-[420px]"
                >

                  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 45}`}
                      width={840}
                      height={473}
                      className="h-auto w-full object-cover"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* ===================== PROCESS ==================== */}
      {/* ================================================== */}

      <section
        id="process"
        className="relative overflow-hidden bg-[#080808] px-6 py-15 text-white sm:px-10 lg:px-20"
      >

        {/* Background Glow */}

        <div className="pointer-events-none absolute left-1/2 top-[30%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/[0.04] blur-[140px]" />


        <div className="relative mx-auto max-w-7xl">


          {/* ===================== HEADER ===================== */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-orange-500">
              My Process
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">

              From idea

              <span className="text-white/35">
                {" "}to
              </span>{" "}

              <span className="text-orange-500">
                click-worthy.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              A simple process designed to turn your video idea
              into a thumbnail people can't ignore.
            </p>

          </motion.div>


          {/* ================= PROCESS TIMELINE ================= */}

          <div className="relative mt-24">

            {/* Background Timeline */}

            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />


            {/* Animated Timeline */}

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-0 hidden h-full w-px origin-top -translate-x-1/2 bg-gradient-to-b from-orange-500 via-orange-500/60 to-transparent lg:block"
            />


            {/* ================= STEP 01 ================= */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-24"
            >

              {/* Left Content */}

              <div className="lg:text-right">

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-500">
                  Step 01
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Understand
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                  You share the video topic, script, rough cut or
                  concept. I first understand what the video is
                  actually trying to communicate.
                </p>

              </div>


              {/* Center Number */}

              <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/50 bg-[#080808] text-sm font-semibold text-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                  01
                </div>

              </div>


              {/* Right Visual */}

              <div className="group relative">

                <div className="absolute -inset-4 rounded-[2rem] bg-orange-500/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] p-7 transition duration-500 group-hover:-translate-y-2 group-hover:border-orange-500/30">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                      💬
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        Project Brief
                      </p>

                      <p className="mt-1 font-medium text-white">
                        What are we trying to say?
                      </p>

                    </div>

                  </div>


                  <div className="mt-6 space-y-3">

                    <div className="h-2 w-[85%] rounded-full bg-white/10" />

                    <div className="h-2 w-[65%] rounded-full bg-white/10" />

                    <div className="h-2 w-[75%] rounded-full bg-orange-500/30" />

                  </div>

                </div>

              </div>

            </motion.div>


            {/* ================= STEP 02 ================= */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-24"
            >

              {/* Left Visual */}

              <div className="group relative order-2 lg:order-1">

                <div className="absolute -inset-4 rounded-[2rem] bg-orange-500/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] p-7 transition duration-500 group-hover:-translate-y-2 group-hover:border-orange-500/30">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        Research
                      </p>

                      <p className="mt-1 font-medium">
                        Finding the strongest angle
                      </p>

                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                      🔎
                    </div>

                  </div>


                  {/* 3 Thumbnail Sketches */}

                  <div className="mt-7 grid grid-cols-3 gap-3">

                    <div className="h-20 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">

                      <Image
                        src="/images/sketch-1.jpg"
                        alt="Thumbnail sketch 1"
                        width={300}
                        height={170}
                        className="h-full w-full object-cover"
                      />

                    </div>


                    <div className="h-20 overflow-hidden rounded-xl border border-orange-500/50 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.08)]">

                      <Image
                        src="/images/sketch-2.jpg"
                        alt="Thumbnail sketch 2"
                        width={300}
                        height={170}
                        className="h-full w-full object-cover"
                      />

                    </div>


                    <div className="h-20 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">

                      <Image
                        src="/images/sketch-3.jpg"
                        alt="Thumbnail sketch 3"
                        width={300}
                        height={170}
                        className="h-full w-full object-cover"
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* Center Number */}

              <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/50 bg-[#080808] text-sm font-semibold text-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                  02
                </div>

              </div>


              {/* Right Content */}

              <div className="order-1 lg:order-2">

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-500">
                  Step 02
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Strategize
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                  I research the topic, audience and competition
                  to find the strongest visual angle - the idea
                  that creates curiosity before the click.
                </p>

              </div>

            </motion.div>


            {/* ================= STEP 03 ================= */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-24"
            >

              {/* Left Content */}

              <div className="lg:text-right">

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-500">
                  Step 03
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Design
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                  Now the idea becomes a thumbnail. I build the
                  composition, choose the right imagery, typography,
                  colors and visual hierarchy.
                </p>

              </div>


              {/* Center Number */}

              <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/50 bg-[#080808] text-sm font-semibold text-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                  03
                </div>

              </div>


              {/* Right Visual */}

              <div className="group relative">

                <div className="absolute -inset-4 rounded-[2rem] bg-orange-500/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] p-5 transition duration-500 group-hover:-translate-y-2 group-hover:border-orange-500/30">

                  <div className="rounded-xl border border-white/10 bg-[#080808] p-3">

                    <div className="flex items-center gap-2 border-b border-white/10 pb-3">

                      <span className="h-2 w-2 rounded-full bg-orange-500" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />

                      <span className="ml-auto text-[10px] uppercase tracking-[0.12em] text-white/30">
                        DESIGNING...
                      </span>

                    </div>


                    {/* Final Thumbnail */}

                    <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-black">

                      <Image
                        src="/images/final-thumbnail.jpg"
                        alt="Final thumbnail design"
                        width={1280}
                        height={720}
                        className="h-auto w-full object-cover"
                      />

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* ================= STEP 04 ================= */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-24"
            >

              {/* Left Visual */}

              <div className="group relative order-2 lg:order-1">

                <div className="absolute -inset-4 rounded-[2rem] bg-orange-500/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111] p-7 transition duration-500 group-hover:-translate-y-2 group-hover:border-orange-500/30">

                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-xl text-green-400">
                      ✓
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        Final Review
                      </p>

                      <p className="mt-1 text-lg font-medium">
                        Ready to get clicked.
                      </p>

                    </div>

                  </div>


                  <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3,
                      }}
                      className="h-full rounded-full bg-orange-500"
                    />

                  </div>

                </div>

              </div>


              {/* Center Number */}

              <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/50 bg-[#080808] text-sm font-semibold text-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                  04
                </div>

              </div>


              {/* Right Content */}

              <div className="order-1 lg:order-2">

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-orange-500">
                  Step 04
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Refine
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base">
                  We review the design, make the necessary changes
                  and polish every detail until the thumbnail is
                  ready to perform.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* ===================== PRICING ==================== */}
      {/* ================================================== */}

      <section
        id="pricing"
        className="relative overflow-hidden bg-[#0b0b0b] px-6 pt-10 pb-32 sm:px-10 lg:px-20"
      >

        <div className="mx-auto max-w-7xl">

          


          <div className="mt-0 h-px w-full bg-white/10" />


          {/* ================= PRICING CARDS ================= */}

          <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">


            {/* ================= STARTER PLAN ================= */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >

              <div className="absolute -inset-3 rounded-[2rem] bg-orange-500/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] p-8 transition duration-500 group-hover:-translate-y-2 group-hover:border-orange-500/30">

                <h3 className="mt-10 text-3xl font-medium tracking-tight">
                  Starter Plan
                </h3>

                <p className="mt-4 min-h-[48px] text-sm leading-6 text-white/40">
                  Perfect when you need one strong thumbnail
                  designed to make your video stand out.
                </p>


                {/* Price */}

                <div className="mt-8 flex items-end gap-2">

                  <span className="text-5xl font-semibold tracking-tight">
                    $50
                  </span>

                  <span className="mb-2 text-sm text-white/35">
                    / thumbnail
                  </span>

                </div>


                <div className="my-8 h-px bg-white/10" />


                {/* Features */}

                <div className="space-y-4">

                  {[
                    "1 Thumbnail (designed from scratch)",
                    "Topic Research & Ideation",
                    "Unlimited revisions (within scope)",
                    "Optimized for YouTube CTR",
                    "48 hours delivery",
                  ].map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-xs text-orange-500">
                        ✓
                      </span>

                      <span className="text-sm text-white/65">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>


                {/* Button */}

                <button
  type="button"
  onClick={() => setIsOrderOpen(true)}
  className="mt-auto pt-10"
>
  <span className="flex w-full items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500 group-hover:text-white">

    Order Now

    <span className="text-lg transition duration-300 group-hover:translate-x-1">
      →
    </span>

  </span>
</button>

              </div>

            </motion.div>


            {/* ================= MONTHLY PACKAGE ================= */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="group relative"
            >

              <div className="absolute -inset-3 rounded-[2rem] bg-orange-500/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] p-8 transition duration-500 group-hover:-translate-y-2 group-hover:border-orange-500/30">

                <h3 className="mt-10 text-3xl font-medium tracking-tight">
                  Monthly Package
                </h3>

                <p className="mt-4 min-h-[48px] text-sm leading-6 text-white/40">
                  A consistent thumbnail workflow for creators
                  who publish regularly.
                </p>


                {/* Price */}

                <div className="mt-8 flex items-end gap-2">

                  <span className="text-5xl font-semibold tracking-tight">
                    Custom
                  </span>

                  <span className="mb-2 text-sm text-white/35">
                    / month
                  </span>

                </div>


                <div className="my-8 h-px bg-white/10" />


                {/* Features */}

                <div className="space-y-4">

                  {[
                    "Multiple thumbnails every month",
                    "Research + thumbnail strategy",
                    "Consistent creative direction",
                    "Priority delivery",
                    "Better per-thumbnail pricing",
                  ].map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-xs text-orange-500">
                        ✓
                      </span>

                      <span className="text-sm text-white/65">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>


                {/* Button */}

                <a
                  href="#contact"
                  className="mt-auto pt-10"
                >

                  <span className="flex w-full items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500 group-hover:text-white">

                    Let's Work Together

                    <span className="text-lg transition duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </span>

                </a>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================================================== */}
      {/* ======================= FAQ ====================== */}
      {/* ================================================== */}

      <section
        id="faq"
        className="relative overflow-hidden bg-white px-6 py-28 text-black sm:px-10 lg:px-20"
      >

        {/* ================= BACKGROUND GLOW ================= */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-[120px]" />

          <div className="absolute right-[10%] top-[10%] h-[180px] w-[180px] rounded-full bg-orange-500/[0.04] blur-[80px]" />

        </div>


        {/* ================= MAIN CONTAINER ================= */}

        <div className="relative mx-auto max-w-5xl">


          {/* ================= HEADER ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mb-14 text-center"
          >

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
              FAQ
            </p>


            <h2 className="mt-4 text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Let's clear things up.
            </h2>


            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/50 sm:text-lg">
              A few common questions before we start
              working together.
            </p>

          </motion.div>


          {/* ================= FAQ LIST ================= */}

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <motion.div
                key={faq.question}

                initial={{
                  opacity: 0,
                  y: 35,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >

                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeFaq === index}
                  onToggle={() => {
                    setActiveFaq(
                      activeFaq === index
                        ? null
                        : index
                    );
                  }}
                />

              </motion.div>

            ))}

          </div>


          {/* ================= BOTTOM CTA ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.3,
            }}

            transition={{
              duration: 0.6,
              delay: 0.3,
            }}

            className="mt-12 text-center"
          >

            <p className="text-sm text-black/40">
              Still have a question?
            </p>

            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-orange-500 transition hover:text-orange-600"
            >

              Let's talk

              <span className="transition-transform duration-300 hover:translate-x-1">
                →
              </span>

            </a>

          </motion.div>

        </div>

      </section>



{/* ================================================== */}
{/* ================= ORDER FORM ===================== */}
{/* ================================================== */}

{isOrderOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">

    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 text-black shadow-2xl sm:p-8"
    >

      {/* ================= CLOSE BUTTON ================= */}

      <button
        type="button"
        onClick={() => setIsOrderOpen(false)}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-xl text-black/60 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
      >
        ×
      </button>


      {/* ================= HEADER ================= */}

      <div className="pr-12">

        <p className="text-xs font-medium uppercase tracking-[0.25em] text-orange-500">
          Starter Plan
        </p>

        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
          Let's create your thumbnail.
        </h2>

        <p className="mt-3 text-base leading-7 text-black/55">
          Share a few details about your video so I can understand exactly
          what you need before starting the design.
        </p>

      </div>


      {/* ================= FORM ================= */}

      <form
        action="https://formsubmit.co/sahilkhan1925057@gmail.com"
        method="POST"
        className="mt-8 space-y-5"
      >

        {/* FormSubmit Settings */}

        <input
          type="hidden"
          name="_subject"
          value="New Starter Plan Thumbnail Order"
        />

        <input
          type="hidden"
          name="_captcha"
          value="false"
        />

        <input
          type="hidden"
          name="_template"
          value="table"
        />

        <input
  type="hidden"
  name="_next"
  value="https://www.paypal.com/ncp/payment/8E9ZDA39EAWXN"
/>

        {/* ================= NAME ================= */}

        <div>

          <label
            htmlFor="order-name"
            className="mb-2 block text-sm font-medium text-black"
          >
            Your Name
          </label>

          <input
            id="order-name"
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-base text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />

        </div>


        {/* ================= EMAIL ================= */}

        <div>

          <label
            htmlFor="order-email"
            className="mb-2 block text-sm font-medium text-black"
          >
            Email Address
          </label>

          <input
            id="order-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-base text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />

        </div>


        {/* ================= YOUTUBE ================= */}

        <div>

          <label
            htmlFor="order-youtube"
            className="mb-2 block text-sm font-medium text-black"
          >
            YouTube Channel Link
          </label>

          <input
            id="order-youtube"
            type="url"
            name="youtube"
            placeholder="https://youtube.com/@yourchannel"
            className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-base text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />

        </div>


        {/* ================= VIDEO TITLE ================= */}

        <div>

          <label
            htmlFor="video-title"
            className="mb-2 block text-sm font-medium text-black"
          >
            Video Title / Topic
          </label>

          <input
            id="video-title"
            type="text"
            name="video_title"
            required
            placeholder="What is the video about?"
            className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-base text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />

        </div>


        {/* ================= INSTRUCTIONS ================= */}

        <div>

          <label
            htmlFor="thumbnail-instructions"
            className="mb-2 block text-sm font-medium text-black"
          >
            Thumbnail Instructions
          </label>

          <textarea
            id="thumbnail-instructions"
            name="instructions"
            required
            rows={5}
            placeholder="Tell me your idea, important text, concept, style, or anything you want in the thumbnail..."
            className="w-full resize-none rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-base leading-7 text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />

        </div>


        {/* ================= REFERENCE ================= */}

        <div>

          <label
            htmlFor="thumbnail-reference"
            className="mb-2 block text-sm font-medium text-black"
          >
            Reference / Inspiration
            <span className="ml-1 font-normal text-black/40">
              (optional)
            </span>
          </label>

          <textarea
            id="thumbnail-reference"
            name="reference"
            rows={3}
            placeholder="Share a link or describe the style you like..."
            className="w-full resize-none rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-base leading-7 text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />

        </div>


        {/* ================= PAYMENT INFO ================= */}

        <div className="rounded-xl border border-orange-500/20 bg-orange-50 px-4 py-4">

          <div className="flex items-center justify-between gap-4">

            <div>

              <p className="text-sm font-medium text-black">
                Starter Plan
              </p>

              <p className="mt-1 text-sm text-black/50">
                1 YouTube Thumbnail
              </p>

            </div>

            <p className="text-2xl font-semibold text-black">
              $50
            </p>

          </div>

        </div>


        {/* ================= SUBMIT ================= */}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-medium text-white transition hover:bg-orange-600"
        >
          Submit Details & Continue to Payment

          <span className="text-lg">
            →
          </span>

        </button>


        <p className="text-center text-xs leading-5 text-black/40">
          After submitting your project details, you'll continue to PayPal
          to complete the $50 payment.
        </p>

      </form>

    </motion.div>

  </div>
)}



      {/* ================================================== */}
{/* ===================== CONTACT ==================== */}
{/* ================================================== */}

<section
  id="contact"
  className="relative overflow-hidden bg-[#f7f7f7] px-6 py-24 text-black sm:px-10 lg:px-20"
>
  {/* Soft Orange Background Glow */}

  <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

  <div className="relative mx-auto max-w-6xl">

    {/* ================= HEADER ================= */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-3xl text-center"
    >

      <p className="text-xs font-medium uppercase tracking-[0.3em] text-orange-500">
        Contact
      </p>

      <h2 className="mt-4 text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
        Work With Me
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
        Tell me a little about your project and let's create
        something people can't ignore.
      </p>

    </motion.div>


    {/* ================= FORM CARD ================= */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, delay: 0.1 }}
  className="mx-auto mt-14 max-w-5xl rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10"
>

  <form
    action="https://formsubmit.co/sahilkhan1925057@gmail.com"
    method="POST"
    className="space-y-7"
  >

    {/* FormSubmit Settings */}

    <input
      type="hidden"
      name="_subject"
      value="New Thumbnail Design Inquiry"
    />

    <input
      type="hidden"
      name="_captcha"
      value="false"
    />

    <input
      type="hidden"
      name="_template"
      value="table"
    />


    {/* ================= NAME ================= */}

    <div>

      <label
        htmlFor="name"
        className="mb-2 block text-sm font-medium text-black"
      >
        Name
      </label>

      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Your name"
        className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-sm text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
      />

    </div>


    {/* ================= EMAIL + YOUTUBE ================= */}

    <div className="grid gap-6 md:grid-cols-2">

      {/* Email */}

      <div>

        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-black"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-sm text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
        />

      </div>


      {/* YouTube */}

      <div>

        <label
          htmlFor="youtube"
          className="mb-2 block text-sm font-medium text-black"
        >
          YouTube Channel Link
        </label>

        <input
          id="youtube"
          type="url"
          name="youtube"
          placeholder="https://youtube.com/@yourchannel"
          className="w-full rounded-xl border border-black/10 bg-[#fafafa] px-4 py-3.5 text-sm text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
        />

      </div>

    </div>


    {/* ================= MESSAGE ================= */}

    <div>

      <label
        htmlFor="message"
        className="mb-2 block text-sm font-medium text-black"
      >
        Tell me about your project
      </label>

      <textarea
        id="message"
        name="message"
        rows={7}
        required
        placeholder="Tell me about your video, channel, goals, preferred style, or anything else I should know..."
        className="w-full resize-none rounded-xl border border-black/10 bg-[#fafafa] px-4 py-4 text-sm leading-7 text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
      />

    </div>


    {/* ================= SUBMIT ================= */}

    <button
      type="submit"
      className="group flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(249,115,22,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_18px_45px_rgba(249,115,22,0.28)]"
    >

      Send Message

      <span className="text-lg transition duration-300 group-hover:translate-x-1">
        →
      </span>

    </button>


    {/* Small Note */}

    <p className="text-center text-xs text-black/35">
      I'll get back to you as soon as possible.
    </p>

  </form>

</motion.div>

  </div>

</section>

{/* ================================================== */}
{/* ====================== FOOTER ==================== */}
{/* ================================================== */}

<footer className="relative overflow-hidden bg-[#080808] px-6 pb-8 pt-20 text-white sm:px-10 lg:px-20">

  {/* ================= BACKGROUND GLOW ================= */}

  <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-orange-500/[0.05] blur-[120px]" />

  <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-orange-500/[0.03] blur-[120px]" />


  {/* ================= FOOTER CONTENT ================= */}

  <div className="relative mx-auto max-w-7xl">

    {/* ================= BRAND ================= */}

    <div>

      {/* ================= PROFILE ================= */}

      <a
        href="#home"
        className="group inline-flex items-center gap-4"
      >

        {/* Profile Photo */}

        <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-[#111111] transition duration-300 group-hover:scale-105 group-hover:border-orange-500/50">

          <Image
            src="/images/sahil-profile.jpg"
            alt="Sahil Khan"
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />

        </div>


        {/* Name */}

        <span className="text-2xl font-semibold tracking-tight">

          Sahil{" "}

          <span className="text-orange-500">
            Khan
          </span>

        </span>

      </a>


{/* ================= SOCIAL MEDIA ================= */}

<div className="mt-8 flex items-center gap-2">

  {/* LinkedIn */}

  <a
    href="https://www.linkedin.com/in/sahil-khan-a15355261"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="group flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
  >
    <FaLinkedinIn className="text-[18px] text-[#f5b800] transition-colors duration-300 group-hover:text-white" />
  </a>


  {/* Instagram */}

  <a
    href="https://www.instagram.com/sahil_khan20130/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="group flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
  >
    <FaInstagram className="text-[19px] text-[#f5b800] transition-colors duration-300 group-hover:text-white" />
  </a>


  {/* X */}

  <a
    href="https://x.com/SahilKhan1925"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="group flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
  >
    <FaXTwitter className="text-[17px] text-[#f5b800] transition-colors duration-300 group-hover:text-white" />
  </a>


  {/* WhatsApp */}

  <a
    href="https://wa.me/+918882921035"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="group flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
  >
    <FaWhatsapp className="text-[19px] text-[#f5b800] transition-colors duration-300 group-hover:text-white" />
  </a>


  {/* Gmail */}

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilkhan1925057@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Gmail"
    className="group flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
  >
    <SiGmail className="text-[18px] text-[#f5b800] transition-colors duration-300 group-hover:text-white" />
  </a>


  {/* Fiverr */}

  <a
  href="https://www.fiverr.com/ahilkhan2013/create-best-clickbait-amazing-attractive-youtube-thumbnail-design?context_referrer=seller_page&ref_ctx_id=d190382bb65340cdb6ae9f687e73852f&pckg_id=1&pos=3&seller_online=true&imp_id=eb5c2ded-7182-47c8-8cd5-9ecfe17d71b9"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Fiverr"
  className="group flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
>
  <span className="text-[18px] font-bold leading-none text-[#f5b800] transition-colors duration-300 group-hover:text-white">
    fi
  </span>
</a>

</div>

    </div>


    {/* ================================================= */}
    {/* ===================== DIVIDER =================== */}
    {/* ================================================= */}

    <div className="my-14 h-px w-full bg-white/10" />


    {/* ================================================= */}
    {/* ================= BOTTOM BAR ==================== */}
    {/* ================================================= */}

    <div className="flex flex-col gap-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">

      {/* Copyright */}

      <p>
        © 2026 Sahil Khan. All rights reserved.
      </p>


      {/* Credit */}

      <p>
        Designed with{" "}

        <span className="text-orange-500">
          ♥
        </span>{" "}

        by{" "}

        <span className="text-white/60">
          Asif Ali
        </span>

      </p>

    </div>

  </div>

</footer>


    </main>
  );
}