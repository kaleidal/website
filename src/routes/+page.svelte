<script lang="ts">
  import ProductFeature from '$lib/components/ProductFeature.svelte';
</script>

<svelte:head>
  <title>Kaleidal — Software with a little personality.</title>
  <meta name="description" content="We’re Kaleidal, an independent software studio making room for what you love. Meet Raffi, Limbo, Nook, and Conlanger." />
  <meta property="og:title" content="Kaleidal — Software with a little personality." />
  <meta property="og:description" content="Watch something. Write something. Invent a whole language. Meet the things we’re making." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://kaleid.al/kaleidal.png" />
  <meta property="og:url" content="https://kaleid.al/" />
  <link rel="canonical" href="https://kaleid.al/" />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<div id="top" class="hero bg-red">
  <header class="shell py-7 md:py-9">
    <nav aria-label="Main navigation" class="flex items-center gap-6 text-sm md:gap-10 md:text-base">
      <a href="#projects">Our projects</a>
      <a href="#about">About us</a>
      <a href="https://github.com/kaleidal" class="github-link">GitHub <span class="arrow" aria-hidden="true">↗</span></a>
    </nav>
  </header>
  <main id="main">
    <section class="hero-content shell" aria-labelledby="hero-heading">
      <div class="hero-main">
        <h1 id="hero-heading" class="display">Software<br />with a little<br /><span class="personality">personality.</span></h1>
        <div class="brand-art" aria-hidden="true"><img src="/kaleidal.png" alt="" width="512" height="512" fetchpriority="high" /></div>
      </div>
      <div class="hero-bottom">
        <p>We’re Kaleidal. We make things for the things you love.<br class="desktop-break" /> Watching, writing, and getting a little carried away.</p>
        <a href="#projects" class="explore-link">Meet the projects <span aria-hidden="true">↓</span></a>
      </div>
    </section>
    <section id="projects" class="projects bg-paper">
      <div class="shell">
        <div class="section-heading"><h2 class="display">A few things<br />we’re putting into the world.</h2></div>
        <ProductFeature number="01" name="Raffi" title="For your next “one more episode.”" description="A streaming client that makes a night in feel like a good plan. Discover films and series, keep your favorites close, and watch together." href="https://raffi.al" label="Meet Raffi" kind="raffi" />
        <ProductFeature number="02" name="Limbo" title="Find it. Get it. Keep it." description="A home for your downloads. Browse, queue downloads and torrents, and keep your software and files together in one desktop app." href="https://limbo.kaleid.al" label="Discover Limbo" kind="limbo" />
        <ProductFeature number="03" name="Nook" title="A little space for your life." description="A private diary for ordinary days, big feelings, and everything in between. Your words, tucked away with end-to-end encryption." href="https://nook.you" label="Find your Nook" kind="nook" />
        <ProductFeature number="04" name="Conlanger" title="A world in your own words." description="Start with a sound. End up with a language. A toolkit for building vocabulary, shaping grammar, and following your imagination somewhere new." href="https://github.com/kaleidal/conlanger" label="Explore Conlanger" kind="conlanger" />
      </div>
    </section>
    <section id="about" class="about bg-ink text-paper">
      <div class="shell about-inner">
        <h2 class="display">Small studio.<br />Curious by nature.</h2>
        <p class="about-copy">We’re an independent software studio making things we love to use. A few different interests, the same care.</p>
      </div>
      <footer class="shell">
        <nav class="footer-actions" aria-label="Footer navigation"><a href="https://github.com/kaleidal">Find us on GitHub <span class="arrow" aria-hidden="true">↗</span></a><a href="#top">Back to top ↑</a></nav>
        <p class="footer-word display">Stay curious<span>.</span></p>
      </footer>
    </section>
  </main>
</div>

<style>
  nav a { transition: opacity 160ms; }
  nav a:hover { opacity: .65; }
  .hero-content { padding-top: clamp(50px, 8vw, 128px); padding-bottom: 38px; }
  .hero-main { display: grid; grid-template-columns: 1.3fr 1fr; align-items: center; }
  h1 { position: relative; z-index: 1; font-size: clamp(72px, 8.1vw, 125px); font-weight: 650; }
  .personality { white-space: nowrap; }
  .brand-art { transform: rotate(-9deg); padding-left: 20px; }
  .brand-art img { display: block; width: 100%; height: auto; mix-blend-mode: multiply; }
  .hero-bottom { display: flex; justify-content: space-between; align-items: end; gap: 28px; margin-top: 56px; padding-top: 25px; border-top: 1px solid #19191750; }
  .hero-bottom p { font-size: 17px; line-height: 1.65; }
  .explore-link { display: flex; align-items: center; gap: 36px; white-space: nowrap; padding-bottom: 4px; }
  .explore-link span { font-size: 27px; transition: transform .2s; }
  .explore-link:hover span { transform: translateY(4px); }
  .projects { padding-block: 96px 64px; }
  .section-heading { padding-bottom: 12px; }
  .section-heading h2 { font-size: clamp(36px, 4vw, 60px); letter-spacing: -.055em; line-height: 1.08; }
  .about { padding-top: 112px; overflow: hidden; }
  .about-inner { display: grid; grid-template-columns: 1.5fr 1fr; gap: 7%; align-items: center; padding-bottom: 64px; }
  .about h2 { font-size: clamp(50px, 5.5vw, 82px); }
  .about-copy { max-width: 360px; font-size: 18px; line-height: 1.7; color: #b7b7af; }
  .footer-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 32px; padding-bottom: 48px; font-size: 14px; }
  .footer-actions a { display: inline-flex; gap: 12px; align-items: center; }
  .footer-word { color: var(--color-red); font-size: clamp(75px, 15vw, 223px); line-height: 1; white-space: nowrap; padding-block: 12px 32px; }
  .footer-word span { color: var(--color-paper); }
  @media (prefers-reduced-motion: no-preference) {
    .hero-main { animation: arrive .8s ease both; }
    @keyframes arrive { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
  }
  @media (min-width: 1600px) { .hero-content { padding-top: 100px; } }
  @media (max-width: 900px) {
    h1 { font-size: 8.7vw; }
    .hero-bottom { margin-top: 31px; }
    .hero-bottom p { max-width: 370px; font-size: 15px; }
    .desktop-break { display: none; }
  }
  @media (max-width: 600px) {
    .github-link { display: none; }
    .hero-content { padding-top: 40px; }
    .hero-main { display: flex; flex-direction: column; align-items: stretch; }
    h1 { font-size: 15vw; }
    .brand-art { width: 58%; align-self: end; padding: 0; margin-block: -6px -12px; }
    .hero-bottom { margin-top: 6px; align-items: start; flex-direction: column; gap: 22px; }
    .hero-bottom p { font-size: 15px; }
    .explore-link { width: 100%; justify-content: space-between; }
    .projects { padding-block: 55px 24px; }
    .section-heading h2 { font-size: 34px; }
    .about { padding-top: 64px; }
    .about-inner { grid-template-columns: 1fr; gap: 24px; padding-bottom: 36px; }
    .about h2 { font-size: 49px; }
    .about-copy { font-size: 17px; }
    .footer-actions { gap: 28px; padding-bottom: 36px; }
    .footer-word { font-size: 15.4vw; padding-bottom: 24px; }
  }
</style>
