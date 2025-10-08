// SMART TEXT EXPANDER - PREMIUM KONTROLÜ ÇALIŞAN SÜRÜM
console.log('🚀 Smart Text Expander loaded!');

// FREE SHORTCUTS
const freeShortcuts = {
  ';;mail': 'your.email@gmail.com',
  ';;tel': '+1 (555) 123-4567', 
  ';;name': '[Your Name]',
  ';;website': 'https://yourwebsite.com',
  ';;thanks': 'Thank you! 🙏',
  ';;address': '[Your Address]',
  ';;signature': `Best regards,\n[Your Name]\n[Your Position]`,
  ';;date': new Date().toLocaleDateString(),
  ';;time': new Date().toLocaleTimeString()
};

// PREMIUM SHORTCUTS - SADECE GÖSTERİM İÇİN
const premiumShortcuts = {
  ';;invoice': `INVOICE_DEMO_PREMIUM_FEATURE`,
  ';;resume': `RESUME_DEMO_PREMIUM_FEATURE`, 
  ';;proposal': `PROPOSAL_DEMO_PREMIUM_FEATURE`
};

// TÜM KISAYOLLARI BİRLEŞTİR
const allShortcuts = {...freeShortcuts};

// PREMIUM KULLANICI KONTROLÜ
function isPremiumUser() {
  return localStorage.getItem('smart_expander_premium') === 'true';
}

// TEST ALANI OLUŞTUR
function createTestArea() {
  console.log('🧪 Creating test area...');
  
  const testArea = document.createElement('textarea');
  testArea.id = 'smart-expander-test-area';
  testArea.style.cssText = `
    position: fixed;
    top: 10px;
    left: 10px;
    width: 400px;
    height: 120px;
    z-index: 10000;
    background: white;
    border: 3px solid #00d4aa;
    padding: 10px;
    font-family: Arial;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  `;
  testArea.placeholder = "👉 TEST AREA - Type ;;invoice here and press SPACE or ENTER";
  
  const instructions = document.createElement('div');
  instructions.style.cssText = `
    position: fixed;
    top: 140px;
    left: 10px;
    background: #f8f9fa;
    padding: 10px;
    border: 1px solid #ddd;
    z-index: 10000;
    width: 400px;
    font-family: Arial;
    font-size: 12px;
  `;
  instructions.innerHTML = `
    <strong>Test Instructions:</strong>
    <ol style="margin: 5px 0; padding-left: 15px;">
      <li>Type <code>;;invoice</code> in the green box</li>
      <li>Press <strong>SPACE</strong> or <strong>ENTER</strong></li>
      <li>Premium offer should appear at bottom-right</li>
    </ol>
  `;
  
  document.body.appendChild(testArea);
  document.body.appendChild(instructions);
  testArea.focus();
  
  console.log('✅ Test area created');
}

// ANA EXPANDER FONKSİYONU
function expandText(shortcut) {
  const activeElement = document.activeElement;
  
  if (activeElement && (activeElement.tagName === 'INPUT' || 
                       activeElement.tagName === 'TEXTAREA' || 
                       activeElement.isContentEditable)) {
    
    let text;
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
      text = activeElement.value;
    } else {
      text = activeElement.textContent || activeElement.innerText;
    }
    
    if (text && text.includes(shortcut)) {
      console.log(`🔍 Found shortcut: ${shortcut}`);
      
      // PREMIUM KISAYOL KONTROLÜ
      if (premiumShortcuts[shortcut]) {
        console.log(`💎 Premium shortcut detected: ${shortcut}`);
        showPremiumOffer(`"${shortcut}" is a premium feature!`);
        return false; // Genişletme yapma
      }
      
      // ÜCRETSİZ KISAYOLLARI GENİŞLET
      if (freeShortcuts[shortcut]) {
        const replacement = freeShortcuts[shortcut];
        const newText = text.replace(shortcut, replacement);
        
        if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
          activeElement.value = newText;
        } else {
          activeElement.textContent = newText;
        }
        
        showFeedback(`✅ Expanded: ${shortcut}`);
        return true;
      }
    }
  }
  return false;
}

