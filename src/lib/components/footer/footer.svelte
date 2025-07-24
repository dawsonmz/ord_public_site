<script>
  import fbIcon from "$lib/assets/fb.png";
  import instaIcon from "$lib/assets/insta.png";
</script>

<footer>
  <p>&copy; 2023 Oslo Roller Derby Klubb</p>
  <div class="flex">
    <a aria-label="link to facebook" href="/">
      <img src={fbIcon} alt="facebook icon" />
    </a>
    <a aria-label="link to instagram" href="/">
      <img src={instaIcon} alt="instagram icon" />
    </a>
  </div>
</footer>

<style>
  footer {
    color: white;
    display: flex;
    justify-content: space-between;
    margin: 0 20px 10px 20px;

    a:first-child {
      margin-right: 10px;
    }
  }
</style>
