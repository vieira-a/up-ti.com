'use strict';

const navToggle = document.querySelectorAll('[data-nav-toggle]');
const menuItems = document.querySelectorAll('.navbar-link');
const navBar = document.querySelector('nav');

function toggleMenu(togglers, item) {
  togglers.forEach(toggle => {
    toggle.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

toggleMenu(navToggle, navBar);
toggleMenu(menuItems, navBar);

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const updateMessage = () => {
  const name = nameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  const sendText = `
    Olá, meu nome é ${name}. 
    E-mail: ${email}
    Telefone: ${phone}
    Mensagem: ${message}`;

  console.log(sendText);
};

nameInput.addEventListener('change', updateMessage);
emailInput.addEventListener('change', updateMessage);
phoneInput.addEventListener('change', updateMessage);
messageInput.addEventListener('change', updateMessage);

const sendWhatsAppMessage = () => {
  const name = nameInput.value;
  const phone = phoneInput.value;
  const message = messageInput.value;
  const sourceMessage = 'Mensagem enviada através do site http://www.up-ti.com'

  const receiverPhone = '+5571981531862';
  const encodedMessage = encodeURIComponent(
    `Olá, meu nome é ${name}. \nE-mail: ${emailInput.value} \nTelefone: ${phone}. \nMensagem: ${message}. \n\n${sourceMessage}`
  );
  const wpLink = `https://api.whatsapp.com/send?phone=${receiverPhone}&text=${encodedMessage}`;

  window.open(wpLink, '_blank');
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  sendWhatsAppMessage();
});
