<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={true}
  title="HR and payroll, without the headache"
  subtitle="One platform to manage and pay your team—fully compliant, locally trusted, and built for MENA and beyond."
  customers={[
    {
      name: "Samer Bejjani",
      position: "Founder and CEO, Growth Levers",
      imageSrc: "/generated/image-a-professional-middle-eastern-man-in-a-m.webp"
    },
    {
      name: "Said El Imadi",
      position: "Human Resources Manager, Supy",
      imageSrc: "/generated/image-a-professional-middle-eastern-man-dresse.webp"
    },
    {
      name: "Mitul Ganatra",
      position: "CFO, Huspy",
      imageSrc: "/generated/image-a-professional-south-asian-man-wearing-g.webp"
    },
    {
      name: "Laila Hassan",
      position: "People Operations Lead, Tech Startup",
      imageSrc: "/generated/image-a-professional-middle-eastern-woman-in-b.webp"
    },
    {
      name: "Ranya Khaled",
      position: "Head of HR, Cairo Consulting Group",
      imageSrc: "/generated/image-a-professional-north-african-woman-smili.webp"
    }
  ]}
/>
<LogoScroller
	label="Trusted by industry leaders"
	logoUrls={[
		'https://logo.clearbit.com/careem.com',
		'https://logo.clearbit.com/kitopi.com',
		'https://logo.clearbit.com/swvl.com',
		'https://logo.clearbit.com/dubizzle.com'
	]}
/>

<Summary
	title="What we do"
	text="Cercli is the all-in-one HR and payroll platform for modern businesses, built to manage local and global teams effortlessly. Run payroll, automate compliance, and handle HR for every employee or contractor—especially in the Middle East and North Africa. All your workforce data, one trusted solution."
/>

<Testimonials
	testimonials={[
		{
			name: "Karim Mansoor",
			position: "Finance Director",
			company: "Atlas Ventures",
			quote:
				"Cercli cut our payroll processing time from days to just an hour each month. My team now spends less time on admin and more time on growth.",
			image: "/generated/image-a-middle-aged-arab-man-sitting-at-a-wood.webp"
		},
		{
			name: "Nour Salama",
			position: "People Operations Lead",
			company: "Medina Labs",
			quote:
				"Switching to Cercli helped us avoid costly compliance mistakes as we expanded into new MENA countries. The peace of mind is priceless.",
			image: "/generated/image-a-young-middle-eastern-woman-in-a-contem.webp"
		},
		{
			name: "Youssef Ammar",
			position: "Managing Partner",
			company: "Cedar Holdings",
			quote:
				"We've saved over $40,000 this year alone by consolidating our HR and payroll with Cercli. It pays for itself each month.",
			image: "/generated/image-an-older-north-african-man-in-a-tailored.webp"
		}
	]}
/>

<Features
	title="Everything you need, all in one place"
	subtitle="Local compliance, global coverage, and support that never sleeps."
	features={[
		{
			title: "Payroll for 150+ countries",
			description: "Run compliant payroll locally and globally, with built-in MENA expertise and support for WPS, GOSI, DEWS, and more."
		},
		{
			title: "All-in-one HR management",
			description: "Centralize employees, contractors, and EORs in a single dashboard with streamlined onboarding and document control."
		},
		{
			title: "Multi-currency, multi-country",
			description: "Pay teams and reimburse expenses in their currency, with automatic calculations for local taxes and benefits."
		},
		{
			title: "White-glove onboarding",
			description: "Migrate from spreadsheets or old systems in hours—not weeks—with expert support and instant data checks."
		},
		{
			title: "Granular security & reporting",
			description: "Control access by country, team, or role and get real-time reports, audit trails, and change history at a glance."
		},
		{
			title: "24/7 expert support",
			description: "Talk to payroll pros or engineers anytime via WhatsApp and Slack, with 92% of queries solved right away."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your business needs"
	useCases={[
		{
			title: "MENA expansion, without the roadblocks",
			description: "A rapidly growing business launches in the UAE, Saudi Arabia, and Egypt. Cercli brings payroll, onboarding, and compliance into one platform—so every new hire is properly set up, paid on schedule, and always audit-ready.",
			image: "/generated/image-a-diverse-business-team-in-a-modern-conf.webp",
			link: {
				href: "/use-cases/mena-expansion",
				label: "Learn more"
			}
		},
		{
			title: "Managing a global, remote workforce",
			description: "A multinational manages direct employees, EORs, and contractors across borders. Cercli automates multi-currency payments, streamlines compliance, and centralizes HR data with clarity and ease.",
			image: "/generated/image-a-global-hr-manager-in-a-home-office-set.webp",
			link: {
				href: "/use-cases/global-remote-workforce",
				label: "Learn more"
			}
		},
		{
			title: "Replacing legacy HR with automation",
			description: "A scaling startup outgrows spreadsheets and basic payroll tools. Cercli consolidates onboarding, payroll, and compliance into a single source of truth—saving time and reducing costly errors from day one.",
			image: "/generated/image-a-startup-founder-in-a-chic-minimalist-o.webp",
			link: {
				href: "/use-cases/hr-automation",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction
  title="Get started with stress-free HR and payroll"
  subtitle="See why leading MENA businesses choose Cercli"
  description="Spend less time on admin and more time on your people. Migrate in hours, not weeks—with industry-first support and local expertise."
  imageSrc="/generated/image-a-joyful-middle-eastern-hr-team-leader-i.webp"
  callsToAction={[
    { href: "/get-started", label: "Get started", variant: "primary" },
    { href: "/demo", label: "Book a demo", variant: "secondary" }
  ]}
/>
