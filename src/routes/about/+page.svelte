<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Customer-first",
    description: "Every decision starts with making our customers’ lives easier."
  },
  {
    title: "Compliance built-in",
    description: "We obsess over the details—local laws, regulations, and payroll—so you don’t have to."
  },
  {
    title: "Global mindset",
    description: "We design for scale, making cross-border people ops smooth and secure."
  },
  {
    title: "Respect for local markets",
    description: "No one-size-fits-all. We localize deeply for the unique needs of each country."
  },
  {
    title: "Fast, reliable support",
    description: "Always available, always accountable—real answers from real experts."
  }
];
</script>

<SecondaryHero
	title="One platform. Every workforce."
	subtitle="Handle HR, payroll, and compliance across MENA and beyond—in one place."
	imageSrc="/generated/image-a-team-of-diverse-professionals-collabor.webp"
/>

<!-- Story Section -->
<Story
  paragraphs={[
    "Cercli was born from a simple question: why isn’t there an HR and payroll platform truly built for businesses in the Middle East and North Africa? After seeing companies struggle with fragmented tools, compliance headaches, and slow support, we set out to make workforce management effortless and accurate—no matter the country or currency.",
    "From the start, we focused on getting local details right. Our all-in-one platform combines deep MENA compliance with the flexibility to manage global teams—whether you have employees, contractors, or need an employer of record. We built Cercli to save companies time, reduce risk, and make every pay cycle run smoothly.",
    "Today, Cercli is trusted by leading teams across the region and beyond. Backed by top investors, we’re proud to help businesses scale their workforce with peace of mind—thanks to our responsive support, fast onboarding, and platform that grows with you. Our mission is simple: make HR and payroll in MENA as easy as it should be."
  ]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->



<StakeholderGrid
	stakeholderType="investor"
	title="Trusted by leading investors. Built for MENA scale."
	subtitle="Cercli is redefining HR and payroll across the Middle East—led by domain experts and backed by top global investors."
	stakeholders={[
		{ name: "Y Combinator (S23)", image: "https://logo.clearbit.com/ycombinator.com" },
		{ name: "Afore Capital", image: "https://logo.clearbit.com/afore.vc" },
		// No logo found for Cotu Ventures
		// No logo found for Emergence Capital
		{ name: "Allison Pickens (former COO, Gainsight)", image: "https://logo.clearbit.com/gainsight.com" },
		{ name: "Tony Dong (ex VP Engineering, Rippling)", image: "https://logo.clearbit.com/rippling.com" },
		{ name: "Tony Jamous (CEO, Oyster)", image: "https://logo.clearbit.com/oysterhr.com" },
		{ name: "Sebastian Mejia (co-founder, Rappi)", image: "https://logo.clearbit.com/rappi.com" },
		{ name: "Karim Atiyeh (co-founder and CTO, Ramp)", image: "https://logo.clearbit.com/ramp.com" }
	]}
/>

<blockquote>
“Cercli is doing for MENA what Rippling did for the US. It’s rare to see this level of product depth and regional mastery from day one.”
<br> — Tony Dong, ex VP engineering at Rippling
</blockquote>

<p>We help the fastest-growing companies manage local and distributed teams in the Middle East and beyond. Our platform handles payroll, compliance, onboarding, contractors, and reporting—across the UAE, KSA, Egypt, and more than 150 countries worldwide.</p>

<h3>Investors behind the world’s top SaaS and infrastructure companies</h3>
<ul>
  <li>Y Combinator (S23)</li>
  <li>Afore Capital</li>
  <li>Cotu Ventures</li>
  <li>Yazan El-Baba (Emergence Capital)</li>
  <li>Allison Pickens (former COO, Gainsight)</li>
  <li>Tony Jamous (CEO, Oyster)</li>
  <li>Tony Dong (former VP engineering, Rippling)</li>
  <li>Sebastian Mejia (co-founder, Rappi)</li>
  <li>Karim Atiyeh (co-founder and CTO, Ramp)</li>
</ul>

<h3>Why we’re positioned to win</h3>
<ul>
  <li>Purpose-built for MENA labor laws and compliance frameworks</li>
  <li>First regionally localized all-in-one HR and payroll platform</li>
  <li>End-to-end support for full-time employees, contractors, and EORs</li>
  <li>Enterprise-ready security and access controls built in</li>
</ul>

<h3>Early traction</h3>
<ul>
  <li>$4M raised in seed funding</li>
  <li>92% of support issues resolved on first contact</li>
  <li>$780k in annual savings per company, on average</li>
  <li>Local data hosting in both UAE and KSA</li>
</ul>


<!-- CTA Section -->
<CallToAction
  title="Empower your team—everywhere"
  subtitle="MENA-ready HR and payroll, from day one"
  description="Onboard, manage and pay your workforce in the Middle East and beyond—quickly, compliantly, and with expert support at every stage. See how Cercli can simplify HR for your business."
  imageSrc="/generated/image-a-group-of-business-professionals-in-a-m.webp"
  callsToAction=[
    {
      href: "/demo",
      label: "Request a demo",
      variant: "primary"
    },
    {
      href: "/contact",
      label: "Talk to sales",
      variant: "secondary"
    }
  ]
/>
