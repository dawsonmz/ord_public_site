<script>
  import hero from "$lib/assets/heroImage.png";
</script>

<section
  class="flex flex-col lg:flex-row lg:gap-4 justify-between lg:max-w-[1090px]"
>
  <img
    class="hidden lg:block lg:w-100"
    src={hero}
    alt="Skater in uniform with a helmet"
  />
  <div class="flex flex-col gap-6 mt-10 lg:mt-25">
    <h1 class="text-4xl lg:text-6xl text-white leading-tight font-bold">
      RÅ<br />
      INKLUDERENDE<br />
      VELORGANISERTE<br />
    </h1>
    <p class="text-white text-lg lg:text-xl max-w-[586px]">
      Roller Derby er en fullkontaktsport på rulleskøyter, og vi er hovedstadens
      klubb. Vi har nybegynnerkurs og en plass til alle. Om du vil være spiller,
      dommer med eller uten hjul.
      <br /><br />
      Bli med oss da vel!
    </p>
    <a
      class="text-black p-6 text-lg mt-4 rounded-md text-center max-w-[420px]"
      style="background-color: #FFCB4D;"
      href="/about"
    >
      Høres spennede ut? Finn ut mer!
    </a>
  </div>
</section>

<style>
  section {
    margin: 0 auto;
    margin-top: 80px;
  }
</style>