// PREMIUM TEKLİF GÖSTER
function showPremiumOffer(message = 'Unlock professional templates with Premium!') {
  console.log('💎 Showing premium offer...');
  
  // Önceki teklifi temizle
  const existing = document.getElementById('smart-expander-premium-offer');
  if (existing) existing.remove();
  
  const offer = document.createElement('div');
  offer.id = 'smart-expander-premium-offer';
  offer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    z-index: 10000;
    max-width: 380px;
    font-family: Arial, sans-serif;
    border: 2px solid rgba(255,255,255,0.1);
  `;
  
  offer.innerHTML = `
    <div style="display: flex; align-items: center; margin-bottom: 16px;">
      <div style="font-size: 24px; margin-right: 12px;">💎</div>
      <h4 style="margin: 0; font-size: 20px; font-weight: bold;">PREMIUM FEATURES</h4>
    </div>
    
    <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.5; opacity: 0.9;">
      ${message}
    </p>
    
    <div style="margin-bottom: 20px;">
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="color: #00d4aa; margin-right: 8px;">✓</span>
        <span>Professional Invoice Templates</span>
      </div>
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="color: #00d4aa; margin-right: 8px;">✓</span>
        <span>CV & Resume Templates</span>
      </div>
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="color: #00d4aa; margin-right: 8px;">✓</span>
        <span>Business Proposal Templates</span>
      </div>
      <div style="display: flex; align-items: center;">
        <span style="color: #00d4aa; margin-right: 8px;">✓</span>
        <span>50+ Premium Shortcuts</span>
      </div>
    </div>
    
    <button id="premium-buy-btn" style="
      background: #00d4aa;
      color: white;
      border: none;
      padding: 14px;
      border-radius: 8px;
      cursor: pointer;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
    ">💳 $3/month - GET PREMIUM</button>
    
    <button id="premium-close-btn" style="
      background: transparent;
      border: 1px solid rgba(255,255,255,0.3);
      color: white;
      padding: 10px;
      border-radius: 6px;
      cursor: pointer;
      width: 100%;
      font-size: 14px;
    ">Maybe Later</button>
  `;
  
  document.body.appendChild(offer);
  
  // BUTON EVENT LISTENER'LARI
  document.getElementById('premium-buy-btn').onclick = function() {
    console.log('💰 Buy Premium clicked!');
    
    // Basit premium sayfası
    const premiumHTML = `
      <html>
        <head>
          <title>Smart Expander Premium</title>
          <style>
            body { font-family: Arial; padding: 30px; text-align: center; background: linear-gradient(135deg, #667eea, #764ba2); color: white; margin: 0; }
            .container { max-width: 500px; margin: 0 auto; }
            button { background: #00d4aa; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; margin: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🚀 Smart Expander Premium</h1>
            <p>Thank you for your interest!</p>
            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3>Premium Features Unlocked! 🎉</h3>
              <p>Now you can use:</p>
              <ul style="text-align: left; display: inline-block;">
                <li><code>;;invoice</code> - Professional invoices</li>
                <li><code>;;resume</code> - CV templates</li>
                <li><code>;;proposal</code> - Business proposals</li>
                <li>+50 more templates</li>
              </ul>
            </div>
            <button onclick="window.close()">Close</button>
          </div>
        </body>
      </html>
    `;
    
    const newWindow = window.open('', '_blank', 'width=500,height=500');
    newWindow.document.write(premiumHTML);
    
    // Premium'u aktif et
    localStorage.setItem('smart_expander_premium', 'true');
    document.getElementById('smart-expander-premium-offer').remove();
    showFeedback('🎉 Premium activated! Thank you!');
  };
  
  document.getElementById('premium-close-btn').onclick = function() {
    document.getElementById('smart-expander-premium-offer').remove();
    console.log('❌ Premium offer closed');
  };
  
  console.log('✅ Premium offer shown');
}

// GERİ BİLDİRİM
function showFeedback(message) {
  const existing = document.getElementById('smart-expander-feedback');
  if (existing) existing.remove();
  
  const feedback = document.createElement('div');
  feedback.id = 'smart-expander-feedback';
  feedback.textContent = message;
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #00d4aa;
    color: white;
    padding: 12px 18px;
    border-radius: 8px;
    z-index: 9999;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  `;
  
  document.body.appendChild(feedback);
  setTimeout(() => feedback.remove(), 3000);
}

// KLAVYE OLAYI
document.addEventListener('keydown', function(event) {
  if (event.key === ' ' || event.key === 'Enter') {
    setTimeout(() => {
      for (const shortcut of Object.keys(premiumShortcuts)) {
        if (expandText(shortcut)) break;
      }
      for (const shortcut of Object.keys(freeShortcuts)) {
        if (expandText(shortcut)) break;
      }
    }, 100);
  }
});

// SAYFA YÜKLENDİĞİNDE TEST ALANI GÖSTER
setTimeout(createTestArea, 1000);

console.log('✅ Smart Text Expander ready!');