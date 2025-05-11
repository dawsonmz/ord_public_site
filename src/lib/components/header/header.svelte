<script lang="ts">
  import logo from "$lib/assets/ord-logo.svg";
  import Megamenu from "./megamenu.svelte";

  let show = false;

  function handleClick() {
    show = !show;
  }

  $: menuClasses = `p-4 fixed top-0 right-0 w-screen h-screen bg-orange-500 transform transition-transform duration-500 md:hidden ${
    show ? "translate-x-0" : "translate-x-full"
  }`;
</script>

<header class="flex justify-between m-4 items-center">
  <!-- Mobile Sliding Menu -->
  <div class={menuClasses} role="dialog" aria-modal="true">
    <button
      aria-label="Close menu"
      class="fixed top-8 right-4 p-3 text-black text-xl transition"
      on:click={handleClick}
    >
      <i class="fas fa-xmark fa-xl"></i>
    </button>
    <Megamenu on:close={() => (show = false)} />
  </div>

  <!-- Logo -->
  <img src={logo} alt="Logo of a woman in a helmet" class="w-24 h-24" />

  <!-- Mobile Menu Toggle Button -->
  <button
    on:click={handleClick}
    aria-label="Open menu"
    aria-expanded={show}
    class="md:hidden {show ? 'hidden' : ''}"
  >
    <i class="fa-solid fa-bars fa-2xl"></i>
  </button>

  <!-- Desktop Navigation -->
  <nav class="hidden md:flex p-4 text-orange text-xl gap-4">
    <ul class="flex gap-4">
      <li><a class="hover:[color:#ffcc4d]" href="/">Hjem</a></li>
      <li><a class="hover:[color:#ffcc4d]" href="/join">Bli medlem</a></li>
      <li><a class="hover:[color:#ffcc4d]" href="/about">Kontakt</a></li>
      <li><a class="hover:[color:#ffcc4d]" href="/about">Om oss</a></li>
    </ul>
  </nav>
</header>
