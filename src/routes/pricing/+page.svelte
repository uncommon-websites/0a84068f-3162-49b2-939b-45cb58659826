<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Samer Bejjani",
      position: "Co-founder & CEO",
      company: "Growth Levers",
      quote:
        "Cercli replaced three separate systems and saved us over 40 hours a month on HR and payroll ops. We’ve scaled across two regions in under six months, without hiring extra ops headcount.",
      image: "/generated/image-a-professional-headshot-of-a-lebanese-ma.webp"
    },
    {
      name: "Mitul Ganatra",
      position: "CFO",
      company: "Huspy",
      quote:
        "We cut payroll errors to nearly zero and saved over $10,000 in monthly admin costs. Everything—WPS, DEWS, GOSI—just runs. No chasing compliance, no manual uploads.",
      image: "/generated/image-a-professional-headshot-of-an-indian-mal.webp"
    },
    {
      name: "Yasmine El Amrani",
      position: "HR Manager",
      company: "Atlas Group",
      quote:
        "Cercli helped us onboard new hires in under a day and instantly process final payouts for leavers. With 24/7 Slack support and clear ownership, our HR team finally gets to breathe.",
      image: "/generated/image-a-professional-headshot-of-a-north-afric.webp"
    }
  ]}
/>

<CallToAction
  title="See why HR teams choose Cercli"
  subtitle="Save hours, ensure compliance, and make payroll effortless."
  description="Join leading companies in the MENA region who are saving thousands of hours and hundreds of thousands of dollars with Cercli. Move all your HR and payroll operations to one secure, friendly platform—fast onboarding, instant support, and airtight compliance built in. Your next best business decision starts now."
  imageSrc="/generated/image-a-happy-hr-manager-in-a-bright-modern-of.webp"
  callsToAction={[
    { href: '/demo', label: 'Book a demo', variant: 'primary' },
    { href: '/contact', label: 'Talk to sales', variant: 'secondary' }
  ]}
/>
