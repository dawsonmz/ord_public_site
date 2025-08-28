<script lang="ts">
  import logo from "$lib/assets/ord-logo.svg";
  import Megamenu from "./megamenu.svelte";

  let show = $state(false);

  function handleClick() {
    show = !show;
  }
</script>

<header class="flex justify-between m-8 items-center">
  <!-- Mobile Sliding Menu -->
  <Megamenu {show} {handleClick} />

  <!-- Logo -->
  <img src={logo} alt="Logo of a woman in a helmet" class="w-24 h-24" />

  <!-- Mobile Menu Toggle Button -->
  <button
    onclick={handleClick}
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
