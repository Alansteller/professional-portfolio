const $ = (id) => document.getElementById(id);
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
  const idea = ideas[businessType.value] || ideas['Restaurant / café'];
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
