<script lang="ts">
  import "../app.css";
 import Header from "$lib/components/header/header.svelte";

  let { children } = $props();
</script>

<Header />
<main class="mx-20">
  {@render children()}
</main>
