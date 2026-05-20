 function downloadResume() {
    const link = document.createElement('a');
    link.href = '"C:\Users\shail\Downloads\Resume.pdf"'; 
    link.download = 'Shailja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function scrollToSection() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
function openGitHub() {
  window.open('https://github.com/Shailja2611', '_blank');
}
function openfigma() {
  window.open('https://www.figma.com/proto/YEUDTyZ79ImBBs9fp34y0G/Untitled?node-id=53-15&t=5IRQJ4AgdR2BaLwi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=53%3A15');
}
