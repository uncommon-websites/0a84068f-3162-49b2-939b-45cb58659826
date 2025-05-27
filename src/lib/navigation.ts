/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "MENA expansion, without the roadblocks",
				href: "/use-cases/mena-expansion",
				image: "/generated/image-a-diverse-business-team-in-a-modern-conf.webp",
				description:
					"Launch in UAE, Saudi, and Egypt with confidence. Cercli handles payroll, onboarding, and compliance—so you can focus on growth, not paperwork.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Managing a global, remote workforce",
				href: "/use-cases/global-remote-workforce",
				image: "/generated/image-a-global-hr-manager-in-a-home-office-set.webp",
				description:
					"Easily pay contractors, EORs, and direct employees in 150+ countries. Cercli automates compliance and centralizes HR for a distributed team.",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Replacing legacy HR with automation",
				href: "/use-cases/hr-automation",
				image: "/generated/image-a-startup-founder-in-a-chic-minimalist-o.webp",
				description:
					"Consolidate onboarding, payroll, and compliance in one place. Save time, reduce errors, and get expert support at every stage.",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
