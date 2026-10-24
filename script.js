const $ = (id) => document.getElementById(id);

const roastCopybook = {
  'Mobile shop': {
    prices: ['Your customers have typed “price bro?” so often their keyboards deserve overtime. 😂', 'Show phone prices or starting prices, accessory categories and stock enquiry links.'],
    location: ['Your shop location is currently an unlockable game level. 🗺️', 'Add your address, opening hours and a map link so customers can find your shop.'],
    invisible: ['Your mobile shop is online in spirit only. The internet cannot sell a phone it cannot find. 👻', 'Show phone models, accessories, repair services and a clear WhatsApp contact button.'],
    repeat: ['“Do you repair screens?” “Do you have chargers?” Your inbox is doing cardio. 📱', 'Add separate sections for phones, accessories, repairs, common questions and store hours.'],
    trust: ['Customers want proof this is a real shop, not a mysterious phone-shaped rumour. 🕵️', 'Show real product photos, repair services, business details and clear contact information.']
  },
  'Restaurant': {
    prices: ['The menu is a secret recipe and apparently the prices are classified. 🍕', 'Publish a readable menu with prices, opening hours and a contact or order enquiry link.'],
    location: ['Your restaurant is playing hide-and-seek with hungry people. Not ideal before lunch. 😭', 'Add your address, map link, opening hours and a clear contact button.'],
    invisible: ['Your food might be legendary, but the internet has not received the invitation. 🍜', 'Add a menu, food gallery, location and WhatsApp enquiry option.'],
    repeat: ['Your staff have answered “Are you open?” enough times to earn a diploma. 🥲', 'Display opening hours, menu, location and common answers on one mobile-friendly page.'],
    trust: ['Hungry customers need evidence before trusting the mystery curry. 🔍', 'Use real food photos, a clear menu, business details and genuine customer reviews if available.']
  },
  'Salon': {
    prices: ['Your price list is more mysterious than a haircut after “just a little trim.” 💇', 'List services and starting prices, show your work and add an appointment enquiry link.'],
    location: ['Clients should not need detective training to find their haircut. 🕵️', 'Add your address, map link, working hours and appointment contact.'],
    invisible: ['Your salon glow-up deserves more than a blurry status update. ✨', 'Show services, real work photos, location and a clear booking enquiry route.'],
    repeat: ['You have answered “How much for a haircut?” enough times to cut the Wi-Fi. 😂', 'Add a service menu, starting prices, opening hours and a quick contact link.'],
    trust: ['New clients want to see your work before trusting you with their fringe. ✂️', 'Show real portfolio photos, services, prices and genuine testimonials with permission.']
  },
  'Gym': {
    prices: ['Your membership fee is a bigger mystery than leg day motivation. 💀', 'Explain membership options, training services, opening hours and how to arrange a visit.'],
    location: ['Your gym is hidden like the motivation people need on Monday. 🏋️', 'Add a map, address, opening hours and a trial-session enquiry link.'],
    invisible: ['Your gym gains muscle, but its online presence skips every workout. 💪', 'Show facilities, coaching, membership information and contact details.'],
    repeat: ['Your inbox has become a personal trainer for the same five questions. 😅', 'Add FAQs about membership, hours, facilities and trial sessions.'],
    trust: ['People want to know what the gym looks like before signing up for pain with benefits. 😂', 'Show real facility photos, trainer details, services and genuine reviews if available.']
  },
  'Freelancer': {
    prices: ['Your portfolio is saying “trust me bro” without showing the receipts. 💻', 'Show selected projects, services, process and a simple way to request a quote.'],
    location: ['Your business address may be optional, but your contact method should not be a side quest. 📩', 'Add clear email or WhatsApp contact and explain how clients can start a project.'],
    invisible: ['Your skills are hiding harder than a bug five minutes before a deadline. 🐛', 'Publish a portfolio, explain your services and add a clear enquiry button.'],
    repeat: ['You keep explaining your services from scratch like it is a never-ending tutorial. 😵', 'Create a service page, project examples, process and answers to common client questions.'],
    trust: ['Clients want proof of your skills, not just a very confident profile picture. 😎', 'Show real work samples, clear deliverables and honest testimonials when available.']
  },
  'Home service': {
    prices: ['Customers need a quote, not a treasure hunt through old messages. 🧰', 'List your services, service area and a direct way to request a quote.'],
    location: ['Your service area is a mystery map with no legend. 🗺️', 'Explain the areas you cover and add a call or WhatsApp enquiry button.'],
    invisible: ['Your tools are ready, but your online presence is still in the toolbox. 🔧', 'Show services, real work examples, service areas and contact details.'],
    repeat: ['Your phone is answering the same questions instead of letting you do the actual job. 😭', 'Add service details, working hours, service areas and a short FAQ.'],
    trust: ['Customers want proof you can fix the problem before they invite you to fix the problem. 🛠️', 'Show genuine work photos, explain your services and provide clear contact details.']
  }
};
let lastRoastMessage = '';
function runRoast() {
  const business = $('roastBusiness').value;
  const problem = $('roastProblem').value;
  const entry = (roastCopybook[business] || roastCopybook['Mobile shop'])[problem] || roastCopybook['Mobile shop'].prices;
  $('roastTitle').textContent = business + ' diagnosis: needs a little website magic.';
  $('roastCopy').textContent = entry[0];
  $('roastFix').textContent = entry[1];
  lastRoastMessage = `Hi Nexshaly Studio! I tried the Roast My Website tool. My business is ${business}. My online problem: ${$('roastProblem').selectedOptions[0].textContent}. The suggested fix is: ${entry[1]} Can you help me build a suitable website?`;
  $('roastResult').classList.remove('roast-updated');
  void $('roastResult').offsetWidth;
  $('roastResult').classList.add('roast-updated');
}
if ($('roastButton')) {
  $('roastButton').addEventListener('click', (event) => { event.preventDefault(); runRoast(); });
  $('roastBusiness').addEventListener('change', runRoast);
  $('roastProblem').addEventListener('change', runRoast);
  $('roastWhatsApp').addEventListener('click', () => {
    const message = lastRoastMessage || 'Hi Nexshaly Studio! I would like help with a website for my business.';
    window.open('https://wa.me/917594922010?text=' + encodeURIComponent(message), '_blank', 'noopener');
  });
  runRoast();
}

