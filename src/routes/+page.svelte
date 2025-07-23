<script>
  import hero from "$lib/assets/heroImage.png";
  import ohOslo from "$lib/assets/OhOhOslo.png";
  import sponserCode from "$lib/assets/GrasrotQR.png";
</script>

<section
  id="hero_section"
  class="px-10 xl:px-0 flex flex-col lg:flex-row lg:gap-4 justify-between lg:max-w-[1090px]"
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

<section
  class="my-14 text-black lg:flex justify-between px-10 lg:px-30 py-4 lg:py-10"
  style="background-color: #FFCB4D;"
>
  <div>
    <h2 class="text-2xl lg:text-4xl">Eventkalender</h2>
  </div>
  <div>
    <img class="hidden lg:block" src={ohOslo} alt="CTA text Oslo team chant" />
  </div>
</section>

<section class="text-white mx-10 mb-14">
  <div class="flex flex-col lg:flex-row gap-9">
    <div class="flex gap-4">
      <img src={sponserCode} alt="QR code to sponsor Oslo Roller Derby" />
      <div>
        <h3 class="text-2xl">Støtt oss med din grasrotandel</h3>
        <p class="mt-2">
          Du kan bli grasrotgiver i alle Norsk Tippings kanaler eller ved å
          sende SMS “Grasrotandelen 997503465” til 600000
        </p>
      </div>
    </div>

    <div>
      <h3 class="text-2xl">Vil du bli sponsor?</h3>
      <p class="mt-2">
        Ønsker du å støtte klubben og samtidig få med logo på kamper og andre
        arrangementer? Send oss en mail til <a
          href="mailto:spons@oslorollerderby.no"
          class="text-[#EF7A33]">spons@oslorollerderby.no</a
        >
      </p>
    </div>
  </div>
</section>

<style>
  #hero_section {
    margin: 0 auto;
  }
</style>
