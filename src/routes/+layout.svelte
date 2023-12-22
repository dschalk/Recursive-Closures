<script>
  import "./style.css"
	import { onMount } from 'svelte';

	onMount(async () => {
    const rubiksCube = document.querySelector('.rubiks-cube');
const faces = document.querySelectorAll('.rubiks-cube-face');

let angle = 0;

function rotateCube() {
  angle += 1;
  rubiksCube.style.transform = `rotateY(${angle}deg)`;

  for (const face of faces) {
    const faceAngle = angle * (Number(face.dataset.angle) / 90);
    face.style.transform = `rotateZ(${faceAngle}deg)`;
  }

  requestAnimationFrame(rotateCube);
}

rotateCube();

	})
</script>

<style>
  a {
    margin-right: 40px;
    font-size: 24px;
    font-weight: bold;
    color: rgb(135, 86, 135);
  }
</style>
<nav>
        <a href="./">Home</a>

        <a href="./cube7">Rubik's Cube</a>

        <a href="./score">Game of Score</a>

        <a href="./async">Async</a>

        <a href="./functional">Functional</a>

        <a href="./Bell-Inequality">Bell's Inequality</a>

        <a href="./Pilot-Wave">Pilot-Wave Theory</a>

  </nav>

  <div>"***********************************************************************************************"</div>
  <slot></slot>
