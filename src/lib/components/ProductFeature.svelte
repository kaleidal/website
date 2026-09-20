<script lang="ts">
  let { number, name, title, description, href, label, kind } = $props<{
    number: string; name: string; title: string; description: string;
    href: string; label: string; kind: 'raffi' | 'nook' | 'conlanger' | 'limbo';
  }>();
</script>

<article class="product" class:reverse={kind === 'limbo' || kind === 'conlanger'}>
  <a class="visual {kind}" {href} aria-label={`Explore ${name}`}>
    {#if kind === 'limbo'}
      <img src="/products/limbo.webp" alt="Limbo’s desktop library and download manager" width="1200" height="771" loading="lazy" />
      <span class="visual-name">limbo<span class="dot">.</span></span>
    {:else if kind === 'raffi'}
      <img src="/products/raffi.webp" alt="Raffi’s film discovery interface" width="1200" height="640" loading="lazy" />
      <span class="visual-name">raffi<span class="dot">.</span></span>
    {:else if kind === 'nook'}
      <div class="diary" aria-hidden="true">
        <div class="diary-top"><span>nook</span><span>Just for you.</span></div>
        <div class="diary-date">Sunday, September 20</div>
        <p>The little things.</p>
        <div class="handwriting">A slow morning. The window open.<br />A song I’d forgotten I loved.<br /><br />More days like this, please.</div>
        <span class="flower">✳</span>
      </div>
    {:else}
      <div class="language-art" aria-hidden="true">
        <div class="glyphs"><span>æ</span><span>ʃ</span><span>ŋ</span></div>
        <div class="language-line"><span>Sounds become words.</span><span>Words become worlds.</span></div>
        <div class="word">hello<span>→</span><em>?</em></div>
      </div>
    {/if}
    <span class="visit-arrow" aria-hidden="true">↗</span>
  </a>
  <div class="copy">
    <div class="product-name"><span>{name}</span><span class="number">{number}</span></div>
    <h3 class="display">{title}</h3>
    <p class="description">{description}</p>
    <a class="product-link" {href}>{label}<span class="arrow" aria-hidden="true">↗</span></a>
  </div>
</article>

<style>
  .product { display: grid; grid-template-columns: 1.5fr 1fr; align-items: center; gap: clamp(32px, 6vw, 100px); padding-block: 64px; }
  :global(.product) + .product { border-top: 1px solid #19191730; }
  .reverse { grid-template-columns: 1fr 1.5fr; }
  .reverse .visual { order: 2; }
  .visual { position: relative; aspect-ratio: 1.3; overflow: hidden; display: flex; align-items: center; justify-content: center; }
  .limbo { background: #bdce89; }
  .limbo .visual-name { color: var(--color-ink); }
  .limbo .dot { color: #536d22; }
  .limbo img { width: 112%; max-width: none; height: auto; transform: translate(9%, 21%) rotate(5deg); border-radius: 8px; box-shadow: 0 25px 60px #29341540; transition: transform .5s ease; }
  .limbo:hover img { transform: translate(7%, 18%) rotate(2deg); }
  .raffi { background: #24252a; }
  .raffi img { width: 125%; max-width: none; height: 77%; object-fit: cover; object-position: top left; transform: translate(11%, 15%) rotate(-7deg); border: 1px solid #ffffff30; border-radius: 10px; box-shadow: 0 25px 70px #0009; transition: transform .5s ease; }
  .raffi:hover img { transform: translate(9%, 12%) rotate(-4deg); }
  .visual-name { position: absolute; top: 5%; left: 7%; color: white; font: 600 clamp(42px, 5vw, 72px)/1 var(--font-display); letter-spacing: -.05em; }
  .dot { color: #ff9759; }
  .visit-arrow { position: absolute; bottom: 18px; right: 22px; font-size: 28px; color: white; mix-blend-mode: difference; }
  .nook { background: #d3decb; }
  .diary { position: relative; width: 76%; min-height: 75%; padding: 7%; background: #fffaf0; box-shadow: 0 12px 30px #31402617; transform: rotate(-6deg) translateY(6%); transition: transform .5s ease; }
  .nook:hover .diary { transform: rotate(-3deg) translateY(3%); }
  .diary-top { display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; border-bottom: 1px solid #3332; }
  .diary-top span:first-child { font: 650 30px var(--font-display); letter-spacing: -.07em; }
  .diary-top span:last-child { font-size: 11px; }
  .diary-date { margin-top: 28px; font-size: 11px; color: #65675b; }
  .diary p { font: 500 clamp(21px, 2.7vw, 38px) var(--font-display); letter-spacing: -.05em; margin: 10px 0 18px; }
  .handwriting { font-family: Georgia, serif; font-style: italic; font-size: clamp(12px, 1.25vw, 19px); line-height: 1.8; color: #54594c; }
  .flower { position: absolute; right: 24px; bottom: 12px; font-size: 64px; color: #849d6e; }
  .conlanger { background: #c1c2ee; }
  .language-art { width: 100%; padding: 8%; }
  .glyphs { display: flex; gap: 9%; align-items: center; font: 500 clamp(65px, 11vw, 150px)/1 var(--font-display); letter-spacing: -.08em; }
  .glyphs span:nth-child(2) { transform: rotate(12deg); color: #5c4a8a; }
  .glyphs span:nth-child(3) { transform: rotate(-12deg); }
  .language-line { display: flex; flex-direction: column; font-size: clamp(12px, 1.2vw, 17px); line-height: 1.5; padding: 7% 0; border-bottom: 1px solid #19191740; }
  .word { display: flex; align-items: center; justify-content: space-between; font: 500 clamp(42px, 6vw, 80px)/1.3 var(--font-display); letter-spacing: -.06em; }
  .word em { font-family: Georgia, serif; }
  .product-name { display: flex; align-items: center; gap: 16px; margin-bottom: 28px; font-size: 18px; }
  .number { color: #6f6f67; font-size: 12px; }
  h3 { font-size: clamp(40px, 4vw, 64px); max-width: 440px; }
  .description { color: #606059; font-size: 17px; line-height: 1.7; margin-top: 24px; max-width: 350px; }
  .product-link { display: inline-flex; gap: 32px; align-items: center; border-bottom: 1px solid; padding-block: 12px; margin-top: 22px; font-size: 16px; }
  @media (max-width: 700px) {
    .product, .reverse { grid-template-columns: 1fr; gap: 30px; padding-block: 38px; }
    .reverse .visual { order: 0; }
    .visual { aspect-ratio: 1.2; }
    .product-name { margin-bottom: 16px; }
    .description { max-width: 100%; }
    .glyphs { font-size: 27vw; }
    .word { font-size: 17vw; }
    .handwriting { font-size: 15px; }
    .diary p { font-size: 28px; }
  }
</style>
