<script>
  import hero from "$lib/assets/heroImage.png";
  import ohOslo from "$lib/assets/OhOhOslo.png";
  import sponserCode from "$lib/assets/GrasrotQR.png";
</script>

<section class="hero_section">
  <img src={hero} alt="Skater in uniform with a helmet" />
  <div>
    <h1>
      RÅ<br />
      INKLUDERENDE<br />
      VELORGANISERTE<br />
    </h1>
    <p>
      Roller Derby er en fullkontaktsport på rulleskøyter, og vi er hovedstadens
      klubb. Vi har nybegynnerkurs og en plass til alle. Om du vil være spiller,
      dommer med eller uten hjul.
      <br /><br />
      Bli med oss da vel!
    </p>
    <a href="/about"> Høres spennede ut? Finn ut mer! </a>
  </div>
</section>

<section class="event_section">
  <div>
    <h2>Eventkalender</h2>
  </div>
  <div>
    <img src={ohOslo} alt="CTA text Oslo team chant" />
  </div>
</section>

<section class="sponsor_section">
  <div class="sponsor_container">
    <div>
      <img src={sponserCode} alt="QR code to sponsor Oslo Roller Derby" />
      <div>
        <h3>Støtt oss med din grasrotandel</h3>
        <p>
          Du kan bli grasrotgiver i alle Norsk Tippings kanaler eller ved å
          sende SMS “Grasrotandelen 997503465” til 600000
        </p>
      </div>
    </div>

    <div>
      <h3>Vil du bli sponsor?</h3>
      <p>
        Ønsker du å støtte klubben og samtidig få med logo på kamper og andre
        arrangementer? Send oss en mail til <a
          href="mailto:spons@oslorollerderby.no">spons@oslorollerderby.no</a
        >
      </p>
    </div>
  </div>
</section>

<style>
  .hero_section {
    margin: 80px 20px 80px 20px;
    color: white;

    div {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    img {
      display: none;
    }

    h1 {
      font-size: 50px;
      line-height: 1.3;
      font-weight: 700;
    }

    p {
      font-size: 16px;
    }

    a {
      background-color: #ffcb4d;
      color: black;
      padding: 20px 10px;
      border-radius: 6px;
      text-align: center;
      margin-top: 40px;
    }

    @media (min-width: 1024px) {
      display: flex;
      justify-content: center;
      gap: 60px;
      /* margin-left: 150px;
      margin-right: 150px; */
      img {
        display: block;
        width: 400px;
      }

      h1 {
        font-size: 60px;
      }

      div {
        margin-top: 110px;
        max-width: 500px;
      }
    }
  }

  .event_section {
    background-color: #ffcb4d;
    color: black;
    font-size: 42px;
    font-weight: 700;
    height: 50vh;
    padding: 50px;
    margin-bottom: 80px;

    img {
      display: none;
    }

    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      img {
        display: block;
      }
    }
  }

  .sponsor_section {
    margin: 0 20px 80px 20px;
    color: white;

    .sponsor_container {
      display: flex;
      flex-direction: column;
      gap: 40px;

      h3 {
        font-size: 25px;
      }

      div:first-child {
        display: flex;
        gap: 20px;
        justify-content: center;
      }

      div:last-child {
        a {
          color: #f08435;
        }
      }
    }

    @media (min-width: 1024px) {
      margin-left: 80px;
      margin-right: 80px;

      .sponsor_container {
        flex-direction: row;
        gap: 80px;
      }
    }
  }
</style>
