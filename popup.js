// POPUP.JS - GEÇİCİ ÇÖZÜM
document.addEventListener('DOMContentLoaded', function() {
  const premiumBtn = document.getElementById('premiumBtn');
  
  if (premiumBtn) {
    premiumBtn.addEventListener('click', function() {
      // Basit bir HTML sayfasına yönlendir
      const premiumHTML = `
        <html>
          <head><title>Smart Expander Premium</title></head>
          <body style="font-family: Arial; padding: 20px; text-align: center;">
            <h1>🚀 Smart Expander Premium</h1>
            <p>Premium özellikler yakında gelecek!</p>
            <p>Şu an erken erişim aşamasındayız.</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3>💎 Premium Özellikler</h3>
              <ul style="text-align: left; display: inline-block;">
                <li>50+ profesyonel şablon</li>
                <li>Fatura ve sözleşme şablonları</li>
                <li>CV ve iş başvuru şablonları</li>
                <li>AI destekli metinler</li>
                <li>Öncelikli destek</li>
              </ul>
            </div>
            <p>İletişim: your-email@gmail.com</p>
            <button onclick="window.close()" style="background: #00d4aa; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Kapat</button>
          </body>
        </html>
      `;
      
      const newWindow = window.open('', '_blank', 'width=500,height=600');
      newWindow.document.write(premiumHTML);
    });
  }
});