const businessType = $('businessType');
const businessGoal = $('businessGoal');
const budget = $('budget');

const ideas = {
  'Restaurant / café': { title: 'A menu customers can find in seconds', description: 'Help hungry customers understand what you serve and how to reach you.', features: ['Menu and popular items', 'Food photo gallery and opening hours', 'Location map and WhatsApp enquiry'] },
  'Salon / beauty business': { title: 'Turn browsing into booking enquiries', description: 'Show your style, services and prices before a customer walks through the door.', features: ['Service list and starting prices', 'Photo gallery for your work', 'Location and appointment enquiry link'] },
  'Mobile shop': { title: 'Help customers discover their next phone', description: 'Show phones, accessories and repair services, then make it easy for customers to ask about prices and availability.', features: ['Smartphone and accessory product cards', 'WhatsApp enquiries about prices and stock', 'Repair services, store location and opening hours'] },
  'Gym / fitness trainer': { title: 'Show people what their next step looks like', description: 'Explain your coaching or membership options and make joining feel straightforward.', features: ['Training and membership details', 'Trainer introduction and testimonials', 'Trial-session enquiry link'] },
  'Freelancer / personal brand': { title: 'Let your work do the talking', description: 'Build trust with a clear introduction, examples of your work and a direct way to contact you.', features: ['Portfolio and service overview', 'About section and testimonials', 'Contact links and enquiry form'] },
  'Home service': { title: 'Make it easy to ask for your service', description: 'Tell local customers what you do, where you work and how to request a quote.', features: ['Service list and service area', 'Photos or examples of past work', 'Call and WhatsApp quote links'] }
};
let selectedPlan = '';
function renderIdea() {
  const selectedBusiness = businessType.value;
  const idea = ideas[selectedBusiness] || ideas['Restaurant / café'];
  $('ideaTitle').textContent = idea.title;
  $('ideaDescription').textContent = idea.description + ' Goal: ' + businessGoal.value.toLowerCase() + '.';
  $('ideaFeatures').replaceChildren(...idea.features.map((feature) => {
    const li = document.createElement('li'); li.textContent = feature; return li;
  }));
}
$('generateIdea').addEventListener('click', (event) => {
  event.preventDefault();
  renderIdea();
  $('ideaResult')?.classList.add('result-updated');
});
businessType.addEventListener('change', renderIdea);
businessGoal.addEventListener('change', renderIdea);
budget.addEventListener('change', renderIdea);
function enquiryText(extra = '') {
  return `Hi Nexshaly Studio! My business type is ${businessType.value}. My goal is ${businessGoal.value}. My budget is ${budget.value}.${extra ? '\nPlan of interest: ' + extra : ''} Please suggest the best next step.`;
}
$('ideaWhatsApp').addEventListener('click', () => {
  window.open('https://wa.me/917594922010?text=' + encodeURIComponent(enquiryText()), '_blank', 'noopener');
});
document.querySelectorAll('.price-enquiry').forEach((link) => {
  link.addEventListener('click', () => { selectedPlan = link.dataset.plan || ''; });
});
$('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = $('visitorName').value.trim();
  const business = $('visitorBusiness').value.trim();
  const message = $('visitorMessage').value.trim();
  const text = `Hi Nexshaly Studio! My name is ${name}.\nBusiness: ${business}\nIdea: ${message}${selectedPlan ? '\nPlan of interest: ' + selectedPlan : ''}`;
  window.open('https://wa.me/917594922010?text=' + encodeURIComponent(text), '_blank', 'noopener');
});
const menuToggle = $('menuToggle');
const mainNav = $('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
}));
$('year').textContent = new Date().getFullYear();
renderIdea();
