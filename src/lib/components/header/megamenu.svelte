<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let show = false;

  function handleClick() {
    dispatch("close");
  }

  $: menuClasses = `p-4 fixed top-0 right-0 w-screen h-screen bg-orange-500 transform transition-transform duration-500 md:hidden ${
    show ? "translate-x-0" : "translate-x-full"
  }`;
</script>

<div class={menuClasses} role="dialog" aria-modal="true">
  <button
    aria-label="Close menu"
    class="fixed top-8 right-4 p-3 text-black text-xl transition"
    on:click={handleClick}
  >
    <i class="fas fa-xmark fa-xl"></i>
  </button>

  <nav>
    <ul class="p-4 mt-8 text-black text-xl">
      <li><a href="/" on:click={handleClick}>Hjem</a></li>
      <li><a href="/join" on:click={handleClick}>Bli medlem</a></li>
      <li><a href="/contact" on:click={handleClick}>Kontakt</a></li>
      <li><a href="/about" on:click={handleClick}>Om oss</a></li>
    </ul>
  </nav>
</div>
