document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  //portofolio
  const WA = "6285179526502";
  const img = (name) => `assets/images/${name}`;
  const photos = [
    img("4.JPG"), img("couple.JPG"), img("graduation.JPG"),
    img("familly.JPG"), img("personal.JPG"), img("2.jpg"),
    img("3.jpg"), img("couple.jpg"), img("5.jpeg"), img("6.jpeg"),
    img("7.jpeg"), img("8.jpeg"), img("9.jpeg"), img("10.jpeg"),
    img("11.jpeg"), img("12.jpeg"), img("13.jpeg"), img("14.jpeg"),
    img("15.jpeg"), img("16.jpeg")
  ];
  const services = [
    {slug:"wedding-organizer",name:"Wedding Organizer",desc:"Pilihan paket dokumentasi dan perlengkapan pernikahan sesuai kebutuhan acara.",image:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",items:["Konsultasi konsep acara","Koordinasi vendor","Rundown dan koordinasi hari-H"],prices:[
      {name:"Bronze",price:"Rp 1.500.000",description:["6 jam kerja","1 fotografer","Album (isi 80)","14 R frame","All file Google Drive"],includes:["Bonus 10 RS (2 pcs)"]},
      {name:"Paket Ekonomis",price:"Rp 1.800.000",description:["Full acara (1 hari)","1 photographer","Album jumbo + tas album"],includes:["Bonus 1 pcs 16 R + frame","2 pcs 10 R","All file Google Drive"]},
      {name:"Silver",price:"Rp 2.600.000",description:["Sehari full","2 fotografer","Album jumbo (isi 120)","16 R frame","10 RS frame","File di dalam memori"],includes:["Bonus 10 RS (3 pcs)"]},
      {name:"Gold",price:"Rp 3.500.000",description:["Full acara","2 fotografer","Album jumlah (isi 180)","20 R frame","16 R frame","10 RS (2 pcs)","All file dalam memori"],includes:["Bonus 10 RS (3 pcs)"]},
      {name:"Ultimate",price:"Rp 8.500.000",description:["Full acara","2 fotografer","2 videografer","Album magazine (album koper)","Album jumlah (isi 120)","Undangan sparasi 500 lembar","Prewedding","Papan bunga akrilik","20 RS frame","20 R frame","16 R frame","12 R frame","10 RS (3 pcs)","All file dalam memori","Video cinematic","Video shooting (broadcast)","Live acara, 2 kamera, 2 TV"],includes:[]}
    ]},
    {slug:"studio-photo",name:"Studio Photo",desc:"Sesi foto studio untuk personal, pasangan, keluarga, wisuda, dan kebutuhan profesional.",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85",items:["Sesi foto studio","Pilihan konsep dan background","Seleksi dan editing foto"],prices:[
      {name:"Paket 1 — File Only",price:"Rp 250.000",description:["1 wisudawan","1 background","Tanpa minimal orang","All file"],includes:[]},
      {name:"Paket 2 — Basic",price:"Rp 500.000",description:["1 wisudawan","1 background","Tanpa minimal orang","All file"],includes:["16 R + frame linen","16 R + frame basic","10 R","Edit file cetak"]},
      {name:"Paket 3 — Premium",price:"Rp 800.000",description:["1 wisudawan","2 background","Tanpa minimal orang","All file"],includes:["18 R + frame linen","16 R + frame linen","16 R + frame basic","10 R","Edit file cetak"]},
      {name:"Paket 4 — Spesial VIP",price:"Rp 1.200.000",description:["1 wisudawan","All background","Tanpa minimal orang","All file"],includes:["20 RS + frame","16 R + frame","16 R + frame basic","10 R + frame","Edit file cetak"]}
    ]},
    {slug:"live-streaming",name:"Live Streaming",desc:"Siaran langsung acara agar keluarga dan tamu dapat mengikuti momen dari mana saja.",image:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=85",portfolioImages:[
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1200&q=85"
    ],items:["Setup kamera dan audio","Operator live streaming","Tautan siaran acara"],prices:[
      {name:"Paket A",price:"Rp 4.500.000",description:["Live streaming","Full acara (1 hari)","2 TV","Record","Flashdisk"],includes:[]},
      {name:"Paket B",price:"Rp 3.000.000",description:["Full acara (1 hari)","2 TV","Record","Flashdisk"],includes:[]},
      {name:"Paket C",price:"Rp 1.800.000",description:["Full acara (1 hari)","Record","Flashdisk"],includes:[]}
    ]},
    {slug:"pelaminan",name:"Pelaminan",desc:"Pilihan paket dekorasi pelaminan, tenda, perlengkapan acara, dan bonus sesuai kebutuhan pesta pernikahan.",image:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85",items:["Dekorasi pelaminan","Tenda dan perlengkapan acara","Konsultasi kebutuhan acara"],packagesInteractive:true,portfolioImages:[img("pelaminan-sample-gold.jpg"),img("pelaminan-sample-royal.jpg"),img("pelaminan-sample-ultimate.jpg"),img("pelaminan-sample-gold2.jpg")],prices:[
      {name:"Paket Gold",price:"Rp 15.000.000",image:img("pelaminan-sample-gold.jpg"),description:["Tenda utama 6×4 (4 tenda)","Tenda kerucut 6×6 (1)","Tenda kerucut tamu (1)","Pelaminan 8 meter","Wedding Get","Pentas keyboard","Meja 12","Kursi 110","Dekorasi akad","Blower 2","Karpet","Alat prasmanan","Tempat es","Termos","Piring"],includes:["Undangan BC 300 lembar","Baju pengantin 2 set"]},
      {name:"Paket Royal",price:"Rp 20.000.000",image:img("pelaminan-sample-royal.jpg"),description:["Tenda ringging 8×12","Tenda kerucut 6×6 (1)","Tenda kerucut tamu (1)","Pelaminan 8 meter","Wedding Get","Pentas keyboard","Meja 13","Kursi 120","Dekorasi akad","Blower 3","Karpet","Alat prasmanan","Tempat es","Termos","Piring"],includes:["Undangan BC 500 lembar","Souvenir 500 pcs","Baju pengantin 2 set"]},
      {name:"Paket Ultimate",price:"Rp 30.000.000",image:img("pelaminan-sample-ultimate.jpg"),description:["Tenda ringging 8×12","Tenda kerucut 6×6 (2)","Tenda kerucut tamu (1)","Pelaminan 9 meter","Wedding Get","Pentas keyboard","Video Booth 360","Meja 13","Kursi 120","Dekorasi akad","Blower 5","Karpet","Alat prasmanan","Tempat es","Termos","Piring"],includes:["Undangan BC 500 lembar","Souvenir 500 pcs","Baju pengantin 2 set","Foto Paket Silver","Video shooting 1","TV 1","MC 1 orang"]}
    ]},
    {slug:"photography",name:"Photography",desc:"Dokumentasi foto untuk wedding, event, wisuda, keluarga, dan momen spesial lainnya.",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2000&q=85",portfolioImages:[
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519225421980-888cb7b5e22f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85"
    ],items:["Fotografer acara","Seleksi foto","Editing warna dan pencahayaan"],prices:[["Half Day","Dokumentasi durasi terbatas","Hubungi kami"],["Full Day","Dokumentasi sehari","Hubungi kami"],["Premium","Dokumentasi sesuai kebutuhan","Hubungi kami"]]},
    {slug:"videografi",name:"Videografi",desc:"Cerita dalam format video dengan pengambilan gambar dan editing yang berkesan.",image:"https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=85",portfolioImages:[
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85"
    ],youtubeVideos:[
      {title:"Ulang Tahun",id:"sdkflNceSM0"},
      {title:"Hasil Karya RHS Studio",id:"vTDaUqdElD4"},
      {title:"Dokumentasi Acara",id:"s-6oTi0wXnA"}
    ],items:["Pengambilan video","Editing highlight","File digital hasil akhir"],prices:[["Highlight Video","Video rangkuman acara","Hubungi kami"],["Cinematic","Konsep cinematic","Hubungi kami"],["Full Documentation","Dokumentasi lebih lengkap","Hubungi kami"]]},
    {slug:"wedding-content-creator",name:"Wedding Content Creator",desc:"Konten vertikal dan momen behind-the-scenes yang cepat dibagikan di media sosial.",image:img("5.jpeg"),items:["Behind the scenes","Konten vertikal untuk media sosial","File konten pilihan"],prices:[
      {name:"2 Jam Kerja",subtitle:"HIGHLIGHT MOMENTS",price:"Rp 450.000",description:["Durasi kerja 2 jam","1 Content Creator","Liputan momen inti acara","Video vertical (9:16)","Editing & coloring profesional","Hasil 3–5 video reels (15–60 detik)"]},
      {name:"5 Jam Kerja",subtitle:"MORE MOMENTS, MORE STORIES",price:"Rp 600.000",description:["Durasi kerja 5 jam","1 Content Creator","Liputan lebih lengkap (persiapan, akad, resepsi)","Video vertical (9:16)","Editing & coloring profesional","Hasil 6–10 video reels (15–60 detik)"]},
      {name:"Full Day",subtitle:"FULL STORY, NOTHING MISSED",price:"Rp 850.000",description:["Durasi kerja ± 8–10 jam (Full Day)","1–2 Content Creator","Liputan lengkap dari persiapan hingga akhir acara","Video vertical (9:16)","Editing & coloring profesional","Hasil 12–20 video reels (15–60 detik)"]},
      {name:"Ultimate",subtitle:"MADE EXTRAORDINARY, JUST FOR YOU",price:"Rp 1.200.000",description:["Durasi kerja full day (± 10–12 jam)","2 Content Creator","Liputan sangat lengkap + detail momen spesial","Video vertical (9:16) & horizontal (16:9)","Editing & coloring sinematik & profesional","Hasil 20–30 video reels (15–60 detik) / highlight video","Menjadi spesial request (konsep, music, style, angle, dll)","Konsultasi konsep sebelum acara"]}
    ]},
    {slug:"photo-booth",name:"Photo Booth",desc:"Pengalaman foto interaktif untuk tamu, lengkap dengan konsep dan hasil yang bisa dibawa pulang.",image:img("6.jpeg"),items:["Setup area photo booth","Properti foto sesuai konsep","Hasil foto digital/cetak sesuai paket"],prices:[["Basic Booth","Setup booth dasar","Hubungi kami"],["Event Booth","Untuk acara dan resepsi","Hubungi kami"],["Custom Booth","Konsep sesuai acara","Hubungi kami"]]},
    {slug:"video-booth",name:"Video Booth",desc:"Video booth untuk merekam ucapan, ekspresi, dan pesan singkat dari para tamu.",image:img("7.jpeg"),items:["Setup video booth","Perekaman video tamu","File video digital"],prices:[["Basic Video","Video booth sederhana","Hubungi kami"],["Event Video","Untuk acara dan resepsi","Hubungi kami"],["Custom Video","Konsep khusus sesuai acara","Hubungi kami"]]}
  ];
  const homeShots = [
    {title:"Wedding Moments",cat:"wedding",img:photos[0],slug:"wedding-organizer"},
    {title:"Studio Portrait",cat:"photo",img:photos[4],slug:"studio-photo"},
    {title:"Live Event",cat:"video",img:photos[6],slug:"live-streaming"},
    {title:"Cinematic Story",cat:"video",img:photos[7],slug:"videografi"},
    {title:"Couple Session",cat:"photo",img:photos[1],slug:"photography"},
    {title:"Photo Booth",cat:"booth",img:photos[9],slug:"photo-booth"},
    {title:"Wedding Details",cat:"wedding",img:photos[5],slug:"pelaminan"},
    {title:"Event Memories",cat:"booth",img:photos[10],slug:"video-booth"}
  ];
  const app = document.getElementById("app");
  const homeMarkup = app.innerHTML;
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  function closeMenu() {
    mobileNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Buka menu");
  }
  menuToggle?.addEventListener("click", () => {
    const open = !mobileNav.classList.contains("open");
    mobileNav.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });
  mobileNav?.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });

  function renderServiceCards() {
    const grid = document.getElementById("serviceGrid");
    if (!grid) return;
    grid.innerHTML = services.map((s,i) => `
      <a class="service-card" href="#/${s.slug}">
        <div class="service-img" style="background-image:url('${s.image}')"></div>
        <div class="service-info"><span>${String(i+1).padStart(2,"0")}</span><h3>${s.name}</h3>
        <p>${s.desc}</p><small class="service-hint">Lihat portfolio & pricelist ↗</small></div>
      </a>`).join("");
  }
  function renderHomePortfolio(filter="all") {
    const grid = document.getElementById("homePortfolio");
    if (!grid) return;
    grid.innerHTML = homeShots.map((p,i) => `
      <a class="portfolio-item ${i===0?"wide":""} ${i===3?"tall":""}" data-category="${p.cat}" href="#/${p.slug}" ${filter!=="all"&&p.cat!==filter?"hidden":""}>
        <div class="portfolio-img" style="background-image:url('${p.img}')"></div><span>${p.title}</span>
      </a>`).join("");
  }
  function renderInstagram() {
    const grid = document.getElementById("igGrid");
    if (grid) grid.innerHTML = photos.slice(0,6).map(p=>`<div class="ig-img" style="background-image:url('${p}')"></div>`).join("");
  }
  function bindFilters() {
    document.querySelectorAll("#homeFilters .filter").forEach(button => {
      button.onclick = () => {
        document.querySelectorAll("#homeFilters .filter").forEach(b=>b.classList.toggle("active",b===button));
        renderHomePortfolio(button.dataset.filter);
      };
    });
  }
  let heroTimer;
  function bindHero() {
    const slides = [...document.querySelectorAll(".hero-slide")];
    if (!slides.length) return;
    let current = 0;
    const show = n => {
      current = (n + slides.length) % slides.length;
      slides.forEach((slide,i)=>slide.classList.toggle("active",i===current));
      document.querySelectorAll(".hero-counter span").forEach((num,i)=>num.classList.toggle("active",i===current));
    };
    const reset = () => { clearInterval(heroTimer); heroTimer=setInterval(()=>show(current+1),5500); };
    document.getElementById("heroPrev")?.addEventListener("click",()=>{show(current-1);reset();});
    document.getElementById("heroNext")?.addEventListener("click",()=>{show(current+1);reset();});
    reset();
  }
  function renderHome(scroll=true) {
    app.innerHTML = homeMarkup;
    document.title = "RHS Studio — Capture Your Meaningful Moments";
    renderServiceCards(); renderHomePortfolio(); renderInstagram(); bindFilters(); bindHero(); closeMenu();
    if (scroll) window.scrollTo({top:0,behavior:"smooth"});
  }
  function renderServicePage(slug) {
    const service = services.find(s=>s.slug===slug);
    if (!service) { renderHome(); return; }
    document.title = `${service.name} — RHS Studio`;
    const index = services.indexOf(service);
    const titleParts = service.name.split(" ");
    if (service.packagesInteractive) {
      renderPelaminanPage(service, index);
      closeMenu();
      window.scrollTo({top:0,behavior:"smooth"});
      return;
    }
    app.innerHTML = `
      <div class="service-page">
        <section class="page-hero" style="background-image:linear-gradient(90deg,#191310e8,#1913106b),url('${service.image}')">
          <div class="container"><div class="breadcrumb"><a href="#home">Home</a> / <a href="#layanan">Layanan</a> / ${service.name}</div>
          <p class="eyebrow light">RHS STUDIO · OUR SERVICES</p><h1>${titleParts.slice(0,-1).join(" ")} <em>${titleParts.slice(-1)}</em></h1>
          <p>${service.desc}</p><a class="btn btn-cream" href="#price-${service.slug}">Lihat Pricelist ↓</a></div>
        </section>
        <section class="page-portfolio"><div class="container">
          <div class="section-head"><div><p class="eyebrow light">PORTFOLIO ${service.name.toUpperCase()}</p><h2>Inspirasi dan hasil <em>karya.</em></h2><p class="section-desc">Geser galeri untuk melihat referensi portfolio layanan ini.</p></div>
          <div class="slider-controls"><button type="button" class="slide-prev" aria-label="Portfolio sebelumnya">‹</button><button type="button" class="slide-next" aria-label="Portfolio berikutnya">›</button></div></div>
          <div class="slide-track-wrap"><div class="slide-track">${Array.from({length:service.portfolioImages?service.portfolioImages.length:8},(_,n)=>{const portfolioImage=service.portfolioImages?service.portfolioImages[n]:photos[(n+index)%photos.length];return `<div class="slide-card"><img loading="lazy" src="${portfolioImage}" alt="${service.name} portfolio ${n+1}" onerror="this.onerror=null;this.src='${photos[(n+index)%photos.length]}'"><span>${service.name} · ${String(n+1).padStart(2,"0")}</span></div>`;}).join("")}</div></div>
        </div></section>
        ${(service.slug === "live-streaming" || service.slug === "videografi") ? `<section class="live-video-section"><div class="container"><div class="live-video-heading"><p class="eyebrow light">INSPIRASI & HASIL KARYA</p><h2>${service.slug === "videografi" ? `Cerita dalam <em>setiap frame.</em>` : `Saksikan <em>momen secara langsung.</em>`}</h2><p>${service.slug === "videografi" ? `Pilihan video dokumentasi dan karya visual RHS Studio.` : `Rekaman live streaming dan dokumentasi acara pilihan RHS Studio.`}</p></div><div class="live-video-grid">${(service.youtubeVideos || [
          {title:"Ulang Tahun",id:"PfsUUI0h7Do"},
          {title:"Hasil Karya RHS Studio",id:"BY1EtVcobQI"},
          {title:"Dokumentasi Acara",id:"NUihAR0s908"}
        ]).map((video,n)=>`<article class="live-video-card"><div class="live-video-frame"><iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="live-video-info"><span>VIDEO 0${n+1}</span><h3>${video.title}</h3><a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener noreferrer">Tonton di YouTube ↗</a></div></article>`).join("")}</div></div></section>` : ""}
        <section class="price-section" id="price-${service.slug}"><div class="container">
          <div class="section-head"><div><p class="eyebrow">DAFTAR HARGA</p><h2>Pilih paket <em>${service.name}.</em></h2><p class="price-note">${service.slug==="studio-photo"?"Paket foto wisuda studio. Detail cetak dan frame tercantum pada setiap paket.":service.slug==="wedding-organizer"?"Paket diurutkan dari harga termurah hingga termahal. Periksa detail layanan dan bonus pada setiap paket.":"Harga dan detail paket dapat dikonsultasikan langsung dengan RHS Studio."}</p></div></div>
          <div class="price-grid ${service.slug==="studio-photo"?"studio-price-grid":""} ${service.slug==="wedding-organizer"?"wo-price-grid":""} ${service.slug==="wedding-content-creator"?"wcc-price-grid":""}">${service.prices.map((p,i)=>{
            const isStudio = service.slug === "studio-photo";
            const isWcc = service.slug === "wedding-content-creator";
            const isLive = service.slug === "live-streaming";
            const isWeddingOrganizer = service.slug === "wedding-organizer";
            const isStructured = isStudio || isWcc || isLive || isWeddingOrganizer;
            const packageName = isStructured ? p.name : p[0];
            const packagePrice = isStructured ? p.price : p[2];
            const featured = isStudio ? i===2 : isWcc ? i===2 : isLive ? i===0 : i===1;
            const details = isStructured ? `${isWcc && p.subtitle ? `<p class="wcc-package-subtitle">${p.subtitle}</p>` : ""}<ul class="package-details">${p.description.map(item=>`<li>${item}</li>`).join("")}</ul>${(isStudio || isWeddingOrganizer) && p.includes.length?`<p class="package-includes-title">${isWeddingOrganizer ? "Bonus / Termasuk:" : "Termasuk:"}</p><ul class="package-details package-includes">${p.includes.map(item=>`<li>${item}</li>`).join("")}</ul>`:""}${isLive ? `<p class="package-includes-title">Catatan:</p><ul class="package-details package-includes"><li>Semua paket tidak termasuk foto</li></ul>` : ""}` : `<p>${p[1]}<br>${service.items[i%service.items.length]}<br>${service.items[(i+1)%service.items.length]}</p>`;
            return `<article class="price-card ${featured?"featured":""}"><span class="tag">${isWeddingOrganizer?"WEDDING ORGANIZER":isStudio?(featured?"PAKET FAVORIT":"STUDIO FOTO WISUDA"):isWcc?(i===3?"PAKET VIP":featured?"PAKET FAVORIT":"WEDDING CONTENT CREATOR"):isLive?(i===0?"PAKET A":i===1?"PAKET B":"PAKET C"):featured?"REKOMENDASI":"PAKET "+String.fromCharCode(65+i)}</span><h3>${packageName}</h3><div class="price">${packagePrice}</div>${details}<a class="btn ${featured?"":"btn-dark"}" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent("Halo RHS Studio, saya ingin bertanya tentang "+packageName+" untuk layanan "+service.name+".")}">Tanya Paket ↗</a></article>`;
          }).join("")}</div>
          <div class="custom-cta"><div><h3>Butuh paket khusus?</h3><p>Konsultasikan tanggal, konsep, lokasi, dan kebutuhan acara Anda.</p></div><a class="btn" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent("Halo RHS Studio, saya ingin konsultasi layanan "+service.name+".")}">Konsultasi WhatsApp ↗</a></div>
        </div></section>
        <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">LAYANAN LAINNYA</p><h2>Jelajahi layanan <em>RHS.</em></h2></div></div><div class="service-grid">${services.filter(s=>s.slug!==service.slug).slice(0,4).map((s,i)=>`<a class="service-card" href="#/${s.slug}"><div class="service-img" style="background-image:url('${s.image}')"></div><div class="service-info"><span>0${i+1}</span><h3>${s.name}</h3><small class="service-hint">Lihat layanan ↗</small></div></a>`).join("")}</div></div></section>
      </div>`;
    bindPortfolioSlider();
    closeMenu();
    window.scrollTo({top:0,behavior:"smooth"});
  }
  function renderPelaminanPage(service, index) {
    const renderPackageDetail = (p, i) => {
      const allItems = [...p.description, ...(p.includes || []).map(x => `Bonus: ${x}`)];
      return `<div class="pelaminan-selected-detail">
        <div class="pelaminan-selected-portfolio">
          <p class="eyebrow">PORTOFOLIO PAKET</p>
          <h3>${p.name}</h3>
          <img src="${p.image}" alt="Contoh portofolio ${p.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/pelaminan-gold.png'">
          <p class="pelaminan-image-caption">Contoh hasil dekorasi untuk ${p.name}. Foto dapat diganti dengan dokumentasi asli RHS STUDIO kapan saja.</p>
        </div>
        <article class="pelaminan-price-card ${i===2?'featured':''}">
          <div class="pelaminan-card-body">
            <div class="pelaminan-card-heading"><div><p class="eyebrow">DAFTAR HARGA</p><h3>${p.name}</h3></div><div class="price">${p.price}</div></div>
            <p class="pelaminan-includes-title">Fasilitas yang termasuk</p>
            <ul class="pelaminan-feature-list">${allItems.map(item=>`<li>${item.replace(/^Bonus: /, '')}</li>`).join('')}</ul>
            <a class="btn" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent('Halo RHS Studio, saya ingin bertanya tentang '+p.name+' ('+p.price+') untuk layanan Pelaminan.')}">Tanya Paket ↗</a>
          </div>
        </article>
      </div>`;
    };
    const tabs = service.prices.map((p,i)=>`<button type="button" class="pelaminan-tab ${i===0?'active':''}" data-package-index="${i}" aria-pressed="${i===0?'true':'false'}">${p.name}</button>`).join('');
    app.innerHTML = `
      <div class="service-page pelaminan-page">
        <section class="pelaminan-hero"><img class="pelaminan-hero-image" src="${service.image}" alt="Contoh dekorasi pelaminan RHS Studio" fetchpriority="high" onerror="this.onerror=null;this.src='assets/images/pelaminan-gold.png'"><div class="pelaminan-hero-overlay"></div><div class="container pelaminan-hero-inner">
          <div class="pelaminan-hero-copy"><div class="breadcrumb"><a href="#home">Home</a> / <a href="#layanan">Layanan</a> / Pelaminan</div>
          <p class="eyebrow">LAYANAN RHS STUDIO</p><h1>Pelaminan<br><em>RHS Studio</em></h1>
          <p>Dekorasi pelaminan yang elegan dan berkesan untuk momen spesial Anda. Pilih paket untuk melihat contoh portofolio, harga, dan fasilitas yang termasuk.</p>
          <div class="pelaminan-benefits"><span><b>✿</b><strong>Desain Elegan</strong><small>Sesuai tema acara</small></span><span><b>◇</b><strong>Paket Lengkap</strong><small>Fasilitas terperinci</small></span><span><b>♧</b><strong>Tim Profesional</strong><small>Berpengalaman</small></span></div>
          <a class="btn" href="#pelaminan-packages">Lihat Paket Pelaminan ↓</a></div>
        </div></section>
        <section class="pelaminan-video-section pelaminan-inspiration-section" aria-labelledby="pelaminan-video-title">
          <div class="container">
            <div class="pelaminan-video-heading">
              <p class="eyebrow">GALERI VISUAL</p>
              <h2 id="pelaminan-video-title">Inspirasi & <em>Hasil Karya Pelaminan</em></h2>
              <p>Jelajahi inspirasi dekorasi dan contoh visual pelaminan sebelum memilih paket RHS Studio.</p>
            </div>
            <div class="pelaminan-inspiration-grid">${service.portfolioImages.map((image,n)=>`<figure class="pelaminan-inspiration-card"><img src="${image}" alt="Inspirasi pelaminan ${n+1}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/pelaminan-gold.png'"><figcaption>Inspirasi Pelaminan · 0${n+1}</figcaption></figure>`).join("")}</div>
          </div>
        </section>
        <section class="pelaminan-packages-section" id="pelaminan-packages"><div class="container">
          <div class="section-head center-head"><div><p class="eyebrow">PORTOFOLIO & DAFTAR HARGA</p><h2>Pilih paket <em>pelaminan.</em></h2><p class="price-note">Tekan nama paket. Portofolio ditampilkan terlebih dahulu, lalu rincian harga dan fasilitas di bawahnya.</p></div></div>
          <div class="pelaminan-tabs" role="tablist" aria-label="Pilihan paket pelaminan">${tabs}</div>
          <div id="pelaminan-package-detail" aria-live="polite">${renderPackageDetail(service.prices[0],0)}</div>
          <div class="custom-cta"><div><h3>Butuh penyesuaian paket?</h3><p>Konsultasikan tanggal, lokasi, konsep, dan kebutuhan acara Anda.</p></div><a class="btn" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent('Halo RHS Studio, saya ingin konsultasi layanan Pelaminan.')}">Konsultasi WhatsApp ↗</a></div>
        </div></section>
      </div>`;
    const tabsWrap = document.querySelector('.pelaminan-tabs');
    const detail = document.getElementById('pelaminan-package-detail');
    if (tabsWrap && detail) {
      tabsWrap.addEventListener('click', (event) => {
        const button = event.target.closest('[data-package-index]');
        if (!button) return;
        const selectedIndex = Number(button.dataset.packageIndex);
        const selectedPackage = service.prices[selectedIndex];
        if (!selectedPackage) return;
        tabsWrap.querySelectorAll('.pelaminan-tab').forEach(tab => {
          const active = tab === button;
          tab.classList.toggle('active', active);
          tab.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        detail.innerHTML = renderPackageDetail(selectedPackage, selectedIndex);
      });
    }
    closeMenu();
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function bindPortfolioSlider() {
    document.querySelectorAll(".slide-track-wrap").forEach(wrap=>{
      const track=wrap.querySelector(".slide-track");
      const parent=wrap.closest(".page-portfolio");
      let offset=0;
      const step=()=>{const card=track.querySelector(".slide-card");return card?card.getBoundingClientRect().width+15:0;};
      const max=()=>Math.max(0,track.scrollWidth-wrap.clientWidth);
      const update=()=>{offset=Math.max(0,Math.min(max(),offset));track.style.transform=`translateX(-${offset}px)`;};
      parent.querySelector(".slide-next").onclick=()=>{offset+=step();update();};
      parent.querySelector(".slide-prev").onclick=()=>{offset-=step();update();};
      let startX=0;
      wrap.addEventListener("touchstart",e=>{startX=e.touches[0].clientX;},{passive:true});
      wrap.addEventListener("touchend",e=>{const delta=startX-e.changedTouches[0].clientX;if(Math.abs(delta)>35){offset+=delta>0?step():-step();update();}},{passive:true});
      window.addEventListener("resize",update);
    });
  }
  function route() {
    const match=location.hash.match(/^#\/([^?]+)/);
    if(match) renderServicePage(decodeURIComponent(match[1]));
    else if(document.querySelector(".service-page") || !document.getElementById("serviceGrid")) renderHome(false);
    closeMenu();
  }
  renderServiceCards();renderHomePortfolio();renderInstagram();bindFilters();bindHero();
  window.addEventListener("hashchange",route);
  if(location.hash.startsWith("#/")) renderServicePage(location.hash.slice(2));
});