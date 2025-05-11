<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("close");
  }
</script>

<nav>
  <ul class="p-4 mt-8 text-black text-xl">
    <li><a href="/" on:click={handleClick}>Hjem</a></li>
    <li><a href="/join" on:click={handleClick}>Bli medlem</a></li>
    <li><a href="/contact" on:click={handleClick}>Kontakt</a></li>
    <li><a href="/about" on:click={handleClick}>Om oss</a></li>
  </ul>
</nav>
