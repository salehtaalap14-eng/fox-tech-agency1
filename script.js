// هذا الملف بيعرض المحتوى من config.js — مش محتاج تعدله عشان تغير النصوص
(function () {
    const $ = (id) => document.getElementById(id);
    const waLink = `https://wa.me/${SITE.whatsapp}`;

    document.title = `${SITE.brand} | Your Digital Growth Partner`;

    $("brand").textContent = SITE.brand;

    $("headerCta").textContent = SITE.headerButton;
    $("headerCta").href = waLink;

    $("heroTitle").textContent = SITE.hero.title;
    $("heroText").textContent = SITE.hero.text;
    $("heroWhatsapp").textContent = SITE.hero.whatsappButton;
    $("heroWhatsapp").href = waLink;
    $("heroEmail").textContent = SITE.hero.emailButton;
    $("heroEmail").href = `mailto:${SITE.email}`;

    $("servicesTitle").textContent = SITE.services.title;
    const grid = $("servicesGrid");
    SITE.services.items.forEach((s) => {
        const card = document.createElement("div");
        card.className = "card";

        const icon = document.createElement("div");
        icon.className = "card-icon";
        icon.textContent = s.icon;

        const h3 = document.createElement("h3");
        h3.textContent = s.name;

        const p = document.createElement("p");
        p.textContent = s.description;

        card.append(icon, h3, p);
        grid.appendChild(card);
    });

    $("contactTitle").textContent = SITE.contact.title;
    $("contactText").textContent = SITE.contact.text;

    const info = $("contactInfo");
    const addLine = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        info.appendChild(div);
    };
    addLine(`📞 <strong>Call/WhatsApp:</strong> ${SITE.contact.phones.join(" | ")}`);
    addLine(`📧 <strong>Email:</strong> ${SITE.email}`);
    addLine(`📍 <strong>Location:</strong> ${SITE.contact.location}`);

    $("footer").innerHTML = `<p>${SITE.footer}</p>`;
})();
