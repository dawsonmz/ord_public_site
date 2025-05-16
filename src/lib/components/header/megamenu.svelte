<script lang="ts">
  let { show, handleClick } = $props();
  let menuClasses = $derived(
    `p-4 fixed top-0 right-0 w-screen h-screen bg-orange-500 transform transition-transform duration-500 md:hidden
    ${show ? "translate-x-0" : "translate-x-full"}`
  );
</script>

<div class={menuClasses} role="dialog" aria-modal="true">
  <button
    aria-label="Close menu"
    class="fixed top-8 right-4 p-3 text-black text-xl transition"
    onclick={handleClick}
  >
    <i class="fas fa-xmark fa-xl"></i>
  </button>

  <nav>
    <ul class="p-4 mt-8 text-black text-xl">
      <li><a href="/" onclick={handleClick}>Hjem</a></li>
      <li><a href="/join" onclick={handleClick}>Bli medlem</a></li>
      <li><a href="/contact" onclick={handleClick}>Kontakt</a></li>
      <li><a href="/about" onclick={handleClick}>Om oss</a></li>
    </ul>
  </nav>
</div>
