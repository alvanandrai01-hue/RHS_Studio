document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  //portofolio
  const WA = "6285179526502";
  const img = (name) => `assets/images/${name}`;
  const photos = [
    img("2.JPG"), img("couple.JPG"), img("graduation.JPG"),
    img("familly.JPG"), img("personal.JPG"), img("2.jpg"),
    img("3.jpg"), img("couple.jpg"), img("5.jpeg"), img("6.jpeg"),
    img("7.jpeg"), img("8.jpeg"), img("9.jpeg"), img("10.jpeg"),
    img("11.jpeg"), img("12.jpeg"), img("13.jpeg"), img("14.jpeg"),
    img("15.jpeg"), img("16.jpeg")
  ];
  const services = [
    {slug:"wedding-organizer",name:"Wedding Organizer",desc:"Perencanaan, koordinasi, dan pelaksanaan hari pernikahan yang tertata.",image:img("wedding.JPG"),items:["Konsultasi konsep acara","Koordinasi vendor","Rundown dan koordinasi hari-H"],prices:[["Paket A","Konsultasi & koordinasi dasar","Hubungi kami"],["Paket B","Koordinasi acara dan vendor","Hubungi kami"],["Paket C","Pendampingan menyeluruh","Hubungi kami"]]},
    {slug:"studio-photo",name:"Studio Photo",desc:"Sesi foto studio untuk personal, pasangan, keluarga, wisuda, dan kebutuhan profesional.",image:img("personal.JPG"),items:["Sesi foto studio","Pilihan konsep dan background","Seleksi dan editing foto"],prices:[["Basic Session","Sesi foto singkat","Hubungi kami"],["Standard Session","Sesi lebih lengkap","Hubungi kami"],["Premium Session","Konsep dan hasil pilihan","Hubungi kami"]]},
    {slug:"live-streaming",name:"Live Streaming",desc:"Siaran langsung acara agar keluarga dan tamu dapat mengikuti momen dari mana saja.",image:img("3.jpg"),items:["Setup kamera dan audio","Operator live streaming","Tautan siaran acara"],prices:[["Single Camera","Setup satu kamera","Hubungi kami"],["Multi Camera","Setup multi kamera","Hubungi kami"],["Premium Stream","Kebutuhan siaran khusus","Hubungi kami"]]},
    {slug:"photography",name:"Photography",desc:"Dokumentasi foto untuk wedding, event, wisuda, keluarga, dan momen spesial lainnya.",image:img("couple.JPG"),items:["Fotografer acara","Seleksi foto","Editing warna dan pencahayaan"],prices:[["Half Day","Dokumentasi durasi terbatas","Hubungi kami"],["Full Day","Dokumentasi sehari","Hubungi kami"],["Premium","Dokumentasi sesuai kebutuhan","Hubungi kami"]]},
    {slug:"videografi",name:"Videografi",desc:"Cerita dalam format video dengan pengambilan gambar dan editing yang berkesan.",image:img("4.jpg"),items:["Pengambilan video","Editing highlight","File digital hasil akhir"],prices:[["Highlight Video","Video rangkuman acara","Hubungi kami"],["Cinematic","Konsep cinematic","Hubungi kami"],["Full Documentation","Dokumentasi lebih lengkap","Hubungi kami"]]},
    {slug:"wedding-content-creator",name:"Wedding Content Creator",desc:"Konten vertikal dan momen behind-the-scenes yang cepat dibagikan di media sosial.",image:img("5.jpeg"),items:["Behind the scenes","Konten vertikal untuk media sosial","File konten pilihan"],prices:[["Essential","Konten momen inti","Hubungi kami"],["Signature","Konten lebih lengkap","Hubungi kami"],["Premium Creator","Kebutuhan konten khusus","Hubungi kami"]]},
    {slug:"photo-booth",name:"Photo Booth",desc:"Pengalaman foto interaktif untuk tamu, lengkap dengan konsep dan hasil yang bisa dibawa pulang.",image:img("6.jpeg"),items:["Setup area photo booth","Properti foto sesuai konsep","Hasil foto digital/cetak sesuai paket"],prices:[["Basic Booth","Setup booth dasar","Hubungi kami"],["Event Booth","Untuk acara dan resepsi","Hubungi kami"],["Custom Booth","Konsep sesuai acara","Hubungi kami"]]},
    {slug:"video-booth",name:"Video Booth",desc:"Video booth untuk merekam ucapan, ekspresi, dan pesan singkat dari para tamu.",image:img("7.jpeg"),items:["Setup video booth","Perekaman video tamu","File video digital"],prices:[["Basic Video","Video booth sederhana","Hubungi kami"],["Event Video","Untuk acara dan resepsi","Hubungi kami"],["Custom Video","Konsep khusus sesuai acara","Hubungi kami"]]}
  ];
  const homeShots = [
    {title:"Wedding Moments",cat:"wedding",img:photos[0]},
    {title:"Studio Portrait",cat:"photo",img:photos[4]},
    {title:"Live Event",cat:"video",img:photos[6]},
    {title:"Cinematic Story",cat:"video",img:photos[7]},
    {title:"Couple Session",cat:"photo",img:photos[1]},
    {title:"Photo Booth",cat:"booth",img:photos[9]},
    {title:"Wedding Details",cat:"wedding",img:photos[5]},
    {title:"Event Memories",cat:"booth",img:photos[10]}
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
      <a class="portfolio-item ${i===0?"wide":""} ${i===3?"tall":""}" data-category="${p.cat}" href="#/${services[Math.min(i,7)].slug}" ${filter!=="all"&&p.cat!==filter?"hidden":""}>
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
          <div class="slide-track-wrap"><div class="slide-track">${Array.from({length:8},(_,n)=>`<div class="slide-card"><img loading="lazy" src="${photos[(n+index)%photos.length]}" alt="${service.name} portfolio ${n+1}"><span>${service.name} · ${String(n+1).padStart(2,"0")}</span></div>`).join("")}</div></div>
        </div></section>
        <section class="price-section" id="price-${service.slug}"><div class="container">
          <div class="section-head"><div><p class="eyebrow">DAFTAR HARGA</p><h2>Pilih paket <em>${service.name}.</em></h2><p class="price-note">Harga dan detail paket pada bagian ini masih berupa template. Silakan ganti dengan pricelist resmi sebelum website dipublikasikan.</p></div></div>
          <div class="price-grid">${service.prices.map((p,i)=>`<article class="price-card ${i===1?"featured":""}"><span class="tag">${i===1?"REKOMENDASI":"PAKET "+String.fromCharCode(65+i)}</span><h3>${p[0]}</h3><div class="price">${p[2]}</div><p>${p[1]}<br>${service.items[i%service.items.length]}<br>${service.items[(i+1)%service.items.length]}</p><a class="btn ${i===1?"":"btn-dark"}" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent("Halo RHS Studio, saya ingin bertanya tentang "+p[0]+" untuk layanan "+service.name+".")}">Tanya Paket ↗</a></article>`).join("")}</div>
          <div class="custom-cta"><div><h3>Butuh paket khusus?</h3><p>Konsultasikan tanggal, konsep, lokasi, dan kebutuhan acara Anda.</p></div><a class="btn" target="_blank" rel="noopener" href="https://wa.me/${WA}?text=${encodeURIComponent("Halo RHS Studio, saya ingin konsultasi layanan "+service.name+".")}">Konsultasi WhatsApp ↗</a></div>
        </div></section>
        <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">LAYANAN LAINNYA</p><h2>Jelajahi layanan <em>RHS.</em></h2></div></div><div class="service-grid">${services.filter(s=>s.slug!==service.slug).slice(0,4).map((s,i)=>`<a class="service-card" href="#/${s.slug}"><div class="service-img" style="background-image:url('${s.image}')"></div><div class="service-info"><span>0${i+1}</span><h3>${s.name}</h3><small class="service-hint">Lihat layanan ↗</small></div></a>`).join("")}</div></div></section>
      </div>`;
    bindPortfolioSlider();
    closeMenu();
    window.scrollTo({top:0,behavior:"smooth"});
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