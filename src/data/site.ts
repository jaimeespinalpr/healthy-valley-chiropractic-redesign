const officialSite = 'https://www.healthyvalleychiropractic.com';

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'The Doctor', href: '#doctor' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Hours', href: '#hours' },
  { label: 'Contact', href: '#contact' },
];

export const contact = {
  phone: '(814) 810-3395',
  phoneHref: 'tel:+18148103395',
  addressLine1: '403 South Allen Street #112A',
  addressLine2: 'State College, PA 16801',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.120368016191!2d-77.85822257924526!3d40.79278210699225!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea9df5576504b%3A0x347b429e5d1100ba!2sHealthy%20Valley%20Chiropractic!5e0!3m2!1sen!2sus!4v1604334861160!5m2!1sen!2sus',
  mapsLink: 'https://g.page/healthy-valley-chiropractic?share',
  schedulingLink: 'https://theschedulingapp.com/HealthyValleyChiropractic',
  specialOfferLink: `${officialSite}/special/`,
  contactPageLink: `${officialSite}/contact-us/`,
  reviewLink: `${officialSite}/review-us/`,
};

export const marqueeItems = [
  'Back pain',
  'Neck pain',
  'Spinal decompression',
  'Sports injuries',
  'Pregnancy care',
  'Pediatric care',
  'Workplace injuries',
  'Auto accidents',
  'Wellness care',
  'Extremity adjusting',
];

export const pillars = [
  {
    title: 'Corrective Care',
    caption: 'Hands-on treatment focused on lasting correction, not just quick relief.',
    image: '/images/official/corrective-care.jpg',
  },
  {
    title: 'Wellness Care',
    caption: 'Ongoing support to keep you moving, aligned, and feeling your best.',
    image: '/images/official/wellness-care.jpg',
  },
  {
    title: 'Pediatric Care',
    caption: 'Gentle, family-friendly visits that put younger patients at ease.',
    image: '/images/official/pediatric-care.jpg',
  },
];

export const services = [
  {
    title: 'Chiropractic Care',
    description: 'Foundational care for pain relief, mobility, and long-term wellbeing.',
    href: `${officialSite}/chiropractic-care/`,
  },
  {
    title: 'Spinal Decompression',
    description: 'A specialized option for disc issues and chronic back pain.',
    href: `${officialSite}/spinal-decompression/`,
  },
  {
    title: 'Pediatric Chiropractic',
    description: 'A warm, family-first approach for children and teens.',
    href: `${officialSite}/pediatric/`,
  },
  {
    title: 'Sports Chiropractic',
    description: 'Support for athletes — training, performance, and recovery.',
    href: `${officialSite}/sports-chiropractic/`,
  },
  {
    title: 'Pregnancy Care',
    description: 'Gentle care for the changes of pregnancy and posture.',
    href: `${officialSite}/pregnancy/`,
  },
  {
    title: 'Workplace Injuries',
    description: 'Practical help for pain from work, posture, and daily strain.',
    href: `${officialSite}/workplace-injuries/`,
  },
  {
    title: 'Auto Accident Care',
    description: 'A clear next step for recovery after a car accident.',
    href: `${officialSite}/auto-accident-chiropractic-care/`,
  },
  {
    title: 'Extremity Adjusting',
    description: 'Care for hands, shoulders, hips, knees, and ankles.',
    href: `${officialSite}/extremity-adjusting/`,
  },
];

export const visitSteps = [
  {
    title: 'Reach out',
    description: 'Call the office or use the patient portal to start the conversation and get the right next step.',
  },
  {
    title: 'Get oriented',
    description: 'The first visit is centered on listening carefully, answering questions, and explaining the plan clearly.',
  },
  {
    title: 'Follow through',
    description: 'Ongoing visits are paced to support comfort, movement, and consistency without extra friction.',
  },
];

export const testimonials = [
  {
    quote:
      'There is no facility, gym, practice, or membership that will produce a higher return on your investment, for your health, than Dr. Jay and his thoughtful team.',
    author: 'AJ M.',
  },
  {
    quote:
      'Healthy Valley Chiropractic is always on the cutting edge of technology and treatments. Not to mention the community support and of course the loyal support to the State College Marauders.',
    author: 'Matt S.',
  },
  {
    quote:
      'Over the past several months, Healthy Valley Chiropractic has helped improve them all! Listening & caring team, from the front desk to all the docs.',
    author: 'Pat T.',
  },
  {
    quote:
      'Only good things to say about Healthy Valley Chiropractic. Their attention to their patients is impeccable. I walked in pain and they have me on the road to recovery.',
    author: 'Casca M.',
  },
];

export const galleryItems = [
  {
    image: '/images/ig-golf.jpg',
    title: 'In the treatment room',
    caption: 'Hands-on care, every visit.',
    span: 'lg:row-span-2',
  },
  {
    image: '/images/ig-honor.jpg',
    title: 'Rooted in the community',
    caption: 'Celebrating local sports and the people behind them.',
    span: 'lg:col-span-2',
  },
  {
    image: '/images/services-balance-training@2x.jpg',
    title: 'Movement & balance',
    caption: 'Care that supports an active life.',
    span: 'lg:col-span-2',
  },
];

export const officeHours = [
  { day: 'Monday', hours: ['8:00am – 11:30am', '3:00pm – 5:00pm'] },
  { day: 'Tuesday', hours: ['3:00pm – 5:00pm'] },
  { day: 'Wednesday', hours: ['8:00am – 11:30am', '3:00pm – 5:00pm'] },
  { day: 'Thursday', hours: ['3:00pm – 5:00pm'] },
  { day: 'Friday', hours: ['8:00am – 11:30am'] },
  { day: 'Saturday', hours: ['Closed'] },
  { day: 'Sunday', hours: ['Closed'] },
];

export const quote = {
  author: 'Hippocrates',
  text: 'A wise man ought to realize that his health is his most valuable possession.',
};

export const footerLinks = [
  { label: 'Accessibility', href: `${officialSite}/accessibility/` },
  { label: 'Anti-Discrimination', href: `${officialSite}/anti-discrimination/` },
  { label: 'Healthcare Disclaimer', href: `${officialSite}/healthcare-disclaimer/` },
  { label: 'HIPAA Policy', href: `${officialSite}/hipaa-privacy-policy/` },
  { label: 'Privacy Policy', href: `${officialSite}/privacy-policy/` },
  { label: 'Terms of Service', href: `${officialSite}/terms-service/` },
  { label: 'Good Faith Estimate', href: `${officialSite}/good-faith-estimate/` },
  { label: 'AI Content Disclaimer', href: `${officialSite}/ai-generated-content-disclaimer/` },
];

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/Healthy-Valley-Chiropractic-107107287854703' },
  { label: 'Twitter', href: 'https://twitter.com/healthy_val' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UC2IrW2Zr7tKs2SVIDAzsgHw/videos' },
  { label: 'Instagram', href: 'https://www.instagram.com/healthyvalleychiropractic' },
];
